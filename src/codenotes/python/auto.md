---
# 当前页面内容标题
title: 办公自动化
# 当前页面图标
icon: workingDirectory
# 分类
category:
- python
- 办公
# 标签
tag:
- python
- 办公
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

# 文件夹系列

## 1.在某个文件目录下，找到某个文件

### 非递归

```python
# 连续在res⽂件夹内查找某个⽂件
import os
# 获取当前路径
cur_dir = os.path.dirname(os.path.abspath(__name__))
# 获取当前路径⽗⽬录
parent_dir = os.path.dirname(cur_dir)
# 定位到res⽂件夹
find_path = os.path.join(parent_dir, 'res')

while 1:
    find_file_name = input(f"请提示你想在{find_path}中查找的文件名(q退出)\n")
    if find_file_name=='q':
        break

    file_exists=False #表示是否存在
    for item in os.listdir(find_path):
        if item==find_file_name:
            file_exists=True
            break

    if file_exists:
        print("文件找到")
```

### 递归

这个是能查到所有的目录

```python
# 连续在res⽂件夹内查找某个⽂件
import os

# 获取当前路径
cur_dir = os.path.dirname(os.path.abspath(__name__))
# 获取当前路径⽗⽬录
parent_dir = os.path.dirname(cur_dir)
# 定位到res⽂件夹
find_path, file_path = os.path.join(parent_dir, 'res'), None

while 1:
    find_file_name = input(f"请提示你想在{find_path}中查找的文件名(q退出)\n")
    if find_file_name == 'q':
        break
    file_exists = False  # 表示是否存在

    for root, dirs, files in os.walk(find_path):
        for item in files:
            if item == find_file_name:
                file_exists = True
                file_path = os.path.join(root, item)
                break
    if file_exists:
        print("文件找到")
    else:
        print("没有找到")

```

## 3 根据⽂件后缀名查找⽂件

```python
#  第⼀件事情， os.path.splitext() 中传⼊ item （⽂件名是 **.&&& 】）
#  这时，返回的结果是列表： ["**", ".&&&"]
# [1] 表示选择上⾯列表中，下标为 1 的元素，即选出 ".&&&"
#  第三件事情， lower() 函数将 ".&&&" 中的⼤写英⽂字⺟统⼀转为⼩写
#  这时的 extension 赋值的结果为 ".docx" ，字⺟是⼩写
import os
#  获取当前路径
cur_dir = os.path.dirname(os.path.abspath(__name__))
#  获取当前路径⽗⽬录
parent_dir = os.path.dirname(cur_dir)
extension_name = input(f"你想要查找哪写后缀名⽂件，不同⽂件类型间⽤,隔开（如xlsx,mp3等
tmp_extensions = extension_name.split(",")
extensions = ['.' + item for item in tmp_extensions]
found_files_count = 0
for item in os.listdir(os.path.join(parent_dir, 'res')):
extension = os.path.splitext(item)[1].lower()
if extension in extensions:
print(f"【找到⽂件】" + item)
found_files_count += 1
print(f"⼀共有{found_files_count}个⽂件")
```

## 4 递归移动到⽂件

```python
import os
import shutil
source_folder_name = input("输⼊想要操作的⽂件夹：")
file_extension = input("输⼊想要复制⽂件后缀(格式为xlsx等)")
target_folder = input("输⼊移动到⽂件夹名称")
mv_files = []
for root, folders, files in os.walk(source_folder_name):
for cur_file in files:
if os.path.splitext(cur_file)[1] == '.' + file_extension:
mv_files.append(os.path.join(root, cur_file))
#  剪切这些⽂件
if input('你确定要移动吗？(y/n)') == 'y':
for cp_file in mv_files:
if os.path.exists(os.path.join(target_folder, os.path.basename(cp_file
continue
shutil.move(cp_file, target_folder)
print("Done")
```

## 5 递归复制⽂件

```python
import os
import shutil
source_folder_name = input("输⼊想要操作的⽂件夹：")
file_extension = input("输⼊想要复制⽂件后缀(格式为xlsx等)")
target_folder = input("输⼊复制到⽂件夹名称")
cp_files = []
for root, folders, files in os.walk(source_folder_name):
for cur_file in files:
if os.path.splitext(cur_file)[1] == '.' + file_extension:
cp_files.append(os.path.join(root, cur_file))
#  复制这些⽂件
for cp_file in cp_files:
shutil.copy(cp_file, target_folder)
print("Done")
```

