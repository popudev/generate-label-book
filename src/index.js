const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");

const inputJsonPath = path.resolve(__dirname, "input.json");
const tempPath = path.resolve(__dirname, "temp");

const data = JSON.parse(fs.readFileSync(inputJsonPath, "utf-8"));

const template = data?.maunhanvo;
const names = data?.hovatens || [];
const className = data?.lop || "";
const taps = data?.taps || [];

process.stdout.write("\x1Bc");
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

const loop = new Array(Math.ceil(taps.length / 10)).fill(0);

names.forEach((name) => {
  console.log(`Tạo nhãn cho học sinh ${name}`);
  loop.forEach((_, index_loop) => {
    const content = fs.readFileSync(templatePath, "binary");
    const zip = new PizZip(content);

    const start = 10 * index_loop;
    const end = start + 10;
    const temp = taps.slice(start, end).reduce(
      (acc, cur, index_tap) => {
        return {
          ...acc,
          [`tap${index_tap + 1}`]: cur || "                 ",
        };
      },
      {
        tap1: "                 ",
        tap2: "                 ",
        tap3: "                 ",
        tap4: "                 ",
        tap5: "                 ",
        tap6: "                 ",
        tap7: "                 ",
        tap8: "                 ",
        tap9: "                 ",
        tap10: "                 ",
      }
    );

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.render({
      hovaten: name,
      lop: className,
      ...temp,
    });
    const buf = doc.getZip().generate({
      type: "nodebuffer",
      // compression: DEFLATE adds a compression step.
      // For a 50MB output document, expect 500ms additional CPU time
      compression: "DEFLATE",
    });

    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.
    fs.writeFileSync(tempPath + `/${name} ${index_loop}.docx`, buf);
  });
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
