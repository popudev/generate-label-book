const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");

const inputJsonPath = path.resolve(__dirname, "input.json");
const tempPath = path.resolve(__dirname, "temp");
const data = JSON.parse(fs.readFileSync(inputJsonPath, "utf-8"));

const template = data?.maunhanvo;
const hovatens = data?.hovatens || [];
const lop = data?.lop || "";
const taps = data?.taps || [];
const truong = data?.truong || "";

console.clear();

if (!template) {
  console.error("Mẫu nhãn vở không tồn tại !!!");
  exit();
}

if (!fs.existsSync(tempPath)) {
  // Kiểm tra thư mục không tồn tại
  fs.mkdirSync(tempPath);
} else {
  deleteFolderRecursive(tempPath);
}

console.log("Đang xử lý ...");
const templatePath = path.resolve(__dirname, `template/${template}`);

const outputArrays = handleDataInputJson(hovatens, taps);

outputArrays.forEach((arr, index_arr) => {
  console.log("Đã tạo trang số ", index_arr + 1);
  const temp = new Array(10).fill(0).reduce((acc, _, index) => {
    const stt = index + 1;

    return {
      ...acc,
      ["hovaten" + stt]: arr?.[index]?.hovaten || "                      ",
      ["tap" + stt]: arr?.[index]?.tap || "                    ",
      ["lop" + stt]: arr?.[index] ? lop : "      ",
      ["truong" + stt]: arr?.[index] ? truong : "                        ",
      ["namhoc" + stt]: arr?.[index] ? "2023 - 2024" : "                  ",
    };
  }, {});

  renderDocx(temp, index_arr + 1);
});

// Hàm xóa thư mục đệ quy
function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = `${path}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        // Đệ quy xóa thư mục con
        deleteFolderRecursive(curPath);
      } else {
        // Xóa tệp tin
        fs.unlinkSync(curPath);
      }
    });
  }
}

// Xử lý dữ liệu đầu vào
function handleDataInputJson(hovatens, taps) {
  const outputArrays = [];
  let currentArray = [];

  hovatens.forEach((hovaten) => {
    taps.forEach((tap) => {
      currentArray.push({ hovaten, tap });

      if (currentArray.length === 10) {
        outputArrays.push(currentArray);
        currentArray = [];
      }
    });
  });

  if (currentArray.length > 0) {
    outputArrays.push(currentArray);
  }

  return outputArrays;
}

// Đổ dữ liệu vào file docx
function renderDocx(data, count) {
  const content = fs.readFileSync(templatePath, "binary");
  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.render(data);

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });

  // buf is a nodejs Buffer, you can either write it to a
  // file or res.send it with express for example.
  fs.writeFileSync(tempPath + `/${count}.docx`, buf);
}