## 6 递归删除

```python
import os
source_folder_name = input("输⼊想要操作的⽂件夹：")
file_extension = input("输⼊想要删除⽂件后缀(格式为xlsx等)")
del_files = []
for root, folders, files in os.walk(source_folder_name):
for cur_file in files:
if os.path.splitext(cur_file)[1] == '.' + file_extension:
del_files.append(os.path.join(root, cur_file))
#  删除这些⽂件
if input('你确定要删除吗？(y/n)') == 'y':
for cp_file in del_files:
os.remove(cp_file)
print("Done")
```

## 7 整理为模块

```python
import os
import shutil
def copy_files(source_folder_name, target_folder, file_extension='xlsx'):
"""
批量复制指定后缀名的⽂件
:param source_folder_name:
:param target_folder:
:param file_extension:
:return:
"""
cp_files = []
for root, folders, files in os.walk(source_folder_name):
for cur_file in files:
if os.path.splitext(cur_file)[1] == '.' + file_extension:
cp_files.append(os.path.join(root, cur_file))
#  复制这些⽂件
for cp_file in cp_files:
shutil.copy(cp_file, target_folder)
print("Done")
def delete_files(source_folder_name, file_extension='xlsx'):
"""
批量删除指定后缀名的⽂件
:param source_folder_name:
:param file_extension:
:return:
"""
del_files = []
for root, folders, files in os.walk(source_folder_name):
for cur_file in files:
if os.path.splitext(cur_file)[1] == '.' + file_extension:
del_files.append(os.path.join(root, cur_file))
#  删除这些⽂件
for cp_file in del_files:
os.remove(cp_file)
print("Done")
def move_files(source_folder_name, target_folder, file_extension='xlsx'):
"""
批量移动指定后缀名的⽂件
:param source_folder_name:
:param target_folder:
:param file_extension:
:return:
"""
mv_files = []
for root, folders, files in os.walk(source_folder_name):
for cur_file in files:
if os.path.splitext(cur_file)[1] == '.' + file_extension:
mv_files.append(os.path.join(root, cur_file))
#  剪切这些⽂件
for cp_file in mv_files:
if os.path.exists(os.path.join(target_folder, os.path.basename(cp_file
continue
shutil.move(cp_file, target_folder)
print("Done")
def walk_to_find(find_path, find_file_name):
"""
路径find_path中递归查找⽂件find_file_name
:param find_path:
:param find_file_name:
:return:
"""
result_path = []
for root, dirs, files in os.walk(find_path):
for item in files:
if item == find_file_name:
file_path = os.path.join(root, item)
result_path.append(file_path)
if len(result_path) > 0:
print("找到⽂件")
print("\n".join(result_path))
else:
print("⽂件未找到")
return result_path
def find_extension(find_path, extension_name='xlsx,mp3'):
"""
递归查找指定后缀名的⽂件
:param find_path:
:param extension_name:
:return:
"""
tmp_extensions = extension_name.split(",")
extensions = ['.' + item for item in tmp_extensions]
result_path = []
for cur_dir, folders, files in os.walk(find_path):
for item in files:
extension = os.path.splitext(item)[1].lower()
if extension in extensions:
result_path.append(os.path.join(cur_dir, item))
if len(result_path) > 0:
print("\n".join(result_path))
else:
print("未找到")
def stat_file(folder_name):
"""
统计⽂件个数，⽂件夹个数
:param folder_name:
:return:
"""
file_count, folder_count = 0, 0
if folder_name:
for dir, folders, files in os.walk(folder_name):
file_count += len(files)
folder_count += len(folders)
print(f"{folder_name}⾥⼀共包括:{file_count}个⽂件, {folder_count}个⽂件夹
return file_count, folder_count
```

openpyxl操作excel⽂件
openpyxl是⽤于读取/写⼊Excel 2010 xlsx⽂件的Python库，也就是说openpyxl这个Python库不
⽀持xls⽂件的读取和操作。
如果在⼯作中遇到xls⽂件，我们可以转化为xlsx⽂件。
这个库是⽬前读写excel⽂件性能最好的库

