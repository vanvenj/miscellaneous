# 1.Excel ����֪ʶ
## ���ʽ���
|����|Ӣ��|
|:--|:--|
|������|workbook|
|������|worksheet|
|��Ԫ��|Cell|
|��Ԫ������|Range|
## �ļ�����׺
|�ļ���|��ע|
|--|--|
|Book1.xlsx|Excel 2007�Ժ�Ķ��汾|
|Book1.xlsm|���ú�Ĺ�����|
|Book1.xlam|���غ�|

# 2.Excel-VBA
## VBA�༭���򿪷�ʽ
```
Alt+F11
```
## Excel�������ʼ�Ӧ�ó���
- Application
```VBA
'Ϊ�����VBAִ��Ч�ʣ��ȹر���Ļˢ�£���ִ��������ڴ���Ļˢ��
Application.ScreenUpdating = False
'��Ҫִ�еĴ���
Application.ScreenUpdating = True
```
- Workbooks
```
Workbooks.Count
Workbooks(1).Name
ActiveWorkbook.Name
```

- Worksheets
```
Sheets.Count
Sheets(1).Name
ActiveSheet.Name
Workbooks(1).Sheets(1).Visible = False
```

- **Range**
```
'ѡ������
Range("A1:A10").Select
'ѡ����
Range("A:A").Select
'ѡ����
Range("1:2").Select
'ѡ������ʹ������
Range(Cells(1, 1), Cells(3, 5)).Select
'ʹ������ѡ�����
Range(Columns(1), Columns(3)).Select
'ͨ���������÷�Χ
i = 5
Range("A1:B" & i).Select
'ѭ������range
For Each c In Range("A1:B" & "5")
    Debug.Print c.Value
Next c
```

- Cells
```
'Range��һ������
Cells(1,2).Select
```

# 3.VBA�﷨
- �ж�
```
n = 11
If n Mod 2 Then
    MsgBox "odd"
Else
    MsgBox "EVEN"
End If
```

- ѭ��
```
' example 1
For i = 10 To 0 Step -2
    Debug.Print i
Next i
' example 2
For Each c In Range("A1:A2")
    Debug.Print c.Value
Next c
```
# 4.¼�ƺ�
- �򿪿�������ѡ��
```
Alt+F-->I-->����-->�ڹ�������ʾ"����"ѡ�
```
- ʹ��¼�ƺ�
```
��������-->¼�ƺ�
����
��������-->ֹͣ¼��
Alt+F11-->Ctrl+R-->ģ��-->�ҵ���Ӧ�ĺ�
```

