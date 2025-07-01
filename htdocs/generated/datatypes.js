'use strict';
 export class DataTypes { 
 static get dataTypes() { 
 return {
  "Локальная.Маршрут": {
    "Fields": {
      "xLoad": "BOOL",
      "xPointes": "BOOL",
      "iLoadUnload": "INT",
      "sPointBViewCreate": "STRING",
      "sPointAViewCreate": "STRING",
      "xNewMech": "BOOL",
      "sMechView1": "STRING",
      "sMechView2": "STRING",
      "sMechView3": "STRING",
      "sMechView4": "STRING",
      "sMechView5": "STRING",
      "sMechView6": "STRING",
      "sMechView7": "STRING",
      "sMechView8": "STRING",
      "xMechNumb1": "BOOL",
      "xMechNumb2": "BOOL",
      "xMechNumb3": "BOOL",
      "xMechNumb4": "BOOL",
      "xMechNumb5": "BOOL",
      "xMechNumb6": "BOOL",
      "xMechNumb7": "BOOL",
      "xMechNumb8": "BOOL",
      "PointA": "INT",
      "PointB": "INT",
      "Mech1": "INT",
      "Mech2": "INT",
      "Mech3": "INT",
      "Mech4": "INT",
      "Mech5": "INT",
      "Mech6": "INT",
      "Mech7": "INT",
      "Mech8": "INT",
      "iTypeMech1": "INT",
      "iTypeMech2": "INT",
      "iTypeMech3": "INT",
      "iTypeMech4": "INT",
      "iTypeMech5": "INT",
      "iTypeMech6": "INT",
      "iTypeMech7": "INT",
      "iTypeMech8": "INT",
      "iNumbofMech": "INT"
    },
    "DataType": "StructureType"
  },
  "Локальная.inМарш": {
    "Fields": {
      "iPointA": "INT",
      "iPointB": "INT",
      "iMechType1": "INT",
      "iMechType2": "INT",
      "iMechType3": "INT",
      "iMechType4": "INT",
      "iMechType5": "INT",
      "iMechType6": "INT",
      "iMechType7": "INT",
      "iMechType8": "INT",
      "iMechType9": "INT",
      "iMechType10": "INT",
      "iMechType11": "INT",
      "iMechType12": "INT",
      "iMech1": "INT",
      "iMech2": "INT",
      "iMech3": "INT",
      "iMech4": "INT",
      "iMech5": "INT",
      "iMech6": "INT",
      "iMech7": "INT",
      "iMech8": "INT",
      "iMech9": "INT",
      "iMech10": "INT",
      "iMech11": "INT",
      "iMech12": "INT",
      "xValveOps1": "BOOL",
      "xValveOps2": "BOOL",
      "xValveOps3": "BOOL",
      "xValveOps4": "BOOL",
      "xValveOps5": "BOOL",
      "xValveOps6": "BOOL",
      "xValveOps7": "BOOL",
      "xValveOps8": "BOOL",
      "xValveOps9": "BOOL",
      "xValveOps10": "BOOL",
      "xValveOps11": "BOOL",
      "xValveOps12": "BOOL",
      "iTubePos": "INT"
    },
    "DataType": "StructureType"
  },
  "Локальная.outмассив": {
    "TypeOfElementsName": "Локальная.outстек",
    "Subranges": [
      250
    ],
    "DataType": "ArrayType"
  },
  "Локальная.outстек": {
    "Fields": {
      "sRouteName": "STRING",
      "sMech1": "STRING",
      "sMech2": "STRING",
      "sMech3": "STRING",
      "sMech4": "STRING",
      "sMech5": "STRING",
      "sMech6": "STRING",
      "sMech7": "STRING",
      "sMech8": "STRING",
      "sMech9": "STRING",
      "sMech10": "STRING",
      "sMech11": "STRING",
      "sMech12": "STRING",
      "sMechOps1": "STRING",
      "sMechOps2": "STRING",
      "sMechOps3": "STRING",
      "sMechOps4": "STRING",
      "sMechOps5": "STRING",
      "sMechOps6": "STRING",
      "sMechOps7": "STRING",
      "sMechOps8": "STRING",
      "sMechOps9": "STRING",
      "sMechOps10": "STRING",
      "sMechOps11": "STRING",
      "sMechOps12": "STRING",
      "sNumbRoute": "STRING",
      "xSelect": "BOOL"
    },
    "DataType": "StructureType"
  },
  "Локальная.Routes": {
    "TypeOfElementsName": "Локальная.Маршрут",
    "Subranges": [
      220
    ],
    "DataType": "ArrayType"
  },
  "ARRAY[*] OF SiemensPLC_VarsStruct": {
    "TypeOfElementsName": "SiemensPLC_VarsStruct",
    "Subranges": [
      0
    ],
    "DataType": "ArrayType"
  },
  "BOOL": {
    "DataType": "ElementaryType"
  },
  "BYTE": {
    "DataType": "ElementaryType"
  },
  "DATE_AND_TIME": {
    "DataType": "ElementaryType"
  },
  "DINT": {
    "DataType": "ElementaryType"
  },
  "HMI.AnchorType": {
    "Values": [
      "None",
      "Up",
      "Down",
      "Right",
      "Left"
    ],
    "DisplayValues": [
      "Нет",
      "Верх",
      "Низ",
      "Право",
      "Лево"
    ],
    "Indexes": [
      0,
      1,
      2,
      3,
      4
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.BorderStyleType": {
    "Values": [
      "Solid",
      "Dash",
      "Dot",
      "None"
    ],
    "DisplayValues": [
      "Непрерывный",
      "Пунктир",
      "Точка",
      "Нет"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.ContainerForOpeningObjectWindowType": {
    "Values": [
      "StartupWindowContainer",
      "PopUpWindow",
      "SpecifiedContainer"
    ],
    "DisplayValues": [
      "Контейнер стартового окна",
      "Всплывающее окно",
      "Заданный контейнер"
    ],
    "Indexes": [
      0,
      1,
      2
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.EventChangeType": {
    "Values": [
      "None",
      "Activated",
      "Deactivated",
      "Acknowledged"
    ],
    "DisplayValues": [
      "Нет",
      "Появление",
      "Исчезновение",
      "Квитирование"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.FilterCombineType": {
    "Values": [
      "Or",
      "And"
    ],
    "DisplayValues": [
      "Или",
      "И"
    ],
    "Indexes": [
      0,
      1
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.FilterCompareType": {
    "Values": [
      "Contains",
      "NotContains",
      "Equal",
      "More",
      "Less",
      "MoreEqual",
      "LessEqual",
      "NotEqual"
    ],
    "DisplayValues": [
      "Содержит",
      "Не содержит",
      "==",
      ">",
      "<",
      ">=",
      "<=",
      "!="
    ],
    "Indexes": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.FilterConditionType": {
    "Values": [
      "Compare",
      "OfType",
      "RelatedTo"
    ],
    "DisplayValues": [
      "Сравнение значений",
      "Принадлежность типу",
      "Отношение к узлу"
    ],
    "Indexes": [
      0,
      1,
      2
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.FocusHandling": {
    "Values": [
      "NoSelection",
      "SelectAll",
      "SetToTheBeginning",
      "SetToTheEnd"
    ],
    "DisplayValues": [
      "Не выделять",
      "Выделить всё",
      "Установить в начало",
      "Установить в конец"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.GradientColorType": {
    "DataType": "ElementaryType"
  },
  "HMI.HorizontalAlignType": {
    "Values": [
      "Left",
      "Center",
      "Right"
    ],
    "DisplayValues": [
      "Лево",
      "Центр",
      "Право"
    ],
    "Indexes": [
      0,
      1,
      2
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.HorizontalAlignTypeExt": {
    "Values": [
      "Left",
      "Center",
      "Right",
      "Stretch"
    ],
    "DisplayValues": [
      "Лево",
      "Центр",
      "Право",
      "Растянуть"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.JournalColumn": {
    "Fields": {
      "DisplayName": "STRING",
      "ColumnWidth": "STRING",
      "Field": "STRING",
      "FieldType": "STRING",
      "ValueFormat": "STRING",
      "Sort": "HMI.SortType",
      "SortPosition": "BYTE",
      "Visibility": "BOOL",
      "HorizontalAlign": "HMI.HorizontalAlignType",
      "EnableFilter": "BOOL"
    },
    "DataType": "StructureType"
  },
  "HMI.JournalColumns": {
    "TypeOfElementsName": "HMI.JournalColumn",
    "Subranges": [
      0
    ],
    "DataType": "ArrayType"
  },
  "HMI.JournalCondition": {
    "Fields": {
      "Value": "STRING",
      "CompareType": "HMI.FilterCompareType",
      "MessageField": "STRING",
      "ConditionType": "HMI.FilterConditionType"
    },
    "DataType": "StructureType"
  },
  "HMI.JournalConditions": {
    "TypeOfElementsName": "HMI.JournalCondition",
    "Subranges": [
      0
    ],
    "DataType": "ArrayType"
  },
  "HMI.JournalFilter": {
    "Fields": {
      "Enabled": "BOOL",
      "CombineType": "HMI.FilterCombineType",
      "CanDisable": "BOOL",
      "Condition": "HMI.JournalConditions"
    },
    "DataType": "StructureType"
  },
  "HMI.JournalFilters": {
    "TypeOfElementsName": "HMI.JournalFilter",
    "Subranges": [
      0
    ],
    "DataType": "ArrayType"
  },
  "HMI.MatrixColorType": {
    "DataType": "ElementaryType"
  },
  "HMI.MouseCursorKinds": {
    "Values": [
      "Standard",
      "Pointer",
      "Crosshair",
      "Text",
      "NotAllowed",
      "Wait",
      "Help",
      "Move"
    ],
    "DisplayValues": [
      "Стандартный",
      "Рука",
      "Перекрестие",
      "Текст",
      "Запрет",
      "Ожидание",
      "Помощь",
      "Перемещение"
    ],
    "Indexes": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.OpenDialogPoint": {
    "Values": [
      "ElementOffset",
      "PointerOffset",
      "WindowOffset",
      "Center"
    ],
    "DisplayValues": [
      "Смещение от элемента",
      "Смещение от указателя",
      "По заданным",
      "По центру"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.OperationType": {
    "Values": [
      "Move",
      "Add",
      "Sub",
      "Mul",
      "Div"
    ],
    "DisplayValues": [
      "Присвоить",
      "Добавить",
      "Отнять",
      "Умножить",
      "Разделить"
    ],
    "Indexes": [
      0,
      1,
      2,
      3,
      4
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.OrientationType": {
    "Values": [
      "Horizontal",
      "Vertical"
    ],
    "DisplayValues": [
      "Горизонтально",
      "Вертикально"
    ],
    "Indexes": [
      0,
      1
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.ProportionType": {
    "Values": [
      "No",
      "Width",
      "Height",
      "Min",
      "Max"
    ],
    "DisplayValues": [
      "Нет",
      "По ширине",
      "По высоте",
      "По минимальной стороне",
      "По максимальной стороне"
    ],
    "Indexes": [
      0,
      1,
      2,
      3,
      4
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.ResourceType": {
    "DataType": "ElementaryType"
  },
  "HMI.RowStyle": {
    "Fields": {
      "RowHeight": "STRING",
      "BorderThickness": "LREAL",
      "BorderColor": "HMI.SolidColorType",
      "BackgroundColor": "HMI.GradientColorType",
      "BackgroundColorEven": "HMI.GradientColorType",
      "BackgroundColorFilter": "HMI.GradientColorType",
      "FontName": "STRING",
      "FontSize": "BYTE",
      "TextColor": "HMI.SolidColorType",
      "TextColorFilter": "HMI.SolidColorType",
      "FontItalic": "BOOL",
      "FontBold": "BOOL",
      "FontUnderlined": "BOOL"
    },
    "DataType": "StructureType"
  },
  "HMI.SaveStateType": {
    "Values": [
      "Default",
      "Yes",
      "No"
    ],
    "DisplayValues": [
      "По умолчанию",
      "Да",
      "Нет"
    ],
    "Indexes": [
      0,
      1,
      2
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.SizeToContentType": {
    "Values": [
      "RealSize",
      "SetSize",
      "Crop",
      "Scroll"
    ],
    "DisplayValues": [
      "Исходный размер",
      "Подогнать",
      "Обрезать",
      "Прокрутить"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.SizeType": {
    "Values": [
      "Pixel",
      "Relative"
    ],
    "DisplayValues": [
      "Абсолютно",
      "Относительно"
    ],
    "Indexes": [
      0,
      1
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.SolidColorType": {
    "DataType": "ElementaryType"
  },
  "HMI.SortType": {
    "Values": [
      "No",
      "Asc",
      "Desc"
    ],
    "DisplayValues": [
      "Нет",
      "По возрастанию",
      "По убыванию"
    ],
    "Indexes": [
      0,
      1,
      2
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.TileType": {
    "Values": [
      "No",
      "Tile",
      "Fill",
      "Center"
    ],
    "DisplayValues": [
      "Нет",
      "Мозаика",
      "Заполнение",
      "Центр"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.VerticalAlignType": {
    "Values": [
      "Top",
      "Center",
      "Bottom"
    ],
    "DisplayValues": [
      "Верх",
      "Центр",
      "Низ"
    ],
    "Indexes": [
      0,
      1,
      2
    ],
    "DataType": "EnumeratedType"
  },
  "HMI.VerticalAlignTypeExt": {
    "Values": [
      "Top",
      "Center",
      "Bottom",
      "Stretch"
    ],
    "DisplayValues": [
      "Верх",
      "Центр",
      "Низ",
      "Растянуть"
    ],
    "Indexes": [
      0,
      1,
      2,
      3
    ],
    "DataType": "EnumeratedType"
  },
  "INT": {
    "DataType": "ElementaryType"
  },
  "LINT": {
    "DataType": "ElementaryType"
  },
  "LREAL": {
    "DataType": "ElementaryType"
  },
  "OpcUaStatusCodes": {
    "Values": [
      "Good",
      "GoodLocalOverride",
      "GoodEdited",
      "GoodNoData",
      "Uncertain",
      "UncertainSubNormal",
      "UncertainSensorNotAccurate",
      "UncertainEngineeringUnitsExceeded",
      "UncertainLastUsableValue",
      "UncertainSubstituteValue",
      "UncertainNoCommunicationLastUsableValue",
      "Bad",
      "BadConfigurationError",
      "BadNotConnected",
      "BadNoCommunication",
      "BadDeviceFailure",
      "BadSensorFailure",
      "BadOutOfService",
      "BadWaitingForInitialData",
      "BadUnexpectedError",
      "BadNotImplemented",
      "BadNotTypeDefinition"
    ],
    "DisplayValues": [
      "Good",
      "GoodLocalOverride",
      "GoodEdited",
      "GoodNoData",
      "Uncertain",
      "UncertainSubNormal",
      "UncertainSensorNotAccurate",
      "UncertainEngineeringUnitsExceeded",
      "UncertainLastUsableValue",
      "UncertainSubstituteValue",
      "UncertainNoCommunicationLastUsableValue",
      "Bad",
      "BadConfigurationError",
      "BadNotConnected",
      "BadNoCommunication",
      "BadDeviceFailure",
      "BadSensorFailure",
      "BadOutOfService",
      "BadWaitingForInitialData",
      "BadUnexpectedError",
      "BadNotImplemented",
      "BadNotTypeDefinition"
    ],
    "Indexes": [
      0,
      9830400,
      14417920,
      10813440,
      1073741824,
      1083506688,
      1083375616,
      1083441152,
      1083179008,
      1083244544,
      1083113472,
      2147483648,
      2156462080,
      2156527616,
      2150694912,
      2156593152,
      2156658688,
      2156724224,
      2150760448,
      2147549184,
      2151677952,
      2160590848
    ],
    "DataType": "EnumeratedType"
  },
  "Protocols.AreaSiemens": {
    "Values": [
      "I",
      "Q",
      "M",
      "DB",
      "T",
      "C"
    ],
    "DisplayValues": [
      "I",
      "Q",
      "M",
      "DB",
      "T",
      "C"
    ],
    "Indexes": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "DataType": "EnumeratedType"
  },
  "Protocols.DataTypeSiemens": {
    "Values": [
      "BOOL",
      "BYTE",
      "CHAR",
      "WCHAR",
      "SINT",
      "USINT",
      "WORD",
      "INT",
      "UINT",
      "DWORD",
      "DINT",
      "UDINT",
      "REAL",
      "LREAL",
      "STRING",
      "WSTRING",
      "DATE",
      "TOD",
      "TIME",
      "DT",
      "DTL",
      "ULINT",
      "LINT"
    ],
    "DisplayValues": [
      "BOOL",
      "BYTE",
      "CHAR",
      "WCHAR",
      "SINT",
      "USINT",
      "WORD",
      "INT",
      "UINT",
      "DWORD",
      "DINT",
      "UDINT",
      "REAL",
      "LREAL",
      "STRING",
      "WSTRING",
      "DATE",
      "TOD",
      "TIME",
      "DT",
      "DTL",
      "ULINT",
      "LINT"
    ],
    "Indexes": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "DataType": "EnumeratedType"
  },
  "REF_TO": {
    "DataType": "ElementaryType"
  },
  "SiemensPLC_VarsStruct": {
    "Fields": {
      "Name": "STRING",
      "ReadId": "LINT",
      "ReadPath": "STRING",
      "WriteId": "LINT",
      "WriteGlobalId": "LINT",
      "WritePath": "STRING",
      "Area": "Protocols.AreaSiemens",
      "DataType": "Protocols.DataTypeSiemens",
      "NumberDB": "UDINT",
      "AddressByte": "UDINT",
      "NumberBit": "UDINT",
      "LengthString": "UDINT"
    },
    "DataType": "StructureType"
  },
  "STRING": {
    "DataType": "ElementaryType"
  },
  "SYSTEM_BOOL_PARAM": {
    "Fields": {
      "Value": "BOOL",
      "SourceTime": "DATE_AND_TIME",
      "StatusCode": "OpcUaStatusCodes"
    },
    "DataType": "StructureType"
  },
  "SYSTEM_DINT_PARAM": {
    "Fields": {
      "Value": "DINT",
      "SourceTime": "DATE_AND_TIME",
      "StatusCode": "OpcUaStatusCodes"
    },
    "DataType": "StructureType"
  },
  "SYSTEM_INT_PARAM": {
    "Fields": {
      "Value": "INT",
      "SourceTime": "DATE_AND_TIME",
      "StatusCode": "OpcUaStatusCodes"
    },
    "DataType": "StructureType"
  },
  "SYSTEM_REAL_PARAM": {
    "Fields": {
      "Value": "LREAL",
      "SourceTime": "DATE_AND_TIME",
      "StatusCode": "OpcUaStatusCodes"
    },
    "DataType": "StructureType"
  },
  "SYSTEM_STRING_PARAM": {
    "Fields": {
      "Value": "STRING",
      "SourceTime": "DATE_AND_TIME",
      "StatusCode": "OpcUaStatusCodes"
    },
    "DataType": "StructureType"
  },
  "TIME": {
    "DataType": "ElementaryType"
  },
  "UDINT": {
    "DataType": "ElementaryType"
  },
  "UINT": {
    "DataType": "ElementaryType"
  },
  "USINT": {
    "DataType": "ElementaryType"
  }
}
}
}