```python
import openpyxl
from excel_office import *
excel_path = os.path.join(root_dir, 'res', '我的xlsx')
for excel_file in os.listdir(excel_path):
wb = openpyxl.load_workbook(os.path.join(excel_path, excel_file))
print(f"{excel_file}⾥有sheet表：")
print(wb.sheetnames
```
# Excel

## 1 逐⾏读取excel单元格的值

```python
import openpyxl
from excel_office import *
#  读⽂件、读表
xlsx_file1 = openpyxl.load_workbook(os.path.join(root_dir, 'res', '我的xlsx',
#  找到⼯作表
worksheet = xlsx_file1['1⽉销售订单数据']
sku_sale_dict = {}
#  遍历⾏数据
for row_data in worksheet.rows:
sku_name = row_data[2].value #  列计数从零开始
#  跳过表头
if sku_name == "商品名":
continue
sale_n = row_data[7].value
if sku_name in sku_sale_dict:
sku_sale_dict[sku_name] += int(sale_n)
else:
sku_sale_dict[sku_name] = int(sale_n)
print(sku_sale_dict)
```
## 2. 读取excel单元格值⽅法2
```python
import openpyxl
from excel_office import *
#  读⽂件、读表
xlsx_file1 = openpyxl.load_workbook(os.path.join(root_dir, 'res', '我的xlsx',
#  找到⼯作表
worksheet = xlsx_file1['1⽉销售订单数据']
3 插⼊⾏
4 插⼊列
sku_sale_dict = {}
row_n = worksheet.max_row
for row_i in range(2, row_n):
sku_name = worksheet[f'C{row_i}'].value
sale_n = worksheet[f'H{row_i}'].value
if sku_name in sku_sale_dict:
sku_sale_dict[sku_name] += int(sale_n)
else:
sku_sale_dict[sku_name] = int(sale_n)
print(sku_sale_dict)
```
## 3插⼊⾏
```python
import openpyxl
from excel_office import *
import string
#  读⽂件、读表
xlsx_path = os.path.join(root_dir, 'res', '我的xlsx', '销售订单1.0.xlsx')
xlsx_file1 = openpyxl.load_workbook(xlsx_path)
#  找到⼯作表
worksheet = xlsx_file1['1⽉销售订单数据']
#  任务：把下⾯这⾏数据插⼊到第 10 ⾏
insert_data = ['99232019010124', '700014', '有点酸可乐', '君再来牌', '饮料', '550
inserted_at = 10
#  求解代码
#  第⼀步：插⼊⼀⾏
worksheet.insert_rows(10)
#  第⼆步：为此⾏插⼊单元格数据
columns_n = worksheet.max_column # max_row
columns = list(string.ascii_uppercase)[:columns_n]
for i, col_i in enumerate(columns):
worksheet[f'{col_i}10'] = insert_data[i]
#  第三步：保存数据
xlsx_file1.save(xlsx_path)
```
## 4.插⼊列
```python
import openpyxl
from excel_office import *
import random
#  读⽂件、读表
xlsx_path = os.path.join(root_dir, 'res', '我的xlsx', '销售订单1.0.xlsx')
xlsx_file1 = openpyxl.load_workbook(xlsx_path)
#  找到⼯作表
worksheet = xlsx_file1['1⽉销售订单数据']
#  任务：在倒数第⼆列前插⼊ 3 列
#  并起名为 :  新增列 1 ，新增列 2 ，新增列 3
#  最后随机填充 [1,100] 的随机整数
#  第⼀步：插⼊倒数第⼆列
col_index = worksheet.max_column - 1
worksheet.insert_cols(col_index, 3) # insert_cols ⽅法索引是从 1 开始的
#  第⼆步：补充新增的 3 个列头
5 删除⾏和列
6 ⼩项⽬：excel批量合并和统计
for col_i in range(3):
worksheet[1][col_index - 1 + col_i].value = f'新增列{col_i + 1}'
#  第三步：填充数据
for row_i in range(2, worksheet.max_row + 1):
for col_i in range(3):
worksheet[row_i][col_index - 1 + col_i].value = random.randint(1, 100
#  第四步：保存数据
xlsx_file1.save(xlsx_path)
```

