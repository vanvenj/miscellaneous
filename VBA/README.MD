# 1.Excel 基础知识
## 名词解释
|中文|英文|
|:--|:--|
|工作簿|workbook|
|工作表|worksheet|
|单元格|Cell|
|单元格区域|Range|

## 文件名后缀
|文件名|备注|
|:--|:--|
|Book1.xlsx|Excel 2007以后的而版本|
|Book1.xlsm|启用宏的工作簿|
|Book1.xlam|加载宏|

# 2.Excel-VBA
## VBA编辑器打开方式
```
Alt+F11
```
## Excel常用名词及应用场景
- Application
```VBA
'为了提高VBA执行效率，先关闭屏幕刷新，等执行完代码在打开屏幕刷新
Application.ScreenUpdating = False
'需要执行的代码
Application.ScreenUpdating = True
```
- Workbooks
```VBA
Workbooks.Count
Workbooks(1).Name
ActiveWorkbook.Name
```

- Worksheets
```VBA
Sheets.Count
Sheets(1).Name
ActiveSheet.Name
Workbooks(1).Sheets(1).Visible = False
```

- **Range**
```VBA
'选择区域
Range("A1:A10").Select
'选择列
Range("A:A").Select
'选择行
Range("1:2").Select
'选择区域，使用数字
Range(Cells(1, 1), Cells(3, 5)).Select
'使用数字选择多列
Range(Columns(1), Columns(3)).Select
'通过变量设置范围
i = 5
Range("A1:B" & i).Select
'循环操作range
For Each c In Range("A1:B" & "5")
    Debug.Print c.Value
Next c
```

- Cells
```VBA
'Range的一个特例
Cells(1,2).Select
```

# 3.VBA语法
- 判断
```VBA
n = 11
If n Mod 2 Then
    MsgBox "odd"
Else
    MsgBox "EVEN"
End If
```

- 循环
```VBA
' example 1
For i = 10 To 0 Step -2
    Debug.Print i
Next i
' example 2
For Each c In Range("A1:A2")
    Debug.Print c.Value
Next c
```
# 4.录制宏
- 打开开发工具选项
```
Alt+F-->I-->常用-->在功能区显示"开发"选项卡
```
- 使用录制宏
```
开发工具-->录制宏
操作
开发工具-->停止录制
Alt+F11-->Ctrl+R-->模块-->找到对应的宏
```


