```VBA
Function test()
Application.ScreenUpdating = False
Dim myrange As Range
Dim c As Range
Dim descRow As Long
Dim tmp2 As Long
Dim desc As String
Dim length As Double
Dim descColumn As String
Dim lengthColumns As String
Dim lengthColumn As String
Dim unitColumn As String

''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''以下内容需要修改
Set myrange = Range("E13:E5091") '设置版次所在列及范围
descColumn = "L" '定义描述所在列
lengthColumn = "T" '定义长、数量所在列
lengthColumns = "Y" '定义宽储存列
unitColumn = "S" '定义单位所在列
''以上内容需要修改
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''

For Each c In myrange
    If c.Value <> "" Then
        desc = ""
        length = 0
        descRow = c.Row
        Cells(descRow, lengthColumn) = 0
        Cells(descRow, descColumn) = ""
        Cells(descRow, lengthColumns) = ""
    Else
        desc = desc + Cells(c.Row, descColumn) + ";"
        Cells(descRow, descColumn) = desc

        If Cells(c.Row, unitColumn) = "M" Then
            If Cells(c.Row, lengthColumn) > Cells(descRow, lengthColumn) Then
                Cells(descRow, lengthColumns) = Cells(descRow, lengthColumn)
                Cells(descRow, lengthColumn) = Cells(c.Row, lengthColumn)
            ElseIf Cells(c.Row, lengthColumn) > Cells(descRow, lengthColumns) Then
                Cells(descRow, lengthColumns) = Cells(c.Row, lengthColumn)
            End If
        End If
    End If
Next c
Application.ScreenUpdating = True
MsgBox "finish"
End Function
```