## 5 删除⾏和列
```python
#  任务：
#  从第⼆⾏开始往后删除 excel 10 ⾏数据
#  然后，删除 excel ⽂件的前 3 列
import openpyxl
from excel_office import *
#  读⽂件、读表
xlsx_path = os.path.join(root_dir, 'res', '我的xlsx', '销售订单1.0.xlsx')
xlsx_file1 = openpyxl.load_workbook(xlsx_path)
#  找到⼯作表
worksheet = xlsx_file1['1⽉销售订单数据']
#  第⼀步：使⽤ delete_rows
worksheet.delete_rows(2, 10)
#  第⼆步：删除前 3 列
worksheet.delete_cols(1, 3)
#  第三步：保存数据
xlsx_file1.save(xlsx_path)
```
## 6 ⼩项⽬：excel批量合并和统计
```python
#  ⼩项⽬实战
#  合并 我的 xlsx  ⽂件夹下，除《销售订单 1.0.xlsx 》⽂件外的其余 11 个 xlsx 表格
#  合并规则：只合并第⼆个 sheet 表，
#  合并后写⼊到⽂件：销售订单全部合并结果 .xlsx 第⼀个 sheet 表
#  然后汇总出⼀个 sheet 表格，写⼊到第⼆个 sheet 表
import math
import openpyxl
from excel_office import *
import os
dir_path = os.path.join(root_dir, 'res', '我的xlsx')
#  第⼀步：创建合并结果⽂件：销售订单全部合并结果 .xlsx
#  包括创建 2 个 sheet 表
save_path = os.path.join(root_dir, "excel_office", "销售订单全部合并结果.xlsx")
result_wb = openpyxl.Workbook()
result_ws = result_wb.active
result_ws.title = "汇总sheet"
summary_ws = result_wb.create_sheet("统计sheet")
result_wb.save(save_path)
#  第⼆步：批量合并 dir_path ⽬录下的所有 excel ⽂件
7 介绍⾃动操作word包及安装
什么是python-docx？
python-docx是⽤于创建和更新Microsoft Word（.docx）⽂件的Python库。
⽇常需要经常处理Word⽂档，这个包和pandas包结合使⽤，可以在word插⼊excel表格，能节省
我们很多复制、粘贴、调整表格样式的时间
真的很⽅便！
merge_row_index = 0
has_header = False
for xls_file in os.listdir(dir_path):
if xls_file == '销售订单1.0.xlsx' or os.path.splitext(xls_file)[1] != '.xls
continue
xls_sheets = openpyxl.load_workbook(os.path.join(dir_path, xls_file))
sale_sheet = xls_sheets.worksheets[1]
mr = sale_sheet.max_row
mc = sale_sheet.max_column
for i in range(1, mr + 1):
if has_header and i == 1: #  合并多个 excel 只取第⼀个 excel 列头
continue
merge_row_index += 1
for j in range(1, mc + 1):
result_ws.cell(merge_row_index, j).value = sale_sheet.cell(i, j).v
has_header = True
#  第三步：分析 汇总 sheet  ，统计出商品和销量的字典
sku_sale_dict = {}
row_n = result_ws.max_row
for row_i in range(2, row_n):
sku_name = result_ws[f'C{row_i}'].value
sale_n = result_ws[f'H{row_i}'].value
if math.isnan(sale_n):
continue
if sku_name in sku_sale_dict:
sku_sale_dict[sku_name] += int(sale_n)
else:
sku_sale_dict[sku_name] = int(sale_n)
#  第四步：写⼊ 统计 sheet  中
#  列头
summary_ws.cell(1, 1).value = "商品名"
summary_ws.cell(1, 2).value = "总销量"
stat_row_n = 2
for key, value in sku_sale_dict.items():
summary_ws.cell(stat_row_n, 1).value = key
summary_ws.cell(stat_row_n, 2).value = value
stat_row_n += 1
#  第五步：保存
result_wb.save(save_path)
```
# word

## 7 介绍⾃动操作word包及安装

