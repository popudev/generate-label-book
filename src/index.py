from docxcompose.composer import Composer
from docx import Document as Document_compose
from docx2pdf import convert
import json
import math
import shutil
import os
import glob

def count_files_in_folder(folder_path):
    file_list = glob.glob(os.path.join(folder_path, '*'))
    count = len(file_list)
    return count

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
master = Document_compose( temp_path + "/" + "1.docx")
composer = Composer(master)
file_count = count_files_in_folder(temp_path)

# Lặp qua từng file trong mảng
for index in range(file_count):
      if index == 0:
        continue
      # Tạo một Document từ file_name
      doc = Document_compose(temp_path + "/" + str(index + 1) + ".docx")
      
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