from docxcompose.composer import Composer
from docx import Document as Document_compose
from docx2pdf import convert
import json
import math
import shutil
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
input_json_path = os.path.join(current_dir, "input.json")
temp_path = os.path.join(current_dir, "temp")
output_path = os.path.join(current_dir, "output")
os.makedirs(output_path, exist_ok=True)

file = open(input_json_path, encoding='utf-8')
data = json.load(file)

names =  data['hovatens']
taps = data['taps']
lop = data['lop']

print("Đang xuất mẫu nhãn dán cho lớp " +  lop)
master = Document_compose( temp_path + "/" + names[0] + " " + str(0) + ".docx")
composer = Composer(master)

# Lặp qua từng file trong mảng
for index, name in enumerate(names):
    for i in range(math.ceil(len(taps)/10)):
      if index == 0 and i == 0:
        continue
      # Tạo một Document từ file_name
      doc = Document_compose(temp_path + "/"  + name + " " + str(i) + ".docx")
      
      # Gộp doc vào document master sử dụng composer.append()
      composer.append(doc)

outputFileDocPath = output_path + "/" + lop + ".docx"
composer.save(outputFileDocPath)

# Xóa toàn bộ nội dung trong thư mục
shutil.rmtree(temp_path)

print("Đã hoàn thành mẫu nhãn dán cho lớp " +  lop)
print("Đang xuất PDF mẫu nhãn dán cho lớp " +  lop)
outputFilePdfPath = output_path + "/" + lop + ".pdf"
convert(outputFileDocPath,  outputFilePdfPath)