python-docx是⽤于创建和更新Microsoft Word（.docx）⽂件的Python库。
⽇常需要经常处理Word⽂档，这个包和pandas包结合使⽤，可以在word插⼊excel表格，能节省
我们很多复制、粘贴、调整表格样式的时间
真的很⽅便！
## 8使⽤python-docx⾃动⽣成第⼀个word⽂档
导⼊python-docx库
新建wrod⽂档
新建⼀级标题
在指定位置添加图⽚
添加⾃然段落
⼆级、三级标题
在指定位置添加表格
## 9 ⽣成第⼀个word⽂档
```python
from docx import Document
from docx.shared import Inches
#  第⼀步：⽣成 word ⽂档
document = Document()
#  第⼆步：添加⽂档标题
document.add_heading('从零学Python', 0) #  对应 html 的 head1 、 2 、 3 等标题
#  添加 1 个图⽚
document.add_picture('ch1-1.png', width=Inches(5))
p = document.add_paragraph('⼈⽣苦短，我⽤Python')
#  第三步：添加 1 号标题
document.add_heading('Python简介', level=1)
#  添加四段
document.add_paragraph('在1989年圣诞节，Guido(⻳叔)开始编写Python语⾔')
document.add_paragraph(
'1994年1⽉，Python 1.0正式发布', style='List Bullet'
)
document.add_paragraph(
'2000年10⽉：Python 2.0发布', style='List Bullet'
)
document.add_paragraph(
'2008年12⽉：Python 3.0发布', style='List Bullet'
)
#  添加 1 个表格
table = document.add_table(rows=1, cols=3)
#  添加表格头
hdr_cells = table.rows[0].cells
hdr_cells[0].text = '编号'
hdr_cells[1].text = '语⾔'
hdr_cells[2].text = '得分'
records = (
(1, 'C++', '8'),
(2, 'Python', '9'),
(3, 'Java', '8.1')
)
#  添加数据⾏
for id, name, score in records:
row_cells = table.add_row().cells
row_cells[0].text = str(id)
row_cells[1].text = name
row_cells[2].text = score
document.save('Python⾃动⽣成第⼀个⽂档.docx')
```
## 10 如何理解word中runs对象
最⾼⼀层是Document对象表示⽂档，每个Document对象包含⼀个Paragraph 对象也就是段落组
成的列表，⽽每个Paragraph对象则包含⼀个Run对象的列表，⾄于Run对象⼤家可以通过下⾯的
段落Paragraph来了解。
Document： ⽂档
Paragraph：段落
Run：⽂字块
我们知道Word⾥的⽂本包含有很多格式，⽐如字体、字号、粗体/斜体、颜⾊等等。⼀个Run对象
是具有相同格式的⽂本，当发⽣变化的时候就需要⼀个新的Run对象，这也就是上图中1个
Paragraph对象有4个Run对象的原因。

11 切割⾦庸⼩说总结并保存到excel中

```python
import os
import docx
import openpyxl
from word_office import *
#  任务：提取 word 中的标记为加粗或下划线的⽂字
#  并保存到 excel 表中
#  第⼀步：打开 word ⽂档
my_doc = docx.Document('⾦庸⼩说总结.docx')
#  打开 excel 表格
result_xlsx = openpyxl.Workbook()
#  取⼯作表单
result_sheet = result_xlsx.active
#  遍历⽂档
for paragraph in my_doc.paragraphs:
for run in paragraph.runs:
if run.text != '':
print(run.font.color.rgb)
result_sheet.append([run.text])
result_xlsx.save('⾦庸⼩说整理为xlsx.xlsx')
```

## 12 提取特定颜⾊字体的⽂字
```python
import os
import docx
13 批量处理100+个word⽂档汇总为xlsx⽂档
import openpyxl
from word import *
#  任务：提取 word 中的标记为加粗或下划线的⽂字
#  并保存到 excel 表中
word_path = os.path.join(root_dir, 'res', '我的word')
docx_path = os.path.join(word_path, '数学英语词汇.docx')
#  第⼀步：打开 word ⽂档
my_doc = docx.Document(docx_path)
#  打开 excel 表格
result_xlsx = openpyxl.Workbook()
#  取⼯作表单
result_sheet = result_xlsx.active
result_sheet.title = "数学"
#  遍历⽂档
for paragraph in my_doc.paragraphs:
for run in paragraph.runs:
if run.bold or run.underline:
result_sheet.append([run.text])
#  保存表格
result_xlsx.save('结果.xlsx')
```
## 13 批量处理100+个word⽂档汇总为xlsx⽂档
```python
import os
import docx
import openpyxl
from word import *
#  任务：批量处理统计表⽂件夹内 word ⽂档
#  提取每个 word ⽂档中的表格
#  整理汇总到《批量 word 转 excel 汇总结果 .xlsx 》⽂件中
school_list_path = os.path.join(root_dir, 'res', '统计表')
#  加载 excel 表格
stat_book = openpyxl.Workbook()
#  加载⼯作表
stat_sheet = stat_book.active
#  统计出 excel 表头
stat_sheet.append(['学校名称', '学⽣姓名', '班级', '学⽣教师'])
#  读 word ⽂档
for school in os.listdir(school_list_path):
#  得到完整路径
schoolPath = os.path.join(school_list_path, school)
#  打开⽂档
school_doc = docx.Document(docx=schoolPath)
#  从⽂档中提取数据信息
row_content = [school_doc.paragraphs[1].runs[1].text, "", "", ""]
#  提取表中表格内容
school_table = school_doc.tables[0]
14 python-pptx简介及安装
使⽤python操作PPT，需要使⽤的模块就是python-pptx
python操作PPT，最好是我们提前设计好⾃⼰的⼀套样式，然后利⽤进⾏python进⾏内容的获取
和填充(最主要的功能！)
先了解下PPT基本结构在python分别是什么含义：
Slide：幻灯⽚，就是演示⽂稿中每⼀⻚的⻚⾯。
Shape：⽅框，在每⻚幻灯⽚内插⼊的⽅框，可以是形状，也可以是⽂本框。
Paragraph：段落，通常有序号ᆞ 1. 等。
Run：⽂字块，⼀般为较少字符。
安装
pip install python-pptx -i https://pypi.tuna.tsinghua.edu.cn/simple
15 使⽤程序⽣成hello 版ppt
row_start_index, column_start_index = 2, 2
for row_index in range(row_start_index, len(school_doc.tables[0].rows)):
#  读⼀⾏
for col_index in range(column_start_index, len(school_doc.tables[0].co
if school_table.cell(row_index, col_index).text == "":
break
else:
row_content[col_index - 1] = school_table.cell(row_index, col_
else:
# for 循环完整执⾏后，表明⼀⾏数据都完整了，存⼀⾏
stat_sheet.append(iterable=row_content)
#  保存表格⽂件
stat_book.save('批量word转excel汇总结果.xlsx')
```
# ppt

## 14 python-pptx简介及安装

使⽤python操作PPT，需要使⽤的模块就是python-pptx
python操作PPT，最好是我们提前设计好⾃⼰的⼀套样式，然后利⽤进⾏python进⾏内容的获取
和填充(最主要的功能！)
先了解下PPT基本结构在python分别是什么含义：
Slide：幻灯⽚，就是演示⽂稿中每⼀⻚的⻚⾯。
Shape：⽅框，在每⻚幻灯⽚内插⼊的⽅框，可以是形状，也可以是⽂本框。
Paragraph：段落，通常有序号ᆞ 1. 等。
Run：⽂字块，⼀般为较少字符。
安装
pip install python-pptx -i https://pypi.tuna.tsinghua.edu.cn/simple
## 15 使⽤程序⽣成hello 版ppt
```python
import os
from pptx import Presentation
from pptx.util import Inches
from pptx.enum.shapes import MSO_SHAPE
#  第⼀步：⽣成 ppt ⽂档 prs
prs = Presentation()
#  第⼆步：选择幻灯⽚布局（⼀般有 10 种左右）
slide_layout = prs.slide_layouts[0]
#  第三步：添加第⼀张幻灯⽚到 prs 中
slide = prs.slides.add_slide(slide_layout)
#  添加⼀个⽂本框
left = top = height = Inches(1.0)
width = Inches(6.0)
#  第四步：添加⼀个 shape( 形状 )
text_shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, wi
#  设置⽂字： hello world
text_shape.text = "hello world"
#  添加标题和副标题
title = slide.shapes.title
16 读取ppt的⽂本框
17 读取ppt中表格
subtitle = slide.placeholders[1]
title.text = "从零学Python"
subtitle.text = "程序员zhenguo"
#  第五步：保存幻灯⽚
prs.save('hello.pptx')
								
```
## 16.读取ppt的⽂本框
```python
import os.path
from ppt import *
from pptx import Presentation
ppt_path = os.path.join(root_dir, 'res', '我的ppt')
ppt_file = os.path.join(ppt_path, '从零学Python.pptx')
#  实例化⼀个 ppt 对象
ppt = Presentation(ppt_file)
def read_shape(slide):
#  遍历某个 slide 的每个⽅框
for shape in slide.shapes:
#  如果是⽂本框
if shape.has_text_frame:
print("==========================⽂本框============================
print("段落⻓度：", len(shape.text_frame.paragraphs))
#  遍历某个⽂本框中的每个段落
for paragraph in shape.text_frame.paragraphs:
print(paragraph.text.replace('\r', '\r\n')) #  正常显示段内所有内
#  遍历 slide
for cur_slide in ppt.slides:
read_shape(cur_slide
```
## 17 读取ppt中表格
```python
import os.path
from ppt import *
from pptx import Presentation
ppt_path = os.path.join(root_dir, 'res', '我的ppt')
ppt_file = os.path.join(ppt_path, '从零学Python.pptx')
#  实例化⼀个 ppt 对象
ppt = Presentation(ppt_file)
def read_shape(slide):
#  遍历某个 slide 的每个⽅框
for shape in slide.shapes:
#  如果是表格
if shape.has_table:
print("==========================表格=============================
one_table_data = []
for row in shape.table.rows: #  读每⾏
row_data = []
18 读取ppt中的图⽚
19 实战⼩项⽬：批量转化word表格为ppt
# 任务：批量处理word⽂档中所有表格，
# 每个表格对应⼀张ppt⻚
# 保存合并后的⼀个ppt⽂件：合并表格.pptx
20 pdfplumber包介绍及安装
Pdfplumber是⼀个可以处理pdf格式信息的库。
可以查找关于每个⽂本字符和⾏的详细信息，也可以对表格进⾏提取。
Pdfplumber可以⽅便的获取其⽂本内容、标题、表格等，⽤起来很⽅便。
for cell in row.cells: #  读⼀⾏中的所有单元格
cell.text = cell.text if cell.text != "" else "未填写"
row_data.append(cell.text)
one_table_data.append(row_data) #  把每⼀⾏存⼊表
#  ⽤⼆维列表输出表格⾏和列的数据
print(one_table_data)
#  遍历 slide
for cur_slide in ppt.slides:
read_shape(cur_slide)
```
## 18 读取ppt中的图⽚
```python
import os
from ppt import *
from pptx import Presentation
from pptx.shapes.picture import Picture
ppt_path = os.path.join(root_dir, 'res', '我的ppt')
ppt_file = os.path.join(ppt_path, '从零学Python.pptx')
#  实例化⼀个 ppt 对象
ppt = Presentation(ppt_file)
def read_shape(slide):
#  遍历某个 slide 的每个⽅框
for shape in slide.shapes:
#  如果是表格
if isinstance(shape, Picture):
print("==========================图⽚=============================
index = 0
with open(f'{index}.png', 'wb') as f:
f.write(shape.image.blob)
print(f"图⽚⼤⼩：{shape.image.size}，保存成功")
index += 1
#  遍历 slide
for cur_slide in ppt.slides:
read_shape(cur_slide)
```
# pdf

## 19批量读取pdf

```python
import pdfplumber
from pdf import *
pdf_path = os.path.join(root_dir, 'res', '我的pdf', 'pdf_folder')
#  遍历 pdf ⽂件
pdf_list = os.listdir(pdf_path)
#  逐个遍历 pdf ⽂档
for pdf_file in pdf_list:
if os.path.splitext(pdf_file)[1] != ".pdf":
continue
#  组装完整路径
pdf_file_path = os.path.join(pdf_path, pdf_file)
#  读取 pdf ⽂件
pdf = pdfplumber.open(pdf_file_path) #  关键代码 1
#  逐⻚遍历
for page in pdf.pages: #  关键代码 2
text_data = page.extract_text() #  关键代码 3
print(text_data)
#  完成⼀⻚的添加
print(f"{pdf_file}提取完成")
```
## 20批量提取pdf表格并保存为excel
```python
import docx
import pdfplumber
import openpyxl
from pdf import *
#  配置参数
# pdf 名单
pdf_path = os.path.join(root_dir, 'res', '我的pdf', '名单.pdf')
#  优秀教师名单
excel_file = "优秀教师.xlsx"
#  名单
#  添加到 word ⽂档中
my_workbook = openpyxl.Workbook()
my_sheet = my_workbook.active
#  打开 pdf ⽂档
pdf_content = pdfplumber.open(pdf_path)
23 提取pdf表格并保存为ppt
#  逐⻚遍历⽂档⻚⾯，取表格
#  第⼀⻚有表头，特殊情况特殊处理
if len(pdf_content.pages) > 0:
all_tables = []
for page_content in pdf_content.pages:
#  取表
table = page_content.extract_tables()[0]
all_tables.extend(table)
#  写⼊到 excel 表中，⾸先创建出空⾏
my_sheet.insert_rows(len(all_tables))
#  逐⾏逐列写⼊到 excel 表格中
for row_i in range(len(all_tables)):
for cell_i in range(len(all_tables[0])):
my_sheet.cell(row_i + 1, cell_i + 1).value = all_tables[row_i][cel
#  保存
my_workbook.save(excel_file)
```
## 21提取pdf表格并保存为ppt
```python
import docx
import pdfplumber
import pptx
from pptx import Presentation
from pptx.util import Inches
from pdf import *
#  配置参数
# pdf 名单
pdf_path = os.path.join(root_dir, 'res', '我的pdf', '名单.pdf')
#  优秀教师名单
ppt_file = "优秀教师.pptx"
#  名单
name_list = []
#  添加到 ppt ⽂档中
prs = Presentation()
slide_layout = prs.slide_layouts[5]
#  打开 pdf ⽂档
pdf_content = pdfplumber.open(pdf_path)
#  逐⻚遍历⽂档⻚⾯，取表格
#  第⼀⻚有表头，特殊情况特殊处理
if len(pdf_content.pages) > 0:
all_tables = []
headers = pdf_content.pages[0].extract_tables()[0][0]
rows_page = 8
for page_content in pdf_content.pages:
#  取表
cur_table = page_content.extract_tables()[0]
all_tables.extend(cur_table)
#  每 8 ⾏保存⼀⻚ PPT
all_tables = all_tables[1:] # all_tables[0] 是列头
for row in range(len(all_tables)):
if row % rows_page == 0:
#  实例化 table  对象
slide = prs.slides.add_slide(slide_layout)
left = top = Inches(2) #  表格起始位置
24 批量合并pdf⽂档并保存为word
width = Inches(6.0) #  宽
height = Inches(1.0) #  ⾼
table_shape = slide.shapes.add_table(rows_page + 1, len(cur_table
for j in range(len(cur_table[0])):
table_shape.table.cell(row % rows_page, j).text = headers[j]
for col in range(len(all_tables[0])):
#  单元格处理
table_shape.table.cell(row % rows_page + 1, col).text = all_tables
#  保存
prs.save(ppt_file)
```
## 22 批量合并pdf⽂档并保存为word
```python
import docx
import pdfplumber
from pdf import *
pdf_path = os.path.join(root_dir, 'res', 'pdf', 'pdf_folder')
#  遍历 pdf ⽂件
pdf_list = os.listdir(pdf_path)
#  新建存储⽤的 Word ⽂档
new_doc = docx.Document()
#  逐个遍历 pdf ⽂档
for pdf_file in pdf_list:
if os.path.splitext(pdf_file)[1] != ".pdf":
continue
#  组装完整路径
pdf_file_path = os.path.join(pdf_path, pdf_file)
#  读取 pdf ⽂件
pdf = pdfplumber.open(pdf_file_path) #  关键代码 1
#  逐⻚遍历
for page in pdf.pages: #  关键代码 2
text_data = page.extract_text() #  关键代码 3
print(text_data)
new_doc.add_paragraph(text_data)
#  添加分⻚
new_doc.add_page_break()
#  完成⼀⻚的添加
print(f"{pdf_file}提取完成")
new_doc.save("合并多个pdf为1个word.docx")
```
