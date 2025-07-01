'use strict';
export class WinDefs {
static get startWindow() {
    return {"309018":"58259"};
} 
static get mainFrame() { 
    return {"309018":"309031"};
}
constructor(){
this.obj={}
 
this.winDef={
'100294':{
'id':'100294',
'template':'t_100294',
'typeid':'100294',
'elname':'Valve',
'objectid':'99554',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z6.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'100959':{
'id':'100959',
'template':'t_100959',
'typeid':'100959',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'100931',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "441644": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "441647": "False",
          "441646": "true",
          "operand": "441647",
          "value": "441646",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "441683": "0",
          "441682": "0",
          "operand": "441683",
          "value": "441682",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487015": "False",
          "487014": "false",
          "operand": "487015",
          "value": "487014",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "441428",
    "TriggerId": "441404"
  }
},
},
'101268':{
'id':'101268',
'template':'t_101268',
'typeid':'101268',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'100931',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1014418':{
'id':'1014418',
'template':'t_1014418',
'typeid':'1014418',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'1014383',
'width':"500",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1014968": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1014983": "False",
          "1014982": "true",
          "operand": "1014983",
          "value": "1014982",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1014981": "0",
          "1014980": "0",
          "operand": "1014981",
          "value": "1014980",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1014979": "False",
          "1014978": "false",
          "operand": "1014979",
          "value": "1014978",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1014977": "0",
          "1014976": "0",
          "operand": "1014977",
          "value": "1014976",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1014953",
    "TriggerId": "1014951"
  }
},
},
'1014985':{
'id':'1014985',
'template':'t_1014985',
'typeid':'1014985',
'elname':'conv_left_part',
'objectid':'1014383',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c17.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1015096':{
'id':'1015096',
'template':'t_1015096',
'typeid':'1015096',
'elname':'conv_right_part',
'objectid':'1014383',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c17.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1015207':{
'id':'1015207',
'template':'t_1015207',
'typeid':'1015207',
'elname':'conv_part',
'objectid':'1014383',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c17.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1015329':{
'id':'1015329',
'template':'t_1015329',
'typeid':'1015329',
'elname':'Окноуправл',
'objectid':'1014383',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'101577':{
'id':'101577',
'template':'t_101577',
'typeid':'101577',
'elname':'Окноуправл',
'objectid':'100931',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1016371':{
'id':'1016371',
'template':'t_1016371',
'typeid':'1016371',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1016356',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1018479':{
'id':'1018479',
'template':'t_1018479',
'typeid':'1018479',
'elname':'7_4to7_18',
'typed':true,
'objectid':'1018470',
'width':"90",
'height':"110",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1019507':{
'id':'1019507',
'template':'t_1019507',
'typeid':'1019507',
'elname':'7_20tos12',
'typed':true,
'objectid':'1019498',
'width':"340",
'height':"150",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'101976':{
'id':'101976',
'template':'t_101976',
'typeid':'101976',
'elname':'Noria',
'objectid':'100931',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n1.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1019906':{
'id':'1019906',
'template':'t_1019906',
'typeid':'1019906',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1019891',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1020236':{
'id':'1020236',
'template':'t_1020236',
'typeid':'1020236',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1020221',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1020566':{
'id':'1020566',
'template':'t_1020566',
'typeid':'1020566',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1020551',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'102087':{
'id':'102087',
'template':'t_102087',
'typeid':'102087',
'elname':'Noria(bot)',
'objectid':'100931',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n1.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1021383':{
'id':'1021383',
'template':'t_1021383',
'typeid':'1021383',
'elname':'7_14to6501',
'typed':true,
'objectid':'1021374',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1021752':{
'id':'1021752',
'template':'t_1021752',
'typeid':'1021752',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1021737',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1022076':{
'id':'1022076',
'template':'t_1022076',
'typeid':'1022076',
'elname':'7_14to6501',
'typed':true,
'objectid':'1022067',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1022328':{
'id':'1022328',
'template':'t_1022328',
'typeid':'1022328',
'elname':'7_14to6501',
'typed':true,
'objectid':'1022319',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1022586':{
'id':'1022586',
'template':'t_1022586',
'typeid':'1022586',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1022571',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1022936':{
'id':'1022936',
'template':'t_1022936',
'typeid':'1022936',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'1022901',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1023486": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1023501": "False",
          "1023500": "true",
          "operand": "1023501",
          "value": "1023500",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1023499": "0",
          "1023498": "0",
          "operand": "1023499",
          "value": "1023498",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1023497": "False",
          "1023496": "false",
          "operand": "1023497",
          "value": "1023496",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1023495": "0",
          "1023494": "0",
          "operand": "1023495",
          "value": "1023494",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1023471",
    "TriggerId": "1023469"
  }
},
},
'1023503':{
'id':'1023503',
'template':'t_1023503',
'typeid':'1023503',
'elname':'conv_left_part',
'objectid':'1022901',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c10a.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1023614':{
'id':'1023614',
'template':'t_1023614',
'typeid':'1023614',
'elname':'conv_right_part',
'objectid':'1022901',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c10a.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1023725':{
'id':'1023725',
'template':'t_1023725',
'typeid':'1023725',
'elname':'conv_part',
'objectid':'1022901',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c10a.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1023847':{
'id':'1023847',
'template':'t_1023847',
'typeid':'1023847',
'elname':'Окноуправл',
'objectid':'1022901',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1024316':{
'id':'1024316',
'template':'t_1024316',
'typeid':'1024316',
'elname':'3201to7_9',
'typed':true,
'objectid':'1024307',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1024653':{
'id':'1024653',
'template':'t_1024653',
'typeid':'1024653',
'elname':'3201to7_9',
'typed':true,
'objectid':'1024644',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1024905':{
'id':'1024905',
'template':'t_1024905',
'typeid':'1024905',
'elname':'3201to7_9',
'typed':true,
'objectid':'1024896',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1025052':{
'id':'1025052',
'template':'t_1025052',
'typeid':'1025052',
'elname':'3201to7_9',
'objectid':'1025043',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1025199':{
'id':'1025199',
'template':'t_1025199',
'typeid':'1025199',
'elname':'3201to7_9',
'typed':true,
'objectid':'1025190',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1025661':{
'id':'1025661',
'template':'t_1025661',
'typeid':'1025661',
'elname':'7_16tos3201',
'typed':true,
'objectid':'1025652',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1025913':{
'id':'1025913',
'template':'t_1025913',
'typeid':'1025913',
'elname':'7_16tos3201',
'typed':true,
'objectid':'1025904',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1026484':{
'id':'1026484',
'template':'t_1026484',
'typeid':'1026484',
'elname':'7_19to1501',
'typed':true,
'objectid':'1026475',
'width':"190",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1026848':{
'id':'1026848',
'template':'t_1026848',
'typeid':'1026848',
'elname':'3201to7_9',
'typed':true,
'objectid':'1026839',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1027100':{
'id':'1027100',
'template':'t_1027100',
'typeid':'1027100',
'elname':'3201to7_9',
'typed':true,
'objectid':'1027091',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1027352':{
'id':'1027352',
'template':'t_1027352',
'typeid':'1027352',
'elname':'3201to7_9',
'typed':true,
'objectid':'1027343',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1027604':{
'id':'1027604',
'template':'t_1027604',
'typeid':'1027604',
'elname':'3201to7_9',
'typed':true,
'objectid':'1027595',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1031745':{
'id':'1031745',
'template':'t_1031745',
'typeid':'1031745',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'1031708',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1032346": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1032361": "False",
          "1032360": "true",
          "operand": "1032361",
          "value": "1032360",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1032359": "0",
          "1032358": "0",
          "operand": "1032359",
          "value": "1032358",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1032357": "False",
          "1032356": "false",
          "operand": "1032357",
          "value": "1032356",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1032355": "0",
          "1032354": "0",
          "operand": "1032355",
          "value": "1032354",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1032331",
    "TriggerId": "1032329"
  }
},
},
'1032363':{
'id':'1032363',
'template':'t_1032363',
'typeid':'1032363',
'elname':'conv_left_part',
'objectid':'1031708',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c21.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1032474':{
'id':'1032474',
'template':'t_1032474',
'typeid':'1032474',
'elname':'conv_right_part',
'objectid':'1031708',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c21.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1032585':{
'id':'1032585',
'template':'t_1032585',
'typeid':'1032585',
'elname':'conv_part',
'objectid':'1031708',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c21.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1032707':{
'id':'1032707',
'template':'t_1032707',
'typeid':'1032707',
'elname':'Окноуправл',
'objectid':'1031708',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1033696':{
'id':'1033696',
'template':'t_1033696',
'typeid':'1033696',
'elname':'7_21to7_13',
'typed':true,
'objectid':'1033687',
'width':"220",
'height':"610",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1034018':{
'id':'1034018',
'template':'t_1034018',
'typeid':'1034018',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1034003',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1034243':{
'id':'1034243',
'template':'t_1034243',
'typeid':'1034243',
'elname':'Изображение силосов',
'typed':true,
'objectid':'1034228',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1034882':{
'id':'1034882',
'template':'t_1034882',
'typeid':'1034882',
'elname':'7_16tos3201',
'typed':true,
'objectid':'1034873',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1035134':{
'id':'1035134',
'template':'t_1035134',
'typeid':'1035134',
'elname':'7_16tos3201',
'typed':true,
'objectid':'1035125',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1035680':{
'id':'1035680',
'template':'t_1035680',
'typeid':'1035680',
'elname':'7_16tos3201',
'typed':true,
'objectid':'1035671',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1035827':{
'id':'1035827',
'template':'t_1035827',
'typeid':'1035827',
'elname':'7_16tos3201',
'typed':true,
'objectid':'1035818',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1036499':{
'id':'1036499',
'template':'t_1036499',
'typeid':'1036499',
'elname':'7_18to5701',
'typed':true,
'objectid':'1036490',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1036646':{
'id':'1036646',
'template':'t_1036646',
'typeid':'1036646',
'elname':'7_18to3701',
'typed':true,
'objectid':'1036637',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1036793':{
'id':'1036793',
'template':'t_1036793',
'typeid':'1036793',
'elname':'7_18to1701',
'typed':true,
'objectid':'1036784',
'width':"10",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1037283':{
'id':'1037283',
'template':'t_1037283',
'typeid':'1037283',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'1037246',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1037884": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1037899": "False",
          "1037898": "true",
          "operand": "1037899",
          "value": "1037898",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1037897": "0",
          "1037896": "0",
          "operand": "1037897",
          "value": "1037896",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1037895": "False",
          "1037894": "false",
          "operand": "1037895",
          "value": "1037894",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1037893": "0",
          "1037892": "0",
          "operand": "1037893",
          "value": "1037892",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1037869",
    "TriggerId": "1037867"
  }
},
},
'1037901':{
'id':'1037901',
'template':'t_1037901',
'typeid':'1037901',
'elname':'conv_left_part',
'objectid':'1037246',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c11a.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1038012':{
'id':'1038012',
'template':'t_1038012',
'typeid':'1038012',
'elname':'conv_right_part',
'objectid':'1037246',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c11a.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1038123':{
'id':'1038123',
'template':'t_1038123',
'typeid':'1038123',
'elname':'conv_part',
'objectid':'1037246',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c11a.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1038245':{
'id':'1038245',
'template':'t_1038245',
'typeid':'1038245',
'elname':'Окноуправл',
'objectid':'1037246',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1038819':{
'id':'1038819',
'template':'t_1038819',
'typeid':'1038819',
'elname':'3201to7_9',
'objectid':'1038810',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1038966':{
'id':'1038966',
'template':'t_1038966',
'typeid':'1038966',
'elname':'3201to7_9',
'objectid':'1038957',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1039113':{
'id':'1039113',
'template':'t_1039113',
'typeid':'1039113',
'elname':'3201to7_9',
'objectid':'1039104',
'width':"20",
'height':"30",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'106272':{
'id':'106272',
'template':'t_106272',
'typeid':'106272',
'elname':'Изображение поворотной трубы',
'typed':true,
'objectid':'106243',
'width':"250",
'height':"120",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "482305": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "482308": "False",
          "482307": "true",
          "operand": "482308",
          "value": "482307",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "482333": "0",
          "482332": "0",
          "operand": "482333",
          "value": "482332",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488114": "False",
          "488113": "false",
          "operand": "488114",
          "value": "488113",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536398": "0",
          "536397": "0",
          "operand": "536398",
          "value": "536397",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "482230",
    "TriggerId": "482215"
  }
},
},
'106547':{
'id':'106547',
'template':'t_106547',
'typeid':'106547',
'elname':'Окноуправл',
'objectid':'106243',
'width':"190",
'height':"190",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'106946':{
'id':'106946',
'template':'t_106946',
'typeid':'106946',
'elname':'rotate',
'objectid':'106243',
'width':"300.5",
'height':"92.3",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Трубы поворотные.t1.Ресурсы.Окна.rotate.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'polozhenie':"",
'sostoyanie':"",
'dynamicsvg':"false",
},
'107408':{
'id':'107408',
'template':'t_107408',
'typeid':'107408',
'elname':'Изображение силосов',
'typed':true,
'objectid':'107399',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'107955':{
'id':'107955',
'template':'t_107955',
'typeid':'107955',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'107927',
'width':"510",
'height':"80",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450980": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450983": "False",
          "450982": "true",
          "operand": "450983",
          "value": "450982",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451108": "0",
          "451107": "0",
          "operand": "451108",
          "value": "451107",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487962": "False",
          "487961": "false",
          "operand": "487962",
          "value": "487961",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536129": "0",
          "536128": "0",
          "operand": "536129",
          "value": "536128",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450645",
    "TriggerId": "450526"
  }
},
},
'110001':{
'id':'110001',
'template':'t_110001',
'typeid':'110001',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'109973',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "441664": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "441667": "False",
          "441666": "true",
          "operand": "441667",
          "value": "441666",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "441714": "0",
          "441713": "0",
          "operand": "441714",
          "value": "441713",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487035": "False",
          "487034": "false",
          "operand": "487035",
          "value": "487034",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "441498",
    "TriggerId": "441419"
  }
},
},
'110310':{
'id':'110310',
'template':'t_110310',
'typeid':'110310',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'109973',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'110619':{
'id':'110619',
'template':'t_110619',
'typeid':'110619',
'elname':'Окноуправл',
'objectid':'109973',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'111018':{
'id':'111018',
'template':'t_111018',
'typeid':'111018',
'elname':'Noria',
'objectid':'109973',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n3.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'111129':{
'id':'111129',
'template':'t_111129',
'typeid':'111129',
'elname':'Noria(bot)',
'objectid':'109973',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n3.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'112058':{
'id':'112058',
'template':'t_112058',
'typeid':'112058',
'elname':'Изображение поворотной трубы',
'typed':true,
'objectid':'112029',
'width':"250",
'height':"120",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "482309": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "482312": "False",
          "482311": "true",
          "operand": "482312",
          "value": "482311",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "482337": "0",
          "482336": "0",
          "operand": "482337",
          "value": "482336",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488118": "False",
          "488117": "false",
          "operand": "488118",
          "value": "488117",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536402": "0",
          "536401": "0",
          "operand": "536402",
          "value": "536401",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "482244",
    "TriggerId": "482218"
  }
},
},
'112333':{
'id':'112333',
'template':'t_112333',
'typeid':'112333',
'elname':'Окноуправл',
'objectid':'112029',
'width':"190",
'height':"190",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'112732':{
'id':'112732',
'template':'t_112732',
'typeid':'112732',
'elname':'rotate',
'objectid':'112029',
'width':"300.5",
'height':"92.3",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Трубы поворотные.t3.Ресурсы.Окна.rotate.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'polozhenie':"",
'sostoyanie':"",
'dynamicsvg':"false",
},
'112853':{
'id':'112853',
'template':'t_112853',
'typeid':'112853',
'elname':'Изображение машины',
'typed':true,
'objectid':'112844',
'width':"150",
'height':"140",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'113537':{
'id':'113537',
'template':'t_113537',
'typeid':'113537',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'113509',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "441668": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "441671": "False",
          "441670": "true",
          "operand": "441671",
          "value": "441670",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "441718": "0",
          "441717": "0",
          "operand": "441718",
          "value": "441717",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487039": "False",
          "487038": "false",
          "operand": "487039",
          "value": "487038",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "441512",
    "TriggerId": "441422"
  }
},
},
'113846':{
'id':'113846',
'template':'t_113846',
'typeid':'113846',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'113509',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'114155':{
'id':'114155',
'template':'t_114155',
'typeid':'114155',
'elname':'Окноуправл',
'objectid':'113509',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'114554':{
'id':'114554',
'template':'t_114554',
'typeid':'114554',
'elname':'Noria',
'objectid':'113509',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n16.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'114665':{
'id':'114665',
'template':'t_114665',
'typeid':'114665',
'elname':'Noria(bot)',
'objectid':'113509',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n16.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'114984':{
'id':'114984',
'template':'t_114984',
'typeid':'114984',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'114956',
'width':"190",
'height':"80",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450984": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450987": "False",
          "450986": "true",
          "operand": "450987",
          "value": "450986",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451112": "0",
          "451111": "0",
          "operand": "451112",
          "value": "451111",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487966": "False",
          "487965": "false",
          "operand": "487966",
          "value": "487965",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536133": "0",
          "536132": "0",
          "operand": "536133",
          "value": "536132",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450659",
    "TriggerId": "450529"
  }
},
},
'116104':{
'id':'116104',
'template':'t_116104',
'typeid':'116104',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'116076',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450988": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450991": "False",
          "450990": "true",
          "operand": "450991",
          "value": "450990",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451116": "0",
          "451115": "0",
          "operand": "451116",
          "value": "451115",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487970": "False",
          "487969": "false",
          "operand": "487970",
          "value": "487969",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536137": "0",
          "536136": "0",
          "operand": "536137",
          "value": "536136",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450673",
    "TriggerId": "450532"
  }
},
},
'116736':{
'id':'116736',
'template':'t_116736',
'typeid':'116736',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'116708',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450992": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450995": "False",
          "450994": "true",
          "operand": "450995",
          "value": "450994",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451120": "0",
          "451119": "0",
          "operand": "451120",
          "value": "451119",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487974": "False",
          "487973": "false",
          "operand": "487974",
          "value": "487973",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536141": "0",
          "536140": "0",
          "operand": "536141",
          "value": "536140",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450687",
    "TriggerId": "450535"
  }
},
},
'118031':{
'id':'118031',
'template':'t_118031',
'typeid':'118031',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'118003',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483004": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483007": "False",
          "483006": "true",
          "operand": "483007",
          "value": "483006",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483152": "0",
          "483151": "0",
          "operand": "483152",
          "value": "483151",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487797": "False",
          "487796": "false",
          "operand": "487797",
          "value": "487796",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536253": "0",
          "536252": "0",
          "operand": "536253",
          "value": "536252",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478438",
    "TriggerId": "478351"
  },
  "610049": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610052": "False",
          "610051": "true",
          "operand": "610052",
          "value": "610051",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610197": "0",
          "610196": "4",
          "operand": "610197",
          "value": "610196",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609817"
  }
},
},
'118743':{
'id':'118743',
'template':'t_118743',
'typeid':'118743',
'elname':'Valve',
'objectid':'118003',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z7.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'118883':{
'id':'118883',
'template':'t_118883',
'typeid':'118883',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'118855',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483052": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483055": "False",
          "483054": "true",
          "operand": "483055",
          "value": "483054",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483200": "0",
          "483199": "0",
          "operand": "483200",
          "value": "483199",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487845": "False",
          "487844": "false",
          "operand": "487845",
          "value": "487844",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536301": "0",
          "536300": "0",
          "operand": "536301",
          "value": "536300",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478606",
    "TriggerId": "478387"
  },
  "610097": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610100": "False",
          "610099": "true",
          "operand": "610100",
          "value": "610099",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610245": "0",
          "610244": "4",
          "operand": "610245",
          "value": "610244",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609853"
  }
},
},
'1191518':{
'id':'1191518',
'template':'t_1191518',
'typeid':'1191518',
'elname':'Изображение скальператора',
'objectid':'1191481',
'width':"90",
'height':"150",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1191861": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1191876": "False",
          "1191875": "true",
          "operand": "1191876",
          "value": "1191875",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1191874": "0",
          "1191873": "0",
          "operand": "1191874",
          "value": "1191873",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1191872": "False",
          "1191871": "false",
          "operand": "1191872",
          "value": "1191871",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1191870": "0",
          "1191869": "0",
          "operand": "1191870",
          "value": "1191869",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1191846",
    "TriggerId": "1191844"
  }
},
},
'1191878':{
'id':'1191878',
'template':'t_1191878',
'typeid':'1191878',
'elname':'conv_left_part',
'objectid':'1191481',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Scalp.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1191989':{
'id':'1191989',
'template':'t_1191989',
'typeid':'1191989',
'elname':'conv_right_part',
'objectid':'1191481',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Scalp.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1192100':{
'id':'1192100',
'template':'t_1192100',
'typeid':'1192100',
'elname':'conv_part',
'objectid':'1191481',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Scalp.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1192222':{
'id':'1192222',
'template':'t_1192222',
'typeid':'1192222',
'elname':'Окноуправл',
'objectid':'1191481',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1192654':{
'id':'1192654',
'template':'t_1192654',
'typeid':'1192654',
'elname':'Изображение конвейера',
'objectid':'1192617',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1193255": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1193270": "False",
          "1193269": "true",
          "operand": "1193270",
          "value": "1193269",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1193268": "0",
          "1193267": "0",
          "operand": "1193268",
          "value": "1193267",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1193266": "False",
          "1193265": "false",
          "operand": "1193266",
          "value": "1193265",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1193264": "0",
          "1193263": "0",
          "operand": "1193264",
          "value": "1193263",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1193240",
    "TriggerId": "1193238"
  }
},
},
'1193272':{
'id':'1193272',
'template':'t_1193272',
'typeid':'1193272',
'elname':'conv_left_part',
'objectid':'1192617',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c33.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1193383':{
'id':'1193383',
'template':'t_1193383',
'typeid':'1193383',
'elname':'conv_right_part',
'objectid':'1192617',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c33.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1193494':{
'id':'1193494',
'template':'t_1193494',
'typeid':'1193494',
'elname':'conv_part',
'objectid':'1192617',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c33.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1193616':{
'id':'1193616',
'template':'t_1193616',
'typeid':'1193616',
'elname':'Окноуправл',
'objectid':'1192617',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1194044':{
'id':'1194044',
'template':'t_1194044',
'typeid':'1194044',
'elname':'Изображение конвейера',
'objectid':'1194007',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1194645": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1194660": "False",
          "1194659": "true",
          "operand": "1194660",
          "value": "1194659",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1194658": "0",
          "1194657": "0",
          "operand": "1194658",
          "value": "1194657",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1194656": "False",
          "1194655": "false",
          "operand": "1194656",
          "value": "1194655",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1194654": "0",
          "1194653": "0",
          "operand": "1194654",
          "value": "1194653",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1194630",
    "TriggerId": "1194628"
  }
},
},
'1194662':{
'id':'1194662',
'template':'t_1194662',
'typeid':'1194662',
'elname':'conv_left_part',
'objectid':'1194007',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c34.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1194773':{
'id':'1194773',
'template':'t_1194773',
'typeid':'1194773',
'elname':'conv_right_part',
'objectid':'1194007',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c34.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1194884':{
'id':'1194884',
'template':'t_1194884',
'typeid':'1194884',
'elname':'conv_part',
'objectid':'1194007',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c34.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1195006':{
'id':'1195006',
'template':'t_1195006',
'typeid':'1195006',
'elname':'Окноуправл',
'objectid':'1194007',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1195434':{
'id':'1195434',
'template':'t_1195434',
'typeid':'1195434',
'elname':'Изображение конвейера',
'objectid':'1195397',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1196035": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1196050": "False",
          "1196049": "true",
          "operand": "1196050",
          "value": "1196049",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1196048": "0",
          "1196047": "0",
          "operand": "1196048",
          "value": "1196047",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1196046": "False",
          "1196045": "false",
          "operand": "1196046",
          "value": "1196045",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1196044": "0",
          "1196043": "0",
          "operand": "1196044",
          "value": "1196043",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1196020",
    "TriggerId": "1196018"
  }
},
},
'119595':{
'id':'119595',
'template':'t_119595',
'typeid':'119595',
'elname':'Valve',
'objectid':'118855',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z8.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1196052':{
'id':'1196052',
'template':'t_1196052',
'typeid':'1196052',
'elname':'conv_left_part',
'objectid':'1195397',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c35.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1196163':{
'id':'1196163',
'template':'t_1196163',
'typeid':'1196163',
'elname':'conv_right_part',
'objectid':'1195397',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c35.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1196274':{
'id':'1196274',
'template':'t_1196274',
'typeid':'1196274',
'elname':'conv_part',
'objectid':'1195397',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c35.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1196396':{
'id':'1196396',
'template':'t_1196396',
'typeid':'1196396',
'elname':'Окноуправл',
'objectid':'1195397',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1196824':{
'id':'1196824',
'template':'t_1196824',
'typeid':'1196824',
'elname':'Изображение конвейера',
'objectid':'1196787',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1197425": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1197440": "False",
          "1197439": "true",
          "operand": "1197440",
          "value": "1197439",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1197438": "0",
          "1197437": "0",
          "operand": "1197438",
          "value": "1197437",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1197436": "False",
          "1197435": "false",
          "operand": "1197436",
          "value": "1197435",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1197434": "0",
          "1197433": "0",
          "operand": "1197434",
          "value": "1197433",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1197410",
    "TriggerId": "1197408"
  }
},
},
'119735':{
'id':'119735',
'template':'t_119735',
'typeid':'119735',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'119707',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483048": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483051": "False",
          "483050": "true",
          "operand": "483051",
          "value": "483050",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483196": "0",
          "483195": "0",
          "operand": "483196",
          "value": "483195",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487841": "False",
          "487840": "false",
          "operand": "487841",
          "value": "487840",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536297": "0",
          "536296": "0",
          "operand": "536297",
          "value": "536296",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478592",
    "TriggerId": "478384"
  },
  "610093": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610096": "False",
          "610095": "true",
          "operand": "610096",
          "value": "610095",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610241": "0",
          "610240": "4",
          "operand": "610241",
          "value": "610240",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609850"
  }
},
},
'1197442':{
'id':'1197442',
'template':'t_1197442',
'typeid':'1197442',
'elname':'conv_left_part',
'objectid':'1196787',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c36.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1197553':{
'id':'1197553',
'template':'t_1197553',
'typeid':'1197553',
'elname':'conv_right_part',
'objectid':'1196787',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c36.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1197664':{
'id':'1197664',
'template':'t_1197664',
'typeid':'1197664',
'elname':'conv_part',
'objectid':'1196787',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c36.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1197786':{
'id':'1197786',
'template':'t_1197786',
'typeid':'1197786',
'elname':'Окноуправл',
'objectid':'1196787',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1198214':{
'id':'1198214',
'template':'t_1198214',
'typeid':'1198214',
'elname':'Изображение конвейера',
'objectid':'1198177',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1198815": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1198830": "False",
          "1198829": "true",
          "operand": "1198830",
          "value": "1198829",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1198828": "0",
          "1198827": "0",
          "operand": "1198828",
          "value": "1198827",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1198826": "False",
          "1198825": "false",
          "operand": "1198826",
          "value": "1198825",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1198824": "0",
          "1198823": "0",
          "operand": "1198824",
          "value": "1198823",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1198800",
    "TriggerId": "1198798"
  }
},
},
'1198832':{
'id':'1198832',
'template':'t_1198832',
'typeid':'1198832',
'elname':'conv_left_part',
'objectid':'1198177',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c37.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1198943':{
'id':'1198943',
'template':'t_1198943',
'typeid':'1198943',
'elname':'conv_right_part',
'objectid':'1198177',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c37.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1199054':{
'id':'1199054',
'template':'t_1199054',
'typeid':'1199054',
'elname':'conv_part',
'objectid':'1198177',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c37.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1199176':{
'id':'1199176',
'template':'t_1199176',
'typeid':'1199176',
'elname':'Окноуправл',
'objectid':'1198177',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1199604':{
'id':'1199604',
'template':'t_1199604',
'typeid':'1199604',
'elname':'Изображение конвейера',
'objectid':'1199567',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1200205": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1200220": "False",
          "1200219": "true",
          "operand": "1200220",
          "value": "1200219",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1200218": "0",
          "1200217": "0",
          "operand": "1200218",
          "value": "1200217",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1200216": "False",
          "1200215": "false",
          "operand": "1200216",
          "value": "1200215",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1200214": "0",
          "1200213": "0",
          "operand": "1200214",
          "value": "1200213",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1200190",
    "TriggerId": "1200188"
  }
},
},
'1200222':{
'id':'1200222',
'template':'t_1200222',
'typeid':'1200222',
'elname':'conv_left_part',
'objectid':'1199567',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c23.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1200333':{
'id':'1200333',
'template':'t_1200333',
'typeid':'1200333',
'elname':'conv_right_part',
'objectid':'1199567',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c23.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1200444':{
'id':'1200444',
'template':'t_1200444',
'typeid':'1200444',
'elname':'conv_part',
'objectid':'1199567',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c23.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1200566':{
'id':'1200566',
'template':'t_1200566',
'typeid':'1200566',
'elname':'Окноуправл',
'objectid':'1199567',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1200994':{
'id':'1200994',
'template':'t_1200994',
'typeid':'1200994',
'elname':'Изображение конвейера',
'objectid':'1200957',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1201595": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1201610": "False",
          "1201609": "true",
          "operand": "1201610",
          "value": "1201609",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1201608": "0",
          "1201607": "0",
          "operand": "1201608",
          "value": "1201607",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1201606": "False",
          "1201605": "false",
          "operand": "1201606",
          "value": "1201605",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1201604": "0",
          "1201603": "0",
          "operand": "1201604",
          "value": "1201603",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1201580",
    "TriggerId": "1201578"
  }
},
},
'1201612':{
'id':'1201612',
'template':'t_1201612',
'typeid':'1201612',
'elname':'conv_left_part',
'objectid':'1200957',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c25.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1201723':{
'id':'1201723',
'template':'t_1201723',
'typeid':'1201723',
'elname':'conv_right_part',
'objectid':'1200957',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c25.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1201834':{
'id':'1201834',
'template':'t_1201834',
'typeid':'1201834',
'elname':'conv_part',
'objectid':'1200957',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c25.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1201956':{
'id':'1201956',
'template':'t_1201956',
'typeid':'1201956',
'elname':'Окноуправл',
'objectid':'1200957',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1202384':{
'id':'1202384',
'template':'t_1202384',
'typeid':'1202384',
'elname':'Изображение конвейера',
'objectid':'1202347',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1202985": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1203000": "False",
          "1202999": "true",
          "operand": "1203000",
          "value": "1202999",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1202998": "0",
          "1202997": "0",
          "operand": "1202998",
          "value": "1202997",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1202996": "False",
          "1202995": "false",
          "operand": "1202996",
          "value": "1202995",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1202994": "0",
          "1202993": "0",
          "operand": "1202994",
          "value": "1202993",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1202970",
    "TriggerId": "1202968"
  }
},
},
'1203002':{
'id':'1203002',
'template':'t_1203002',
'typeid':'1203002',
'elname':'conv_left_part',
'objectid':'1202347',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c38.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1203113':{
'id':'1203113',
'template':'t_1203113',
'typeid':'1203113',
'elname':'conv_right_part',
'objectid':'1202347',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c38.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1203224':{
'id':'1203224',
'template':'t_1203224',
'typeid':'1203224',
'elname':'conv_part',
'objectid':'1202347',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c38.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1203346':{
'id':'1203346',
'template':'t_1203346',
'typeid':'1203346',
'elname':'Окноуправл',
'objectid':'1202347',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1203774':{
'id':'1203774',
'template':'t_1203774',
'typeid':'1203774',
'elname':'Изображение конвейера',
'objectid':'1203737',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1204375": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1204390": "False",
          "1204389": "true",
          "operand": "1204390",
          "value": "1204389",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1204388": "0",
          "1204387": "0",
          "operand": "1204388",
          "value": "1204387",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1204386": "False",
          "1204385": "false",
          "operand": "1204386",
          "value": "1204385",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1204384": "0",
          "1204383": "0",
          "operand": "1204384",
          "value": "1204383",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1204360",
    "TriggerId": "1204358"
  }
},
},
'1204392':{
'id':'1204392',
'template':'t_1204392',
'typeid':'1204392',
'elname':'conv_left_part',
'objectid':'1203737',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c39.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'120447':{
'id':'120447',
'template':'t_120447',
'typeid':'120447',
'elname':'Valve',
'objectid':'119707',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z9.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1204503':{
'id':'1204503',
'template':'t_1204503',
'typeid':'1204503',
'elname':'conv_right_part',
'objectid':'1203737',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c39.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1204614':{
'id':'1204614',
'template':'t_1204614',
'typeid':'1204614',
'elname':'conv_part',
'objectid':'1203737',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c39.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1204736':{
'id':'1204736',
'template':'t_1204736',
'typeid':'1204736',
'elname':'Окноуправл',
'objectid':'1203737',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1205164':{
'id':'1205164',
'template':'t_1205164',
'typeid':'1205164',
'elname':'Изображение конвейера',
'objectid':'1205127',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1205765": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1205780": "False",
          "1205779": "true",
          "operand": "1205780",
          "value": "1205779",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1205778": "0",
          "1205777": "0",
          "operand": "1205778",
          "value": "1205777",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1205776": "False",
          "1205775": "false",
          "operand": "1205776",
          "value": "1205775",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1205774": "0",
          "1205773": "0",
          "operand": "1205774",
          "value": "1205773",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1205750",
    "TriggerId": "1205748"
  }
},
},
'1205782':{
'id':'1205782',
'template':'t_1205782',
'typeid':'1205782',
'elname':'conv_left_part',
'objectid':'1205127',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c40.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'120587':{
'id':'120587',
'template':'t_120587',
'typeid':'120587',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'120559',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483056": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483059": "False",
          "483058": "true",
          "operand": "483059",
          "value": "483058",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483204": "0",
          "483203": "0",
          "operand": "483204",
          "value": "483203",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487849": "False",
          "487848": "false",
          "operand": "487849",
          "value": "487848",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536305": "0",
          "536304": "0",
          "operand": "536305",
          "value": "536304",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478620",
    "TriggerId": "478390"
  },
  "610101": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610104": "False",
          "610103": "true",
          "operand": "610104",
          "value": "610103",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610249": "0",
          "610248": "4",
          "operand": "610249",
          "value": "610248",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609856"
  }
},
},
'1205893':{
'id':'1205893',
'template':'t_1205893',
'typeid':'1205893',
'elname':'conv_right_part',
'objectid':'1205127',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c40.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1206004':{
'id':'1206004',
'template':'t_1206004',
'typeid':'1206004',
'elname':'conv_part',
'objectid':'1205127',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c40.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1206126':{
'id':'1206126',
'template':'t_1206126',
'typeid':'1206126',
'elname':'Окноуправл',
'objectid':'1205127',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1206553':{
'id':'1206553',
'template':'t_1206553',
'typeid':'1206553',
'elname':'Изображение вентилятора',
'objectid':'1206517',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1206905": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1206916": "False",
          "1206915": "true",
          "operand": "1206916",
          "value": "1206915",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1206914": "0",
          "1206913": "0",
          "operand": "1206914",
          "value": "1206913",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1206912": "False",
          "1206911": "false",
          "operand": "1206912",
          "value": "1206911",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1206890",
    "TriggerId": "1206888"
  }
},
},
'1206918':{
'id':'1206918',
'template':'t_1206918',
'typeid':'1206918',
'elname':'Окноуправл 1',
'objectid':'1206517',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1207273':{
'id':'1207273',
'template':'t_1207273',
'typeid':'1207273',
'elname':'Изображение вентилятора',
'objectid':'1207237',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1207625": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1207636": "False",
          "1207635": "true",
          "operand": "1207636",
          "value": "1207635",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1207634": "0",
          "1207633": "0",
          "operand": "1207634",
          "value": "1207633",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1207632": "False",
          "1207631": "false",
          "operand": "1207632",
          "value": "1207631",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1207610",
    "TriggerId": "1207608"
  }
},
},
'1207638':{
'id':'1207638',
'template':'t_1207638',
'typeid':'1207638',
'elname':'Окноуправл 1',
'objectid':'1207237',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1207993':{
'id':'1207993',
'template':'t_1207993',
'typeid':'1207993',
'elname':'Изображение вентилятора',
'objectid':'1207957',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1208345": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1208356": "False",
          "1208355": "true",
          "operand": "1208356",
          "value": "1208355",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1208354": "0",
          "1208353": "0",
          "operand": "1208354",
          "value": "1208353",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1208352": "False",
          "1208351": "false",
          "operand": "1208352",
          "value": "1208351",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1208330",
    "TriggerId": "1208328"
  }
},
},
'1208358':{
'id':'1208358',
'template':'t_1208358',
'typeid':'1208358',
'elname':'Окноуправл 1',
'objectid':'1207957',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1208713':{
'id':'1208713',
'template':'t_1208713',
'typeid':'1208713',
'elname':'Изображение вентилятора',
'objectid':'1208677',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1209065": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1209076": "False",
          "1209075": "true",
          "operand": "1209076",
          "value": "1209075",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1209074": "0",
          "1209073": "0",
          "operand": "1209074",
          "value": "1209073",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1209072": "False",
          "1209071": "false",
          "operand": "1209072",
          "value": "1209071",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1209050",
    "TriggerId": "1209048"
  }
},
},
'1209078':{
'id':'1209078',
'template':'t_1209078',
'typeid':'1209078',
'elname':'Окноуправл 1',
'objectid':'1208677',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1209433':{
'id':'1209433',
'template':'t_1209433',
'typeid':'1209433',
'elname':'Изображение вентилятора',
'objectid':'1209397',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1209785": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1209796": "False",
          "1209795": "true",
          "operand": "1209796",
          "value": "1209795",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1209794": "0",
          "1209793": "0",
          "operand": "1209794",
          "value": "1209793",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1209792": "False",
          "1209791": "false",
          "operand": "1209792",
          "value": "1209791",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1209770",
    "TriggerId": "1209768"
  }
},
},
'1209798':{
'id':'1209798',
'template':'t_1209798',
'typeid':'1209798',
'elname':'Окноуправл 1',
'objectid':'1209397',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1210153':{
'id':'1210153',
'template':'t_1210153',
'typeid':'1210153',
'elname':'Изображение вентилятора',
'objectid':'1210117',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1210505": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1210516": "False",
          "1210515": "true",
          "operand": "1210516",
          "value": "1210515",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1210514": "0",
          "1210513": "0",
          "operand": "1210514",
          "value": "1210513",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1210512": "False",
          "1210511": "false",
          "operand": "1210512",
          "value": "1210511",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1210490",
    "TriggerId": "1210488"
  }
},
},
'1210518':{
'id':'1210518',
'template':'t_1210518',
'typeid':'1210518',
'elname':'Окноуправл 1',
'objectid':'1210117',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1210873':{
'id':'1210873',
'template':'t_1210873',
'typeid':'1210873',
'elname':'Изображение вентилятора',
'objectid':'1210837',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1211225": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1211236": "False",
          "1211235": "true",
          "operand": "1211236",
          "value": "1211235",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1211234": "0",
          "1211233": "0",
          "operand": "1211234",
          "value": "1211233",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1211232": "False",
          "1211231": "false",
          "operand": "1211232",
          "value": "1211231",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1211210",
    "TriggerId": "1211208"
  }
},
},
'1211238':{
'id':'1211238',
'template':'t_1211238',
'typeid':'1211238',
'elname':'Окноуправл 1',
'objectid':'1210837',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1211593':{
'id':'1211593',
'template':'t_1211593',
'typeid':'1211593',
'elname':'Изображение вентилятора',
'objectid':'1211557',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1211945": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1211956": "False",
          "1211955": "true",
          "operand": "1211956",
          "value": "1211955",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1211954": "0",
          "1211953": "0",
          "operand": "1211954",
          "value": "1211953",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1211952": "False",
          "1211951": "false",
          "operand": "1211952",
          "value": "1211951",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1211930",
    "TriggerId": "1211928"
  }
},
},
'1211958':{
'id':'1211958',
'template':'t_1211958',
'typeid':'1211958',
'elname':'Окноуправл 1',
'objectid':'1211557',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1212313':{
'id':'1212313',
'template':'t_1212313',
'typeid':'1212313',
'elname':'Изображение вентилятора',
'objectid':'1212277',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1212665": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1212676": "False",
          "1212675": "true",
          "operand": "1212676",
          "value": "1212675",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1212674": "0",
          "1212673": "0",
          "operand": "1212674",
          "value": "1212673",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1212672": "False",
          "1212671": "false",
          "operand": "1212672",
          "value": "1212671",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1212650",
    "TriggerId": "1212648"
  }
},
},
'1212678':{
'id':'1212678',
'template':'t_1212678',
'typeid':'1212678',
'elname':'Окноуправл 1',
'objectid':'1212277',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'121299':{
'id':'121299',
'template':'t_121299',
'typeid':'121299',
'elname':'Valve',
'objectid':'120559',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z34.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1213039':{
'id':'1213039',
'template':'t_1213039',
'typeid':'1213039',
'elname':'Изображение вентилятора',
'objectid':'1213003',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1213391": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1213402": "False",
          "1213401": "true",
          "operand": "1213402",
          "value": "1213401",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1213400": "0",
          "1213399": "0",
          "operand": "1213400",
          "value": "1213399",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1213398": "False",
          "1213397": "false",
          "operand": "1213398",
          "value": "1213397",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1213376",
    "TriggerId": "1213374"
  }
},
},
'1213404':{
'id':'1213404',
'template':'t_1213404',
'typeid':'1213404',
'elname':'Окноуправл 1',
'objectid':'1213003',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1213759':{
'id':'1213759',
'template':'t_1213759',
'typeid':'1213759',
'elname':'Изображение вентилятора',
'objectid':'1213723',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1214111": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1214122": "False",
          "1214121": "true",
          "operand": "1214122",
          "value": "1214121",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1214120": "0",
          "1214119": "0",
          "operand": "1214120",
          "value": "1214119",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1214118": "False",
          "1214117": "false",
          "operand": "1214118",
          "value": "1214117",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1214096",
    "TriggerId": "1214094"
  }
},
},
'1214124':{
'id':'1214124',
'template':'t_1214124',
'typeid':'1214124',
'elname':'Окноуправл 1',
'objectid':'1213723',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'121439':{
'id':'121439',
'template':'t_121439',
'typeid':'121439',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'121411',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483060": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483063": "False",
          "483062": "true",
          "operand": "483063",
          "value": "483062",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483208": "0",
          "483207": "0",
          "operand": "483208",
          "value": "483207",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487853": "False",
          "487852": "false",
          "operand": "487853",
          "value": "487852",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536309": "0",
          "536308": "0",
          "operand": "536309",
          "value": "536308",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478634",
    "TriggerId": "478393"
  },
  "610105": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610108": "False",
          "610107": "true",
          "operand": "610108",
          "value": "610107",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610253": "0",
          "610252": "4",
          "operand": "610253",
          "value": "610252",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609859"
  }
},
},
'1214479':{
'id':'1214479',
'template':'t_1214479',
'typeid':'1214479',
'elname':'Изображение вентилятора',
'objectid':'1214443',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1214831": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1214842": "False",
          "1214841": "true",
          "operand": "1214842",
          "value": "1214841",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1214840": "0",
          "1214839": "0",
          "operand": "1214840",
          "value": "1214839",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1214838": "False",
          "1214837": "false",
          "operand": "1214838",
          "value": "1214837",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1214816",
    "TriggerId": "1214814"
  }
},
},
'1214844':{
'id':'1214844',
'template':'t_1214844',
'typeid':'1214844',
'elname':'Окноуправл 1',
'objectid':'1214443',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1215199':{
'id':'1215199',
'template':'t_1215199',
'typeid':'1215199',
'elname':'Изображение вентилятора',
'objectid':'1215163',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1215551": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1215562": "False",
          "1215561": "true",
          "operand": "1215562",
          "value": "1215561",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1215560": "0",
          "1215559": "0",
          "operand": "1215560",
          "value": "1215559",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1215558": "False",
          "1215557": "false",
          "operand": "1215558",
          "value": "1215557",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1215536",
    "TriggerId": "1215534"
  }
},
},
'1215564':{
'id':'1215564',
'template':'t_1215564',
'typeid':'1215564',
'elname':'Окноуправл 1',
'objectid':'1215163',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1215919':{
'id':'1215919',
'template':'t_1215919',
'typeid':'1215919',
'elname':'Изображение вентилятора',
'objectid':'1215883',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1216271": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1216282": "False",
          "1216281": "true",
          "operand": "1216282",
          "value": "1216281",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1216280": "0",
          "1216279": "0",
          "operand": "1216280",
          "value": "1216279",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1216278": "False",
          "1216277": "false",
          "operand": "1216278",
          "value": "1216277",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1216256",
    "TriggerId": "1216254"
  }
},
},
'1216284':{
'id':'1216284',
'template':'t_1216284',
'typeid':'1216284',
'elname':'Окноуправл 1',
'objectid':'1215883',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1216639':{
'id':'1216639',
'template':'t_1216639',
'typeid':'1216639',
'elname':'Изображение вентилятора',
'objectid':'1216603',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1216991": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1217002": "False",
          "1217001": "true",
          "operand": "1217002",
          "value": "1217001",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1217000": "0",
          "1216999": "0",
          "operand": "1217000",
          "value": "1216999",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1216998": "False",
          "1216997": "false",
          "operand": "1216998",
          "value": "1216997",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1216976",
    "TriggerId": "1216974"
  }
},
},
'1217004':{
'id':'1217004',
'template':'t_1217004',
'typeid':'1217004',
'elname':'Окноуправл 1',
'objectid':'1216603',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1217359':{
'id':'1217359',
'template':'t_1217359',
'typeid':'1217359',
'elname':'Изображение вентилятора',
'objectid':'1217323',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1217711": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1217722": "False",
          "1217721": "true",
          "operand": "1217722",
          "value": "1217721",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1217720": "0",
          "1217719": "0",
          "operand": "1217720",
          "value": "1217719",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1217718": "False",
          "1217717": "false",
          "operand": "1217718",
          "value": "1217717",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1217696",
    "TriggerId": "1217694"
  }
},
},
'1217724':{
'id':'1217724',
'template':'t_1217724',
'typeid':'1217724',
'elname':'Окноуправл 1',
'objectid':'1217323',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1218079':{
'id':'1218079',
'template':'t_1218079',
'typeid':'1218079',
'elname':'Изображение вентилятора',
'objectid':'1218043',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1218431": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1218442": "False",
          "1218441": "true",
          "operand": "1218442",
          "value": "1218441",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1218440": "0",
          "1218439": "0",
          "operand": "1218440",
          "value": "1218439",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1218438": "False",
          "1218437": "false",
          "operand": "1218438",
          "value": "1218437",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1218416",
    "TriggerId": "1218414"
  }
},
},
'1218444':{
'id':'1218444',
'template':'t_1218444',
'typeid':'1218444',
'elname':'Окноуправл 1',
'objectid':'1218043',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1218799':{
'id':'1218799',
'template':'t_1218799',
'typeid':'1218799',
'elname':'Изображение вентилятора',
'objectid':'1218763',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1219151": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1219162": "False",
          "1219161": "true",
          "operand": "1219162",
          "value": "1219161",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1219160": "0",
          "1219159": "0",
          "operand": "1219160",
          "value": "1219159",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1219158": "False",
          "1219157": "false",
          "operand": "1219158",
          "value": "1219157",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1219136",
    "TriggerId": "1219134"
  }
},
},
'1219164':{
'id':'1219164',
'template':'t_1219164',
'typeid':'1219164',
'elname':'Окноуправл 1',
'objectid':'1218763',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1219519':{
'id':'1219519',
'template':'t_1219519',
'typeid':'1219519',
'elname':'Изображение вентилятора',
'objectid':'1219483',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1219871": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1219882": "False",
          "1219881": "true",
          "operand": "1219882",
          "value": "1219881",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1219880": "0",
          "1219879": "0",
          "operand": "1219880",
          "value": "1219879",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1219878": "False",
          "1219877": "false",
          "operand": "1219878",
          "value": "1219877",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1219856",
    "TriggerId": "1219854"
  }
},
},
'1219884':{
'id':'1219884',
'template':'t_1219884',
'typeid':'1219884',
'elname':'Окноуправл 1',
'objectid':'1219483',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1220239':{
'id':'1220239',
'template':'t_1220239',
'typeid':'1220239',
'elname':'Изображение вентилятора',
'objectid':'1220203',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1220591": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1220602": "False",
          "1220601": "true",
          "operand": "1220602",
          "value": "1220601",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1220600": "0",
          "1220599": "0",
          "operand": "1220600",
          "value": "1220599",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1220598": "False",
          "1220597": "false",
          "operand": "1220598",
          "value": "1220597",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1220576",
    "TriggerId": "1220574"
  }
},
},
'1220604':{
'id':'1220604',
'template':'t_1220604',
'typeid':'1220604',
'elname':'Окноуправл 1',
'objectid':'1220203',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1220959':{
'id':'1220959',
'template':'t_1220959',
'typeid':'1220959',
'elname':'Изображение вентилятора',
'objectid':'1220923',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1221311": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1221322": "False",
          "1221321": "true",
          "operand": "1221322",
          "value": "1221321",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1221320": "0",
          "1221319": "0",
          "operand": "1221320",
          "value": "1221319",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1221318": "False",
          "1221317": "false",
          "operand": "1221318",
          "value": "1221317",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1221296",
    "TriggerId": "1221294"
  }
},
},
'1221324':{
'id':'1221324',
'template':'t_1221324',
'typeid':'1221324',
'elname':'Окноуправл 1',
'objectid':'1220923',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'122151':{
'id':'122151',
'template':'t_122151',
'typeid':'122151',
'elname':'Valve',
'objectid':'121411',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z35.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1221679':{
'id':'1221679',
'template':'t_1221679',
'typeid':'1221679',
'elname':'Изображение вентилятора',
'objectid':'1221643',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1222031": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1222042": "False",
          "1222041": "true",
          "operand": "1222042",
          "value": "1222041",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1222040": "0",
          "1222039": "0",
          "operand": "1222040",
          "value": "1222039",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1222038": "False",
          "1222037": "false",
          "operand": "1222038",
          "value": "1222037",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1222016",
    "TriggerId": "1222014"
  }
},
},
'1222044':{
'id':'1222044',
'template':'t_1222044',
'typeid':'1222044',
'elname':'Окноуправл 1',
'objectid':'1221643',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1222399':{
'id':'1222399',
'template':'t_1222399',
'typeid':'1222399',
'elname':'Изображение вентилятора',
'objectid':'1222363',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1222751": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1222762": "False",
          "1222761": "true",
          "operand": "1222762",
          "value": "1222761",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1222760": "0",
          "1222759": "0",
          "operand": "1222760",
          "value": "1222759",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1222758": "False",
          "1222757": "false",
          "operand": "1222758",
          "value": "1222757",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1222736",
    "TriggerId": "1222734"
  }
},
},
'1222764':{
'id':'1222764',
'template':'t_1222764',
'typeid':'1222764',
'elname':'Окноуправл 1',
'objectid':'1222363',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'122291':{
'id':'122291',
'template':'t_122291',
'typeid':'122291',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'122263',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483064": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483067": "False",
          "483066": "true",
          "operand": "483067",
          "value": "483066",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483212": "0",
          "483211": "0",
          "operand": "483212",
          "value": "483211",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487857": "False",
          "487856": "false",
          "operand": "487857",
          "value": "487856",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536313": "0",
          "536312": "0",
          "operand": "536313",
          "value": "536312",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478648",
    "TriggerId": "478396"
  },
  "610109": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610112": "False",
          "610111": "true",
          "operand": "610112",
          "value": "610111",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610257": "0",
          "610256": "4",
          "operand": "610257",
          "value": "610256",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609862"
  }
},
},
'1223119':{
'id':'1223119',
'template':'t_1223119',
'typeid':'1223119',
'elname':'Изображение вентилятора',
'objectid':'1223083',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1223471": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1223482": "False",
          "1223481": "true",
          "operand": "1223482",
          "value": "1223481",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1223480": "0",
          "1223479": "0",
          "operand": "1223480",
          "value": "1223479",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1223478": "False",
          "1223477": "false",
          "operand": "1223478",
          "value": "1223477",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1223456",
    "TriggerId": "1223454"
  }
},
},
'1223484':{
'id':'1223484',
'template':'t_1223484',
'typeid':'1223484',
'elname':'Окноуправл 1',
'objectid':'1223083',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1223839':{
'id':'1223839',
'template':'t_1223839',
'typeid':'1223839',
'elname':'Изображение вентилятора',
'objectid':'1223803',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1224191": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1224202": "False",
          "1224201": "true",
          "operand": "1224202",
          "value": "1224201",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1224200": "0",
          "1224199": "0",
          "operand": "1224200",
          "value": "1224199",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1224198": "False",
          "1224197": "false",
          "operand": "1224198",
          "value": "1224197",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1224176",
    "TriggerId": "1224174"
  }
},
},
'1224204':{
'id':'1224204',
'template':'t_1224204',
'typeid':'1224204',
'elname':'Окноуправл 1',
'objectid':'1223803',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'123003':{
'id':'123003',
'template':'t_123003',
'typeid':'123003',
'elname':'Valve',
'objectid':'122263',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z36.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1290018':{
'id':'1290018',
'template':'t_1290018',
'typeid':'1290018',
'elname':'Изображение силосов',
'objectid':'1290003',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1290243':{
'id':'1290243',
'template':'t_1290243',
'typeid':'1290243',
'elname':'Изображение силосов',
'objectid':'1290228',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1290468':{
'id':'1290468',
'template':'t_1290468',
'typeid':'1290468',
'elname':'Изображение силосов',
'objectid':'1290453',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'148517':{
'id':'148517',
'template':'t_148517',
'typeid':'148517',
'elname':'Окно 2',
'objectid':'58250',
'width':"340",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"rgb(110,110,104)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1501388':{
'id':'1501388',
'template':'t_1501388',
'typeid':'1501388',
'elname':'Изображение верха нории',
'objectid':'1501351',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1501582": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1501597": "False",
          "1501596": "true",
          "operand": "1501597",
          "value": "1501596",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1501595": "0",
          "1501594": "0",
          "operand": "1501595",
          "value": "1501594",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1501593": "False",
          "1501592": "false",
          "operand": "1501593",
          "value": "1501592",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1501567",
    "TriggerId": "1501565"
  }
},
},
'1501599':{
'id':'1501599',
'template':'t_1501599',
'typeid':'1501599',
'elname':'Изображение низа нории',
'objectid':'1501351',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1501752':{
'id':'1501752',
'template':'t_1501752',
'typeid':'1501752',
'elname':'Окноуправл',
'objectid':'1501351',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1501875':{
'id':'1501875',
'template':'t_1501875',
'typeid':'1501875',
'elname':'Noria',
'objectid':'1501351',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n10.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1501913':{
'id':'1501913',
'template':'t_1501913',
'typeid':'1501913',
'elname':'Noria(bot)',
'objectid':'1501351',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n10.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1501988':{
'id':'1501988',
'template':'t_1501988',
'typeid':'1501988',
'elname':'Изображение верха нории',
'objectid':'1501951',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1502182": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1502197": "False",
          "1502196": "true",
          "operand": "1502197",
          "value": "1502196",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1502195": "0",
          "1502194": "0",
          "operand": "1502195",
          "value": "1502194",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1502193": "False",
          "1502192": "false",
          "operand": "1502193",
          "value": "1502192",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1502167",
    "TriggerId": "1502165"
  }
},
},
'1502199':{
'id':'1502199',
'template':'t_1502199',
'typeid':'1502199',
'elname':'Изображение низа нории',
'objectid':'1501951',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1502352':{
'id':'1502352',
'template':'t_1502352',
'typeid':'1502352',
'elname':'Окноуправл',
'objectid':'1501951',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1502475':{
'id':'1502475',
'template':'t_1502475',
'typeid':'1502475',
'elname':'Noria',
'objectid':'1501951',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n11.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1502513':{
'id':'1502513',
'template':'t_1502513',
'typeid':'1502513',
'elname':'Noria(bot)',
'objectid':'1501951',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n11.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1503188':{
'id':'1503188',
'template':'t_1503188',
'typeid':'1503188',
'elname':'Изображение верха нории',
'objectid':'1503151',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1503382": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1503397": "False",
          "1503396": "true",
          "operand": "1503397",
          "value": "1503396",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1503395": "0",
          "1503394": "0",
          "operand": "1503395",
          "value": "1503394",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1503393": "False",
          "1503392": "false",
          "operand": "1503393",
          "value": "1503392",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1503367",
    "TriggerId": "1503365"
  }
},
},
'1503399':{
'id':'1503399',
'template':'t_1503399',
'typeid':'1503399',
'elname':'Изображение низа нории',
'objectid':'1503151',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1503552':{
'id':'1503552',
'template':'t_1503552',
'typeid':'1503552',
'elname':'Окноуправл',
'objectid':'1503151',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1503675':{
'id':'1503675',
'template':'t_1503675',
'typeid':'1503675',
'elname':'Noria',
'objectid':'1503151',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n12.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1503713':{
'id':'1503713',
'template':'t_1503713',
'typeid':'1503713',
'elname':'Noria(bot)',
'objectid':'1503151',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n12.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1506786':{
'id':'1506786',
'template':'t_1506786',
'typeid':'1506786',
'elname':'Изображение верха нории',
'objectid':'1506749',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1506980": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1506995": "False",
          "1506994": "true",
          "operand": "1506995",
          "value": "1506994",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1506993": "0",
          "1506992": "0",
          "operand": "1506993",
          "value": "1506992",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1506991": "False",
          "1506990": "false",
          "operand": "1506991",
          "value": "1506990",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1506965",
    "TriggerId": "1506963"
  }
},
},
'1506997':{
'id':'1506997',
'template':'t_1506997',
'typeid':'1506997',
'elname':'Изображение низа нории',
'objectid':'1506749',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1507150':{
'id':'1507150',
'template':'t_1507150',
'typeid':'1507150',
'elname':'Окноуправл',
'objectid':'1506749',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1507273':{
'id':'1507273',
'template':'t_1507273',
'typeid':'1507273',
'elname':'Noria',
'objectid':'1506749',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n13.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1507311':{
'id':'1507311',
'template':'t_1507311',
'typeid':'1507311',
'elname':'Noria(bot)',
'objectid':'1506749',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n13.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1507386':{
'id':'1507386',
'template':'t_1507386',
'typeid':'1507386',
'elname':'Изображение верха нории',
'objectid':'1507349',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1507580": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1507595": "False",
          "1507594": "true",
          "operand": "1507595",
          "value": "1507594",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1507593": "0",
          "1507592": "0",
          "operand": "1507593",
          "value": "1507592",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1507591": "False",
          "1507590": "false",
          "operand": "1507591",
          "value": "1507590",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1507565",
    "TriggerId": "1507563"
  }
},
},
'150744':{
'id':'150744',
'template':'t_150744',
'typeid':'150744',
'elname':'Окно 1',
'typed':true,
'objectid':'150734',
'width':"20",
'height':"110",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1507597':{
'id':'1507597',
'template':'t_1507597',
'typeid':'1507597',
'elname':'Изображение низа нории',
'objectid':'1507349',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1507750':{
'id':'1507750',
'template':'t_1507750',
'typeid':'1507750',
'elname':'Окноуправл',
'objectid':'1507349',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1507873':{
'id':'1507873',
'template':'t_1507873',
'typeid':'1507873',
'elname':'Noria',
'objectid':'1507349',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n14.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1507911':{
'id':'1507911',
'template':'t_1507911',
'typeid':'1507911',
'elname':'Noria(bot)',
'objectid':'1507349',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n14.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1507986':{
'id':'1507986',
'template':'t_1507986',
'typeid':'1507986',
'elname':'Изображение верха нории',
'objectid':'1507949',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1508180": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1508195": "False",
          "1508194": "true",
          "operand": "1508195",
          "value": "1508194",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1508193": "0",
          "1508192": "0",
          "operand": "1508193",
          "value": "1508192",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1508191": "False",
          "1508190": "false",
          "operand": "1508191",
          "value": "1508190",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1508165",
    "TriggerId": "1508163"
  }
},
},
'1508197':{
'id':'1508197',
'template':'t_1508197',
'typeid':'1508197',
'elname':'Изображение низа нории',
'objectid':'1507949',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1508350':{
'id':'1508350',
'template':'t_1508350',
'typeid':'1508350',
'elname':'Окноуправл',
'objectid':'1507949',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1508473':{
'id':'1508473',
'template':'t_1508473',
'typeid':'1508473',
'elname':'Noria',
'objectid':'1507949',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n17.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1508511':{
'id':'1508511',
'template':'t_1508511',
'typeid':'1508511',
'elname':'Noria(bot)',
'objectid':'1507949',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n17.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1508586':{
'id':'1508586',
'template':'t_1508586',
'typeid':'1508586',
'elname':'Изображение верха нории',
'objectid':'1508549',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1508780": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1508795": "False",
          "1508794": "true",
          "operand": "1508795",
          "value": "1508794",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1508793": "0",
          "1508792": "0",
          "operand": "1508793",
          "value": "1508792",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1508791": "False",
          "1508790": "false",
          "operand": "1508791",
          "value": "1508790",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1508765",
    "TriggerId": "1508763"
  }
},
},
'1508797':{
'id':'1508797',
'template':'t_1508797',
'typeid':'1508797',
'elname':'Изображение низа нории',
'objectid':'1508549',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1508950':{
'id':'1508950',
'template':'t_1508950',
'typeid':'1508950',
'elname':'Окноуправл',
'objectid':'1508549',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1509073':{
'id':'1509073',
'template':'t_1509073',
'typeid':'1509073',
'elname':'Noria',
'objectid':'1508549',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n9.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1509111':{
'id':'1509111',
'template':'t_1509111',
'typeid':'1509111',
'elname':'Noria(bot)',
'objectid':'1508549',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n9.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1509186':{
'id':'1509186',
'template':'t_1509186',
'typeid':'1509186',
'elname':'Изображение верха нории',
'objectid':'1509149',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1509380": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1509395": "False",
          "1509394": "true",
          "operand": "1509395",
          "value": "1509394",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1509393": "0",
          "1509392": "0",
          "operand": "1509393",
          "value": "1509392",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1509391": "False",
          "1509390": "false",
          "operand": "1509391",
          "value": "1509390",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1509365",
    "TriggerId": "1509363"
  }
},
},
'1509397':{
'id':'1509397',
'template':'t_1509397',
'typeid':'1509397',
'elname':'Изображение низа нории',
'objectid':'1509149',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1509550':{
'id':'1509550',
'template':'t_1509550',
'typeid':'1509550',
'elname':'Окноуправл',
'objectid':'1509149',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1509673':{
'id':'1509673',
'template':'t_1509673',
'typeid':'1509673',
'elname':'Noria',
'objectid':'1509149',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n7.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1509711':{
'id':'1509711',
'template':'t_1509711',
'typeid':'1509711',
'elname':'Noria(bot)',
'objectid':'1509149',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n7.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1509786':{
'id':'1509786',
'template':'t_1509786',
'typeid':'1509786',
'elname':'Изображение верха нории',
'objectid':'1509749',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1509980": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1509995": "False",
          "1509994": "true",
          "operand": "1509995",
          "value": "1509994",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1509993": "0",
          "1509992": "0",
          "operand": "1509993",
          "value": "1509992",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1509991": "False",
          "1509990": "false",
          "operand": "1509991",
          "value": "1509990",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1509965",
    "TriggerId": "1509963"
  }
},
},
'1509997':{
'id':'1509997',
'template':'t_1509997',
'typeid':'1509997',
'elname':'Изображение низа нории',
'objectid':'1509749',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1510150':{
'id':'1510150',
'template':'t_1510150',
'typeid':'1510150',
'elname':'Окноуправл',
'objectid':'1509749',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1510273':{
'id':'1510273',
'template':'t_1510273',
'typeid':'1510273',
'elname':'Noria',
'objectid':'1509749',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n8.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1510311':{
'id':'1510311',
'template':'t_1510311',
'typeid':'1510311',
'elname':'Noria(bot)',
'objectid':'1509749',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n8.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1510386':{
'id':'1510386',
'template':'t_1510386',
'typeid':'1510386',
'elname':'Изображение верха нории',
'objectid':'1510349',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1510580": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1510595": "False",
          "1510594": "true",
          "operand": "1510595",
          "value": "1510594",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1510593": "0",
          "1510592": "0",
          "operand": "1510593",
          "value": "1510592",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1510591": "False",
          "1510590": "false",
          "operand": "1510591",
          "value": "1510590",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1510565",
    "TriggerId": "1510563"
  }
},
},
'1510597':{
'id':'1510597',
'template':'t_1510597',
'typeid':'1510597',
'elname':'Изображение низа нории',
'objectid':'1510349',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'151073':{
'id':'151073',
'template':'t_151073',
'typeid':'151073',
'elname':'1_16to7_30',
'typed':true,
'objectid':'151063',
'width':"20",
'height':"80",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1510750':{
'id':'1510750',
'template':'t_1510750',
'typeid':'1510750',
'elname':'Окноуправл',
'objectid':'1510349',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1510873':{
'id':'1510873',
'template':'t_1510873',
'typeid':'1510873',
'elname':'Noria',
'objectid':'1510349',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n18.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1510911':{
'id':'1510911',
'template':'t_1510911',
'typeid':'1510911',
'elname':'Noria(bot)',
'objectid':'1510349',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n18.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1510986':{
'id':'1510986',
'template':'t_1510986',
'typeid':'1510986',
'elname':'Изображение верха нории',
'objectid':'1510949',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1511180": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1511195": "False",
          "1511194": "true",
          "operand": "1511195",
          "value": "1511194",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1511193": "0",
          "1511192": "0",
          "operand": "1511193",
          "value": "1511192",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1511191": "False",
          "1511190": "false",
          "operand": "1511191",
          "value": "1511190",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1511165",
    "TriggerId": "1511163"
  }
},
},
'1511197':{
'id':'1511197',
'template':'t_1511197',
'typeid':'1511197',
'elname':'Изображение низа нории',
'objectid':'1510949',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1511350':{
'id':'1511350',
'template':'t_1511350',
'typeid':'1511350',
'elname':'Окноуправл',
'objectid':'1510949',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1511473':{
'id':'1511473',
'template':'t_1511473',
'typeid':'1511473',
'elname':'Noria',
'objectid':'1510949',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n19.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1511511':{
'id':'1511511',
'template':'t_1511511',
'typeid':'1511511',
'elname':'Noria(bot)',
'objectid':'1510949',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n19.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1511586':{
'id':'1511586',
'template':'t_1511586',
'typeid':'1511586',
'elname':'Изображение верха нории',
'objectid':'1511549',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1511780": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1511795": "False",
          "1511794": "true",
          "operand": "1511795",
          "value": "1511794",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1511793": "0",
          "1511792": "0",
          "operand": "1511793",
          "value": "1511792",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1511791": "False",
          "1511790": "false",
          "operand": "1511791",
          "value": "1511790",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1511765",
    "TriggerId": "1511763"
  }
},
},
'1511797':{
'id':'1511797',
'template':'t_1511797',
'typeid':'1511797',
'elname':'Изображение низа нории',
'objectid':'1511549',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1511950':{
'id':'1511950',
'template':'t_1511950',
'typeid':'1511950',
'elname':'Окноуправл',
'objectid':'1511549',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1512073':{
'id':'1512073',
'template':'t_1512073',
'typeid':'1512073',
'elname':'Noria',
'objectid':'1511549',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n20.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1512111':{
'id':'1512111',
'template':'t_1512111',
'typeid':'1512111',
'elname':'Noria(bot)',
'objectid':'1511549',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n20.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1512179':{
'id':'1512179',
'template':'t_1512179',
'typeid':'1512179',
'elname':'Изображение задвижки',
'objectid':'1512149',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1512356": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1512371": "False",
          "1512370": "true",
          "operand": "1512371",
          "value": "1512370",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512369": "0",
          "1512368": "0",
          "operand": "1512369",
          "value": "1512368",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512367": "False",
          "1512366": "false",
          "operand": "1512367",
          "value": "1512366",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512365": "0",
          "1512364": "0",
          "operand": "1512365",
          "value": "1512364",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1512341",
    "TriggerId": "1512339"
  },
  "1512389": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1512396": "False",
          "1512395": "true",
          "operand": "1512396",
          "value": "1512395",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512394": "0",
          "1512393": "4",
          "operand": "1512394",
          "value": "1512393",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1512372"
  }
},
},
'1512398':{
'id':'1512398',
'template':'t_1512398',
'typeid':'1512398',
'elname':'Valve',
'objectid':'1512149',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z10.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1512437':{
'id':'1512437',
'template':'t_1512437',
'typeid':'1512437',
'elname':'Окноуправл',
'objectid':'1512149',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'151249':{
'id':'151249',
'template':'t_151249',
'typeid':'151249',
'elname':'7_30to7_30a',
'typed':true,
'objectid':'151239',
'width':"20",
'height':"80",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1512580':{
'id':'1512580',
'template':'t_1512580',
'typeid':'1512580',
'elname':'Изображение задвижки',
'objectid':'1512550',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1512757": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1512772": "False",
          "1512771": "true",
          "operand": "1512772",
          "value": "1512771",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512770": "0",
          "1512769": "0",
          "operand": "1512770",
          "value": "1512769",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512768": "False",
          "1512767": "false",
          "operand": "1512768",
          "value": "1512767",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512766": "0",
          "1512765": "0",
          "operand": "1512766",
          "value": "1512765",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1512742",
    "TriggerId": "1512740"
  },
  "1512790": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1512797": "False",
          "1512796": "true",
          "operand": "1512797",
          "value": "1512796",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1512795": "0",
          "1512794": "4",
          "operand": "1512795",
          "value": "1512794",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1512773"
  }
},
},
'1512799':{
'id':'1512799',
'template':'t_1512799',
'typeid':'1512799',
'elname':'Valve',
'objectid':'1512550',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z11.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1512838':{
'id':'1512838',
'template':'t_1512838',
'typeid':'1512838',
'elname':'Окноуправл',
'objectid':'1512550',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1512981':{
'id':'1512981',
'template':'t_1512981',
'typeid':'1512981',
'elname':'Изображение задвижки',
'objectid':'1512951',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1513158": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1513173": "False",
          "1513172": "true",
          "operand": "1513173",
          "value": "1513172",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513171": "0",
          "1513170": "0",
          "operand": "1513171",
          "value": "1513170",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513169": "False",
          "1513168": "false",
          "operand": "1513169",
          "value": "1513168",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513167": "0",
          "1513166": "0",
          "operand": "1513167",
          "value": "1513166",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1513143",
    "TriggerId": "1513141"
  },
  "1513191": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1513198": "False",
          "1513197": "true",
          "operand": "1513198",
          "value": "1513197",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513196": "0",
          "1513195": "4",
          "operand": "1513196",
          "value": "1513195",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1513174"
  }
},
},
'1513200':{
'id':'1513200',
'template':'t_1513200',
'typeid':'1513200',
'elname':'Valve',
'objectid':'1512951',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z39.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1513239':{
'id':'1513239',
'template':'t_1513239',
'typeid':'1513239',
'elname':'Окноуправл',
'objectid':'1512951',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1513382':{
'id':'1513382',
'template':'t_1513382',
'typeid':'1513382',
'elname':'Изображение задвижки',
'objectid':'1513352',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1513559": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1513574": "False",
          "1513573": "true",
          "operand": "1513574",
          "value": "1513573",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513572": "0",
          "1513571": "0",
          "operand": "1513572",
          "value": "1513571",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513570": "False",
          "1513569": "false",
          "operand": "1513570",
          "value": "1513569",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513568": "0",
          "1513567": "0",
          "operand": "1513568",
          "value": "1513567",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1513544",
    "TriggerId": "1513542"
  },
  "1513592": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1513599": "False",
          "1513598": "true",
          "operand": "1513599",
          "value": "1513598",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513597": "0",
          "1513596": "4",
          "operand": "1513597",
          "value": "1513596",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1513575"
  }
},
},
'1513601':{
'id':'1513601',
'template':'t_1513601',
'typeid':'1513601',
'elname':'Valve',
'objectid':'1513352',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z40.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1513640':{
'id':'1513640',
'template':'t_1513640',
'typeid':'1513640',
'elname':'Окноуправл',
'objectid':'1513352',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1513783':{
'id':'1513783',
'template':'t_1513783',
'typeid':'1513783',
'elname':'Изображение задвижки',
'objectid':'1513753',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1513960": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1513975": "False",
          "1513974": "true",
          "operand": "1513975",
          "value": "1513974",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513973": "0",
          "1513972": "0",
          "operand": "1513973",
          "value": "1513972",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513971": "False",
          "1513970": "false",
          "operand": "1513971",
          "value": "1513970",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513969": "0",
          "1513968": "0",
          "operand": "1513969",
          "value": "1513968",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1513945",
    "TriggerId": "1513943"
  },
  "1513993": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1514000": "False",
          "1513999": "true",
          "operand": "1514000",
          "value": "1513999",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1513998": "0",
          "1513997": "4",
          "operand": "1513998",
          "value": "1513997",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1513976"
  }
},
},
'1514002':{
'id':'1514002',
'template':'t_1514002',
'typeid':'1514002',
'elname':'Valve',
'objectid':'1513753',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z41.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1514041':{
'id':'1514041',
'template':'t_1514041',
'typeid':'1514041',
'elname':'Окноуправл',
'objectid':'1513753',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1514184':{
'id':'1514184',
'template':'t_1514184',
'typeid':'1514184',
'elname':'Изображение задвижки',
'objectid':'1514154',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1514361": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1514376": "False",
          "1514375": "true",
          "operand": "1514376",
          "value": "1514375",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514374": "0",
          "1514373": "0",
          "operand": "1514374",
          "value": "1514373",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514372": "False",
          "1514371": "false",
          "operand": "1514372",
          "value": "1514371",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514370": "0",
          "1514369": "0",
          "operand": "1514370",
          "value": "1514369",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1514346",
    "TriggerId": "1514344"
  },
  "1514394": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1514401": "False",
          "1514400": "true",
          "operand": "1514401",
          "value": "1514400",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514399": "0",
          "1514398": "4",
          "operand": "1514399",
          "value": "1514398",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1514377"
  }
},
},
'151425':{
'id':'151425',
'template':'t_151425',
'typeid':'151425',
'elname':'7_30ato11_7',
'typed':true,
'objectid':'151415',
'width':"140",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1514403':{
'id':'1514403',
'template':'t_1514403',
'typeid':'1514403',
'elname':'Valve',
'objectid':'1514154',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z42.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1514442':{
'id':'1514442',
'template':'t_1514442',
'typeid':'1514442',
'elname':'Окноуправл',
'objectid':'1514154',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1514585':{
'id':'1514585',
'template':'t_1514585',
'typeid':'1514585',
'elname':'Изображение задвижки',
'objectid':'1514555',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1514762": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1514777": "False",
          "1514776": "true",
          "operand": "1514777",
          "value": "1514776",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514775": "0",
          "1514774": "0",
          "operand": "1514775",
          "value": "1514774",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514773": "False",
          "1514772": "false",
          "operand": "1514773",
          "value": "1514772",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514771": "0",
          "1514770": "0",
          "operand": "1514771",
          "value": "1514770",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1514747",
    "TriggerId": "1514745"
  },
  "1514795": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1514802": "False",
          "1514801": "true",
          "operand": "1514802",
          "value": "1514801",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1514800": "0",
          "1514799": "4",
          "operand": "1514800",
          "value": "1514799",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1514778"
  }
},
},
'1514804':{
'id':'1514804',
'template':'t_1514804',
'typeid':'1514804',
'elname':'Valve',
'objectid':'1514555',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z43.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1514843':{
'id':'1514843',
'template':'t_1514843',
'typeid':'1514843',
'elname':'Окноуправл',
'objectid':'1514555',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1514986':{
'id':'1514986',
'template':'t_1514986',
'typeid':'1514986',
'elname':'Изображение задвижки',
'objectid':'1514956',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1515163": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1515178": "False",
          "1515177": "true",
          "operand": "1515178",
          "value": "1515177",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515176": "0",
          "1515175": "0",
          "operand": "1515176",
          "value": "1515175",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515174": "False",
          "1515173": "false",
          "operand": "1515174",
          "value": "1515173",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515172": "0",
          "1515171": "0",
          "operand": "1515172",
          "value": "1515171",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1515148",
    "TriggerId": "1515146"
  },
  "1515196": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1515203": "False",
          "1515202": "true",
          "operand": "1515203",
          "value": "1515202",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515201": "0",
          "1515200": "4",
          "operand": "1515201",
          "value": "1515200",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1515179"
  }
},
},
'1515205':{
'id':'1515205',
'template':'t_1515205',
'typeid':'1515205',
'elname':'Valve',
'objectid':'1514956',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z44.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1515244':{
'id':'1515244',
'template':'t_1515244',
'typeid':'1515244',
'elname':'Окноуправл',
'objectid':'1514956',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1515387':{
'id':'1515387',
'template':'t_1515387',
'typeid':'1515387',
'elname':'Изображение задвижки',
'objectid':'1515357',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1515564": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1515579": "False",
          "1515578": "true",
          "operand": "1515579",
          "value": "1515578",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515577": "0",
          "1515576": "0",
          "operand": "1515577",
          "value": "1515576",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515575": "False",
          "1515574": "false",
          "operand": "1515575",
          "value": "1515574",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515573": "0",
          "1515572": "0",
          "operand": "1515573",
          "value": "1515572",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1515549",
    "TriggerId": "1515547"
  },
  "1515597": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1515604": "False",
          "1515603": "true",
          "operand": "1515604",
          "value": "1515603",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515602": "0",
          "1515601": "4",
          "operand": "1515602",
          "value": "1515601",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1515580"
  }
},
},
'1515606':{
'id':'1515606',
'template':'t_1515606',
'typeid':'1515606',
'elname':'Valve',
'objectid':'1515357',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z45.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1515645':{
'id':'1515645',
'template':'t_1515645',
'typeid':'1515645',
'elname':'Окноуправл',
'objectid':'1515357',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1515788':{
'id':'1515788',
'template':'t_1515788',
'typeid':'1515788',
'elname':'Изображение задвижки',
'objectid':'1515758',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1515965": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1515980": "False",
          "1515979": "true",
          "operand": "1515980",
          "value": "1515979",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515978": "0",
          "1515977": "0",
          "operand": "1515978",
          "value": "1515977",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515976": "False",
          "1515975": "false",
          "operand": "1515976",
          "value": "1515975",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1515974": "0",
          "1515973": "0",
          "operand": "1515974",
          "value": "1515973",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1515950",
    "TriggerId": "1515948"
  },
  "1515998": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1516005": "False",
          "1516004": "true",
          "operand": "1516005",
          "value": "1516004",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516003": "0",
          "1516002": "4",
          "operand": "1516003",
          "value": "1516002",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1515981"
  }
},
},
'1516007':{
'id':'1516007',
'template':'t_1516007',
'typeid':'1516007',
'elname':'Valve',
'objectid':'1515758',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z46.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'151601':{
'id':'151601',
'template':'t_151601',
'typeid':'151601',
'elname':'11_8to1_3',
'typed':true,
'objectid':'151591',
'width':"1020",
'height':"440",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1516046':{
'id':'1516046',
'template':'t_1516046',
'typeid':'1516046',
'elname':'Окноуправл',
'objectid':'1515758',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1516189':{
'id':'1516189',
'template':'t_1516189',
'typeid':'1516189',
'elname':'Изображение задвижки',
'objectid':'1516159',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1516366": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1516381": "False",
          "1516380": "true",
          "operand": "1516381",
          "value": "1516380",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516379": "0",
          "1516378": "0",
          "operand": "1516379",
          "value": "1516378",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516377": "False",
          "1516376": "false",
          "operand": "1516377",
          "value": "1516376",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516375": "0",
          "1516374": "0",
          "operand": "1516375",
          "value": "1516374",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1516351",
    "TriggerId": "1516349"
  },
  "1516399": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1516406": "False",
          "1516405": "true",
          "operand": "1516406",
          "value": "1516405",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516404": "0",
          "1516403": "4",
          "operand": "1516404",
          "value": "1516403",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1516382"
  }
},
},
'1516408':{
'id':'1516408',
'template':'t_1516408',
'typeid':'1516408',
'elname':'Valve',
'objectid':'1516159',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z47.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1516447':{
'id':'1516447',
'template':'t_1516447',
'typeid':'1516447',
'elname':'Окноуправл',
'objectid':'1516159',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1516590':{
'id':'1516590',
'template':'t_1516590',
'typeid':'1516590',
'elname':'Изображение задвижки',
'objectid':'1516560',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1516767": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1516782": "False",
          "1516781": "true",
          "operand": "1516782",
          "value": "1516781",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516780": "0",
          "1516779": "0",
          "operand": "1516780",
          "value": "1516779",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516778": "False",
          "1516777": "false",
          "operand": "1516778",
          "value": "1516777",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516776": "0",
          "1516775": "0",
          "operand": "1516776",
          "value": "1516775",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1516752",
    "TriggerId": "1516750"
  },
  "1516800": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1516807": "False",
          "1516806": "true",
          "operand": "1516807",
          "value": "1516806",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1516805": "0",
          "1516804": "4",
          "operand": "1516805",
          "value": "1516804",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1516783"
  }
},
},
'1516809':{
'id':'1516809',
'template':'t_1516809',
'typeid':'1516809',
'elname':'Valve',
'objectid':'1516560',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z48.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1516848':{
'id':'1516848',
'template':'t_1516848',
'typeid':'1516848',
'elname':'Окноуправл',
'objectid':'1516560',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1516991':{
'id':'1516991',
'template':'t_1516991',
'typeid':'1516991',
'elname':'Изображение задвижки',
'objectid':'1516961',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1517168": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1517183": "False",
          "1517182": "true",
          "operand": "1517183",
          "value": "1517182",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517181": "0",
          "1517180": "0",
          "operand": "1517181",
          "value": "1517180",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517179": "False",
          "1517178": "false",
          "operand": "1517179",
          "value": "1517178",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517177": "0",
          "1517176": "0",
          "operand": "1517177",
          "value": "1517176",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1517153",
    "TriggerId": "1517151"
  },
  "1517201": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1517208": "False",
          "1517207": "true",
          "operand": "1517208",
          "value": "1517207",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517206": "0",
          "1517205": "4",
          "operand": "1517206",
          "value": "1517205",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1517184"
  }
},
},
'1517210':{
'id':'1517210',
'template':'t_1517210',
'typeid':'1517210',
'elname':'Valve',
'objectid':'1516961',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z49.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1517249':{
'id':'1517249',
'template':'t_1517249',
'typeid':'1517249',
'elname':'Окноуправл',
'objectid':'1516961',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1517392':{
'id':'1517392',
'template':'t_1517392',
'typeid':'1517392',
'elname':'Изображение задвижки',
'objectid':'1517362',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1517569": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1517584": "False",
          "1517583": "true",
          "operand": "1517584",
          "value": "1517583",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517582": "0",
          "1517581": "0",
          "operand": "1517582",
          "value": "1517581",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517580": "False",
          "1517579": "false",
          "operand": "1517580",
          "value": "1517579",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517578": "0",
          "1517577": "0",
          "operand": "1517578",
          "value": "1517577",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1517554",
    "TriggerId": "1517552"
  },
  "1517602": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1517609": "False",
          "1517608": "true",
          "operand": "1517609",
          "value": "1517608",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517607": "0",
          "1517606": "4",
          "operand": "1517607",
          "value": "1517606",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1517585"
  }
},
},
'1517611':{
'id':'1517611',
'template':'t_1517611',
'typeid':'1517611',
'elname':'Valve',
'objectid':'1517362',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z50.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1517650':{
'id':'1517650',
'template':'t_1517650',
'typeid':'1517650',
'elname':'Окноуправл',
'objectid':'1517362',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'151777':{
'id':'151777',
'template':'t_151777',
'typeid':'151777',
'elname':'1_3to11_34_35_36',
'typed':true,
'objectid':'151767',
'width':"220",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1517793':{
'id':'1517793',
'template':'t_1517793',
'typeid':'1517793',
'elname':'Изображение задвижки',
'objectid':'1517763',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1517970": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1517985": "False",
          "1517984": "true",
          "operand": "1517985",
          "value": "1517984",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517983": "0",
          "1517982": "0",
          "operand": "1517983",
          "value": "1517982",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517981": "False",
          "1517980": "false",
          "operand": "1517981",
          "value": "1517980",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1517979": "0",
          "1517978": "0",
          "operand": "1517979",
          "value": "1517978",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1517955",
    "TriggerId": "1517953"
  },
  "1518003": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1518010": "False",
          "1518009": "true",
          "operand": "1518010",
          "value": "1518009",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518008": "0",
          "1518007": "4",
          "operand": "1518008",
          "value": "1518007",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1517986"
  }
},
},
'1518012':{
'id':'1518012',
'template':'t_1518012',
'typeid':'1518012',
'elname':'Valve',
'objectid':'1517763',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z51.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1518051':{
'id':'1518051',
'template':'t_1518051',
'typeid':'1518051',
'elname':'Окноуправл',
'objectid':'1517763',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1518194':{
'id':'1518194',
'template':'t_1518194',
'typeid':'1518194',
'elname':'Изображение задвижки',
'objectid':'1518164',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1518371": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1518386": "False",
          "1518385": "true",
          "operand": "1518386",
          "value": "1518385",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518384": "0",
          "1518383": "0",
          "operand": "1518384",
          "value": "1518383",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518382": "False",
          "1518381": "false",
          "operand": "1518382",
          "value": "1518381",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518380": "0",
          "1518379": "0",
          "operand": "1518380",
          "value": "1518379",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1518356",
    "TriggerId": "1518354"
  },
  "1518404": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1518411": "False",
          "1518410": "true",
          "operand": "1518411",
          "value": "1518410",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518409": "0",
          "1518408": "4",
          "operand": "1518409",
          "value": "1518408",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1518387"
  }
},
},
'1518413':{
'id':'1518413',
'template':'t_1518413',
'typeid':'1518413',
'elname':'Valve',
'objectid':'1518164',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z52.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1518452':{
'id':'1518452',
'template':'t_1518452',
'typeid':'1518452',
'elname':'Окноуправл',
'objectid':'1518164',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1518595':{
'id':'1518595',
'template':'t_1518595',
'typeid':'1518595',
'elname':'Изображение задвижки',
'objectid':'1518565',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1518772": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1518787": "False",
          "1518786": "true",
          "operand": "1518787",
          "value": "1518786",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518785": "0",
          "1518784": "0",
          "operand": "1518785",
          "value": "1518784",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518783": "False",
          "1518782": "false",
          "operand": "1518783",
          "value": "1518782",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518781": "0",
          "1518780": "0",
          "operand": "1518781",
          "value": "1518780",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1518757",
    "TriggerId": "1518755"
  },
  "1518805": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1518812": "False",
          "1518811": "true",
          "operand": "1518812",
          "value": "1518811",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1518810": "0",
          "1518809": "4",
          "operand": "1518810",
          "value": "1518809",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1518788"
  }
},
},
'1518814':{
'id':'1518814',
'template':'t_1518814',
'typeid':'1518814',
'elname':'Valve',
'objectid':'1518565',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z53.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1518853':{
'id':'1518853',
'template':'t_1518853',
'typeid':'1518853',
'elname':'Окноуправл',
'objectid':'1518565',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1518996':{
'id':'1518996',
'template':'t_1518996',
'typeid':'1518996',
'elname':'Изображение задвижки',
'objectid':'1518966',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1519173": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1519188": "False",
          "1519187": "true",
          "operand": "1519188",
          "value": "1519187",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519186": "0",
          "1519185": "0",
          "operand": "1519186",
          "value": "1519185",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519184": "False",
          "1519183": "false",
          "operand": "1519184",
          "value": "1519183",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519182": "0",
          "1519181": "0",
          "operand": "1519182",
          "value": "1519181",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1519158",
    "TriggerId": "1519156"
  },
  "1519206": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1519213": "False",
          "1519212": "true",
          "operand": "1519213",
          "value": "1519212",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519211": "0",
          "1519210": "4",
          "operand": "1519211",
          "value": "1519210",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1519189"
  }
},
},
'1519215':{
'id':'1519215',
'template':'t_1519215',
'typeid':'1519215',
'elname':'Valve',
'objectid':'1518966',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z54.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1519254':{
'id':'1519254',
'template':'t_1519254',
'typeid':'1519254',
'elname':'Окноуправл',
'objectid':'1518966',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1519397':{
'id':'1519397',
'template':'t_1519397',
'typeid':'1519397',
'elname':'Изображение задвижки',
'objectid':'1519367',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1519574": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1519589": "False",
          "1519588": "true",
          "operand": "1519589",
          "value": "1519588",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519587": "0",
          "1519586": "0",
          "operand": "1519587",
          "value": "1519586",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519585": "False",
          "1519584": "false",
          "operand": "1519585",
          "value": "1519584",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519583": "0",
          "1519582": "0",
          "operand": "1519583",
          "value": "1519582",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1519559",
    "TriggerId": "1519557"
  },
  "1519607": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1519614": "False",
          "1519613": "true",
          "operand": "1519614",
          "value": "1519613",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519612": "0",
          "1519611": "4",
          "operand": "1519612",
          "value": "1519611",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1519590"
  }
},
},
'151953':{
'id':'151953',
'template':'t_151953',
'typeid':'151953',
'elname':'11_34to4_3',
'typed':true,
'objectid':'151943',
'width':"240",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1519616':{
'id':'1519616',
'template':'t_1519616',
'typeid':'1519616',
'elname':'Valve',
'objectid':'1519367',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z55.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1519655':{
'id':'1519655',
'template':'t_1519655',
'typeid':'1519655',
'elname':'Окноуправл',
'objectid':'1519367',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1519798':{
'id':'1519798',
'template':'t_1519798',
'typeid':'1519798',
'elname':'Изображение задвижки',
'objectid':'1519768',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1519975": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1519990": "False",
          "1519989": "true",
          "operand": "1519990",
          "value": "1519989",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519988": "0",
          "1519987": "0",
          "operand": "1519988",
          "value": "1519987",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519986": "False",
          "1519985": "false",
          "operand": "1519986",
          "value": "1519985",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1519984": "0",
          "1519983": "0",
          "operand": "1519984",
          "value": "1519983",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1519960",
    "TriggerId": "1519958"
  },
  "1520008": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1520015": "False",
          "1520014": "true",
          "operand": "1520015",
          "value": "1520014",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1520013": "0",
          "1520012": "4",
          "operand": "1520013",
          "value": "1520012",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "1519991"
  }
},
},
'1520017':{
'id':'1520017',
'template':'t_1520017',
'typeid':'1520017',
'elname':'Valve',
'objectid':'1519768',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z56.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'1520056':{
'id':'1520056',
'template':'t_1520056',
'typeid':'1520056',
'elname':'Окноуправл',
'objectid':'1519768',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1520224':{
'id':'1520224',
'template':'t_1520224',
'typeid':'1520224',
'elname':'Изображение конвейера',
'objectid':'1520187',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1520498": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1520513": "False",
          "1520512": "true",
          "operand": "1520513",
          "value": "1520512",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1520511": "0",
          "1520510": "0",
          "operand": "1520511",
          "value": "1520510",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1520509": "False",
          "1520508": "false",
          "operand": "1520509",
          "value": "1520508",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1520507": "0",
          "1520506": "0",
          "operand": "1520507",
          "value": "1520506",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1520483",
    "TriggerId": "1520481"
  }
},
},
'1520515':{
'id':'1520515',
'template':'t_1520515',
'typeid':'1520515',
'elname':'conv_left_part',
'objectid':'1520187',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c28.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1520553':{
'id':'1520553',
'template':'t_1520553',
'typeid':'1520553',
'elname':'conv_right_part',
'objectid':'1520187',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c28.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1520591':{
'id':'1520591',
'template':'t_1520591',
'typeid':'1520591',
'elname':'conv_part',
'objectid':'1520187',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c28.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1520630':{
'id':'1520630',
'template':'t_1520630',
'typeid':'1520630',
'elname':'Окноуправл',
'objectid':'1520187',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1520821':{
'id':'1520821',
'template':'t_1520821',
'typeid':'1520821',
'elname':'Изображение конвейера',
'objectid':'1520784',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1521095": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1521110": "False",
          "1521109": "true",
          "operand": "1521110",
          "value": "1521109",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1521108": "0",
          "1521107": "0",
          "operand": "1521108",
          "value": "1521107",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1521106": "False",
          "1521105": "false",
          "operand": "1521106",
          "value": "1521105",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1521104": "0",
          "1521103": "0",
          "operand": "1521104",
          "value": "1521103",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1521080",
    "TriggerId": "1521078"
  }
},
},
'1521112':{
'id':'1521112',
'template':'t_1521112',
'typeid':'1521112',
'elname':'conv_left_part',
'objectid':'1520784',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c3.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1521150':{
'id':'1521150',
'template':'t_1521150',
'typeid':'1521150',
'elname':'conv_right_part',
'objectid':'1520784',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c3.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1521188':{
'id':'1521188',
'template':'t_1521188',
'typeid':'1521188',
'elname':'conv_part',
'objectid':'1520784',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c3.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1521227':{
'id':'1521227',
'template':'t_1521227',
'typeid':'1521227',
'elname':'Окноуправл',
'objectid':'1520784',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1522015':{
'id':'1522015',
'template':'t_1522015',
'typeid':'1522015',
'elname':'Изображение конвейера',
'objectid':'1521978',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1522289": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1522304": "False",
          "1522303": "true",
          "operand": "1522304",
          "value": "1522303",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1522302": "0",
          "1522301": "0",
          "operand": "1522302",
          "value": "1522301",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1522300": "False",
          "1522299": "false",
          "operand": "1522300",
          "value": "1522299",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1522298": "0",
          "1522297": "0",
          "operand": "1522298",
          "value": "1522297",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1522274",
    "TriggerId": "1522272"
  }
},
},
'1522306':{
'id':'1522306',
'template':'t_1522306',
'typeid':'1522306',
'elname':'conv_left_part',
'objectid':'1521978',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c52.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1522344':{
'id':'1522344',
'template':'t_1522344',
'typeid':'1522344',
'elname':'conv_right_part',
'objectid':'1521978',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c52.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1522382':{
'id':'1522382',
'template':'t_1522382',
'typeid':'1522382',
'elname':'conv_part',
'objectid':'1521978',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c52.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1522421':{
'id':'1522421',
'template':'t_1522421',
'typeid':'1522421',
'elname':'Окноуправл',
'objectid':'1521978',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1522913':{
'id':'1522913',
'template':'t_1522913',
'typeid':'1522913',
'elname':'Изображение вентилятора',
'objectid':'1522877',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1523030": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1523041": "False",
          "1523040": "true",
          "operand": "1523041",
          "value": "1523040",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523039": "0",
          "1523038": "0",
          "operand": "1523039",
          "value": "1523038",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523037": "False",
          "1523036": "false",
          "operand": "1523037",
          "value": "1523036",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1523015",
    "TriggerId": "1523013"
  }
},
},
'1523043':{
'id':'1523043',
'template':'t_1523043',
'typeid':'1523043',
'elname':'Окноуправл 1',
'objectid':'1522877',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'152305':{
'id':'152305',
'template':'t_152305',
'typeid':'152305',
'elname':'Окно 1',
'typed':true,
'objectid':'152295',
'width':"20",
'height':"110",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1523215':{
'id':'1523215',
'template':'t_1523215',
'typeid':'1523215',
'elname':'Изображение вентилятора',
'objectid':'1523179',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1523332": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1523343": "False",
          "1523342": "true",
          "operand": "1523343",
          "value": "1523342",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523341": "0",
          "1523340": "0",
          "operand": "1523341",
          "value": "1523340",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523339": "False",
          "1523338": "false",
          "operand": "1523339",
          "value": "1523338",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1523317",
    "TriggerId": "1523315"
  }
},
},
'1523345':{
'id':'1523345',
'template':'t_1523345',
'typeid':'1523345',
'elname':'Окноуправл 1',
'objectid':'1523179',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1523517':{
'id':'1523517',
'template':'t_1523517',
'typeid':'1523517',
'elname':'Изображение вентилятора',
'objectid':'1523481',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1523634": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1523645": "False",
          "1523644": "true",
          "operand": "1523645",
          "value": "1523644",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523643": "0",
          "1523642": "0",
          "operand": "1523643",
          "value": "1523642",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523641": "False",
          "1523640": "false",
          "operand": "1523641",
          "value": "1523640",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1523619",
    "TriggerId": "1523617"
  }
},
},
'1523647':{
'id':'1523647',
'template':'t_1523647',
'typeid':'1523647',
'elname':'Окноуправл 1',
'objectid':'1523481',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1523819':{
'id':'1523819',
'template':'t_1523819',
'typeid':'1523819',
'elname':'Изображение вентилятора',
'objectid':'1523783',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1523936": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1523947": "False",
          "1523946": "true",
          "operand": "1523947",
          "value": "1523946",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523945": "0",
          "1523944": "0",
          "operand": "1523945",
          "value": "1523944",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1523943": "False",
          "1523942": "false",
          "operand": "1523943",
          "value": "1523942",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1523921",
    "TriggerId": "1523919"
  }
},
},
'1523949':{
'id':'1523949',
'template':'t_1523949',
'typeid':'1523949',
'elname':'Окноуправл 1',
'objectid':'1523783',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1524121':{
'id':'1524121',
'template':'t_1524121',
'typeid':'1524121',
'elname':'Изображение вентилятора',
'objectid':'1524085',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1524238": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1524249": "False",
          "1524248": "true",
          "operand": "1524249",
          "value": "1524248",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1524247": "0",
          "1524246": "0",
          "operand": "1524247",
          "value": "1524246",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1524245": "False",
          "1524244": "false",
          "operand": "1524245",
          "value": "1524244",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1524223",
    "TriggerId": "1524221"
  }
},
},
'1524251':{
'id':'1524251',
'template':'t_1524251',
'typeid':'1524251',
'elname':'Окноуправл 1',
'objectid':'1524085',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1524423':{
'id':'1524423',
'template':'t_1524423',
'typeid':'1524423',
'elname':'Изображение вентилятора',
'objectid':'1524387',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1524540": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1524551": "False",
          "1524550": "true",
          "operand": "1524551",
          "value": "1524550",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1524549": "0",
          "1524548": "0",
          "operand": "1524549",
          "value": "1524548",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1524547": "False",
          "1524546": "false",
          "operand": "1524547",
          "value": "1524546",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1524525",
    "TriggerId": "1524523"
  }
},
},
'1524553':{
'id':'1524553',
'template':'t_1524553',
'typeid':'1524553',
'elname':'Окноуправл 1',
'objectid':'1524387',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1524725':{
'id':'1524725',
'template':'t_1524725',
'typeid':'1524725',
'elname':'Изображение вентилятора',
'objectid':'1524689',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1524842": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1524853": "False",
          "1524852": "true",
          "operand": "1524853",
          "value": "1524852",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1524851": "0",
          "1524850": "0",
          "operand": "1524851",
          "value": "1524850",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1524849": "False",
          "1524848": "false",
          "operand": "1524849",
          "value": "1524848",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1524827",
    "TriggerId": "1524825"
  }
},
},
'152481':{
'id':'152481',
'template':'t_152481',
'typeid':'152481',
'elname':'1_5to7_1',
'typed':true,
'objectid':'152471',
'width':"20",
'height':"80",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1524855':{
'id':'1524855',
'template':'t_1524855',
'typeid':'1524855',
'elname':'Окноуправл 1',
'objectid':'1524689',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1525027':{
'id':'1525027',
'template':'t_1525027',
'typeid':'1525027',
'elname':'Изображение вентилятора',
'objectid':'1524991',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1525144": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1525155": "False",
          "1525154": "true",
          "operand": "1525155",
          "value": "1525154",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1525153": "0",
          "1525152": "0",
          "operand": "1525153",
          "value": "1525152",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1525151": "False",
          "1525150": "false",
          "operand": "1525151",
          "value": "1525150",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1525129",
    "TriggerId": "1525127"
  }
},
},
'1525157':{
'id':'1525157',
'template':'t_1525157',
'typeid':'1525157',
'elname':'Окноуправл 1',
'objectid':'1524991',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1525329':{
'id':'1525329',
'template':'t_1525329',
'typeid':'1525329',
'elname':'Изображение вентилятора',
'objectid':'1525293',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1525446": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1525457": "False",
          "1525456": "true",
          "operand": "1525457",
          "value": "1525456",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1525455": "0",
          "1525454": "0",
          "operand": "1525455",
          "value": "1525454",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1525453": "False",
          "1525452": "false",
          "operand": "1525453",
          "value": "1525452",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1525431",
    "TriggerId": "1525429"
  }
},
},
'1525459':{
'id':'1525459',
'template':'t_1525459',
'typeid':'1525459',
'elname':'Окноуправл 1',
'objectid':'1525293',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1525631':{
'id':'1525631',
'template':'t_1525631',
'typeid':'1525631',
'elname':'Изображение вентилятора',
'objectid':'1525595',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1525748": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1525759": "False",
          "1525758": "true",
          "operand": "1525759",
          "value": "1525758",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1525757": "0",
          "1525756": "0",
          "operand": "1525757",
          "value": "1525756",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1525755": "False",
          "1525754": "false",
          "operand": "1525755",
          "value": "1525754",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1525733",
    "TriggerId": "1525731"
  }
},
},
'1525761':{
'id':'1525761',
'template':'t_1525761',
'typeid':'1525761',
'elname':'Окноуправл 1',
'objectid':'1525595',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1525933':{
'id':'1525933',
'template':'t_1525933',
'typeid':'1525933',
'elname':'Изображение вентилятора',
'objectid':'1525897',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1526050": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1526061": "False",
          "1526060": "true",
          "operand": "1526061",
          "value": "1526060",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526059": "0",
          "1526058": "0",
          "operand": "1526059",
          "value": "1526058",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526057": "False",
          "1526056": "false",
          "operand": "1526057",
          "value": "1526056",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1526035",
    "TriggerId": "1526033"
  }
},
},
'1526063':{
'id':'1526063',
'template':'t_1526063',
'typeid':'1526063',
'elname':'Окноуправл 1',
'objectid':'1525897',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1526235':{
'id':'1526235',
'template':'t_1526235',
'typeid':'1526235',
'elname':'Изображение вентилятора',
'objectid':'1526199',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1526352": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1526363": "False",
          "1526362": "true",
          "operand": "1526363",
          "value": "1526362",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526361": "0",
          "1526360": "0",
          "operand": "1526361",
          "value": "1526360",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526359": "False",
          "1526358": "false",
          "operand": "1526359",
          "value": "1526358",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1526337",
    "TriggerId": "1526335"
  }
},
},
'1526365':{
'id':'1526365',
'template':'t_1526365',
'typeid':'1526365',
'elname':'Окноуправл 1',
'objectid':'1526199',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1526537':{
'id':'1526537',
'template':'t_1526537',
'typeid':'1526537',
'elname':'Изображение вентилятора',
'objectid':'1526501',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1526654": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1526665": "False",
          "1526664": "true",
          "operand": "1526665",
          "value": "1526664",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526663": "0",
          "1526662": "0",
          "operand": "1526663",
          "value": "1526662",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526661": "False",
          "1526660": "false",
          "operand": "1526661",
          "value": "1526660",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1526639",
    "TriggerId": "1526637"
  }
},
},
'152657':{
'id':'152657',
'template':'t_152657',
'typeid':'152657',
'elname':'7_1to11_1',
'typed':true,
'objectid':'152647',
'width':"170",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1526667':{
'id':'1526667',
'template':'t_1526667',
'typeid':'1526667',
'elname':'Окноуправл 1',
'objectid':'1526501',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1526839':{
'id':'1526839',
'template':'t_1526839',
'typeid':'1526839',
'elname':'Изображение вентилятора',
'objectid':'1526803',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1526956": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1526967": "False",
          "1526966": "true",
          "operand": "1526967",
          "value": "1526966",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526965": "0",
          "1526964": "0",
          "operand": "1526965",
          "value": "1526964",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1526963": "False",
          "1526962": "false",
          "operand": "1526963",
          "value": "1526962",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1526941",
    "TriggerId": "1526939"
  }
},
},
'1526969':{
'id':'1526969',
'template':'t_1526969',
'typeid':'1526969',
'elname':'Окноуправл 1',
'objectid':'1526803',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1527141':{
'id':'1527141',
'template':'t_1527141',
'typeid':'1527141',
'elname':'Изображение вентилятора',
'objectid':'1527105',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1527258": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1527269": "False",
          "1527268": "true",
          "operand": "1527269",
          "value": "1527268",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1527267": "0",
          "1527266": "0",
          "operand": "1527267",
          "value": "1527266",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1527265": "False",
          "1527264": "false",
          "operand": "1527265",
          "value": "1527264",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1527243",
    "TriggerId": "1527241"
  }
},
},
'1527271':{
'id':'1527271',
'template':'t_1527271',
'typeid':'1527271',
'elname':'Окноуправл 1',
'objectid':'1527105',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1527443':{
'id':'1527443',
'template':'t_1527443',
'typeid':'1527443',
'elname':'Изображение вентилятора',
'objectid':'1527407',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1527560": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1527571": "False",
          "1527570": "true",
          "operand": "1527571",
          "value": "1527570",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1527569": "0",
          "1527568": "0",
          "operand": "1527569",
          "value": "1527568",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1527567": "False",
          "1527566": "false",
          "operand": "1527567",
          "value": "1527566",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1527545",
    "TriggerId": "1527543"
  }
},
},
'1527573':{
'id':'1527573',
'template':'t_1527573',
'typeid':'1527573',
'elname':'Окноуправл 1',
'objectid':'1527407',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1527745':{
'id':'1527745',
'template':'t_1527745',
'typeid':'1527745',
'elname':'Изображение вентилятора',
'objectid':'1527709',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1527862": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1527873": "False",
          "1527872": "true",
          "operand": "1527873",
          "value": "1527872",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1527871": "0",
          "1527870": "0",
          "operand": "1527871",
          "value": "1527870",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1527869": "False",
          "1527868": "false",
          "operand": "1527869",
          "value": "1527868",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1527847",
    "TriggerId": "1527845"
  }
},
},
'1527875':{
'id':'1527875',
'template':'t_1527875',
'typeid':'1527875',
'elname':'Окноуправл 1',
'objectid':'1527709',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1528047':{
'id':'1528047',
'template':'t_1528047',
'typeid':'1528047',
'elname':'Изображение вентилятора',
'objectid':'1528011',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1528164": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1528175": "False",
          "1528174": "true",
          "operand": "1528175",
          "value": "1528174",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1528173": "0",
          "1528172": "0",
          "operand": "1528173",
          "value": "1528172",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1528171": "False",
          "1528170": "false",
          "operand": "1528171",
          "value": "1528170",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1528149",
    "TriggerId": "1528147"
  }
},
},
'1528177':{
'id':'1528177',
'template':'t_1528177',
'typeid':'1528177',
'elname':'Окноуправл 1',
'objectid':'1528011',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'152833':{
'id':'152833',
'template':'t_152833',
'typeid':'152833',
'elname':'11_1to1_2',
'typed':true,
'objectid':'152823',
'width':"860",
'height':"550",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1528349':{
'id':'1528349',
'template':'t_1528349',
'typeid':'1528349',
'elname':'Изображение вентилятора',
'objectid':'1528313',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1528466": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1528477": "False",
          "1528476": "true",
          "operand": "1528477",
          "value": "1528476",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1528475": "0",
          "1528474": "0",
          "operand": "1528475",
          "value": "1528474",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1528473": "False",
          "1528472": "false",
          "operand": "1528473",
          "value": "1528472",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1528451",
    "TriggerId": "1528449"
  }
},
},
'1528479':{
'id':'1528479',
'template':'t_1528479',
'typeid':'1528479',
'elname':'Окноуправл 1',
'objectid':'1528313',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1528651':{
'id':'1528651',
'template':'t_1528651',
'typeid':'1528651',
'elname':'Изображение вентилятора',
'objectid':'1528615',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1528768": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1528779": "False",
          "1528778": "true",
          "operand": "1528779",
          "value": "1528778",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1528777": "0",
          "1528776": "0",
          "operand": "1528777",
          "value": "1528776",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1528775": "False",
          "1528774": "false",
          "operand": "1528775",
          "value": "1528774",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1528753",
    "TriggerId": "1528751"
  }
},
},
'1528781':{
'id':'1528781',
'template':'t_1528781',
'typeid':'1528781',
'elname':'Окноуправл 1',
'objectid':'1528615',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1528953':{
'id':'1528953',
'template':'t_1528953',
'typeid':'1528953',
'elname':'Изображение вентилятора',
'objectid':'1528917',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1529070": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1529081": "False",
          "1529080": "true",
          "operand": "1529081",
          "value": "1529080",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1529079": "0",
          "1529078": "0",
          "operand": "1529079",
          "value": "1529078",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1529077": "False",
          "1529076": "false",
          "operand": "1529077",
          "value": "1529076",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1529055",
    "TriggerId": "1529053"
  }
},
},
'1529083':{
'id':'1529083',
'template':'t_1529083',
'typeid':'1529083',
'elname':'Окноуправл 1',
'objectid':'1528917',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1529247':{
'id':'1529247',
'template':'t_1529247',
'typeid':'1529247',
'elname':'Изображение затвора',
'objectid':'1529219',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529336':{
'id':'1529336',
'template':'t_1529336',
'typeid':'1529336',
'elname':'Окноуправл',
'objectid':'1529219',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529387':{
'id':'1529387',
'template':'t_1529387',
'typeid':'1529387',
'elname':'Ручн/Авто',
'objectid':'1529219',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529481':{
'id':'1529481',
'template':'t_1529481',
'typeid':'1529481',
'elname':'Изображение затвора',
'objectid':'1529453',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529570':{
'id':'1529570',
'template':'t_1529570',
'typeid':'1529570',
'elname':'Окноуправл',
'objectid':'1529453',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529621':{
'id':'1529621',
'template':'t_1529621',
'typeid':'1529621',
'elname':'Ручн/Авто',
'objectid':'1529453',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529715':{
'id':'1529715',
'template':'t_1529715',
'typeid':'1529715',
'elname':'Изображение затвора',
'objectid':'1529687',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529804':{
'id':'1529804',
'template':'t_1529804',
'typeid':'1529804',
'elname':'Окноуправл',
'objectid':'1529687',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529855':{
'id':'1529855',
'template':'t_1529855',
'typeid':'1529855',
'elname':'Ручн/Авто',
'objectid':'1529687',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1529949':{
'id':'1529949',
'template':'t_1529949',
'typeid':'1529949',
'elname':'Изображение затвора',
'objectid':'1529921',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530038':{
'id':'1530038',
'template':'t_1530038',
'typeid':'1530038',
'elname':'Окноуправл',
'objectid':'1529921',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530089':{
'id':'1530089',
'template':'t_1530089',
'typeid':'1530089',
'elname':'Ручн/Авто',
'objectid':'1529921',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'153013':{
'id':'153013',
'template':'t_153013',
'typeid':'153013',
'elname':'1_2to11_30_31_32_33',
'typed':true,
'objectid':'153003',
'width':"230",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530183':{
'id':'1530183',
'template':'t_1530183',
'typeid':'1530183',
'elname':'Изображение затвора',
'objectid':'1530155',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530272':{
'id':'1530272',
'template':'t_1530272',
'typeid':'1530272',
'elname':'Окноуправл',
'objectid':'1530155',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530323':{
'id':'1530323',
'template':'t_1530323',
'typeid':'1530323',
'elname':'Ручн/Авто',
'objectid':'1530155',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530417':{
'id':'1530417',
'template':'t_1530417',
'typeid':'1530417',
'elname':'Изображение затвора',
'objectid':'1530389',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530506':{
'id':'1530506',
'template':'t_1530506',
'typeid':'1530506',
'elname':'Окноуправл',
'objectid':'1530389',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1530557':{
'id':'1530557',
'template':'t_1530557',
'typeid':'1530557',
'elname':'Ручн/Авто',
'objectid':'1530389',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'153189':{
'id':'153189',
'template':'t_153189',
'typeid':'153189',
'elname':'11_31to7_18',
'typed':true,
'objectid':'153179',
'width':"730",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1531961':{
'id':'1531961',
'template':'t_1531961',
'typeid':'1531961',
'elname':'Изображение скальператора',
'objectid':'1531924',
'width':"90",
'height':"150",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1532071": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1532086": "False",
          "1532085": "true",
          "operand": "1532086",
          "value": "1532085",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1532084": "0",
          "1532083": "0",
          "operand": "1532084",
          "value": "1532083",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1532082": "False",
          "1532081": "false",
          "operand": "1532082",
          "value": "1532081",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1532080": "0",
          "1532079": "0",
          "operand": "1532080",
          "value": "1532079",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1532056",
    "TriggerId": "1532054"
  }
},
},
'1532088':{
'id':'1532088',
'template':'t_1532088',
'typeid':'1532088',
'elname':'conv_left_part',
'objectid':'1531924',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Сепараторы.s21.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1532126':{
'id':'1532126',
'template':'t_1532126',
'typeid':'1532126',
'elname':'conv_right_part',
'objectid':'1531924',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Сепараторы.s21.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1532164':{
'id':'1532164',
'template':'t_1532164',
'typeid':'1532164',
'elname':'conv_part',
'objectid':'1531924',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Сепараторы.s21.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1532203':{
'id':'1532203',
'template':'t_1532203',
'typeid':'1532203',
'elname':'Окноуправл',
'objectid':'1531924',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1532394':{
'id':'1532394',
'template':'t_1532394',
'typeid':'1532394',
'elname':'Изображение скальператора',
'objectid':'1532357',
'width':"90",
'height':"150",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1532504": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1532519": "False",
          "1532518": "true",
          "operand": "1532519",
          "value": "1532518",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1532517": "0",
          "1532516": "0",
          "operand": "1532517",
          "value": "1532516",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1532515": "False",
          "1532514": "false",
          "operand": "1532515",
          "value": "1532514",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1532513": "0",
          "1532512": "0",
          "operand": "1532513",
          "value": "1532512",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1532489",
    "TriggerId": "1532487"
  }
},
},
'1532521':{
'id':'1532521',
'template':'t_1532521',
'typeid':'1532521',
'elname':'conv_left_part',
'objectid':'1532357',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Сепараторы.s22.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1532559':{
'id':'1532559',
'template':'t_1532559',
'typeid':'1532559',
'elname':'conv_right_part',
'objectid':'1532357',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Сепараторы.s22.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1532597':{
'id':'1532597',
'template':'t_1532597',
'typeid':'1532597',
'elname':'conv_part',
'objectid':'1532357',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Сепараторы.s22.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1532636':{
'id':'1532636',
'template':'t_1532636',
'typeid':'1532636',
'elname':'Окноуправл',
'objectid':'1532357',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1533260':{
'id':'1533260',
'template':'t_1533260',
'typeid':'1533260',
'elname':'Изображение цепного',
'typed':true,
'objectid':'1533224',
'width':"200",
'height':"80",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1533516": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1533531": "False",
          "1533530": "true",
          "operand": "1533531",
          "value": "1533530",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1533529": "0",
          "1533528": "0",
          "operand": "1533529",
          "value": "1533528",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1533501",
    "TriggerId": "1533499"
  }
},
},
'1533533':{
'id':'1533533',
'template':'t_1533533',
'typeid':'1533533',
'elname':'chain_left_part',
'objectid':'1533224',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры цепные.c31.Ресурсы.Окна.chain_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1533571':{
'id':'1533571',
'template':'t_1533571',
'typeid':'1533571',
'elname':'chain_right_part',
'objectid':'1533224',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры цепные.c31.Ресурсы.Окна.chain_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1533609':{
'id':'1533609',
'template':'t_1533609',
'typeid':'1533609',
'elname':'Окноуправл 1',
'objectid':'1533224',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1533785':{
'id':'1533785',
'template':'t_1533785',
'typeid':'1533785',
'elname':'Изображение цепного',
'typed':true,
'objectid':'1533749',
'width':"200",
'height':"80",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1534041": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1534056": "False",
          "1534055": "true",
          "operand": "1534056",
          "value": "1534055",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1534054": "0",
          "1534053": "0",
          "operand": "1534054",
          "value": "1534053",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1534026",
    "TriggerId": "1534024"
  }
},
},
'1534058':{
'id':'1534058',
'template':'t_1534058',
'typeid':'1534058',
'elname':'chain_left_part',
'objectid':'1533749',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры цепные.c32.Ресурсы.Окна.chain_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1534096':{
'id':'1534096',
'template':'t_1534096',
'typeid':'1534096',
'elname':'chain_right_part',
'objectid':'1533749',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры цепные.c32.Ресурсы.Окна.chain_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1534134':{
'id':'1534134',
'template':'t_1534134',
'typeid':'1534134',
'elname':'Окноуправл 1',
'objectid':'1533749',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'1534310':{
'id':'1534310',
'template':'t_1534310',
'typeid':'1534310',
'elname':'Изображение цепного',
'objectid':'1534274',
'width':"200",
'height':"80",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "1534566": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "1534581": "False",
          "1534580": "true",
          "operand": "1534581",
          "value": "1534580",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "1534579": "0",
          "1534578": "0",
          "operand": "1534579",
          "value": "1534578",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "1534551",
    "TriggerId": "1534549"
  }
},
},
'1534583':{
'id':'1534583',
'template':'t_1534583',
'typeid':'1534583',
'elname':'chain_left_part',
'objectid':'1534274',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры цепные.c41.Ресурсы.Окна.chain_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1534621':{
'id':'1534621',
'template':'t_1534621',
'typeid':'1534621',
'elname':'chain_right_part',
'objectid':'1534274',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры цепные.c41.Ресурсы.Окна.chain_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'1534659':{
'id':'1534659',
'template':'t_1534659',
'typeid':'1534659',
'elname':'Окноуправл 1',
'objectid':'1534274',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'153541':{
'id':'153541',
'template':'t_153541',
'typeid':'153541',
'elname':'7_32to1_6',
'typed':true,
'objectid':'153531',
'width':"20",
'height':"110",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'153717':{
'id':'153717',
'template':'t_153717',
'typeid':'153717',
'elname':'Окно 1',
'typed':true,
'objectid':'153707',
'width':"20",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'153893':{
'id':'153893',
'template':'t_153893',
'typeid':'153893',
'elname':'7_2to11_4',
'typed':true,
'objectid':'153883',
'width':"170",
'height':"80",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'154069':{
'id':'154069',
'template':'t_154069',
'typeid':'154069',
'elname':'11_5to1_1',
'typed':true,
'objectid':'154059',
'width':"1380",
'height':"530",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'154245':{
'id':'154245',
'template':'t_154245',
'typeid':'154245',
'elname':'1_1to4_1',
'typed':true,
'objectid':'154235',
'width':"20",
'height':"210",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'154421':{
'id':'154421',
'template':'t_154421',
'typeid':'154421',
'elname':'4_1to7_13',
'typed':true,
'objectid':'154411',
'width':"1800",
'height':"820",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "160465": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "160468": "",
          "160467": "",
          "operand": "160468",
          "value": "160467",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "160448"
  }
},
},
'174179':{
'id':'174179',
'template':'t_174179',
'typeid':'174179',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'174151',
'width':"100",
'height':"120",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "441660": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "441663": "False",
          "441662": "true",
          "operand": "441663",
          "value": "441662",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "441710": "0",
          "441709": "0",
          "operand": "441710",
          "value": "441709",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487031": "False",
          "487030": "false",
          "operand": "487031",
          "value": "487030",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "441484",
    "TriggerId": "441416"
  }
},
},
'174488':{
'id':'174488',
'template':'t_174488',
'typeid':'174488',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'174151',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'174797':{
'id':'174797',
'template':'t_174797',
'typeid':'174797',
'elname':'Окноуправл',
'objectid':'174151',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'175196':{
'id':'175196',
'template':'t_175196',
'typeid':'175196',
'elname':'Noria',
'objectid':'174151',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n4.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'175307':{
'id':'175307',
'template':'t_175307',
'typeid':'175307',
'elname':'Noria(bot)',
'objectid':'174151',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n4.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'176283':{
'id':'176283',
'template':'t_176283',
'typeid':'176283',
'elname':'Изображение поворотной трубы',
'typed':true,
'objectid':'176254',
'width':"250",
'height':"120",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "482313": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "482316": "False",
          "482315": "true",
          "operand": "482316",
          "value": "482315",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "482341": "0",
          "482340": "0",
          "operand": "482341",
          "value": "482340",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488122": "False",
          "488121": "false",
          "operand": "488122",
          "value": "488121",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536406": "0",
          "536405": "0",
          "operand": "536406",
          "value": "536405",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "482258",
    "TriggerId": "482221"
  }
},
},
'176531':{
'id':'176531',
'template':'t_176531',
'typeid':'176531',
'elname':'Окноуправл',
'objectid':'176254',
'width':"190",
'height':"190",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'176930':{
'id':'176930',
'template':'t_176930',
'typeid':'176930',
'elname':'rotate',
'objectid':'176254',
'width':"300.5",
'height':"92.3",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Трубы поворотные.t4.Ресурсы.Окна.rotate.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'polozhenie':"",
'sostoyanie':"",
'dynamicsvg':"false",
},
'177594':{
'id':'177594',
'template':'t_177594',
'typeid':'177594',
'elname':'Изображение поворотной трубы',
'typed':true,
'objectid':'177565',
'width':"250",
'height':"120",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "482317": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "482320": "False",
          "482319": "true",
          "operand": "482320",
          "value": "482319",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "482345": "0",
          "482344": "0",
          "operand": "482345",
          "value": "482344",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488126": "False",
          "488125": "false",
          "operand": "488126",
          "value": "488125",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536410": "0",
          "536409": "0",
          "operand": "536410",
          "value": "536409",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "482272",
    "TriggerId": "482224"
  }
},
},
'177842':{
'id':'177842',
'template':'t_177842',
'typeid':'177842',
'elname':'Окноуправл',
'objectid':'177565',
'width':"190",
'height':"190",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'178241':{
'id':'178241',
'template':'t_178241',
'typeid':'178241',
'elname':'rotate',
'objectid':'177565',
'width':"300.5",
'height':"92.3",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Трубы поворотные.t2.Ресурсы.Окна.rotate.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'polozhenie':"",
'sostoyanie':"",
'dynamicsvg':"false",
},
'178477':{
'id':'178477',
'template':'t_178477',
'typeid':'178477',
'elname':'11_33to4_2',
'typed':true,
'objectid':'178467',
'width':"110",
'height':"140",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'179059':{
'id':'179059',
'template':'t_179059',
'typeid':'179059',
'elname':'1_4to4_4',
'typed':true,
'objectid':'179049',
'width':"40",
'height':"190",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810209':{
'id':'1810209',
'template':'t_1810209',
'typeid':'1810209',
'elname':'Ammeter',
'objectid':'100931',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810245':{
'id':'1810245',
'template':'t_1810245',
'typeid':'1810245',
'elname':'Ammeter',
'objectid':'63419',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810281':{
'id':'1810281',
'template':'t_1810281',
'typeid':'1810281',
'elname':'Ammeter',
'objectid':'647003',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810317':{
'id':'1810317',
'template':'t_1810317',
'typeid':'1810317',
'elname':'Ammeter',
'objectid':'64931',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810353':{
'id':'1810353',
'template':'t_1810353',
'typeid':'1810353',
'elname':'Ammeter',
'objectid':'75771',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810389':{
'id':'1810389',
'template':'t_1810389',
'typeid':'1810389',
'elname':'Ammeter',
'objectid':'174151',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810425':{
'id':'1810425',
'template':'t_1810425',
'typeid':'1810425',
'elname':'Ammeter',
'objectid':'109973',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810461':{
'id':'1810461',
'template':'t_1810461',
'typeid':'1810461',
'elname':'Ammeter',
'objectid':'113509',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810497':{
'id':'1810497',
'template':'t_1810497',
'typeid':'1810497',
'elname':'Ammeter',
'objectid':'1501351',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810533':{
'id':'1810533',
'template':'t_1810533',
'typeid':'1810533',
'elname':'Ammeter',
'objectid':'1501951',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810569':{
'id':'1810569',
'template':'t_1810569',
'typeid':'1810569',
'elname':'Ammeter',
'objectid':'1503151',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810605':{
'id':'1810605',
'template':'t_1810605',
'typeid':'1810605',
'elname':'Ammeter',
'objectid':'1506749',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810641':{
'id':'1810641',
'template':'t_1810641',
'typeid':'1810641',
'elname':'Ammeter',
'objectid':'1507349',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810677':{
'id':'1810677',
'template':'t_1810677',
'typeid':'1810677',
'elname':'Ammeter',
'objectid':'1507949',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810713':{
'id':'1810713',
'template':'t_1810713',
'typeid':'1810713',
'elname':'Ammeter',
'objectid':'1508549',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810749':{
'id':'1810749',
'template':'t_1810749',
'typeid':'1810749',
'elname':'Ammeter',
'objectid':'1509149',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810785':{
'id':'1810785',
'template':'t_1810785',
'typeid':'1810785',
'elname':'Ammeter',
'objectid':'1509749',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810821':{
'id':'1810821',
'template':'t_1810821',
'typeid':'1810821',
'elname':'Ammeter',
'objectid':'1510349',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810857':{
'id':'1810857',
'template':'t_1810857',
'typeid':'1810857',
'elname':'Ammeter',
'objectid':'1510949',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'1810893':{
'id':'1810893',
'template':'t_1810893',
'typeid':'1810893',
'elname':'Ammeter',
'objectid':'1511549',
'width':"300",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'181602':{
'id':'181602',
'template':'t_181602',
'typeid':'181602',
'elname':'Изображение силосов',
'typed':true,
'objectid':'181592',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'182424':{
'id':'182424',
'template':'t_182424',
'typeid':'182424',
'elname':'Изображение силосов',
'typed':true,
'objectid':'182414',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'183484':{
'id':'183484',
'template':'t_183484',
'typeid':'183484',
'elname':'to1_2',
'objectid':'218176',
'width':"20",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'183833':{
'id':'183833',
'template':'t_183833',
'typeid':'183833',
'elname':'to1_1',
'objectid':'230568',
'width':"20",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'185345':{
'id':'185345',
'template':'t_185345',
'typeid':'185345',
'elname':'to1_3',
'objectid':'214122',
'width':"20",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'189840':{
'id':'189840',
'template':'t_189840',
'typeid':'189840',
'elname':'Изображение силосов',
'typed':true,
'objectid':'189830',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'190182':{
'id':'190182',
'template':'t_190182',
'typeid':'190182',
'elname':'Изображение силосов',
'typed':true,
'objectid':'190172',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'191704':{
'id':'191704',
'template':'t_191704',
'typeid':'191704',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'191676',
'width':"510",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451008": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451011": "False",
          "451010": "true",
          "operand": "451011",
          "value": "451010",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451136": "0",
          "451135": "0",
          "operand": "451136",
          "value": "451135",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487990": "False",
          "487989": "false",
          "operand": "487990",
          "value": "487989",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536157": "0",
          "536156": "0",
          "operand": "536157",
          "value": "536156",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450743",
    "TriggerId": "450547"
  }
},
},
'192336':{
'id':'192336',
'template':'t_192336',
'typeid':'192336',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'192308',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451012": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451015": "False",
          "451014": "true",
          "operand": "451015",
          "value": "451014",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451140": "0",
          "451139": "0",
          "operand": "451140",
          "value": "451139",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487994": "False",
          "487993": "false",
          "operand": "487994",
          "value": "487993",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536161": "0",
          "536160": "0",
          "operand": "536161",
          "value": "536160",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450757",
    "TriggerId": "450550"
  }
},
},
'193101':{
'id':'193101',
'template':'t_193101',
'typeid':'193101',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'193073',
'width':"350",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451016": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451019": "False",
          "451018": "true",
          "operand": "451019",
          "value": "451018",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451144": "0",
          "451143": "0",
          "operand": "451144",
          "value": "451143",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487998": "False",
          "487997": "false",
          "operand": "487998",
          "value": "487997",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536165": "0",
          "536164": "0",
          "operand": "536165",
          "value": "536164",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450771",
    "TriggerId": "450553"
  }
},
},
'193880':{
'id':'193880',
'template':'t_193880',
'typeid':'193880',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'193852',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451020": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451023": "False",
          "451022": "true",
          "operand": "451023",
          "value": "451022",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451148": "0",
          "451147": "0",
          "operand": "451148",
          "value": "451147",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488005": "False",
          "488004": "false",
          "operand": "488005",
          "value": "488004",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536169": "0",
          "536168": "0",
          "operand": "536169",
          "value": "536168",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450785",
    "TriggerId": "450556"
  }
},
},
'194512':{
'id':'194512',
'template':'t_194512',
'typeid':'194512',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'194484',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451024": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451027": "False",
          "451026": "true",
          "operand": "451027",
          "value": "451026",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451152": "0",
          "451151": "0",
          "operand": "451152",
          "value": "451151",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488009": "False",
          "488008": "false",
          "operand": "488009",
          "value": "488008",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536173": "0",
          "536172": "0",
          "operand": "536173",
          "value": "536172",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450799",
    "TriggerId": "450559"
  }
},
},
'195501':{
'id':'195501',
'template':'t_195501',
'typeid':'195501',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'195473',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483080": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483083": "False",
          "483082": "true",
          "operand": "483083",
          "value": "483082",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483228": "0",
          "483227": "0",
          "operand": "483228",
          "value": "483227",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487873": "False",
          "487872": "false",
          "operand": "487873",
          "value": "487872",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536329": "0",
          "536328": "0",
          "operand": "536329",
          "value": "536328",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478704",
    "TriggerId": "478408"
  },
  "610125": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610128": "False",
          "610127": "true",
          "operand": "610128",
          "value": "610127",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610273": "0",
          "610272": "4",
          "operand": "610273",
          "value": "610272",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609874"
  }
},
},
'196195':{
'id':'196195',
'template':'t_196195',
'typeid':'196195',
'elname':'Valve',
'objectid':'195473',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z20.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'196335':{
'id':'196335',
'template':'t_196335',
'typeid':'196335',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'196307',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483084": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483087": "False",
          "483086": "true",
          "operand": "483087",
          "value": "483086",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483232": "0",
          "483231": "0",
          "operand": "483232",
          "value": "483231",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487877": "False",
          "487876": "false",
          "operand": "487877",
          "value": "487876",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536333": "0",
          "536332": "0",
          "operand": "536333",
          "value": "536332",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478718",
    "TriggerId": "478411"
  },
  "610129": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610132": "False",
          "610131": "true",
          "operand": "610132",
          "value": "610131",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610277": "0",
          "610276": "4",
          "operand": "610277",
          "value": "610276",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609877"
  }
},
},
'197029':{
'id':'197029',
'template':'t_197029',
'typeid':'197029',
'elname':'Valve',
'objectid':'196307',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z21.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'197399':{
'id':'197399',
'template':'t_197399',
'typeid':'197399',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'197371',
'width':"180",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451028": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451031": "False",
          "451030": "true",
          "operand": "451031",
          "value": "451030",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451156": "0",
          "451155": "0",
          "operand": "451156",
          "value": "451155",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488013": "False",
          "488012": "false",
          "operand": "488013",
          "value": "488012",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536177": "0",
          "536176": "0",
          "operand": "536177",
          "value": "536176",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450813",
    "TriggerId": "450562"
  }
},
},
'198031':{
'id':'198031',
'template':'t_198031',
'typeid':'198031',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'198003',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451032": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451035": "False",
          "451034": "true",
          "operand": "451035",
          "value": "451034",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451160": "0",
          "451159": "0",
          "operand": "451160",
          "value": "451159",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488017": "False",
          "488016": "false",
          "operand": "488017",
          "value": "488016",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536181": "0",
          "536180": "0",
          "operand": "536181",
          "value": "536180",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450827",
    "TriggerId": "450565"
  }
},
},
'198901':{
'id':'198901',
'template':'t_198901',
'typeid':'198901',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'198873',
'width':"500",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451036": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451039": "False",
          "451038": "true",
          "operand": "451039",
          "value": "451038",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451164": "0",
          "451163": "0",
          "operand": "451164",
          "value": "451163",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488025": "False",
          "488024": "false",
          "operand": "488025",
          "value": "488024",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536185": "0",
          "536184": "0",
          "operand": "536185",
          "value": "536184",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450841",
    "TriggerId": "450568"
  }
},
},
'200125':{
'id':'200125',
'template':'t_200125',
'typeid':'200125',
'elname':'Изображение силосов',
'typed':true,
'objectid':'200115',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'200463':{
'id':'200463',
'template':'t_200463',
'typeid':'200463',
'elname':'Изображение силосов',
'objectid':'200453',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'200988':{
'id':'200988',
'template':'t_200988',
'typeid':'200988',
'elname':'Изображение конвейера',
'objectid':'200960',
'width':"620",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450996": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450999": "False",
          "450998": "true",
          "operand": "450999",
          "value": "450998",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451124": "0",
          "451123": "0",
          "operand": "451124",
          "value": "451123",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487978": "False",
          "487977": "false",
          "operand": "487978",
          "value": "487977",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536145": "0",
          "536144": "0",
          "operand": "536145",
          "value": "536144",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450701",
    "TriggerId": "450538"
  }
},
},
'202225':{
'id':'202225',
'template':'t_202225',
'typeid':'202225',
'elname':'Изображение конвейера',
'objectid':'202197',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451004": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451007": "False",
          "451006": "true",
          "operand": "451007",
          "value": "451006",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451132": "0",
          "451131": "0",
          "operand": "451132",
          "value": "451131",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487986": "False",
          "487985": "false",
          "operand": "487986",
          "value": "487985",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536153": "0",
          "536152": "0",
          "operand": "536153",
          "value": "536152",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450729",
    "TriggerId": "450544"
  }
},
},
'203608':{
'id':'203608',
'template':'t_203608',
'typeid':'203608',
'elname':'Изображение конвейера',
'objectid':'203580',
'width':"430",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451000": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451003": "False",
          "451002": "true",
          "operand": "451003",
          "value": "451002",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451128": "0",
          "451127": "0",
          "operand": "451128",
          "value": "451127",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487982": "False",
          "487981": "false",
          "operand": "487982",
          "value": "487981",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536149": "0",
          "536148": "0",
          "operand": "536149",
          "value": "536148",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450715",
    "TriggerId": "450541"
  }
},
},
'204345':{
'id':'204345',
'template':'t_204345',
'typeid':'204345',
'elname':'Изображение задвижки',
'objectid':'204317',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483068": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483071": "False",
          "483070": "true",
          "operand": "483071",
          "value": "483070",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483216": "0",
          "483215": "0",
          "operand": "483216",
          "value": "483215",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487861": "False",
          "487860": "false",
          "operand": "487861",
          "value": "487860",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536317": "0",
          "536316": "0",
          "operand": "536317",
          "value": "536316",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478662",
    "TriggerId": "478399"
  },
  "610113": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610116": "False",
          "610115": "true",
          "operand": "610116",
          "value": "610115",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610261": "0",
          "610260": "4",
          "operand": "610261",
          "value": "610260",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609865"
  }
},
},
'205039':{
'id':'205039',
'template':'t_205039',
'typeid':'205039',
'elname':'Valve',
'objectid':'204317',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z12.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'205179':{
'id':'205179',
'template':'t_205179',
'typeid':'205179',
'elname':'Изображение задвижки',
'objectid':'205151',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483072": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483075": "False",
          "483074": "true",
          "operand": "483075",
          "value": "483074",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483220": "0",
          "483219": "0",
          "operand": "483220",
          "value": "483219",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487865": "False",
          "487864": "false",
          "operand": "487865",
          "value": "487864",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536321": "0",
          "536320": "0",
          "operand": "536321",
          "value": "536320",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478676",
    "TriggerId": "478402"
  },
  "610117": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610120": "False",
          "610119": "true",
          "operand": "610120",
          "value": "610119",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610265": "0",
          "610264": "4",
          "operand": "610265",
          "value": "610264",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609868"
  }
},
},
'205873':{
'id':'205873',
'template':'t_205873',
'typeid':'205873',
'elname':'Valve',
'objectid':'205151',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z13.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'206013':{
'id':'206013',
'template':'t_206013',
'typeid':'206013',
'elname':'Изображение задвижки',
'objectid':'205985',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483076": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483079": "False",
          "483078": "true",
          "operand": "483079",
          "value": "483078",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483224": "0",
          "483223": "0",
          "operand": "483224",
          "value": "483223",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487869": "False",
          "487868": "false",
          "operand": "487869",
          "value": "487868",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536325": "0",
          "536324": "0",
          "operand": "536325",
          "value": "536324",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478690",
    "TriggerId": "478405"
  },
  "610121": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610124": "False",
          "610123": "true",
          "operand": "610124",
          "value": "610123",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610269": "0",
          "610268": "4",
          "operand": "610269",
          "value": "610268",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609871"
  }
},
},
'206707':{
'id':'206707',
'template':'t_206707',
'typeid':'206707',
'elname':'Valve',
'objectid':'205985',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z14.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'207603':{
'id':'207603',
'template':'t_207603',
'typeid':'207603',
'elname':'Изображение силосов',
'objectid':'207593',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'208131':{
'id':'208131',
'template':'t_208131',
'typeid':'208131',
'elname':'Изображение задвижки',
'objectid':'208103',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483088": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483091": "False",
          "483090": "true",
          "operand": "483091",
          "value": "483090",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483236": "0",
          "483235": "0",
          "operand": "483236",
          "value": "483235",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487881": "False",
          "487880": "false",
          "operand": "487881",
          "value": "487880",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536337": "0",
          "536336": "0",
          "operand": "536337",
          "value": "536336",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478732",
    "TriggerId": "478414"
  },
  "610133": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610136": "False",
          "610135": "true",
          "operand": "610136",
          "value": "610135",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610281": "0",
          "610280": "4",
          "operand": "610281",
          "value": "610280",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609880"
  }
},
},
'208825':{
'id':'208825',
'template':'t_208825',
'typeid':'208825',
'elname':'Valve',
'objectid':'208103',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z15.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'208965':{
'id':'208965',
'template':'t_208965',
'typeid':'208965',
'elname':'Изображение задвижки',
'objectid':'208937',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483092": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483095": "False",
          "483094": "true",
          "operand": "483095",
          "value": "483094",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483240": "0",
          "483239": "0",
          "operand": "483240",
          "value": "483239",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487885": "False",
          "487884": "false",
          "operand": "487885",
          "value": "487884",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536341": "0",
          "536340": "0",
          "operand": "536341",
          "value": "536340",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478746",
    "TriggerId": "478417"
  },
  "610137": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610140": "False",
          "610139": "true",
          "operand": "610140",
          "value": "610139",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610285": "0",
          "610284": "4",
          "operand": "610285",
          "value": "610284",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609883"
  }
},
},
'209659':{
'id':'209659',
'template':'t_209659',
'typeid':'209659',
'elname':'Valve',
'objectid':'208937',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z16.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'209799':{
'id':'209799',
'template':'t_209799',
'typeid':'209799',
'elname':'Изображение конвейера',
'objectid':'209771',
'width':"430",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451040": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451043": "False",
          "451042": "true",
          "operand": "451043",
          "value": "451042",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451168": "0",
          "451167": "0",
          "operand": "451168",
          "value": "451167",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488029": "False",
          "488028": "false",
          "operand": "488029",
          "value": "488028",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536189": "0",
          "536188": "0",
          "operand": "536189",
          "value": "536188",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450855",
    "TriggerId": "450571"
  }
},
},
'210799':{
'id':'210799',
'template':'t_210799',
'typeid':'210799',
'elname':'7_9ato7_9',
'typed':true,
'objectid':'210789',
'width':"90",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'212153':{
'id':'212153',
'template':'t_212153',
'typeid':'212153',
'elname':'7_9to7_12',
'typed':true,
'objectid':'212143',
'width':"20",
'height':"40",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'212329':{
'id':'212329',
'template':'t_212329',
'typeid':'212329',
'elname':'7_12to7_12a',
'typed':true,
'objectid':'212319',
'width':"110",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'212505':{
'id':'212505',
'template':'t_212505',
'typeid':'212505',
'elname':'7_12ato7_11',
'typed':true,
'objectid':'212495',
'width':"100",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'212681':{
'id':'212681',
'template':'t_212681',
'typeid':'212681',
'elname':'7_11to11_20',
'typed':true,
'objectid':'212671',
'width':"190",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'213294':{
'id':'213294',
'template':'t_213294',
'typeid':'213294',
'elname':'7_12ato7_11 1',
'typed':true,
'objectid':'212495',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'213836':{
'id':'213836',
'template':'t_213836',
'typeid':'213836',
'elname':'11_20to1_3',
'typed':true,
'objectid':'213826',
'width':"100",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'214379':{
'id':'214379',
'template':'t_214379',
'typeid':'214379',
'elname':'Окно 1',
'typed':true,
'objectid':'214369',
'width':"20",
'height':"80",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'214660':{
'id':'214660',
'template':'t_214660',
'typeid':'214660',
'elname':'7_20to7_16',
'typed':true,
'objectid':'214650',
'width':"340",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'215268':{
'id':'215268',
'template':'t_215268',
'typeid':'215268',
'elname':'7_16tos3201',
'typed':true,
'objectid':'215258',
'width':"10",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'215549':{
'id':'215549',
'template':'t_215549',
'typeid':'215549',
'elname':'Окно 1',
'typed':true,
'objectid':'215539',
'width':"20",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'215830':{
'id':'215830',
'template':'t_215830',
'typeid':'215830',
'elname':'8201to7_5',
'objectid':'215820',
'width':"20",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'216223':{
'id':'216223',
'template':'t_216223',
'typeid':'216223',
'elname':'7_5to7_8',
'objectid':'216213',
'width':"20",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'216504':{
'id':'216504',
'template':'t_216504',
'typeid':'216504',
'elname':'7_8to7_6',
'objectid':'216494',
'width':"100",
'height':"120",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'216845':{
'id':'216845',
'template':'t_216845',
'typeid':'216845',
'elname':'7_8to7_6 1',
'objectid':'216494',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'217236':{
'id':'217236',
'template':'t_217236',
'typeid':'217236',
'elname':'7_6to11_13',
'objectid':'217226',
'width':"140",
'height':"110",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'217715':{
'id':'217715',
'template':'t_217715',
'typeid':'217715',
'elname':'11_13to1_2',
'objectid':'217705',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'218542':{
'id':'218542',
'template':'t_218542',
'typeid':'218542',
'elname':'tovb43',
'objectid':'223133',
'width':"20",
'height':"110",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'221807':{
'id':'221807',
'template':'t_221807',
'typeid':'221807',
'elname':'Окно 1',
'objectid':'221797',
'width':"140",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'222229':{
'id':'222229',
'template':'t_222229',
'typeid':'222229',
'elname':'Окно 1',
'objectid':'222219',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'222524':{
'id':'222524',
'template':'t_222524',
'typeid':'222524',
'elname':'to1_4',
'objectid':'222514',
'width':"100",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'226031':{
'id':'226031',
'template':'t_226031',
'typeid':'226031',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'226003',
'width':"280",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450964": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450967": "False",
          "450966": "true",
          "operand": "450967",
          "value": "450966",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451092": "0",
          "451091": "0",
          "operand": "451092",
          "value": "451091",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487946": "False",
          "487945": "false",
          "operand": "487946",
          "value": "487945",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536113": "0",
          "536112": "0",
          "operand": "536113",
          "value": "536112",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450589",
    "TriggerId": "450514"
  }
},
},
'226764':{
'id':'226764',
'template':'t_226764',
'typeid':'226764',
'elname':'Окно 1',
'typed':true,
'objectid':'226754',
'width':"310",
'height':"250",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'227063':{
'id':'227063',
'template':'t_227063',
'typeid':'227063',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'227035',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483096": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483099": "False",
          "483098": "true",
          "operand": "483099",
          "value": "483098",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483244": "0",
          "483243": "0",
          "operand": "483244",
          "value": "483243",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487889": "False",
          "487888": "false",
          "operand": "487889",
          "value": "487888",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536345": "0",
          "536344": "0",
          "operand": "536345",
          "value": "536344",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478760",
    "TriggerId": "478420"
  },
  "610141": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610144": "False",
          "610143": "true",
          "operand": "610144",
          "value": "610143",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610289": "0",
          "610288": "4",
          "operand": "610289",
          "value": "610288",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609886"
  }
},
},
'227757':{
'id':'227757',
'template':'t_227757',
'typeid':'227757',
'elname':'Valve',
'objectid':'227035',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z17.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'227897':{
'id':'227897',
'template':'t_227897',
'typeid':'227897',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'227869',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483100": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483103": "False",
          "483102": "true",
          "operand": "483103",
          "value": "483102",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483248": "0",
          "483247": "0",
          "operand": "483248",
          "value": "483247",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487893": "False",
          "487892": "false",
          "operand": "487893",
          "value": "487892",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536349": "0",
          "536348": "0",
          "operand": "536349",
          "value": "536348",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478774",
    "TriggerId": "478423"
  },
  "610145": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610148": "False",
          "610147": "true",
          "operand": "610148",
          "value": "610147",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610293": "0",
          "610292": "4",
          "operand": "610293",
          "value": "610292",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609889"
  }
},
},
'228591':{
'id':'228591',
'template':'t_228591',
'typeid':'228591',
'elname':'Valve',
'objectid':'227869',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z18.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'228731':{
'id':'228731',
'template':'t_228731',
'typeid':'228731',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'228703',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483104": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483107": "False",
          "483106": "true",
          "operand": "483107",
          "value": "483106",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483252": "0",
          "483251": "0",
          "operand": "483252",
          "value": "483251",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487897": "False",
          "487896": "false",
          "operand": "487897",
          "value": "487896",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536353": "0",
          "536352": "0",
          "operand": "536353",
          "value": "536352",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478788",
    "TriggerId": "478426"
  },
  "610149": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610152": "False",
          "610151": "true",
          "operand": "610152",
          "value": "610151",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610297": "0",
          "610296": "4",
          "operand": "610297",
          "value": "610296",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609892"
  }
},
},
'229425':{
'id':'229425',
'template':'t_229425',
'typeid':'229425',
'elname':'Valve',
'objectid':'228703',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z19.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'230099':{
'id':'230099',
'template':'t_230099',
'typeid':'230099',
'elname':'Окно 1',
'typed':true,
'objectid':'230089',
'width':"140",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'230797':{
'id':'230797',
'template':'t_230797',
'typeid':'230797',
'elname':'11_17to1_1',
'objectid':'230787',
'width':"100",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'231405':{
'id':'231405',
'template':'t_231405',
'typeid':'231405',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'231377',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451044": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451047": "False",
          "451046": "true",
          "operand": "451047",
          "value": "451046",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451172": "0",
          "451171": "0",
          "operand": "451172",
          "value": "451171",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488033": "False",
          "488032": "false",
          "operand": "488033",
          "value": "488032",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536193": "0",
          "536192": "0",
          "operand": "536193",
          "value": "536192",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450869",
    "TriggerId": "450574"
  }
},
},
'232875':{
'id':'232875',
'template':'t_232875',
'typeid':'232875',
'elname':'7_4to7_15',
'typed':true,
'objectid':'232865',
'width':"1640",
'height':"370",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'233202':{
'id':'233202',
'template':'t_233202',
'typeid':'233202',
'elname':'Изображение конвейера',
'objectid':'233174',
'width':"430",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451048": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451051": "False",
          "451050": "true",
          "operand": "451051",
          "value": "451050",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451176": "0",
          "451175": "0",
          "operand": "451176",
          "value": "451175",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488037": "False",
          "488036": "false",
          "operand": "488037",
          "value": "488036",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536197": "0",
          "536196": "0",
          "operand": "536197",
          "value": "536196",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450883",
    "TriggerId": "450577"
  }
},
},
'234248':{
'id':'234248',
'template':'t_234248',
'typeid':'234248',
'elname':'7_15to4701',
'objectid':'234238',
'width':"110",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'234569':{
'id':'234569',
'template':'t_234569',
'typeid':'234569',
'elname':'Изображение силосов',
'objectid':'234559',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'235119':{
'id':'235119',
'template':'t_235119',
'typeid':'235119',
'elname':'4501to7_6',
'objectid':'235109',
'width':"20",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'235420':{
'id':'235420',
'template':'t_235420',
'typeid':'235420',
'elname':'11_12to1_1',
'objectid':'235410',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'236314':{
'id':'236314',
'template':'t_236314',
'typeid':'236314',
'elname':'4201_4212to7_5',
'objectid':'236304',
'width':"20",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'236613':{
'id':'236613',
'template':'t_236613',
'typeid':'236613',
'elname':'Изображение конвейера',
'objectid':'236585',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451052": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451055": "False",
          "451054": "true",
          "operand": "451055",
          "value": "451054",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451180": "0",
          "451179": "0",
          "operand": "451180",
          "value": "451179",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488041": "False",
          "488040": "false",
          "operand": "488041",
          "value": "488040",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536201": "0",
          "536200": "0",
          "operand": "536201",
          "value": "536200",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450897",
    "TriggerId": "450580"
  }
},
},
'237346':{
'id':'237346',
'template':'t_237346',
'typeid':'237346',
'elname':'7_8to7_8a',
'objectid':'237336',
'width':"130",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'237711':{
'id':'237711',
'template':'t_237711',
'typeid':'237711',
'elname':'7_8ato7_7',
'objectid':'237701',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'238003':{
'id':'238003',
'template':'t_238003',
'typeid':'238003',
'elname':'7_8ato7_7 1',
'objectid':'237701',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'238577':{
'id':'238577',
'template':'t_238577',
'typeid':'238577',
'elname':'Изображение силосов',
'objectid':'238567',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'238852':{
'id':'238852',
'template':'t_238852',
'typeid':'238852',
'elname':'8701to7_7',
'objectid':'238842',
'width':"20",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'239883':{
'id':'239883',
'template':'t_239883',
'typeid':'239883',
'elname':'toSB52',
'objectid':'239873',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'240560':{
'id':'240560',
'template':'t_240560',
'typeid':'240560',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'240532',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483108": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483111": "False",
          "483110": "true",
          "operand": "483111",
          "value": "483110",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483256": "0",
          "483255": "0",
          "operand": "483256",
          "value": "483255",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487901": "False",
          "487900": "false",
          "operand": "487901",
          "value": "487900",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536357": "0",
          "536356": "0",
          "operand": "536357",
          "value": "536356",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478802",
    "TriggerId": "478429"
  },
  "610153": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610156": "False",
          "610155": "true",
          "operand": "610156",
          "value": "610155",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610301": "0",
          "610300": "4",
          "operand": "610301",
          "value": "610300",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609895"
  }
},
},
'241254':{
'id':'241254',
'template':'t_241254',
'typeid':'241254',
'elname':'Valve',
'objectid':'240532',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z22.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'241394':{
'id':'241394',
'template':'t_241394',
'typeid':'241394',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'241366',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483112": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483115": "False",
          "483114": "true",
          "operand": "483115",
          "value": "483114",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483260": "0",
          "483259": "0",
          "operand": "483260",
          "value": "483259",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487905": "False",
          "487904": "false",
          "operand": "487905",
          "value": "487904",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536361": "0",
          "536360": "0",
          "operand": "536361",
          "value": "536360",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478816",
    "TriggerId": "478432"
  },
  "610157": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610160": "False",
          "610159": "true",
          "operand": "610160",
          "value": "610159",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610305": "0",
          "610304": "4",
          "operand": "610305",
          "value": "610304",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609898"
  }
},
},
'242088':{
'id':'242088',
'template':'t_242088',
'typeid':'242088',
'elname':'Valve',
'objectid':'241366',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z23.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'242440':{
'id':'242440',
'template':'t_242440',
'typeid':'242440',
'elname':'S11to11_22',
'typed':true,
'objectid':'242430',
'width':"70",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'243202':{
'id':'243202',
'template':'t_243202',
'typeid':'243202',
'elname':'4_3to7_14',
'typed':true,
'objectid':'243192',
'width':"900",
'height':"470",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'243515':{
'id':'243515',
'template':'t_243515',
'typeid':'243515',
'elname':'Изображение конвейера',
'objectid':'243487',
'width':"430",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "451056": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "451059": "False",
          "451058": "true",
          "operand": "451059",
          "value": "451058",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451184": "0",
          "451183": "0",
          "operand": "451184",
          "value": "451183",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488045": "False",
          "488044": "false",
          "operand": "488045",
          "value": "488044",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536205": "0",
          "536204": "0",
          "operand": "536205",
          "value": "536204",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450911",
    "TriggerId": "450583"
  }
},
},
'244234':{
'id':'244234',
'template':'t_244234',
'typeid':'244234',
'elname':'Изображение силосов',
'objectid':'244224',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'244509':{
'id':'244509',
'template':'t_244509',
'typeid':'244509',
'elname':'7_14to6501',
'objectid':'244499',
'width':"230",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'245029':{
'id':'245029',
'template':'t_245029',
'typeid':'245029',
'elname':'Окно 1',
'objectid':'245019',
'width':"20",
'height':"50",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'247021':{
'id':'247021',
'template':'t_247021',
'typeid':'247021',
'elname':'4_2to7_14',
'typed':true,
'objectid':'247011',
'width':"1070",
'height':"470",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'247631':{
'id':'247631',
'template':'t_247631',
'typeid':'247631',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'247602',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469307": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469310": "False",
          "469309": "true",
          "operand": "469310",
          "value": "469309",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469455": "0",
          "469454": "0",
          "operand": "469455",
          "value": "469454",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488143": "False",
          "488142": "false",
          "operand": "488143",
          "value": "488142",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468911",
    "TriggerId": "468813"
  }
},
},
'248358':{
'id':'248358',
'template':'t_248358',
'typeid':'248358',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'248329',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469355": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469358": "False",
          "469357": "true",
          "operand": "469358",
          "value": "469357",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469503": "0",
          "469502": "0",
          "operand": "469503",
          "value": "469502",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488191": "False",
          "488190": "false",
          "operand": "488191",
          "value": "488190",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469079",
    "TriggerId": "468849"
  }
},
},
'249085':{
'id':'249085',
'template':'t_249085',
'typeid':'249085',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'249056',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469359": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469362": "False",
          "469361": "true",
          "operand": "469362",
          "value": "469361",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469507": "0",
          "469506": "0",
          "operand": "469507",
          "value": "469506",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488195": "False",
          "488194": "false",
          "operand": "488195",
          "value": "488194",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469093",
    "TriggerId": "468852"
  }
},
},
'249812':{
'id':'249812',
'template':'t_249812',
'typeid':'249812',
'elname':'Изображение вентилятора',
'objectid':'249783',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469351": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469354": "False",
          "469353": "true",
          "operand": "469354",
          "value": "469353",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469499": "0",
          "469498": "0",
          "operand": "469499",
          "value": "469498",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488187": "False",
          "488186": "false",
          "operand": "488187",
          "value": "488186",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469065",
    "TriggerId": "468846"
  }
},
},
'250539':{
'id':'250539',
'template':'t_250539',
'typeid':'250539',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'250510',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469363": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469366": "False",
          "469365": "true",
          "operand": "469366",
          "value": "469365",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469511": "0",
          "469510": "0",
          "operand": "469511",
          "value": "469510",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488199": "False",
          "488198": "false",
          "operand": "488199",
          "value": "488198",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469107",
    "TriggerId": "468855"
  }
},
},
'252630':{
'id':'252630',
'template':'t_252630',
'typeid':'252630',
'elname':'Изображение вентилятора',
'objectid':'252601',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469375": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469378": "False",
          "469377": "true",
          "operand": "469378",
          "value": "469377",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469523": "0",
          "469522": "0",
          "operand": "469523",
          "value": "469522",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488211": "False",
          "488210": "false",
          "operand": "488211",
          "value": "488210",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469149",
    "TriggerId": "468864"
  }
},
},
'253321':{
'id':'253321',
'template':'t_253321',
'typeid':'253321',
'elname':'Изображение вентилятора',
'objectid':'253292',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469379": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469382": "False",
          "469381": "true",
          "operand": "469382",
          "value": "469381",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469527": "0",
          "469526": "0",
          "operand": "469527",
          "value": "469526",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488215": "False",
          "488214": "false",
          "operand": "488215",
          "value": "488214",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469163",
    "TriggerId": "468867"
  }
},
},
'254012':{
'id':'254012',
'template':'t_254012',
'typeid':'254012',
'elname':'Изображение вентилятора',
'objectid':'253983',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469383": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469386": "False",
          "469385": "true",
          "operand": "469386",
          "value": "469385",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469531": "0",
          "469530": "0",
          "operand": "469531",
          "value": "469530",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488219": "False",
          "488218": "false",
          "operand": "488219",
          "value": "488218",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469177",
    "TriggerId": "468870"
  }
},
},
'254703':{
'id':'254703',
'template':'t_254703',
'typeid':'254703',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'254674',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469387": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469390": "False",
          "469389": "true",
          "operand": "469390",
          "value": "469389",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469535": "0",
          "469534": "0",
          "operand": "469535",
          "value": "469534",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488223": "False",
          "488222": "false",
          "operand": "488223",
          "value": "488222",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469191",
    "TriggerId": "468873"
  }
},
},
'2802003':{
'id':'2802003',
'template':'t_2802003',
'typeid':'2802003',
'elname':'Alarm Log',
'objectid':'2805384',
'width':"1000",
'height':"900",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'2848068':{
'id':'2848068',
'template':'t_2848068',
'typeid':'2848068',
'elname':'Users_Panel',
'objectid':'2848038',
'width':"150",
'height':"200",
'bordercolor':"rgb(0,0,0)",
'z':"2500",
'x':"20",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'309018':{
'id':'309018',
'template':'t_309018',
'typeid':'309018',
'elname':'Шаблон экрана 1',
'objectid':'58003',
'width':"5760",
'height':"1080",
'bordercolor':"rgb(128,128,128)",
'fontname':"Tahoma",
'tooltipfontsize':"12",
'tooltipitalic':"false",
'tooltipbold':"false",
'tooltipunderline':"false",
'tooltiptransparency':"100",
'tooltiptextcolor':"rgb(0,0,0)",
'tooltipbackgroundfill':"rgb(255,250,205)",
'tooltipframecolor':"rgb(170,170,168)",
'tooltipcornerradius':"0",
'tooltipborderthickness':"1",
'widthtype':"0",
'heighttype':"0",
},
'310031':{
'id':'310031',
'template':'t_310031',
'typeid':'310031',
'elname':'conv_left_part',
'objectid':'226003',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c10.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310067':{
'id':'310067',
'template':'t_310067',
'typeid':'310067',
'elname':'conv_left_part',
'objectid':'77248',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c1.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310103':{
'id':'310103',
'template':'t_310103',
'typeid':'310103',
'elname':'conv_left_part',
'objectid':'77940',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c18.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310139':{
'id':'310139',
'template':'t_310139',
'typeid':'310139',
'elname':'conv_left_part',
'objectid':'96783',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c2.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310175':{
'id':'310175',
'template':'t_310175',
'typeid':'310175',
'elname':'conv_left_part',
'objectid':'107927',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c13.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310211':{
'id':'310211',
'template':'t_310211',
'typeid':'310211',
'elname':'conv_left_part',
'objectid':'114956',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c29.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310247':{
'id':'310247',
'template':'t_310247',
'typeid':'310247',
'elname':'conv_left_part',
'objectid':'116076',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c30.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310283':{
'id':'310283',
'template':'t_310283',
'typeid':'310283',
'elname':'conv_left_part',
'objectid':'116708',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c30a.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310319':{
'id':'310319',
'template':'t_310319',
'typeid':'310319',
'elname':'conv_left_part',
'objectid':'200960',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c5.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310355':{
'id':'310355',
'template':'t_310355',
'typeid':'310355',
'elname':'conv_left_part',
'objectid':'203580',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c6.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310391':{
'id':'310391',
'template':'t_310391',
'typeid':'310391',
'elname':'conv_left_part',
'objectid':'202197',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c8.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310427':{
'id':'310427',
'template':'t_310427',
'typeid':'310427',
'elname':'conv_left_part',
'objectid':'191676',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c11.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310463':{
'id':'310463',
'template':'t_310463',
'typeid':'310463',
'elname':'conv_left_part',
'objectid':'192308',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c9a.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310499':{
'id':'310499',
'template':'t_310499',
'typeid':'310499',
'elname':'conv_left_part',
'objectid':'193073',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c9.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310535':{
'id':'310535',
'template':'t_310535',
'typeid':'310535',
'elname':'conv_left_part',
'objectid':'193852',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c12.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310571':{
'id':'310571',
'template':'t_310571',
'typeid':'310571',
'elname':'conv_left_part',
'objectid':'194484',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c12a.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310607':{
'id':'310607',
'template':'t_310607',
'typeid':'310607',
'elname':'conv_left_part',
'objectid':'197371',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c19.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310643':{
'id':'310643',
'template':'t_310643',
'typeid':'310643',
'elname':'conv_left_part',
'objectid':'198003',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c20.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310679':{
'id':'310679',
'template':'t_310679',
'typeid':'310679',
'elname':'conv_left_part',
'objectid':'198873',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c16.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310715':{
'id':'310715',
'template':'t_310715',
'typeid':'310715',
'elname':'conv_left_part',
'objectid':'209771',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c7.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310751':{
'id':'310751',
'template':'t_310751',
'typeid':'310751',
'elname':'conv_left_part',
'objectid':'231377',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c4.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310787':{
'id':'310787',
'template':'t_310787',
'typeid':'310787',
'elname':'conv_left_part',
'objectid':'233174',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c15.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310823':{
'id':'310823',
'template':'t_310823',
'typeid':'310823',
'elname':'conv_left_part',
'objectid':'236585',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c8a.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'310859':{
'id':'310859',
'template':'t_310859',
'typeid':'310859',
'elname':'conv_left_part',
'objectid':'243487',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c14.Ресурсы.Окна.conv_left_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318240':{
'id':'318240',
'template':'t_318240',
'typeid':'318240',
'elname':'conv_right_part',
'objectid':'226003',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c10.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318276':{
'id':'318276',
'template':'t_318276',
'typeid':'318276',
'elname':'conv_right_part',
'objectid':'77248',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c1.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318312':{
'id':'318312',
'template':'t_318312',
'typeid':'318312',
'elname':'conv_right_part',
'objectid':'77940',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c18.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318348':{
'id':'318348',
'template':'t_318348',
'typeid':'318348',
'elname':'conv_right_part',
'objectid':'96783',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c2.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318384':{
'id':'318384',
'template':'t_318384',
'typeid':'318384',
'elname':'conv_right_part',
'objectid':'107927',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c13.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318420':{
'id':'318420',
'template':'t_318420',
'typeid':'318420',
'elname':'conv_right_part',
'objectid':'114956',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c29.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318456':{
'id':'318456',
'template':'t_318456',
'typeid':'318456',
'elname':'conv_right_part',
'objectid':'116076',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c30.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318492':{
'id':'318492',
'template':'t_318492',
'typeid':'318492',
'elname':'conv_right_part',
'objectid':'116708',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c30a.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318528':{
'id':'318528',
'template':'t_318528',
'typeid':'318528',
'elname':'conv_right_part',
'objectid':'200960',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c5.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318564':{
'id':'318564',
'template':'t_318564',
'typeid':'318564',
'elname':'conv_right_part',
'objectid':'203580',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c6.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318600':{
'id':'318600',
'template':'t_318600',
'typeid':'318600',
'elname':'conv_right_part',
'objectid':'202197',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c8.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318636':{
'id':'318636',
'template':'t_318636',
'typeid':'318636',
'elname':'conv_right_part',
'objectid':'191676',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c11.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318672':{
'id':'318672',
'template':'t_318672',
'typeid':'318672',
'elname':'conv_right_part',
'objectid':'192308',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c9a.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318708':{
'id':'318708',
'template':'t_318708',
'typeid':'318708',
'elname':'conv_right_part',
'objectid':'193073',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c9.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318744':{
'id':'318744',
'template':'t_318744',
'typeid':'318744',
'elname':'conv_right_part',
'objectid':'193852',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c12.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318780':{
'id':'318780',
'template':'t_318780',
'typeid':'318780',
'elname':'conv_right_part',
'objectid':'194484',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c12a.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318816':{
'id':'318816',
'template':'t_318816',
'typeid':'318816',
'elname':'conv_right_part',
'objectid':'197371',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c19.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318852':{
'id':'318852',
'template':'t_318852',
'typeid':'318852',
'elname':'conv_right_part',
'objectid':'198003',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c20.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318888':{
'id':'318888',
'template':'t_318888',
'typeid':'318888',
'elname':'conv_right_part',
'objectid':'198873',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c16.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318924':{
'id':'318924',
'template':'t_318924',
'typeid':'318924',
'elname':'conv_right_part',
'objectid':'209771',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c7.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318960':{
'id':'318960',
'template':'t_318960',
'typeid':'318960',
'elname':'conv_right_part',
'objectid':'231377',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c4.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'318996':{
'id':'318996',
'template':'t_318996',
'typeid':'318996',
'elname':'conv_right_part',
'objectid':'233174',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c15.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'319032':{
'id':'319032',
'template':'t_319032',
'typeid':'319032',
'elname':'conv_right_part',
'objectid':'236585',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c8a.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'319068':{
'id':'319068',
'template':'t_319068',
'typeid':'319068',
'elname':'conv_right_part',
'objectid':'243487',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c14.Ресурсы.Окна.conv_right_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348637':{
'id':'348637',
'template':'t_348637',
'typeid':'348637',
'elname':'conv_part',
'objectid':'226003',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c10.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348673':{
'id':'348673',
'template':'t_348673',
'typeid':'348673',
'elname':'conv_part',
'objectid':'77248',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c1.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348709':{
'id':'348709',
'template':'t_348709',
'typeid':'348709',
'elname':'conv_part',
'objectid':'77940',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c18.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348745':{
'id':'348745',
'template':'t_348745',
'typeid':'348745',
'elname':'conv_part',
'objectid':'96783',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c2.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348781':{
'id':'348781',
'template':'t_348781',
'typeid':'348781',
'elname':'conv_part',
'objectid':'107927',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c13.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348817':{
'id':'348817',
'template':'t_348817',
'typeid':'348817',
'elname':'conv_part',
'objectid':'114956',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c29.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348853':{
'id':'348853',
'template':'t_348853',
'typeid':'348853',
'elname':'conv_part',
'objectid':'116076',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c30.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348889':{
'id':'348889',
'template':'t_348889',
'typeid':'348889',
'elname':'conv_part',
'objectid':'116708',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c30a.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348925':{
'id':'348925',
'template':'t_348925',
'typeid':'348925',
'elname':'conv_part',
'objectid':'200960',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c5.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348961':{
'id':'348961',
'template':'t_348961',
'typeid':'348961',
'elname':'conv_part',
'objectid':'203580',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c6.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'348997':{
'id':'348997',
'template':'t_348997',
'typeid':'348997',
'elname':'conv_part',
'objectid':'202197',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c8.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349033':{
'id':'349033',
'template':'t_349033',
'typeid':'349033',
'elname':'conv_part',
'objectid':'191676',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c11.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349069':{
'id':'349069',
'template':'t_349069',
'typeid':'349069',
'elname':'conv_part',
'objectid':'192308',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c9a.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349105':{
'id':'349105',
'template':'t_349105',
'typeid':'349105',
'elname':'conv_part',
'objectid':'193073',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c9.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349141':{
'id':'349141',
'template':'t_349141',
'typeid':'349141',
'elname':'conv_part',
'objectid':'193852',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c12.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349177':{
'id':'349177',
'template':'t_349177',
'typeid':'349177',
'elname':'conv_part',
'objectid':'194484',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c12a.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349213':{
'id':'349213',
'template':'t_349213',
'typeid':'349213',
'elname':'conv_part',
'objectid':'197371',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c19.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349249':{
'id':'349249',
'template':'t_349249',
'typeid':'349249',
'elname':'conv_part',
'objectid':'198003',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c20.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349285':{
'id':'349285',
'template':'t_349285',
'typeid':'349285',
'elname':'conv_part',
'objectid':'198873',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c16.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349321':{
'id':'349321',
'template':'t_349321',
'typeid':'349321',
'elname':'conv_part',
'objectid':'209771',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c7.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349357':{
'id':'349357',
'template':'t_349357',
'typeid':'349357',
'elname':'conv_part',
'objectid':'231377',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c4.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349393':{
'id':'349393',
'template':'t_349393',
'typeid':'349393',
'elname':'conv_part',
'objectid':'233174',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c15.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349429':{
'id':'349429',
'template':'t_349429',
'typeid':'349429',
'elname':'conv_part',
'objectid':'236585',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c8a.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'349465':{
'id':'349465',
'template':'t_349465',
'typeid':'349465',
'elname':'conv_part',
'objectid':'243487',
'width':"80",
'height':"30",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Конвейеры.c14.Ресурсы.Окна.conv_part.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'390032':{
'id':'390032',
'template':'t_390032',
'typeid':'390032',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'390003',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469303": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469306": "False",
          "469305": "true",
          "operand": "469306",
          "value": "469305",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469451": "0",
          "469450": "0",
          "operand": "469451",
          "value": "469450",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488139": "False",
          "488138": "false",
          "operand": "488139",
          "value": "488138",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468897",
    "TriggerId": "468810"
  }
},
},
'390711':{
'id':'390711',
'template':'t_390711',
'typeid':'390711',
'elname':'Изображение вентилятора',
'objectid':'390682',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469411": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469414": "False",
          "469413": "true",
          "operand": "469414",
          "value": "469413",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469559": "0",
          "469558": "0",
          "operand": "469559",
          "value": "469558",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488247": "False",
          "488246": "false",
          "operand": "488247",
          "value": "488246",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469275",
    "TriggerId": "468891"
  }
},
},
'391390':{
'id':'391390',
'template':'t_391390',
'typeid':'391390',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'391361',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469311": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469314": "False",
          "469313": "true",
          "operand": "469314",
          "value": "469313",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469459": "0",
          "469458": "0",
          "operand": "469459",
          "value": "469458",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488147": "False",
          "488146": "false",
          "operand": "488147",
          "value": "488146",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468925",
    "TriggerId": "468816"
  }
},
},
'392069':{
'id':'392069',
'template':'t_392069',
'typeid':'392069',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'392040',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469315": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469318": "False",
          "469317": "true",
          "operand": "469318",
          "value": "469317",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469463": "0",
          "469462": "0",
          "operand": "469463",
          "value": "469462",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488151": "False",
          "488150": "false",
          "operand": "488151",
          "value": "488150",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468939",
    "TriggerId": "468819"
  }
},
},
'392748':{
'id':'392748',
'template':'t_392748',
'typeid':'392748',
'elname':'Изображение вентилятора',
'objectid':'392719',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469319": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469322": "False",
          "469321": "true",
          "operand": "469322",
          "value": "469321",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469467": "0",
          "469466": "0",
          "operand": "469467",
          "value": "469466",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488155": "False",
          "488154": "false",
          "operand": "488155",
          "value": "488154",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468953",
    "TriggerId": "468822"
  }
},
},
'393427':{
'id':'393427',
'template':'t_393427',
'typeid':'393427',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'393398',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469323": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469326": "False",
          "469325": "true",
          "operand": "469326",
          "value": "469325",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469471": "0",
          "469470": "0",
          "operand": "469471",
          "value": "469470",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488159": "False",
          "488158": "false",
          "operand": "488159",
          "value": "488158",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468967",
    "TriggerId": "468825"
  }
},
},
'394106':{
'id':'394106',
'template':'t_394106',
'typeid':'394106',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'394077',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469327": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469330": "False",
          "469329": "true",
          "operand": "469330",
          "value": "469329",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469475": "0",
          "469474": "0",
          "operand": "469475",
          "value": "469474",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488163": "False",
          "488162": "false",
          "operand": "488163",
          "value": "488162",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468981",
    "TriggerId": "468828"
  }
},
},
'394785':{
'id':'394785',
'template':'t_394785',
'typeid':'394785',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'394756',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469331": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469334": "False",
          "469333": "true",
          "operand": "469334",
          "value": "469333",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469479": "0",
          "469478": "0",
          "operand": "469479",
          "value": "469478",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488167": "False",
          "488166": "false",
          "operand": "488167",
          "value": "488166",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "468995",
    "TriggerId": "468831"
  }
},
},
'395464':{
'id':'395464',
'template':'t_395464',
'typeid':'395464',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'395435',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469335": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469338": "False",
          "469337": "true",
          "operand": "469338",
          "value": "469337",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469483": "0",
          "469482": "0",
          "operand": "469483",
          "value": "469482",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488171": "False",
          "488170": "false",
          "operand": "488171",
          "value": "488170",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469009",
    "TriggerId": "468834"
  }
},
},
'396143':{
'id':'396143',
'template':'t_396143',
'typeid':'396143',
'elname':'Изображение вентилятора',
'objectid':'396114',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469339": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469342": "False",
          "469341": "true",
          "operand": "469342",
          "value": "469341",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469487": "0",
          "469486": "0",
          "operand": "469487",
          "value": "469486",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488175": "False",
          "488174": "false",
          "operand": "488175",
          "value": "488174",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469023",
    "TriggerId": "468837"
  }
},
},
'396822':{
'id':'396822',
'template':'t_396822',
'typeid':'396822',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'396793',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469343": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469346": "False",
          "469345": "true",
          "operand": "469346",
          "value": "469345",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469491": "0",
          "469490": "0",
          "operand": "469491",
          "value": "469490",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488179": "False",
          "488178": "false",
          "operand": "488179",
          "value": "488178",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469037",
    "TriggerId": "468840"
  }
},
},
'397501':{
'id':'397501',
'template':'t_397501',
'typeid':'397501',
'elname':'Изображение вентилятора',
'objectid':'397472',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469347": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469350": "False",
          "469349": "true",
          "operand": "469350",
          "value": "469349",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469495": "0",
          "469494": "0",
          "operand": "469495",
          "value": "469494",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488183": "False",
          "488182": "false",
          "operand": "488183",
          "value": "488182",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469051",
    "TriggerId": "468843"
  }
},
},
'398180':{
'id':'398180',
'template':'t_398180',
'typeid':'398180',
'elname':'Изображение вентилятора',
'objectid':'398151',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469367": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469370": "False",
          "469369": "true",
          "operand": "469370",
          "value": "469369",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469515": "0",
          "469514": "0",
          "operand": "469515",
          "value": "469514",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488203": "False",
          "488202": "false",
          "operand": "488203",
          "value": "488202",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469121",
    "TriggerId": "468858"
  }
},
},
'398859':{
'id':'398859',
'template':'t_398859',
'typeid':'398859',
'elname':'Изображение вентилятора',
'objectid':'398830',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469371": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469374": "False",
          "469373": "true",
          "operand": "469374",
          "value": "469373",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469519": "0",
          "469518": "0",
          "operand": "469519",
          "value": "469518",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488207": "False",
          "488206": "false",
          "operand": "488207",
          "value": "488206",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469135",
    "TriggerId": "468861"
  }
},
},
'399538':{
'id':'399538',
'template':'t_399538',
'typeid':'399538',
'elname':'Изображение вентилятора',
'objectid':'399509',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469391": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469394": "False",
          "469393": "true",
          "operand": "469394",
          "value": "469393",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469539": "0",
          "469538": "0",
          "operand": "469539",
          "value": "469538",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488227": "False",
          "488226": "false",
          "operand": "488227",
          "value": "488226",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469205",
    "TriggerId": "468876"
  }
},
},
'400217':{
'id':'400217',
'template':'t_400217',
'typeid':'400217',
'elname':'Изображение вентилятора',
'objectid':'400188',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469395": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469398": "False",
          "469397": "true",
          "operand": "469398",
          "value": "469397",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469543": "0",
          "469542": "0",
          "operand": "469543",
          "value": "469542",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488231": "False",
          "488230": "false",
          "operand": "488231",
          "value": "488230",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469219",
    "TriggerId": "468879"
  }
},
},
'400896':{
'id':'400896',
'template':'t_400896',
'typeid':'400896',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'400867',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469399": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469402": "False",
          "469401": "true",
          "operand": "469402",
          "value": "469401",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469547": "0",
          "469546": "0",
          "operand": "469547",
          "value": "469546",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488235": "False",
          "488234": "false",
          "operand": "488235",
          "value": "488234",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469233",
    "TriggerId": "468882"
  }
},
},
'401575':{
'id':'401575',
'template':'t_401575',
'typeid':'401575',
'elname':'Изображение вентилятора',
'objectid':'401546',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469403": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469406": "False",
          "469405": "true",
          "operand": "469406",
          "value": "469405",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469551": "0",
          "469550": "0",
          "operand": "469551",
          "value": "469550",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488239": "False",
          "488238": "false",
          "operand": "488239",
          "value": "488238",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469247",
    "TriggerId": "468885"
  }
},
},
'402254':{
'id':'402254',
'template':'t_402254',
'typeid':'402254',
'elname':'Изображение вентилятора',
'objectid':'402225',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "469407": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "469410": "False",
          "469409": "true",
          "operand": "469410",
          "value": "469409",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "469555": "0",
          "469554": "0",
          "operand": "469555",
          "value": "469554",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "488243": "False",
          "488242": "false",
          "operand": "488243",
          "value": "488242",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "469261",
    "TriggerId": "468888"
  }
},
},
'409879':{
'id':'409879',
'template':'t_409879',
'typeid':'409879',
'elname':'11_13to1_2 1',
'objectid':'217705',
'width':"100",
'height':"40",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'411516':{
'id':'411516',
'template':'t_411516',
'typeid':'411516',
'elname':'11_20to1_3 1',
'objectid':'213826',
'width':"100",
'height':"40",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'412193':{
'id':'412193',
'template':'t_412193',
'typeid':'412193',
'elname':'11_12to1_1 1',
'objectid':'235410',
'width':"100",
'height':"40",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'412373':{
'id':'412373',
'template':'t_412373',
'typeid':'412373',
'elname':'11_17to1_1 1',
'objectid':'230787',
'width':"100",
'height':"40",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'428028':{
'id':'428028',
'template':'t_428028',
'typeid':'428028',
'elname':'Окно 3',
'objectid':'58250',
'width':"340",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"rgb(110,110,104)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'429053':{
'id':'429053',
'template':'t_429053',
'typeid':'429053',
'elname':'Окно 4',
'objectid':'58250',
'width':"340",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"rgb(110,110,104)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'429178':{
'id':'429178',
'template':'t_429178',
'typeid':'429178',
'elname':'Окно 5',
'objectid':'58250',
'width':"340",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"rgb(110,110,104)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'435148':{
'id':'435148',
'template':'t_435148',
'typeid':'435148',
'elname':'Окно 6',
'objectid':'58250',
'width':"340",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"rgb(110,110,104)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'438512':{
'id':'438512',
'template':'t_438512',
'typeid':'438512',
'elname':'Окно 7',
'objectid':'58250',
'width':"600",
'height':"340",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'442855':{
'id':'442855',
'template':'t_442855',
'typeid':'442855',
'elname':'Окноуправл',
'objectid':'226003',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'443147':{
'id':'443147',
'template':'t_443147',
'typeid':'443147',
'elname':'Окноуправл',
'objectid':'77248',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'443439':{
'id':'443439',
'template':'t_443439',
'typeid':'443439',
'elname':'Окноуправл',
'objectid':'77940',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'443731':{
'id':'443731',
'template':'t_443731',
'typeid':'443731',
'elname':'Окноуправл',
'objectid':'96783',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'444023':{
'id':'444023',
'template':'t_444023',
'typeid':'444023',
'elname':'Окноуправл',
'objectid':'107927',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'444315':{
'id':'444315',
'template':'t_444315',
'typeid':'444315',
'elname':'Окноуправл',
'objectid':'114956',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'444607':{
'id':'444607',
'template':'t_444607',
'typeid':'444607',
'elname':'Окноуправл',
'objectid':'116076',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'444899':{
'id':'444899',
'template':'t_444899',
'typeid':'444899',
'elname':'Окноуправл',
'objectid':'116708',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'445191':{
'id':'445191',
'template':'t_445191',
'typeid':'445191',
'elname':'Окноуправл',
'objectid':'200960',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'445483':{
'id':'445483',
'template':'t_445483',
'typeid':'445483',
'elname':'Окноуправл',
'objectid':'203580',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'445775':{
'id':'445775',
'template':'t_445775',
'typeid':'445775',
'elname':'Окноуправл',
'objectid':'202197',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'446067':{
'id':'446067',
'template':'t_446067',
'typeid':'446067',
'elname':'Окноуправл',
'objectid':'191676',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'446359':{
'id':'446359',
'template':'t_446359',
'typeid':'446359',
'elname':'Окноуправл',
'objectid':'192308',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'446651':{
'id':'446651',
'template':'t_446651',
'typeid':'446651',
'elname':'Окноуправл',
'objectid':'193073',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'446943':{
'id':'446943',
'template':'t_446943',
'typeid':'446943',
'elname':'Окноуправл',
'objectid':'193852',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'447235':{
'id':'447235',
'template':'t_447235',
'typeid':'447235',
'elname':'Окноуправл',
'objectid':'194484',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'447527':{
'id':'447527',
'template':'t_447527',
'typeid':'447527',
'elname':'Окноуправл',
'objectid':'197371',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'447819':{
'id':'447819',
'template':'t_447819',
'typeid':'447819',
'elname':'Окноуправл',
'objectid':'198003',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'448111':{
'id':'448111',
'template':'t_448111',
'typeid':'448111',
'elname':'Окноуправл',
'objectid':'198873',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'448403':{
'id':'448403',
'template':'t_448403',
'typeid':'448403',
'elname':'Окноуправл',
'objectid':'209771',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'448695':{
'id':'448695',
'template':'t_448695',
'typeid':'448695',
'elname':'Окноуправл',
'objectid':'231377',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'448987':{
'id':'448987',
'template':'t_448987',
'typeid':'448987',
'elname':'Окноуправл',
'objectid':'233174',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'449279':{
'id':'449279',
'template':'t_449279',
'typeid':'449279',
'elname':'Окноуправл',
'objectid':'236585',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'449571':{
'id':'449571',
'template':'t_449571',
'typeid':'449571',
'elname':'Окноуправл',
'objectid':'243487',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'459780':{
'id':'459780',
'template':'t_459780',
'typeid':'459780',
'elname':'Окноуправл 1',
'objectid':'390003',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'460089':{
'id':'460089',
'template':'t_460089',
'typeid':'460089',
'elname':'Окноуправл 1',
'objectid':'247602',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'460398':{
'id':'460398',
'template':'t_460398',
'typeid':'460398',
'elname':'Окноуправл 1',
'objectid':'391361',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'460707':{
'id':'460707',
'template':'t_460707',
'typeid':'460707',
'elname':'Окноуправл 1',
'objectid':'392040',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'461016':{
'id':'461016',
'template':'t_461016',
'typeid':'461016',
'elname':'Окноуправл 1',
'objectid':'392719',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'461325':{
'id':'461325',
'template':'t_461325',
'typeid':'461325',
'elname':'Окноуправл 1',
'objectid':'393398',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'461634':{
'id':'461634',
'template':'t_461634',
'typeid':'461634',
'elname':'Окноуправл 1',
'objectid':'394077',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'461943':{
'id':'461943',
'template':'t_461943',
'typeid':'461943',
'elname':'Окноуправл 1',
'objectid':'394756',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'462252':{
'id':'462252',
'template':'t_462252',
'typeid':'462252',
'elname':'Окноуправл 1',
'objectid':'395435',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'462561':{
'id':'462561',
'template':'t_462561',
'typeid':'462561',
'elname':'Окноуправл 1',
'objectid':'396114',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'462870':{
'id':'462870',
'template':'t_462870',
'typeid':'462870',
'elname':'Окноуправл 1',
'objectid':'396793',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'463179':{
'id':'463179',
'template':'t_463179',
'typeid':'463179',
'elname':'Окноуправл 1',
'objectid':'397472',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'463488':{
'id':'463488',
'template':'t_463488',
'typeid':'463488',
'elname':'Окноуправл 1',
'objectid':'249783',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'463797':{
'id':'463797',
'template':'t_463797',
'typeid':'463797',
'elname':'Окноуправл 1',
'objectid':'248329',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'464106':{
'id':'464106',
'template':'t_464106',
'typeid':'464106',
'elname':'Окноуправл 1',
'objectid':'249056',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'464415':{
'id':'464415',
'template':'t_464415',
'typeid':'464415',
'elname':'Окноуправл 1',
'objectid':'250510',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'464724':{
'id':'464724',
'template':'t_464724',
'typeid':'464724',
'elname':'Окноуправл 1',
'objectid':'398151',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'465033':{
'id':'465033',
'template':'t_465033',
'typeid':'465033',
'elname':'Окноуправл 1',
'objectid':'398830',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'465342':{
'id':'465342',
'template':'t_465342',
'typeid':'465342',
'elname':'Окноуправл 1',
'objectid':'252601',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'465651':{
'id':'465651',
'template':'t_465651',
'typeid':'465651',
'elname':'Окноуправл 1',
'objectid':'253292',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'465960':{
'id':'465960',
'template':'t_465960',
'typeid':'465960',
'elname':'Окноуправл 1',
'objectid':'253983',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'466269':{
'id':'466269',
'template':'t_466269',
'typeid':'466269',
'elname':'Окноуправл 1',
'objectid':'254674',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'466578':{
'id':'466578',
'template':'t_466578',
'typeid':'466578',
'elname':'Окноуправл 1',
'objectid':'399509',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'466887':{
'id':'466887',
'template':'t_466887',
'typeid':'466887',
'elname':'Окноуправл 1',
'objectid':'400188',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'467196':{
'id':'467196',
'template':'t_467196',
'typeid':'467196',
'elname':'Окноуправл 1',
'objectid':'400867',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'467505':{
'id':'467505',
'template':'t_467505',
'typeid':'467505',
'elname':'Окноуправл 1',
'objectid':'401546',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'467814':{
'id':'467814',
'template':'t_467814',
'typeid':'467814',
'elname':'Окноуправл 1',
'objectid':'402225',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'468123':{
'id':'468123',
'template':'t_468123',
'typeid':'468123',
'elname':'Окноуправл 1',
'objectid':'390682',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'469884':{
'id':'469884',
'template':'t_469884',
'typeid':'469884',
'elname':'Окноуправл',
'objectid':'118003',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'470176':{
'id':'470176',
'template':'t_470176',
'typeid':'470176',
'elname':'Окноуправл',
'objectid':'68257',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'470468':{
'id':'470468',
'template':'t_470468',
'typeid':'470468',
'elname':'Окноуправл',
'objectid':'70029',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'470760':{
'id':'470760',
'template':'t_470760',
'typeid':'470760',
'elname':'Окноуправл',
'objectid':'70881',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'471052':{
'id':'471052',
'template':'t_471052',
'typeid':'471052',
'elname':'Окноуправл',
'objectid':'71733',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'471344':{
'id':'471344',
'template':'t_471344',
'typeid':'471344',
'elname':'Окноуправл',
'objectid':'72585',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'471636':{
'id':'471636',
'template':'t_471636',
'typeid':'471636',
'elname':'Окноуправл',
'objectid':'73437',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'471928':{
'id':'471928',
'template':'t_471928',
'typeid':'471928',
'elname':'Окноуправл',
'objectid':'74289',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'472220':{
'id':'472220',
'template':'t_472220',
'typeid':'472220',
'elname':'Окноуправл',
'objectid':'97850',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'472512':{
'id':'472512',
'template':'t_472512',
'typeid':'472512',
'elname':'Окноуправл',
'objectid':'98702',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'472804':{
'id':'472804',
'template':'t_472804',
'typeid':'472804',
'elname':'Окноуправл',
'objectid':'99554',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'473096':{
'id':'473096',
'template':'t_473096',
'typeid':'473096',
'elname':'Окноуправл',
'objectid':'119707',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'473388':{
'id':'473388',
'template':'t_473388',
'typeid':'473388',
'elname':'Окноуправл',
'objectid':'118855',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'473680':{
'id':'473680',
'template':'t_473680',
'typeid':'473680',
'elname':'Окноуправл',
'objectid':'120559',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'473972':{
'id':'473972',
'template':'t_473972',
'typeid':'473972',
'elname':'Окноуправл',
'objectid':'121411',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'474264':{
'id':'474264',
'template':'t_474264',
'typeid':'474264',
'elname':'Окноуправл',
'objectid':'122263',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'474556':{
'id':'474556',
'template':'t_474556',
'typeid':'474556',
'elname':'Окноуправл',
'objectid':'204317',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'474848':{
'id':'474848',
'template':'t_474848',
'typeid':'474848',
'elname':'Окноуправл',
'objectid':'205151',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'475140':{
'id':'475140',
'template':'t_475140',
'typeid':'475140',
'elname':'Окноуправл',
'objectid':'205985',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'475432':{
'id':'475432',
'template':'t_475432',
'typeid':'475432',
'elname':'Окноуправл',
'objectid':'195473',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'475724':{
'id':'475724',
'template':'t_475724',
'typeid':'475724',
'elname':'Окноуправл',
'objectid':'196307',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'476016':{
'id':'476016',
'template':'t_476016',
'typeid':'476016',
'elname':'Окноуправл',
'objectid':'208103',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'476308':{
'id':'476308',
'template':'t_476308',
'typeid':'476308',
'elname':'Окноуправл',
'objectid':'208937',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'476600':{
'id':'476600',
'template':'t_476600',
'typeid':'476600',
'elname':'Окноуправл',
'objectid':'227035',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'476892':{
'id':'476892',
'template':'t_476892',
'typeid':'476892',
'elname':'Окноуправл',
'objectid':'227869',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'477184':{
'id':'477184',
'template':'t_477184',
'typeid':'477184',
'elname':'Окноуправл',
'objectid':'228703',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'477476':{
'id':'477476',
'template':'t_477476',
'typeid':'477476',
'elname':'Окноуправл',
'objectid':'240532',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'477768':{
'id':'477768',
'template':'t_477768',
'typeid':'477768',
'elname':'Окноуправл',
'objectid':'241366',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'58259':{
'id':'58259',
'template':'t_58259',
'typeid':'58259',
'elname':'Main Window',
'objectid':'58250',
'width':"5760",
'height':"1080",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"rgb(145,145,145)",
'z':"0",
'tabindex':"0",
'horizontalalign':"2",
'verticalalign':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'proportiontype':"0",
'windowTriggers':{
  "160489": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "160492": "False",
          "160491": "true",
          "operand": "160492",
          "value": "160491",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "160475",
    "TriggerId": "160472"
  },
  "428171": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "428174": "False",
          "428173": "true",
          "operand": "428174",
          "value": "428173",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "428156",
    "TriggerId": "428153"
  },
  "429320": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "429323": "False",
          "429322": "true",
          "operand": "429323",
          "value": "429322",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "429305",
    "TriggerId": "429303"
  },
  "429343": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "429346": "False",
          "429345": "true",
          "operand": "429346",
          "value": "429345",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "429328",
    "TriggerId": "429326"
  },
  "435297": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "435300": "False",
          "435299": "true",
          "operand": "435300",
          "value": "435299",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "435282",
    "TriggerId": "435280"
  },
  "519043": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "519046": "False",
          "519045": "true",
          "operand": "519046",
          "value": "519045",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "519028",
    "TriggerId": "519025"
  },
  "612185": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "612188": "",
          "612187": "true",
          "operand": "612188",
          "value": "612187",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "612190",
    "TriggerId": "612176"
  },
  "620566": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "620569": "False",
          "620568": "true",
          "operand": "620569",
          "value": "620568",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "620551",
    "TriggerId": "620548"
  },
  "2849353": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "2849356": "False",
          "2849355": "true",
          "operand": "2849356",
          "value": "2849355",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "2849350",
    "TriggerId": "2849347"
  }
},
},
'612003':{
'id':'612003',
'template':'t_612003',
'typeid':'612003',
'elname':'Маршрут_Режим',
'objectid':'58250',
'width':"140",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'620003':{
'id':'620003',
'template':'t_620003',
'typeid':'620003',
'elname':'Маршрут_труба',
'objectid':'58250',
'width':"140",
'height':"190",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'63447':{
'id':'63447',
'template':'t_63447',
'typeid':'63447',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'63419',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'actionlist':'{"mousedown":[546005]}',
'windowTriggers':{
  "441648": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "441651": "False",
          "441650": "true",
          "operand": "441651",
          "value": "441650",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "441698": "0",
          "441697": "0",
          "operand": "441698",
          "value": "441697",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487019": "False",
          "487018": "false",
          "operand": "487019",
          "value": "487018",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "441442",
    "TriggerId": "441407"
  }
},
},
'637039':{
'id':'637039',
'template':'t_637039',
'typeid':'637039',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'637003',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "637391": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "637402": "False",
          "637401": "true",
          "operand": "637402",
          "value": "637401",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "637400": "0",
          "637399": "0",
          "operand": "637400",
          "value": "637399",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "637398": "False",
          "637397": "false",
          "operand": "637398",
          "value": "637397",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "637376",
    "TriggerId": "637374"
  }
},
},
'637404':{
'id':'637404',
'template':'t_637404',
'typeid':'637404',
'elname':'Окноуправл 1',
'objectid':'637003',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'63745':{
'id':'63745',
'template':'t_63745',
'typeid':'63745',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'63419',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'637759':{
'id':'637759',
'template':'t_637759',
'typeid':'637759',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'637723',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "638111": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "638122": "False",
          "638121": "true",
          "operand": "638122",
          "value": "638121",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "638120": "0",
          "638119": "0",
          "operand": "638120",
          "value": "638119",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "638118": "False",
          "638117": "false",
          "operand": "638118",
          "value": "638117",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "638096",
    "TriggerId": "638094"
  }
},
},
'638124':{
'id':'638124',
'template':'t_638124',
'typeid':'638124',
'elname':'Окноуправл 1',
'objectid':'637723',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'638479':{
'id':'638479',
'template':'t_638479',
'typeid':'638479',
'elname':'Изображение вентилятора',
'typed':true,
'objectid':'638443',
'width':"60",
'height':"60",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "638831": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "638842": "False",
          "638841": "true",
          "operand": "638842",
          "value": "638841",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "638840": "0",
          "638839": "0",
          "operand": "638840",
          "value": "638839",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "638838": "False",
          "638837": "false",
          "operand": "638838",
          "value": "638837",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "638816",
    "TriggerId": "638814"
  }
},
},
'638844':{
'id':'638844',
'template':'t_638844',
'typeid':'638844',
'elname':'Окноуправл 1',
'objectid':'638443',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{},
},
'639192':{
'id':'639192',
'template':'t_639192',
'typeid':'639192',
'elname':'Изображение затвора',
'typed':true,
'objectid':'639164',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'639458':{
'id':'639458',
'template':'t_639458',
'typeid':'639458',
'elname':'Окноуправл',
'objectid':'639164',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'639674':{
'id':'639674',
'template':'t_639674',
'typeid':'639674',
'elname':'Ручн/Авто',
'objectid':'639164',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'639885':{
'id':'639885',
'template':'t_639885',
'typeid':'639885',
'elname':'Изображение затвора',
'typed':true,
'objectid':'639857',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'640151':{
'id':'640151',
'template':'t_640151',
'typeid':'640151',
'elname':'Окноуправл',
'objectid':'639857',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'64017':{
'id':'64017',
'template':'t_64017',
'typeid':'64017',
'elname':'Окноуправл',
'objectid':'63419',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'640367':{
'id':'640367',
'template':'t_640367',
'typeid':'640367',
'elname':'Ручн/Авто',
'objectid':'639857',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'640578':{
'id':'640578',
'template':'t_640578',
'typeid':'640578',
'elname':'Изображение затвора',
'typed':true,
'objectid':'640550',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'640844':{
'id':'640844',
'template':'t_640844',
'typeid':'640844',
'elname':'Окноуправл',
'objectid':'640550',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'641060':{
'id':'641060',
'template':'t_641060',
'typeid':'641060',
'elname':'Ручн/Авто',
'objectid':'640550',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'641271':{
'id':'641271',
'template':'t_641271',
'typeid':'641271',
'elname':'Изображение затвора',
'typed':true,
'objectid':'641243',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'641537':{
'id':'641537',
'template':'t_641537',
'typeid':'641537',
'elname':'Окноуправл',
'objectid':'641243',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'641753':{
'id':'641753',
'template':'t_641753',
'typeid':'641753',
'elname':'Ручн/Авто',
'objectid':'641243',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'641964':{
'id':'641964',
'template':'t_641964',
'typeid':'641964',
'elname':'Изображение затвора',
'typed':true,
'objectid':'641936',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'642230':{
'id':'642230',
'template':'t_642230',
'typeid':'642230',
'elname':'Окноуправл',
'objectid':'641936',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'642446':{
'id':'642446',
'template':'t_642446',
'typeid':'642446',
'elname':'Ручн/Авто',
'objectid':'641936',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'642657':{
'id':'642657',
'template':'t_642657',
'typeid':'642657',
'elname':'Изображение затвора',
'typed':true,
'objectid':'642629',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'642923':{
'id':'642923',
'template':'t_642923',
'typeid':'642923',
'elname':'Окноуправл',
'objectid':'642629',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'643139':{
'id':'643139',
'template':'t_643139',
'typeid':'643139',
'elname':'Ручн/Авто',
'objectid':'642629',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'643350':{
'id':'643350',
'template':'t_643350',
'typeid':'643350',
'elname':'Изображение затвора',
'typed':true,
'objectid':'643322',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'643616':{
'id':'643616',
'template':'t_643616',
'typeid':'643616',
'elname':'Окноуправл',
'objectid':'643322',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'643832':{
'id':'643832',
'template':'t_643832',
'typeid':'643832',
'elname':'Ручн/Авто',
'objectid':'643322',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'644043':{
'id':'644043',
'template':'t_644043',
'typeid':'644043',
'elname':'Изображение затвора',
'typed':true,
'objectid':'644015',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'64416':{
'id':'64416',
'template':'t_64416',
'typeid':'64416',
'elname':'Noria',
'objectid':'63419',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n5.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'644309':{
'id':'644309',
'template':'t_644309',
'typeid':'644309',
'elname':'Окноуправл',
'objectid':'644015',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'644525':{
'id':'644525',
'template':'t_644525',
'typeid':'644525',
'elname':'Ручн/Авто',
'objectid':'644015',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'644736':{
'id':'644736',
'template':'t_644736',
'typeid':'644736',
'elname':'Изображение затвора',
'typed':true,
'objectid':'644708',
'width':"70",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'645002':{
'id':'645002',
'template':'t_645002',
'typeid':'645002',
'elname':'Окноуправл',
'objectid':'644708',
'width':"140",
'height':"180",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'645218':{
'id':'645218',
'template':'t_645218',
'typeid':'645218',
'elname':'Ручн/Авто',
'objectid':'644708',
'width':"100",
'height':"90",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'64527':{
'id':'64527',
'template':'t_64527',
'typeid':'64527',
'elname':'Noria(bot)',
'objectid':'63419',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n5.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'646013':{
'id':'646013',
'template':'t_646013',
'typeid':'646013',
'elname':'11_6to1_2',
'typed':true,
'objectid':'646003',
'width':"1160",
'height':"510",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'647040':{
'id':'647040',
'template':'t_647040',
'typeid':'647040',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'647003',
'width':"140",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "647495": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "647510": "False",
          "647509": "true",
          "operand": "647510",
          "value": "647509",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "647508": "0",
          "647507": "0",
          "operand": "647508",
          "value": "647507",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "647506": "False",
          "647505": "false",
          "operand": "647506",
          "value": "647505",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "647480",
    "TriggerId": "647478"
  }
},
},
'647512':{
'id':'647512',
'template':'t_647512',
'typeid':'647512',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'647003',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'647877':{
'id':'647877',
'template':'t_647877',
'typeid':'647877',
'elname':'Окноуправл',
'objectid':'647003',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'648215':{
'id':'648215',
'template':'t_648215',
'typeid':'648215',
'elname':'Noria',
'objectid':'647003',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n15.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'648326':{
'id':'648326',
'template':'t_648326',
'typeid':'648326',
'elname':'Noria(bot)',
'objectid':'647003',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n15.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'648656':{
'id':'648656',
'template':'t_648656',
'typeid':'648656',
'elname':'11_4to1_15',
'typed':true,
'objectid':'648647',
'width':"1460",
'height':"530",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'648924':{
'id':'648924',
'template':'t_648924',
'typeid':'648924',
'elname':'11_3to1_4',
'typed':true,
'objectid':'648915',
'width':"410",
'height':"540",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'649195':{
'id':'649195',
'template':'t_649195',
'typeid':'649195',
'elname':'11_2to1_3',
'typed':true,
'objectid':'649186',
'width':"610",
'height':"510",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'64959':{
'id':'64959',
'template':'t_64959',
'typeid':'64959',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'64931',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "441652": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "441655": "False",
          "441654": "true",
          "operand": "441655",
          "value": "441654",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "441702": "0",
          "441701": "0",
          "operand": "441702",
          "value": "441701",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487023": "False",
          "487022": "false",
          "operand": "487023",
          "value": "487022",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "441456",
    "TriggerId": "441410"
  }
},
},
'650101':{
'id':'650101',
'template':'t_650101',
'typeid':'650101',
'elname':'11_9to1_4',
'typed':true,
'objectid':'650092',
'width':"760",
'height':"430",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'65257':{
'id':'65257',
'template':'t_65257',
'typeid':'65257',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'64931',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'655161':{
'id':'655161',
'template':'t_655161',
'typeid':'655161',
'elname':'11_7to',
'typed':true,
'objectid':'655152',
'width':"200",
'height':"110",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'65555':{
'id':'65555',
'template':'t_65555',
'typeid':'65555',
'elname':'Окноуправл',
'objectid':'64931',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'65954':{
'id':'65954',
'template':'t_65954',
'typeid':'65954',
'elname':'Noria',
'objectid':'64931',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n6.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'66065':{
'id':'66065',
'template':'t_66065',
'typeid':'66065',
'elname':'Noria(bot)',
'objectid':'64931',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n6.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'662089':{
'id':'662089',
'template':'t_662089',
'typeid':'662089',
'elname':'Изображение бункера',
'typed':true,
'objectid':'662080',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'662589':{
'id':'662589',
'template':'t_662589',
'typeid':'662589',
'elname':'Изображение бункера',
'typed':true,
'objectid':'662580',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'662872':{
'id':'662872',
'template':'t_662872',
'typeid':'662872',
'elname':'Изображение бункера',
'typed':true,
'objectid':'662863',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'663155':{
'id':'663155',
'template':'t_663155',
'typeid':'663155',
'elname':'Изображение бункера',
'typed':true,
'objectid':'663146',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'663438':{
'id':'663438',
'template':'t_663438',
'typeid':'663438',
'elname':'Изображение бункера',
'typed':true,
'objectid':'663429',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'663616':{
'id':'663616',
'template':'t_663616',
'typeid':'663616',
'elname':'Изображение бункера',
'typed':true,
'objectid':'663607',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'664012':{
'id':'664012',
'template':'t_664012',
'typeid':'664012',
'elname':'Изображение бункера',
'typed':true,
'objectid':'664003',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'664295':{
'id':'664295',
'template':'t_664295',
'typeid':'664295',
'elname':'Изображение бункера',
'typed':true,
'objectid':'664286',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'664578':{
'id':'664578',
'template':'t_664578',
'typeid':'664578',
'elname':'Изображение бункера',
'typed':true,
'objectid':'664569',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'668012':{
'id':'668012',
'template':'t_668012',
'typeid':'668012',
'elname':'11_30toS23',
'typed':true,
'objectid':'668003',
'width':"260",
'height':"510",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'668352':{
'id':'668352',
'template':'t_668352',
'typeid':'668352',
'elname':'11_32toS10',
'typed':true,
'objectid':'668343',
'width':"50",
'height':"490",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'668650':{
'id':'668650',
'template':'t_668650',
'typeid':'668650',
'elname':'11_36toS10',
'typed':true,
'objectid':'668641',
'width':"320",
'height':"510",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'671012':{
'id':'671012',
'template':'t_671012',
'typeid':'671012',
'elname':'4_4to7_15',
'typed':true,
'objectid':'671003',
'width':"890",
'height':"470",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'675117':{
'id':'675117',
'template':'t_675117',
'typeid':'675117',
'elname':'4_4to7_21',
'typed':true,
'objectid':'675108',
'width':"970",
'height':"460",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'675652':{
'id':'675652',
'template':'t_675652',
'typeid':'675652',
'elname':'4_3to7_21',
'typed':true,
'objectid':'675643',
'width':"1240",
'height':"430",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'675905':{
'id':'675905',
'template':'t_675905',
'typeid':'675905',
'elname':'4_3to7_15',
'typed':true,
'objectid':'675896',
'width':"890",
'height':"440",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'677012':{
'id':'677012',
'template':'t_677012',
'typeid':'677012',
'elname':'11_35to7_19',
'typed':true,
'objectid':'677003',
'width':"780",
'height':"470",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'678251':{
'id':'678251',
'template':'t_678251',
'typeid':'678251',
'elname':'4_2to7_21',
'typed':true,
'objectid':'678242',
'width':"1630",
'height':"440",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'678504':{
'id':'678504',
'template':'t_678504',
'typeid':'678504',
'elname':'4_1to7_14',
'typed':true,
'objectid':'678495',
'width':"1250",
'height':"430",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'681856':{
'id':'681856',
'template':'t_681856',
'typeid':'681856',
'elname':'Изображение поворотной трубы',
'typed':true,
'objectid':'681819',
'width':"140",
'height':"120",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "682263": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "682278": "False",
          "682277": "true",
          "operand": "682278",
          "value": "682277",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "682276": "0",
          "682275": "0",
          "operand": "682276",
          "value": "682275",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "682274": "False",
          "682273": "false",
          "operand": "682274",
          "value": "682273",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "682272": "0",
          "682271": "0",
          "operand": "682272",
          "value": "682271",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "682248",
    "TriggerId": "682246"
  }
},
},
'682280':{
'id':'682280',
'template':'t_682280',
'typeid':'682280',
'elname':'Окноуправл',
'objectid':'681819',
'width':"190",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'68285':{
'id':'68285',
'template':'t_68285',
'typeid':'68285',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'68257',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483008": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483011": "False",
          "483010": "true",
          "operand": "483011",
          "value": "483010",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483156": "0",
          "483155": "0",
          "operand": "483156",
          "value": "483155",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487801": "False",
          "487800": "false",
          "operand": "487801",
          "value": "487800",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536257": "0",
          "536256": "0",
          "operand": "536257",
          "value": "536256",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478452",
    "TriggerId": "478354"
  },
  "610053": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610056": "False",
          "610055": "true",
          "operand": "610056",
          "value": "610055",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610201": "0",
          "610200": "4",
          "operand": "610201",
          "value": "610200",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609820"
  }
},
},
'683142':{
'id':'683142',
'template':'t_683142',
'typeid':'683142',
'elname':'rotate2',
'objectid':'681819',
'width':"150.2",
'height':"92.3",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Трубы поворотные.t5.Ресурсы.Окна.rotate2.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'polozhenie':"",
'sostoyanie':"",
'dynamicsvg':"false",
},
'683473':{
'id':'683473',
'template':'t_683473',
'typeid':'683473',
'elname':'4_5to7_13',
'typed':true,
'objectid':'683464',
'width':"2040",
'height':"810",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "683627": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "683630": "",
          "683629": "",
          "operand": "683630",
          "value": "683629",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "683610"
  }
},
},
'683768':{
'id':'683768',
'template':'t_683768',
'typeid':'683768',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'683738',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "684157": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "684172": "False",
          "684171": "true",
          "operand": "684172",
          "value": "684171",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "684170": "0",
          "684169": "0",
          "operand": "684170",
          "value": "684169",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "684168": "False",
          "684167": "false",
          "operand": "684168",
          "value": "684167",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "684166": "0",
          "684165": "0",
          "operand": "684166",
          "value": "684165",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "684142",
    "TriggerId": "684140"
  },
  "684190": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "684197": "False",
          "684196": "true",
          "operand": "684197",
          "value": "684196",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "684195": "0",
          "684194": "4",
          "operand": "684195",
          "value": "684194",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "684173"
  }
},
},
'684199':{
'id':'684199',
'template':'t_684199',
'typeid':'684199',
'elname':'Valve',
'objectid':'683738',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z37.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'684311':{
'id':'684311',
'template':'t_684311',
'typeid':'684311',
'elname':'Окноуправл',
'objectid':'683738',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'684669':{
'id':'684669',
'template':'t_684669',
'typeid':'684669',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'684639',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "685058": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "685073": "False",
          "685072": "true",
          "operand": "685073",
          "value": "685072",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "685071": "0",
          "685070": "0",
          "operand": "685071",
          "value": "685070",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "685069": "False",
          "685068": "false",
          "operand": "685069",
          "value": "685068",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "685067": "0",
          "685066": "0",
          "operand": "685067",
          "value": "685066",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "685043",
    "TriggerId": "685041"
  },
  "685091": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "685098": "False",
          "685097": "true",
          "operand": "685098",
          "value": "685097",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "685096": "0",
          "685095": "4",
          "operand": "685096",
          "value": "685095",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "685074"
  }
},
},
'685100':{
'id':'685100',
'template':'t_685100',
'typeid':'685100',
'elname':'Valve',
'objectid':'684639',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z38.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'685212':{
'id':'685212',
'template':'t_685212',
'typeid':'685212',
'elname':'Окноуправл',
'objectid':'684639',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'685779':{
'id':'685779',
'template':'t_685779',
'typeid':'685779',
'elname':'11_38to7_19',
'typed':true,
'objectid':'685770',
'width':"210",
'height':"460",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'686255':{
'id':'686255',
'template':'t_686255',
'typeid':'686255',
'elname':'11_37to4_5',
'typed':true,
'objectid':'686246',
'width':"40",
'height':"130",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'686522':{
'id':'686522',
'template':'t_686522',
'typeid':'686522',
'elname':'4_5to7_17',
'typed':true,
'objectid':'686513',
'width':"470",
'height':"240",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'687354':{
'id':'687354',
'template':'t_687354',
'typeid':'687354',
'elname':'4_1to7_17',
'typed':true,
'objectid':'687345',
'width':"540",
'height':"210",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'687607':{
'id':'687607',
'template':'t_687607',
'typeid':'687607',
'elname':'4_1to7_19',
'typed':true,
'objectid':'687598',
'width':"260",
'height':"250",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'689012':{
'id':'689012',
'template':'t_689012',
'typeid':'689012',
'elname':'4_4to7_18',
'typed':true,
'objectid':'689003',
'width':"1550",
'height':"360",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'689370':{
'id':'689370',
'template':'t_689370',
'typeid':'689370',
'elname':'4_3to7_17',
'typed':true,
'objectid':'689361',
'width':"1220",
'height':"230",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'689623':{
'id':'689623',
'template':'t_689623',
'typeid':'689623',
'elname':'4_3to7_18',
'typed':true,
'objectid':'689614',
'width':"1270",
'height':"360",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'689876':{
'id':'689876',
'template':'t_689876',
'typeid':'689876',
'elname':'4_2to7_17',
'typed':true,
'objectid':'689867',
'width':"1060",
'height':"190",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'68997':{
'id':'68997',
'template':'t_68997',
'typeid':'68997',
'elname':'Valve',
'objectid':'68257',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z1.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'690129':{
'id':'690129',
'template':'t_690129',
'typeid':'690129',
'elname':'4_2to7_19',
'typed':true,
'objectid':'690120',
'width':"700",
'height':"230",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'691191':{
'id':'691191',
'template':'t_691191',
'typeid':'691191',
'elname':'4_5toVB40',
'typed':true,
'objectid':'691182',
'width':"720",
'height':"340",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'691475':{
'id':'691475',
'template':'t_691475',
'typeid':'691475',
'elname':'4_5toS10',
'typed':true,
'objectid':'691466',
'width':"720",
'height':"340",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'691728':{
'id':'691728',
'template':'t_691728',
'typeid':'691728',
'elname':'4_1toVB41',
'typed':true,
'objectid':'691719',
'width':"530",
'height':"340",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'691981':{
'id':'691981',
'template':'t_691981',
'typeid':'691981',
'elname':'4_1toS10',
'typed':true,
'objectid':'691972',
'width':"270",
'height':"320",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'692234':{
'id':'692234',
'template':'t_692234',
'typeid':'692234',
'elname':'4_1toVB40',
'typed':true,
'objectid':'692225',
'width':"720",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'692382':{
'id':'692382',
'template':'t_692382',
'typeid':'692382',
'elname':'Изображение бункера',
'typed':true,
'objectid':'692373',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'692560':{
'id':'692560',
'template':'t_692560',
'typeid':'692560',
'elname':'Изображение бункера',
'typed':true,
'objectid':'692551',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'692738':{
'id':'692738',
'template':'t_692738',
'typeid':'692738',
'elname':'Изображение бункера',
'typed':true,
'objectid':'692729',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'692916':{
'id':'692916',
'template':'t_692916',
'typeid':'692916',
'elname':'Изображение бункера',
'typed':true,
'objectid':'692907',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'693662':{
'id':'693662',
'template':'t_693662',
'typeid':'693662',
'elname':'4_1toVO',
'typed':true,
'objectid':'693653',
'width':"920",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'693915':{
'id':'693915',
'template':'t_693915',
'typeid':'693915',
'elname':'4_1toSB50',
'typed':true,
'objectid':'693906',
'width':"870",
'height':"320",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'694168':{
'id':'694168',
'template':'t_694168',
'typeid':'694168',
'elname':'4_2toVB40',
'typed':true,
'objectid':'694159',
'width':"270",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'695033':{
'id':'695033',
'template':'t_695033',
'typeid':'695033',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'695003',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "695422": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "695437": "False",
          "695436": "true",
          "operand": "695437",
          "value": "695436",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "695435": "0",
          "695434": "0",
          "operand": "695435",
          "value": "695434",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "695433": "False",
          "695432": "false",
          "operand": "695433",
          "value": "695432",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "695431": "0",
          "695430": "0",
          "operand": "695431",
          "value": "695430",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "695407",
    "TriggerId": "695405"
  },
  "695455": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "695462": "False",
          "695461": "true",
          "operand": "695462",
          "value": "695461",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "695460": "0",
          "695459": "4",
          "operand": "695460",
          "value": "695459",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "695438"
  }
},
},
'695464':{
'id':'695464',
'template':'t_695464',
'typeid':'695464',
'elname':'Valve',
'objectid':'695003',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z24.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'695576':{
'id':'695576',
'template':'t_695576',
'typeid':'695576',
'elname':'Окноуправл',
'objectid':'695003',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'695934':{
'id':'695934',
'template':'t_695934',
'typeid':'695934',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'695904',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "696323": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "696338": "False",
          "696337": "true",
          "operand": "696338",
          "value": "696337",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "696336": "0",
          "696335": "0",
          "operand": "696336",
          "value": "696335",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "696334": "False",
          "696333": "false",
          "operand": "696334",
          "value": "696333",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "696332": "0",
          "696331": "0",
          "operand": "696332",
          "value": "696331",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "696308",
    "TriggerId": "696306"
  },
  "696356": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "696363": "False",
          "696362": "true",
          "operand": "696363",
          "value": "696362",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "696361": "0",
          "696360": "4",
          "operand": "696361",
          "value": "696360",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "696339"
  }
},
},
'696365':{
'id':'696365',
'template':'t_696365',
'typeid':'696365',
'elname':'Valve',
'objectid':'695904',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z25.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'696477':{
'id':'696477',
'template':'t_696477',
'typeid':'696477',
'elname':'Окноуправл',
'objectid':'695904',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'696835':{
'id':'696835',
'template':'t_696835',
'typeid':'696835',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'696805',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "697224": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "697239": "False",
          "697238": "true",
          "operand": "697239",
          "value": "697238",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "697237": "0",
          "697236": "0",
          "operand": "697237",
          "value": "697236",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "697235": "False",
          "697234": "false",
          "operand": "697235",
          "value": "697234",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "697233": "0",
          "697232": "0",
          "operand": "697233",
          "value": "697232",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "697209",
    "TriggerId": "697207"
  },
  "697257": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "697264": "False",
          "697263": "true",
          "operand": "697264",
          "value": "697263",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "697262": "0",
          "697261": "4",
          "operand": "697262",
          "value": "697261",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "697240"
  }
},
},
'697266':{
'id':'697266',
'template':'t_697266',
'typeid':'697266',
'elname':'Valve',
'objectid':'696805',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z26.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'697378':{
'id':'697378',
'template':'t_697378',
'typeid':'697378',
'elname':'Окноуправл',
'objectid':'696805',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'697736':{
'id':'697736',
'template':'t_697736',
'typeid':'697736',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'697706',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "698125": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "698140": "False",
          "698139": "true",
          "operand": "698140",
          "value": "698139",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "698138": "0",
          "698137": "0",
          "operand": "698138",
          "value": "698137",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "698136": "False",
          "698135": "false",
          "operand": "698136",
          "value": "698135",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "698134": "0",
          "698133": "0",
          "operand": "698134",
          "value": "698133",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "698110",
    "TriggerId": "698108"
  },
  "698158": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "698165": "False",
          "698164": "true",
          "operand": "698165",
          "value": "698164",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "698163": "0",
          "698162": "4",
          "operand": "698163",
          "value": "698162",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "698141"
  }
},
},
'698167':{
'id':'698167',
'template':'t_698167',
'typeid':'698167',
'elname':'Valve',
'objectid':'697706',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z27.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'698279':{
'id':'698279',
'template':'t_698279',
'typeid':'698279',
'elname':'Окноуправл',
'objectid':'697706',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'698637':{
'id':'698637',
'template':'t_698637',
'typeid':'698637',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'698607',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "699026": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "699041": "False",
          "699040": "true",
          "operand": "699041",
          "value": "699040",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699039": "0",
          "699038": "0",
          "operand": "699039",
          "value": "699038",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699037": "False",
          "699036": "false",
          "operand": "699037",
          "value": "699036",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699035": "0",
          "699034": "0",
          "operand": "699035",
          "value": "699034",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "699011",
    "TriggerId": "699009"
  },
  "699059": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "699066": "False",
          "699065": "true",
          "operand": "699066",
          "value": "699065",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699064": "0",
          "699063": "4",
          "operand": "699064",
          "value": "699063",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "699042"
  }
},
},
'699068':{
'id':'699068',
'template':'t_699068',
'typeid':'699068',
'elname':'Valve',
'objectid':'698607',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z28.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'699180':{
'id':'699180',
'template':'t_699180',
'typeid':'699180',
'elname':'Окноуправл',
'objectid':'698607',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'699538':{
'id':'699538',
'template':'t_699538',
'typeid':'699538',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'699508',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "699927": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "699942": "False",
          "699941": "true",
          "operand": "699942",
          "value": "699941",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699940": "0",
          "699939": "0",
          "operand": "699940",
          "value": "699939",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699938": "False",
          "699937": "false",
          "operand": "699938",
          "value": "699937",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699936": "0",
          "699935": "0",
          "operand": "699936",
          "value": "699935",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "699912",
    "TriggerId": "699910"
  },
  "699960": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "699967": "False",
          "699966": "true",
          "operand": "699967",
          "value": "699966",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "699965": "0",
          "699964": "4",
          "operand": "699965",
          "value": "699964",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "699943"
  }
},
},
'699969':{
'id':'699969',
'template':'t_699969',
'typeid':'699969',
'elname':'Valve',
'objectid':'699508',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z29.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'700081':{
'id':'700081',
'template':'t_700081',
'typeid':'700081',
'elname':'Окноуправл',
'objectid':'699508',
'width':"150",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'70057':{
'id':'70057',
'template':'t_70057',
'typeid':'70057',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'70029',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483012": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483015": "False",
          "483014": "true",
          "operand": "483015",
          "value": "483014",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483160": "0",
          "483159": "0",
          "operand": "483160",
          "value": "483159",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487805": "False",
          "487804": "false",
          "operand": "487805",
          "value": "487804",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536261": "0",
          "536260": "0",
          "operand": "536261",
          "value": "536260",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478466",
    "TriggerId": "478357"
  },
  "610057": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610060": "False",
          "610059": "true",
          "operand": "610060",
          "value": "610059",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610205": "0",
          "610204": "4",
          "operand": "610205",
          "value": "610204",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609823"
  }
},
},
'701108':{
'id':'701108',
'template':'t_701108',
'typeid':'701108',
'elname':'Изображение бункера',
'typed':true,
'objectid':'701099',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'701286':{
'id':'701286',
'template':'t_701286',
'typeid':'701286',
'elname':'Изображение бункера',
'typed':true,
'objectid':'701277',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'701464':{
'id':'701464',
'template':'t_701464',
'typeid':'701464',
'elname':'Изображение бункера',
'typed':true,
'objectid':'701455',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'702167':{
'id':'702167',
'template':'t_702167',
'typeid':'702167',
'elname':'Изображение бункера',
'typed':true,
'objectid':'702158',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'702345':{
'id':'702345',
'template':'t_702345',
'typeid':'702345',
'elname':'Изображение бункера',
'typed':true,
'objectid':'702336',
'width':"40",
'height':"70",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'703081':{
'id':'703081',
'template':'t_703081',
'typeid':'703081',
'elname':'11_29to1_4',
'typed':true,
'objectid':'703072',
'width':"100",
'height':"310",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'703334':{
'id':'703334',
'template':'t_703334',
'typeid':'703334',
'elname':'11_25to1_4',
'typed':true,
'objectid':'703325',
'width':"530",
'height':"170",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'703572':{
'id':'703572',
'template':'t_703572',
'typeid':'703572',
'elname':'11_28to1_3',
'typed':true,
'objectid':'703563',
'width':"270",
'height':"200",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'703885':{
'id':'703885',
'template':'t_703885',
'typeid':'703885',
'elname':'11_24to1_3',
'typed':true,
'objectid':'703876',
'width':"380",
'height':"200",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'705012':{
'id':'705012',
'template':'t_705012',
'typeid':'705012',
'elname':'11_27to1_2',
'typed':true,
'objectid':'705003',
'width':"460",
'height':"160",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'705355':{
'id':'705355',
'template':'t_705355',
'typeid':'705355',
'elname':'11_26to1_1',
'typed':true,
'objectid':'705346',
'width':"660",
'height':"200",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'705608':{
'id':'705608',
'template':'t_705608',
'typeid':'705608',
'elname':'11_23o1_2',
'typed':true,
'objectid':'705599',
'width':"180",
'height':"210",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'705861':{
'id':'705861',
'template':'t_705861',
'typeid':'705861',
'elname':'11_22o1_1',
'typed':true,
'objectid':'705852',
'width':"140",
'height':"160",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'706537':{
'id':'706537',
'template':'t_706537',
'typeid':'706537',
'elname':'S12to11_24_25',
'typed':true,
'objectid':'706528',
'width':"70",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'706931':{
'id':'706931',
'template':'t_706931',
'typeid':'706931',
'elname':'SB40to11_26_27',
'typed':true,
'objectid':'706922',
'width':"70",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'707325':{
'id':'707325',
'template':'t_707325',
'typeid':'707325',
'elname':'SB41to11_28_29',
'typed':true,
'objectid':'707316',
'width':"70",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'70769':{
'id':'70769',
'template':'t_70769',
'typeid':'70769',
'elname':'Valve',
'objectid':'70029',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z2.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'707719':{
'id':'707719',
'template':'t_707719',
'typeid':'707719',
'elname':'4_2toVB41',
'typed':true,
'objectid':'707710',
'width':"150",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'709012':{
'id':'709012',
'template':'t_709012',
'typeid':'709012',
'elname':'1_15to11_37_38',
'typed':true,
'objectid':'709003',
'width':"120",
'height':"60",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'70909':{
'id':'70909',
'template':'t_70909',
'typeid':'70909',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'70881',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483016": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483019": "False",
          "483018": "true",
          "operand": "483019",
          "value": "483018",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483164": "0",
          "483163": "0",
          "operand": "483164",
          "value": "483163",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487809": "False",
          "487808": "false",
          "operand": "487809",
          "value": "487808",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536265": "0",
          "536264": "0",
          "operand": "536265",
          "value": "536264",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478480",
    "TriggerId": "478360"
  },
  "610061": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610064": "False",
          "610063": "true",
          "operand": "610064",
          "value": "610063",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610209": "0",
          "610208": "4",
          "operand": "610209",
          "value": "610208",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609826"
  }
},
},
'710174':{
'id':'710174',
'template':'t_710174',
'typeid':'710174',
'elname':'4_1to7_4',
'typed':true,
'objectid':'710165',
'width':"470",
'height':"360",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'710427':{
'id':'710427',
'template':'t_710427',
'typeid':'710427',
'elname':'4_2to7_4',
'typed':true,
'objectid':'710418',
'width':"710",
'height':"390",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'711012':{
'id':'711012',
'template':'t_711012',
'typeid':'711012',
'elname':'4_2toS60',
'typed':true,
'objectid':'711003',
'width':"230",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'711265':{
'id':'711265',
'template':'t_711265',
'typeid':'711265',
'elname':'4_2toVB53',
'typed':true,
'objectid':'711256',
'width':"150",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'711771':{
'id':'711771',
'template':'t_711771',
'typeid':'711771',
'elname':'4_2toVB43',
'typed':true,
'objectid':'711762',
'width':"150",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'712024':{
'id':'712024',
'template':'t_712024',
'typeid':'712024',
'elname':'4_3toVB53',
'typed':true,
'objectid':'712015',
'width':"50",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'712277':{
'id':'712277',
'template':'t_712277',
'typeid':'712277',
'elname':'4_3toVB41',
'typed':true,
'objectid':'712268',
'width':"180",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'712530':{
'id':'712530',
'template':'t_712530',
'typeid':'712530',
'elname':'4_3toVB43',
'typed':true,
'objectid':'712521',
'width':"180",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'712783':{
'id':'712783',
'template':'t_712783',
'typeid':'712783',
'elname':'4_3toS23',
'typed':true,
'objectid':'712774',
'width':"320",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'713036':{
'id':'713036',
'template':'t_713036',
'typeid':'713036',
'elname':'4_3toSB52',
'typed':true,
'objectid':'713027',
'width':"230",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'713289':{
'id':'713289',
'template':'t_713289',
'typeid':'713289',
'elname':'4_3toS71',
'typed':true,
'objectid':'713280',
'width':"120",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'713542':{
'id':'713542',
'template':'t_713542',
'typeid':'713542',
'elname':'4_3toS72',
'typed':true,
'objectid':'713533',
'width':"120",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'713795':{
'id':'713795',
'template':'t_713795',
'typeid':'713795',
'elname':'4_4toS23',
'typed':true,
'objectid':'713786',
'width':"500",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'714048':{
'id':'714048',
'template':'t_714048',
'typeid':'714048',
'elname':'4_4toVB41',
'typed':true,
'objectid':'714039',
'width':"500",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'714301':{
'id':'714301',
'template':'t_714301',
'typeid':'714301',
'elname':'4_4toS73',
'typed':true,
'objectid':'714292',
'width':"230",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'714554':{
'id':'714554',
'template':'t_714554',
'typeid':'714554',
'elname':'4_4toVB43',
'typed':true,
'objectid':'714545',
'width':"540",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'714807':{
'id':'714807',
'template':'t_714807',
'typeid':'714807',
'elname':'4_4toVB53',
'typed':true,
'objectid':'714798',
'width':"540",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'715060':{
'id':'715060',
'template':'t_715060',
'typeid':'715060',
'elname':'4_4toVB63',
'typed':true,
'objectid':'715051',
'width':"380",
'height':"330",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'71621':{
'id':'71621',
'template':'t_71621',
'typeid':'71621',
'elname':'Valve',
'objectid':'70881',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z3.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'71761':{
'id':'71761',
'template':'t_71761',
'typeid':'71761',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'71733',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483020": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483023": "False",
          "483022": "true",
          "operand": "483023",
          "value": "483022",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483168": "0",
          "483167": "0",
          "operand": "483168",
          "value": "483167",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487813": "False",
          "487812": "false",
          "operand": "487813",
          "value": "487812",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536269": "0",
          "536268": "0",
          "operand": "536269",
          "value": "536268",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478494",
    "TriggerId": "478363"
  },
  "610065": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610068": "False",
          "610067": "true",
          "operand": "610068",
          "value": "610067",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610213": "0",
          "610212": "4",
          "operand": "610213",
          "value": "610212",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609829"
  }
},
},
'72473':{
'id':'72473',
'template':'t_72473',
'typeid':'72473',
'elname':'Valve',
'objectid':'71733',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z30.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'72613':{
'id':'72613',
'template':'t_72613',
'typeid':'72613',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'72585',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483024": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483027": "False",
          "483026": "true",
          "operand": "483027",
          "value": "483026",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483172": "0",
          "483171": "0",
          "operand": "483172",
          "value": "483171",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487817": "False",
          "487816": "false",
          "operand": "487817",
          "value": "487816",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536273": "0",
          "536272": "0",
          "operand": "536273",
          "value": "536272",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478508",
    "TriggerId": "478366"
  },
  "610069": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610072": "False",
          "610071": "true",
          "operand": "610072",
          "value": "610071",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610217": "0",
          "610216": "4",
          "operand": "610217",
          "value": "610216",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609832"
  }
},
},
'73325':{
'id':'73325',
'template':'t_73325',
'typeid':'73325',
'elname':'Valve',
'objectid':'72585',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z31.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'73465':{
'id':'73465',
'template':'t_73465',
'typeid':'73465',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'73437',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483028": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483031": "False",
          "483030": "true",
          "operand": "483031",
          "value": "483030",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483176": "0",
          "483175": "0",
          "operand": "483176",
          "value": "483175",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487821": "False",
          "487820": "false",
          "operand": "487821",
          "value": "487820",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536277": "0",
          "536276": "0",
          "operand": "536277",
          "value": "536276",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478522",
    "TriggerId": "478369"
  },
  "610073": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610076": "False",
          "610075": "true",
          "operand": "610076",
          "value": "610075",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610221": "0",
          "610220": "4",
          "operand": "610221",
          "value": "610220",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609835"
  }
},
},
'74177':{
'id':'74177',
'template':'t_74177',
'typeid':'74177',
'elname':'Valve',
'objectid':'73437',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z32.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'74317':{
'id':'74317',
'template':'t_74317',
'typeid':'74317',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'74289',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483032": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483035": "False",
          "483034": "true",
          "operand": "483035",
          "value": "483034",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483180": "0",
          "483179": "0",
          "operand": "483180",
          "value": "483179",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487825": "False",
          "487824": "false",
          "operand": "487825",
          "value": "487824",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536281": "0",
          "536280": "0",
          "operand": "536281",
          "value": "536280",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478536",
    "TriggerId": "478372"
  },
  "610077": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610080": "False",
          "610079": "true",
          "operand": "610080",
          "value": "610079",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610225": "0",
          "610224": "4",
          "operand": "610225",
          "value": "610224",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609838"
  }
},
},
'75029':{
'id':'75029',
'template':'t_75029',
'typeid':'75029',
'elname':'Valve',
'objectid':'74289',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z33.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'75799':{
'id':'75799',
'template':'t_75799',
'typeid':'75799',
'elname':'Изображение верха нории',
'typed':true,
'objectid':'75771',
'width':"120",
'height':"130",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "441656": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "441659": "False",
          "441658": "true",
          "operand": "441659",
          "value": "441658",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "441706": "0",
          "441705": "0",
          "operand": "441706",
          "value": "441705",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487027": "False",
          "487026": "false",
          "operand": "487027",
          "value": "487026",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "441470",
    "TriggerId": "441413"
  }
},
},
'76108':{
'id':'76108',
'template':'t_76108',
'typeid':'76108',
'elname':'Изображение низа нории',
'typed':true,
'objectid':'75771',
'width':"120",
'height':"120",
'bordercolor':"TRANSPARENT",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'76417':{
'id':'76417',
'template':'t_76417',
'typeid':'76417',
'elname':'Окноуправл',
'objectid':'75771',
'width':"140",
'height':"220",
'bordercolor':"rgb(128,128,128)",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'76816':{
'id':'76816',
'template':'t_76816',
'typeid':'76816',
'elname':'Noria',
'objectid':'75771',
'width':"60",
'height':"106.1",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n2.Ресурсы.Окна.Noria.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'76927':{
'id':'76927',
'template':'t_76927',
'typeid':'76927',
'elname':'Noria(bot)',
'objectid':'75771',
'width':"67.3",
'height':"92",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Нории.n2.Ресурсы.Окна.Noria(bot).Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'sostoyanie':"",
'dynamicsvg':"false",
},
'77276':{
'id':'77276',
'template':'t_77276',
'typeid':'77276',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'77248',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450968": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450971": "False",
          "450970": "true",
          "operand": "450971",
          "value": "450970",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451096": "0",
          "451095": "0",
          "operand": "451096",
          "value": "451095",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487950": "False",
          "487949": "false",
          "operand": "487950",
          "value": "487949",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536117": "0",
          "536116": "0",
          "operand": "536117",
          "value": "536116",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450603",
    "TriggerId": "450517"
  }
},
},
'77968':{
'id':'77968',
'template':'t_77968',
'typeid':'77968',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'77940',
'width':"510",
'height':"90",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450972": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450975": "False",
          "450974": "true",
          "operand": "450975",
          "value": "450974",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451100": "0",
          "451099": "0",
          "operand": "451100",
          "value": "451099",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487954": "False",
          "487953": "false",
          "operand": "487954",
          "value": "487953",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536121": "0",
          "536120": "0",
          "operand": "536121",
          "value": "536120",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450617",
    "TriggerId": "450520"
  }
},
},
'82815':{
'id':'82815',
'template':'t_82815',
'typeid':'82815',
'elname':'Изображение машины',
'typed':true,
'objectid':'82806',
'width':"150",
'height':"140",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'95158':{
'id':'95158',
'template':'t_95158',
'typeid':'95158',
'elname':'Изображение силосов',
'typed':true,
'objectid':'95149',
'width':"60",
'height':"100",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'95444':{
'id':'95444',
'template':'t_95444',
'typeid':'95444',
'elname':'Изображение машины',
'typed':true,
'objectid':'95435',
'width':"150",
'height':"140",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
},
'96811':{
'id':'96811',
'template':'t_96811',
'typeid':'96811',
'elname':'Изображение конвейера',
'typed':true,
'objectid':'96783',
'width':"190",
'height':"70",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "450976": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "450979": "False",
          "450978": "true",
          "operand": "450979",
          "value": "450978",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "451104": "0",
          "451103": "0",
          "operand": "451104",
          "value": "451103",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487958": "False",
          "487957": "false",
          "operand": "487958",
          "value": "487957",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536125": "0",
          "536124": "0",
          "operand": "536125",
          "value": "536124",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "450631",
    "TriggerId": "450523"
  }
},
},
'97878':{
'id':'97878',
'template':'t_97878',
'typeid':'97878',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'97850',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483036": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483039": "False",
          "483038": "true",
          "operand": "483039",
          "value": "483038",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483184": "0",
          "483183": "0",
          "operand": "483184",
          "value": "483183",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487829": "False",
          "487828": "false",
          "operand": "487829",
          "value": "487828",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536285": "0",
          "536284": "0",
          "operand": "536285",
          "value": "536284",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478550",
    "TriggerId": "478375"
  },
  "610081": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610084": "False",
          "610083": "true",
          "operand": "610084",
          "value": "610083",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610229": "0",
          "610228": "4",
          "operand": "610229",
          "value": "610228",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609841"
  }
},
},
'98590':{
'id':'98590',
'template':'t_98590',
'typeid':'98590',
'elname':'Valve',
'objectid':'97850',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z4.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'98730':{
'id':'98730',
'template':'t_98730',
'typeid':'98730',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'98702',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483040": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483043": "False",
          "483042": "true",
          "operand": "483043",
          "value": "483042",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483188": "0",
          "483187": "0",
          "operand": "483188",
          "value": "483187",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487833": "False",
          "487832": "false",
          "operand": "487833",
          "value": "487832",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536289": "0",
          "536288": "0",
          "operand": "536289",
          "value": "536288",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478564",
    "TriggerId": "478378"
  },
  "610085": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610088": "False",
          "610087": "true",
          "operand": "610088",
          "value": "610087",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610233": "0",
          "610232": "4",
          "operand": "610233",
          "value": "610232",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609844"
  }
},
},
'99442':{
'id':'99442',
'template':'t_99442',
'typeid':'99442',
'elname':'Valve',
'objectid':'98702',
'width':"41",
'height':"41",
'borderthickness':"0",
'bordercolor':"rgb(128,128,128)",
'backgroundcolor':"TRANSPARENT",
'resource':"Объекты.Двигатели.Задвижки.z5.Ресурсы.Окна.Valve.Медиа.SVGResource",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'otkrita':"",
'zakrita':"",
'dynamicsvg':"false",
},
'99582':{
'id':'99582',
'template':'t_99582',
'typeid':'99582',
'elname':'Изображение задвижки',
'typed':true,
'objectid':'99554',
'width':"70",
'height':"100",
'bordercolor':"rgb(0,0,0)",
'backgroundcolor':"TRANSPARENT",
'borderstyle':"3",
'z':"0",
'tabindex':"0",
'hideifdenycontrol':"false",
'mousecursorkind':"0",
'windowTriggers':{
  "483044": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "483047": "False",
          "483046": "true",
          "operand": "483047",
          "value": "483046",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "483192": "0",
          "483191": "0",
          "operand": "483192",
          "value": "483191",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "487837": "False",
          "487836": "false",
          "operand": "487837",
          "value": "487836",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "536293": "0",
          "536292": "0",
          "operand": "536293",
          "value": "536292",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "478578",
    "TriggerId": "478381"
  },
  "610089": {
    "ConditionSet": [
      {
        "ConditionFields": {
          "610092": "False",
          "610091": "true",
          "operand": "610092",
          "value": "610091",
          "comparer": "Equal"
        }
      },
      {
        "ConditionFields": {
          "610237": "0",
          "610236": "4",
          "operand": "610237",
          "value": "610236",
          "comparer": "Equal"
        }
      }
    ],
    "TriggerActions": "",
    "TriggerId": "609847"
  }
},
},

}
this.winMap={
  "99554": {
    "Valve": "100294",
    "Окноуправл": "472804",
    "Изображение задвижки": "99582"
  },
  "100931": {
    "Изображение верха нории": "100959",
    "Изображение низа нории": "101268",
    "Окноуправл": "101577",
    "Noria": "101976",
    "Noria(bot)": "102087",
    "Ammeter": "1810209"
  },
  "1014383": {
    "Изображение конвейера": "1014418",
    "conv_left_part": "1014985",
    "conv_right_part": "1015096",
    "conv_part": "1015207",
    "Окноуправл": "1015329"
  },
  "1016356": {
    "Изображение силосов": "1016371"
  },
  "1018470": {
    "7_4to7_18": "1018479"
  },
  "1019498": {
    "7_20tos12": "1019507"
  },
  "1019891": {
    "Изображение силосов": "1019906"
  },
  "1020221": {
    "Изображение силосов": "1020236"
  },
  "1020551": {
    "Изображение силосов": "1020566"
  },
  "1021374": {
    "7_14to6501": "1021383"
  },
  "1021737": {
    "Изображение силосов": "1021752"
  },
  "1022067": {
    "7_14to6501": "1022076"
  },
  "1022319": {
    "7_14to6501": "1022328"
  },
  "1022571": {
    "Изображение силосов": "1022586"
  },
  "1022901": {
    "Изображение конвейера": "1022936",
    "conv_left_part": "1023503",
    "conv_right_part": "1023614",
    "conv_part": "1023725",
    "Окноуправл": "1023847"
  },
  "1024307": {
    "3201to7_9": "1024316"
  },
  "1024644": {
    "3201to7_9": "1024653"
  },
  "1024896": {
    "3201to7_9": "1024905"
  },
  "1025043": {
    "3201to7_9": "1025052"
  },
  "1025190": {
    "3201to7_9": "1025199"
  },
  "1025652": {
    "7_16tos3201": "1025661"
  },
  "1025904": {
    "7_16tos3201": "1025913"
  },
  "1026475": {
    "7_19to1501": "1026484"
  },
  "1026839": {
    "3201to7_9": "1026848"
  },
  "1027091": {
    "3201to7_9": "1027100"
  },
  "1027343": {
    "3201to7_9": "1027352"
  },
  "1027595": {
    "3201to7_9": "1027604"
  },
  "1031708": {
    "Изображение конвейера": "1031745",
    "conv_left_part": "1032363",
    "conv_right_part": "1032474",
    "conv_part": "1032585",
    "Окноуправл": "1032707"
  },
  "1033687": {
    "7_21to7_13": "1033696"
  },
  "1034003": {
    "Изображение силосов": "1034018"
  },
  "1034228": {
    "Изображение силосов": "1034243"
  },
  "1034873": {
    "7_16tos3201": "1034882"
  },
  "1035125": {
    "7_16tos3201": "1035134"
  },
  "1035671": {
    "7_16tos3201": "1035680"
  },
  "1035818": {
    "7_16tos3201": "1035827"
  },
  "1036490": {
    "7_18to5701": "1036499"
  },
  "1036637": {
    "7_18to3701": "1036646"
  },
  "1036784": {
    "7_18to1701": "1036793"
  },
  "1037246": {
    "Изображение конвейера": "1037283",
    "conv_left_part": "1037901",
    "conv_right_part": "1038012",
    "conv_part": "1038123",
    "Окноуправл": "1038245"
  },
  "1038810": {
    "3201to7_9": "1038819"
  },
  "1038957": {
    "3201to7_9": "1038966"
  },
  "1039104": {
    "3201to7_9": "1039113"
  },
  "106243": {
    "Изображение поворотной трубы": "106272",
    "Окноуправл": "106547",
    "rotate": "106946"
  },
  "107399": {
    "Изображение силосов": "107408"
  },
  "107927": {
    "Изображение конвейера": "107955",
    "conv_left_part": "310175",
    "conv_right_part": "318384",
    "conv_part": "348781",
    "Окноуправл": "444023"
  },
  "109973": {
    "Изображение верха нории": "110001",
    "Изображение низа нории": "110310",
    "Окноуправл": "110619",
    "Noria": "111018",
    "Noria(bot)": "111129",
    "Ammeter": "1810425"
  },
  "112029": {
    "Изображение поворотной трубы": "112058",
    "Окноуправл": "112333",
    "rotate": "112732"
  },
  "112844": {
    "Изображение машины": "112853"
  },
  "113509": {
    "Изображение верха нории": "113537",
    "Изображение низа нории": "113846",
    "Окноуправл": "114155",
    "Noria": "114554",
    "Noria(bot)": "114665",
    "Ammeter": "1810461"
  },
  "114956": {
    "Изображение конвейера": "114984",
    "conv_left_part": "310211",
    "conv_right_part": "318420",
    "conv_part": "348817",
    "Окноуправл": "444315"
  },
  "116076": {
    "Изображение конвейера": "116104",
    "conv_left_part": "310247",
    "conv_right_part": "318456",
    "conv_part": "348853",
    "Окноуправл": "444607"
  },
  "116708": {
    "Изображение конвейера": "116736",
    "conv_left_part": "310283",
    "conv_right_part": "318492",
    "conv_part": "348889",
    "Окноуправл": "444899"
  },
  "118003": {
    "Изображение задвижки": "118031",
    "Valve": "118743",
    "Окноуправл": "469884"
  },
  "118855": {
    "Изображение задвижки": "118883",
    "Valve": "119595",
    "Окноуправл": "473388"
  },
  "1191481": {
    "Изображение скальператора": "1191518",
    "conv_left_part": "1191878",
    "conv_right_part": "1191989",
    "conv_part": "1192100",
    "Окноуправл": "1192222"
  },
  "1192617": {
    "Изображение конвейера": "1192654",
    "conv_left_part": "1193272",
    "conv_right_part": "1193383",
    "conv_part": "1193494",
    "Окноуправл": "1193616"
  },
  "1194007": {
    "Изображение конвейера": "1194044",
    "conv_left_part": "1194662",
    "conv_right_part": "1194773",
    "conv_part": "1194884",
    "Окноуправл": "1195006"
  },
  "1195397": {
    "Изображение конвейера": "1195434",
    "conv_left_part": "1196052",
    "conv_right_part": "1196163",
    "conv_part": "1196274",
    "Окноуправл": "1196396"
  },
  "1196787": {
    "Изображение конвейера": "1196824",
    "conv_left_part": "1197442",
    "conv_right_part": "1197553",
    "conv_part": "1197664",
    "Окноуправл": "1197786"
  },
  "119707": {
    "Изображение задвижки": "119735",
    "Valve": "120447",
    "Окноуправл": "473096"
  },
  "1198177": {
    "Изображение конвейера": "1198214",
    "conv_left_part": "1198832",
    "conv_right_part": "1198943",
    "conv_part": "1199054",
    "Окноуправл": "1199176"
  },
  "1199567": {
    "Изображение конвейера": "1199604",
    "conv_left_part": "1200222",
    "conv_right_part": "1200333",
    "conv_part": "1200444",
    "Окноуправл": "1200566"
  },
  "1200957": {
    "Изображение конвейера": "1200994",
    "conv_left_part": "1201612",
    "conv_right_part": "1201723",
    "conv_part": "1201834",
    "Окноуправл": "1201956"
  },
  "1202347": {
    "Изображение конвейера": "1202384",
    "conv_left_part": "1203002",
    "conv_right_part": "1203113",
    "conv_part": "1203224",
    "Окноуправл": "1203346"
  },
  "1203737": {
    "Изображение конвейера": "1203774",
    "conv_left_part": "1204392",
    "conv_right_part": "1204503",
    "conv_part": "1204614",
    "Окноуправл": "1204736"
  },
  "1205127": {
    "Изображение конвейера": "1205164",
    "conv_left_part": "1205782",
    "conv_right_part": "1205893",
    "conv_part": "1206004",
    "Окноуправл": "1206126"
  },
  "120559": {
    "Изображение задвижки": "120587",
    "Valve": "121299",
    "Окноуправл": "473680"
  },
  "1206517": {
    "Изображение вентилятора": "1206553",
    "Окноуправл 1": "1206918"
  },
  "1207237": {
    "Изображение вентилятора": "1207273",
    "Окноуправл 1": "1207638"
  },
  "1207957": {
    "Изображение вентилятора": "1207993",
    "Окноуправл 1": "1208358"
  },
  "1208677": {
    "Изображение вентилятора": "1208713",
    "Окноуправл 1": "1209078"
  },
  "1209397": {
    "Изображение вентилятора": "1209433",
    "Окноуправл 1": "1209798"
  },
  "1210117": {
    "Изображение вентилятора": "1210153",
    "Окноуправл 1": "1210518"
  },
  "1210837": {
    "Изображение вентилятора": "1210873",
    "Окноуправл 1": "1211238"
  },
  "1211557": {
    "Изображение вентилятора": "1211593",
    "Окноуправл 1": "1211958"
  },
  "1212277": {
    "Изображение вентилятора": "1212313",
    "Окноуправл 1": "1212678"
  },
  "1213003": {
    "Изображение вентилятора": "1213039",
    "Окноуправл 1": "1213404"
  },
  "1213723": {
    "Изображение вентилятора": "1213759",
    "Окноуправл 1": "1214124"
  },
  "121411": {
    "Изображение задвижки": "121439",
    "Valve": "122151",
    "Окноуправл": "473972"
  },
  "1214443": {
    "Изображение вентилятора": "1214479",
    "Окноуправл 1": "1214844"
  },
  "1215163": {
    "Изображение вентилятора": "1215199",
    "Окноуправл 1": "1215564"
  },
  "1215883": {
    "Изображение вентилятора": "1215919",
    "Окноуправл 1": "1216284"
  },
  "1216603": {
    "Изображение вентилятора": "1216639",
    "Окноуправл 1": "1217004"
  },
  "1217323": {
    "Изображение вентилятора": "1217359",
    "Окноуправл 1": "1217724"
  },
  "1218043": {
    "Изображение вентилятора": "1218079",
    "Окноуправл 1": "1218444"
  },
  "1218763": {
    "Изображение вентилятора": "1218799",
    "Окноуправл 1": "1219164"
  },
  "1219483": {
    "Изображение вентилятора": "1219519",
    "Окноуправл 1": "1219884"
  },
  "1220203": {
    "Изображение вентилятора": "1220239",
    "Окноуправл 1": "1220604"
  },
  "1220923": {
    "Изображение вентилятора": "1220959",
    "Окноуправл 1": "1221324"
  },
  "1221643": {
    "Изображение вентилятора": "1221679",
    "Окноуправл 1": "1222044"
  },
  "1222363": {
    "Изображение вентилятора": "1222399",
    "Окноуправл 1": "1222764"
  },
  "122263": {
    "Изображение задвижки": "122291",
    "Valve": "123003",
    "Окноуправл": "474264"
  },
  "1223083": {
    "Изображение вентилятора": "1223119",
    "Окноуправл 1": "1223484"
  },
  "1223803": {
    "Изображение вентилятора": "1223839",
    "Окноуправл 1": "1224204"
  },
  "1290003": {
    "Изображение силосов": "1290018"
  },
  "1290228": {
    "Изображение силосов": "1290243"
  },
  "1290453": {
    "Изображение силосов": "1290468"
  },
  "58250": {
    "Окно 2": "148517",
    "Окно 3": "428028",
    "Окно 4": "429053",
    "Окно 5": "429178",
    "Окно 6": "435148",
    "Окно 7": "438512",
    "Main Window": "58259",
    "Маршрут_Режим": "612003",
    "Маршрут_труба": "620003"
  },
  "1501351": {
    "Изображение верха нории": "1501388",
    "Изображение низа нории": "1501599",
    "Окноуправл": "1501752",
    "Noria": "1501875",
    "Noria(bot)": "1501913",
    "Ammeter": "1810497"
  },
  "1501951": {
    "Изображение верха нории": "1501988",
    "Изображение низа нории": "1502199",
    "Окноуправл": "1502352",
    "Noria": "1502475",
    "Noria(bot)": "1502513",
    "Ammeter": "1810533"
  },
  "1503151": {
    "Изображение верха нории": "1503188",
    "Изображение низа нории": "1503399",
    "Окноуправл": "1503552",
    "Noria": "1503675",
    "Noria(bot)": "1503713",
    "Ammeter": "1810569"
  },
  "1506749": {
    "Изображение верха нории": "1506786",
    "Изображение низа нории": "1506997",
    "Окноуправл": "1507150",
    "Noria": "1507273",
    "Noria(bot)": "1507311",
    "Ammeter": "1810605"
  },
  "1507349": {
    "Изображение верха нории": "1507386",
    "Изображение низа нории": "1507597",
    "Окноуправл": "1507750",
    "Noria": "1507873",
    "Noria(bot)": "1507911",
    "Ammeter": "1810641"
  },
  "150734": {
    "Окно 1": "150744"
  },
  "1507949": {
    "Изображение верха нории": "1507986",
    "Изображение низа нории": "1508197",
    "Окноуправл": "1508350",
    "Noria": "1508473",
    "Noria(bot)": "1508511",
    "Ammeter": "1810677"
  },
  "1508549": {
    "Изображение верха нории": "1508586",
    "Изображение низа нории": "1508797",
    "Окноуправл": "1508950",
    "Noria": "1509073",
    "Noria(bot)": "1509111",
    "Ammeter": "1810713"
  },
  "1509149": {
    "Изображение верха нории": "1509186",
    "Изображение низа нории": "1509397",
    "Окноуправл": "1509550",
    "Noria": "1509673",
    "Noria(bot)": "1509711",
    "Ammeter": "1810749"
  },
  "1509749": {
    "Изображение верха нории": "1509786",
    "Изображение низа нории": "1509997",
    "Окноуправл": "1510150",
    "Noria": "1510273",
    "Noria(bot)": "1510311",
    "Ammeter": "1810785"
  },
  "1510349": {
    "Изображение верха нории": "1510386",
    "Изображение низа нории": "1510597",
    "Окноуправл": "1510750",
    "Noria": "1510873",
    "Noria(bot)": "1510911",
    "Ammeter": "1810821"
  },
  "151063": {
    "1_16to7_30": "151073"
  },
  "1510949": {
    "Изображение верха нории": "1510986",
    "Изображение низа нории": "1511197",
    "Окноуправл": "1511350",
    "Noria": "1511473",
    "Noria(bot)": "1511511",
    "Ammeter": "1810857"
  },
  "1511549": {
    "Изображение верха нории": "1511586",
    "Изображение низа нории": "1511797",
    "Окноуправл": "1511950",
    "Noria": "1512073",
    "Noria(bot)": "1512111",
    "Ammeter": "1810893"
  },
  "1512149": {
    "Изображение задвижки": "1512179",
    "Valve": "1512398",
    "Окноуправл": "1512437"
  },
  "151239": {
    "7_30to7_30a": "151249"
  },
  "1512550": {
    "Изображение задвижки": "1512580",
    "Valve": "1512799",
    "Окноуправл": "1512838"
  },
  "1512951": {
    "Изображение задвижки": "1512981",
    "Valve": "1513200",
    "Окноуправл": "1513239"
  },
  "1513352": {
    "Изображение задвижки": "1513382",
    "Valve": "1513601",
    "Окноуправл": "1513640"
  },
  "1513753": {
    "Изображение задвижки": "1513783",
    "Valve": "1514002",
    "Окноуправл": "1514041"
  },
  "1514154": {
    "Изображение задвижки": "1514184",
    "Valve": "1514403",
    "Окноуправл": "1514442"
  },
  "151415": {
    "7_30ato11_7": "151425"
  },
  "1514555": {
    "Изображение задвижки": "1514585",
    "Valve": "1514804",
    "Окноуправл": "1514843"
  },
  "1514956": {
    "Изображение задвижки": "1514986",
    "Valve": "1515205",
    "Окноуправл": "1515244"
  },
  "1515357": {
    "Изображение задвижки": "1515387",
    "Valve": "1515606",
    "Окноуправл": "1515645"
  },
  "1515758": {
    "Изображение задвижки": "1515788",
    "Valve": "1516007",
    "Окноуправл": "1516046"
  },
  "151591": {
    "11_8to1_3": "151601"
  },
  "1516159": {
    "Изображение задвижки": "1516189",
    "Valve": "1516408",
    "Окноуправл": "1516447"
  },
  "1516560": {
    "Изображение задвижки": "1516590",
    "Valve": "1516809",
    "Окноуправл": "1516848"
  },
  "1516961": {
    "Изображение задвижки": "1516991",
    "Valve": "1517210",
    "Окноуправл": "1517249"
  },
  "1517362": {
    "Изображение задвижки": "1517392",
    "Valve": "1517611",
    "Окноуправл": "1517650"
  },
  "151767": {
    "1_3to11_34_35_36": "151777"
  },
  "1517763": {
    "Изображение задвижки": "1517793",
    "Valve": "1518012",
    "Окноуправл": "1518051"
  },
  "1518164": {
    "Изображение задвижки": "1518194",
    "Valve": "1518413",
    "Окноуправл": "1518452"
  },
  "1518565": {
    "Изображение задвижки": "1518595",
    "Valve": "1518814",
    "Окноуправл": "1518853"
  },
  "1518966": {
    "Изображение задвижки": "1518996",
    "Valve": "1519215",
    "Окноуправл": "1519254"
  },
  "1519367": {
    "Изображение задвижки": "1519397",
    "Valve": "1519616",
    "Окноуправл": "1519655"
  },
  "151943": {
    "11_34to4_3": "151953"
  },
  "1519768": {
    "Изображение задвижки": "1519798",
    "Valve": "1520017",
    "Окноуправл": "1520056"
  },
  "1520187": {
    "Изображение конвейера": "1520224",
    "conv_left_part": "1520515",
    "conv_right_part": "1520553",
    "conv_part": "1520591",
    "Окноуправл": "1520630"
  },
  "1520784": {
    "Изображение конвейера": "1520821",
    "conv_left_part": "1521112",
    "conv_right_part": "1521150",
    "conv_part": "1521188",
    "Окноуправл": "1521227"
  },
  "1521978": {
    "Изображение конвейера": "1522015",
    "conv_left_part": "1522306",
    "conv_right_part": "1522344",
    "conv_part": "1522382",
    "Окноуправл": "1522421"
  },
  "1522877": {
    "Изображение вентилятора": "1522913",
    "Окноуправл 1": "1523043"
  },
  "152295": {
    "Окно 1": "152305"
  },
  "1523179": {
    "Изображение вентилятора": "1523215",
    "Окноуправл 1": "1523345"
  },
  "1523481": {
    "Изображение вентилятора": "1523517",
    "Окноуправл 1": "1523647"
  },
  "1523783": {
    "Изображение вентилятора": "1523819",
    "Окноуправл 1": "1523949"
  },
  "1524085": {
    "Изображение вентилятора": "1524121",
    "Окноуправл 1": "1524251"
  },
  "1524387": {
    "Изображение вентилятора": "1524423",
    "Окноуправл 1": "1524553"
  },
  "1524689": {
    "Изображение вентилятора": "1524725",
    "Окноуправл 1": "1524855"
  },
  "152471": {
    "1_5to7_1": "152481"
  },
  "1524991": {
    "Изображение вентилятора": "1525027",
    "Окноуправл 1": "1525157"
  },
  "1525293": {
    "Изображение вентилятора": "1525329",
    "Окноуправл 1": "1525459"
  },
  "1525595": {
    "Изображение вентилятора": "1525631",
    "Окноуправл 1": "1525761"
  },
  "1525897": {
    "Изображение вентилятора": "1525933",
    "Окноуправл 1": "1526063"
  },
  "1526199": {
    "Изображение вентилятора": "1526235",
    "Окноуправл 1": "1526365"
  },
  "1526501": {
    "Изображение вентилятора": "1526537",
    "Окноуправл 1": "1526667"
  },
  "152647": {
    "7_1to11_1": "152657"
  },
  "1526803": {
    "Изображение вентилятора": "1526839",
    "Окноуправл 1": "1526969"
  },
  "1527105": {
    "Изображение вентилятора": "1527141",
    "Окноуправл 1": "1527271"
  },
  "1527407": {
    "Изображение вентилятора": "1527443",
    "Окноуправл 1": "1527573"
  },
  "1527709": {
    "Изображение вентилятора": "1527745",
    "Окноуправл 1": "1527875"
  },
  "1528011": {
    "Изображение вентилятора": "1528047",
    "Окноуправл 1": "1528177"
  },
  "152823": {
    "11_1to1_2": "152833"
  },
  "1528313": {
    "Изображение вентилятора": "1528349",
    "Окноуправл 1": "1528479"
  },
  "1528615": {
    "Изображение вентилятора": "1528651",
    "Окноуправл 1": "1528781"
  },
  "1528917": {
    "Изображение вентилятора": "1528953",
    "Окноуправл 1": "1529083"
  },
  "1529219": {
    "Изображение затвора": "1529247",
    "Окноуправл": "1529336",
    "Ручн/Авто": "1529387"
  },
  "1529453": {
    "Изображение затвора": "1529481",
    "Окноуправл": "1529570",
    "Ручн/Авто": "1529621"
  },
  "1529687": {
    "Изображение затвора": "1529715",
    "Окноуправл": "1529804",
    "Ручн/Авто": "1529855"
  },
  "1529921": {
    "Изображение затвора": "1529949",
    "Окноуправл": "1530038",
    "Ручн/Авто": "1530089"
  },
  "153003": {
    "1_2to11_30_31_32_33": "153013"
  },
  "1530155": {
    "Изображение затвора": "1530183",
    "Окноуправл": "1530272",
    "Ручн/Авто": "1530323"
  },
  "1530389": {
    "Изображение затвора": "1530417",
    "Окноуправл": "1530506",
    "Ручн/Авто": "1530557"
  },
  "153179": {
    "11_31to7_18": "153189"
  },
  "1531924": {
    "Изображение скальператора": "1531961",
    "conv_left_part": "1532088",
    "conv_right_part": "1532126",
    "conv_part": "1532164",
    "Окноуправл": "1532203"
  },
  "1532357": {
    "Изображение скальператора": "1532394",
    "conv_left_part": "1532521",
    "conv_right_part": "1532559",
    "conv_part": "1532597",
    "Окноуправл": "1532636"
  },
  "1533224": {
    "Изображение цепного": "1533260",
    "chain_left_part": "1533533",
    "chain_right_part": "1533571",
    "Окноуправл 1": "1533609"
  },
  "1533749": {
    "Изображение цепного": "1533785",
    "chain_left_part": "1534058",
    "chain_right_part": "1534096",
    "Окноуправл 1": "1534134"
  },
  "1534274": {
    "Изображение цепного": "1534310",
    "chain_left_part": "1534583",
    "chain_right_part": "1534621",
    "Окноуправл 1": "1534659"
  },
  "153531": {
    "7_32to1_6": "153541"
  },
  "153707": {
    "Окно 1": "153717"
  },
  "153883": {
    "7_2to11_4": "153893"
  },
  "154059": {
    "11_5to1_1": "154069"
  },
  "154235": {
    "1_1to4_1": "154245"
  },
  "154411": {
    "4_1to7_13": "154421"
  },
  "174151": {
    "Изображение верха нории": "174179",
    "Изображение низа нории": "174488",
    "Окноуправл": "174797",
    "Noria": "175196",
    "Noria(bot)": "175307",
    "Ammeter": "1810389"
  },
  "176254": {
    "Изображение поворотной трубы": "176283",
    "Окноуправл": "176531",
    "rotate": "176930"
  },
  "177565": {
    "Изображение поворотной трубы": "177594",
    "Окноуправл": "177842",
    "rotate": "178241"
  },
  "178467": {
    "11_33to4_2": "178477"
  },
  "179049": {
    "1_4to4_4": "179059"
  },
  "63419": {
    "Ammeter": "1810245",
    "Изображение верха нории": "63447",
    "Изображение низа нории": "63745",
    "Окноуправл": "64017",
    "Noria": "64416",
    "Noria(bot)": "64527"
  },
  "647003": {
    "Ammeter": "1810281",
    "Изображение верха нории": "647040",
    "Изображение низа нории": "647512",
    "Окноуправл": "647877",
    "Noria": "648215",
    "Noria(bot)": "648326"
  },
  "64931": {
    "Ammeter": "1810317",
    "Изображение верха нории": "64959",
    "Изображение низа нории": "65257",
    "Окноуправл": "65555",
    "Noria": "65954",
    "Noria(bot)": "66065"
  },
  "75771": {
    "Ammeter": "1810353",
    "Изображение верха нории": "75799",
    "Изображение низа нории": "76108",
    "Окноуправл": "76417",
    "Noria": "76816",
    "Noria(bot)": "76927"
  },
  "181592": {
    "Изображение силосов": "181602"
  },
  "182414": {
    "Изображение силосов": "182424"
  },
  "218176": {
    "to1_2": "183484"
  },
  "230568": {
    "to1_1": "183833"
  },
  "214122": {
    "to1_3": "185345"
  },
  "189830": {
    "Изображение силосов": "189840"
  },
  "190172": {
    "Изображение силосов": "190182"
  },
  "191676": {
    "Изображение конвейера": "191704",
    "conv_left_part": "310427",
    "conv_right_part": "318636",
    "conv_part": "349033",
    "Окноуправл": "446067"
  },
  "192308": {
    "Изображение конвейера": "192336",
    "conv_left_part": "310463",
    "conv_right_part": "318672",
    "conv_part": "349069",
    "Окноуправл": "446359"
  },
  "193073": {
    "Изображение конвейера": "193101",
    "conv_left_part": "310499",
    "conv_right_part": "318708",
    "conv_part": "349105",
    "Окноуправл": "446651"
  },
  "193852": {
    "Изображение конвейера": "193880",
    "conv_left_part": "310535",
    "conv_right_part": "318744",
    "conv_part": "349141",
    "Окноуправл": "446943"
  },
  "194484": {
    "Изображение конвейера": "194512",
    "conv_left_part": "310571",
    "conv_right_part": "318780",
    "conv_part": "349177",
    "Окноуправл": "447235"
  },
  "195473": {
    "Изображение задвижки": "195501",
    "Valve": "196195",
    "Окноуправл": "475432"
  },
  "196307": {
    "Изображение задвижки": "196335",
    "Valve": "197029",
    "Окноуправл": "475724"
  },
  "197371": {
    "Изображение конвейера": "197399",
    "conv_left_part": "310607",
    "conv_right_part": "318816",
    "conv_part": "349213",
    "Окноуправл": "447527"
  },
  "198003": {
    "Изображение конвейера": "198031",
    "conv_left_part": "310643",
    "conv_right_part": "318852",
    "conv_part": "349249",
    "Окноуправл": "447819"
  },
  "198873": {
    "Изображение конвейера": "198901",
    "conv_left_part": "310679",
    "conv_right_part": "318888",
    "conv_part": "349285",
    "Окноуправл": "448111"
  },
  "200115": {
    "Изображение силосов": "200125"
  },
  "200453": {
    "Изображение силосов": "200463"
  },
  "200960": {
    "Изображение конвейера": "200988",
    "conv_left_part": "310319",
    "conv_right_part": "318528",
    "conv_part": "348925",
    "Окноуправл": "445191"
  },
  "202197": {
    "Изображение конвейера": "202225",
    "conv_left_part": "310391",
    "conv_right_part": "318600",
    "conv_part": "348997",
    "Окноуправл": "445775"
  },
  "203580": {
    "Изображение конвейера": "203608",
    "conv_left_part": "310355",
    "conv_right_part": "318564",
    "conv_part": "348961",
    "Окноуправл": "445483"
  },
  "204317": {
    "Изображение задвижки": "204345",
    "Valve": "205039",
    "Окноуправл": "474556"
  },
  "205151": {
    "Изображение задвижки": "205179",
    "Valve": "205873",
    "Окноуправл": "474848"
  },
  "205985": {
    "Изображение задвижки": "206013",
    "Valve": "206707",
    "Окноуправл": "475140"
  },
  "207593": {
    "Изображение силосов": "207603"
  },
  "208103": {
    "Изображение задвижки": "208131",
    "Valve": "208825",
    "Окноуправл": "476016"
  },
  "208937": {
    "Изображение задвижки": "208965",
    "Valve": "209659",
    "Окноуправл": "476308"
  },
  "209771": {
    "Изображение конвейера": "209799",
    "conv_left_part": "310715",
    "conv_right_part": "318924",
    "conv_part": "349321",
    "Окноуправл": "448403"
  },
  "210789": {
    "7_9ato7_9": "210799"
  },
  "212143": {
    "7_9to7_12": "212153"
  },
  "212319": {
    "7_12to7_12a": "212329"
  },
  "212495": {
    "7_12ato7_11": "212505",
    "7_12ato7_11 1": "213294"
  },
  "212671": {
    "7_11to11_20": "212681"
  },
  "213826": {
    "11_20to1_3": "213836",
    "11_20to1_3 1": "411516"
  },
  "214369": {
    "Окно 1": "214379"
  },
  "214650": {
    "7_20to7_16": "214660"
  },
  "215258": {
    "7_16tos3201": "215268"
  },
  "215539": {
    "Окно 1": "215549"
  },
  "215820": {
    "8201to7_5": "215830"
  },
  "216213": {
    "7_5to7_8": "216223"
  },
  "216494": {
    "7_8to7_6": "216504",
    "7_8to7_6 1": "216845"
  },
  "217226": {
    "7_6to11_13": "217236"
  },
  "217705": {
    "11_13to1_2": "217715",
    "11_13to1_2 1": "409879"
  },
  "223133": {
    "tovb43": "218542"
  },
  "221797": {
    "Окно 1": "221807"
  },
  "222219": {
    "Окно 1": "222229"
  },
  "222514": {
    "to1_4": "222524"
  },
  "226003": {
    "Изображение конвейера": "226031",
    "conv_left_part": "310031",
    "conv_right_part": "318240",
    "conv_part": "348637",
    "Окноуправл": "442855"
  },
  "226754": {
    "Окно 1": "226764"
  },
  "227035": {
    "Изображение задвижки": "227063",
    "Valve": "227757",
    "Окноуправл": "476600"
  },
  "227869": {
    "Изображение задвижки": "227897",
    "Valve": "228591",
    "Окноуправл": "476892"
  },
  "228703": {
    "Изображение задвижки": "228731",
    "Valve": "229425",
    "Окноуправл": "477184"
  },
  "230089": {
    "Окно 1": "230099"
  },
  "230787": {
    "11_17to1_1": "230797",
    "11_17to1_1 1": "412373"
  },
  "231377": {
    "Изображение конвейера": "231405",
    "conv_left_part": "310751",
    "conv_right_part": "318960",
    "conv_part": "349357",
    "Окноуправл": "448695"
  },
  "232865": {
    "7_4to7_15": "232875"
  },
  "233174": {
    "Изображение конвейера": "233202",
    "conv_left_part": "310787",
    "conv_right_part": "318996",
    "conv_part": "349393",
    "Окноуправл": "448987"
  },
  "234238": {
    "7_15to4701": "234248"
  },
  "234559": {
    "Изображение силосов": "234569"
  },
  "235109": {
    "4501to7_6": "235119"
  },
  "235410": {
    "11_12to1_1": "235420",
    "11_12to1_1 1": "412193"
  },
  "236304": {
    "4201_4212to7_5": "236314"
  },
  "236585": {
    "Изображение конвейера": "236613",
    "conv_left_part": "310823",
    "conv_right_part": "319032",
    "conv_part": "349429",
    "Окноуправл": "449279"
  },
  "237336": {
    "7_8to7_8a": "237346"
  },
  "237701": {
    "7_8ato7_7": "237711",
    "7_8ato7_7 1": "238003"
  },
  "238567": {
    "Изображение силосов": "238577"
  },
  "238842": {
    "8701to7_7": "238852"
  },
  "239873": {
    "toSB52": "239883"
  },
  "240532": {
    "Изображение задвижки": "240560",
    "Valve": "241254",
    "Окноуправл": "477476"
  },
  "241366": {
    "Изображение задвижки": "241394",
    "Valve": "242088",
    "Окноуправл": "477768"
  },
  "242430": {
    "S11to11_22": "242440"
  },
  "243192": {
    "4_3to7_14": "243202"
  },
  "243487": {
    "Изображение конвейера": "243515",
    "conv_left_part": "310859",
    "conv_right_part": "319068",
    "conv_part": "349465",
    "Окноуправл": "449571"
  },
  "244224": {
    "Изображение силосов": "244234"
  },
  "244499": {
    "7_14to6501": "244509"
  },
  "245019": {
    "Окно 1": "245029"
  },
  "247011": {
    "4_2to7_14": "247021"
  },
  "247602": {
    "Изображение вентилятора": "247631",
    "Окноуправл 1": "460089"
  },
  "248329": {
    "Изображение вентилятора": "248358",
    "Окноуправл 1": "463797"
  },
  "249056": {
    "Изображение вентилятора": "249085",
    "Окноуправл 1": "464106"
  },
  "249783": {
    "Изображение вентилятора": "249812",
    "Окноуправл 1": "463488"
  },
  "250510": {
    "Изображение вентилятора": "250539",
    "Окноуправл 1": "464415"
  },
  "252601": {
    "Изображение вентилятора": "252630",
    "Окноуправл 1": "465342"
  },
  "253292": {
    "Изображение вентилятора": "253321",
    "Окноуправл 1": "465651"
  },
  "253983": {
    "Изображение вентилятора": "254012",
    "Окноуправл 1": "465960"
  },
  "254674": {
    "Изображение вентилятора": "254703",
    "Окноуправл 1": "466269"
  },
  "2805384": {
    "Alarm Log": "2802003"
  },
  "2848038": {
    "Users_Panel": "2848068"
  },
  "58003": {
    "Шаблон экрана 1": "309018"
  },
  "77248": {
    "conv_left_part": "310067",
    "conv_right_part": "318276",
    "conv_part": "348673",
    "Окноуправл": "443147",
    "Изображение конвейера": "77276"
  },
  "77940": {
    "conv_left_part": "310103",
    "conv_right_part": "318312",
    "conv_part": "348709",
    "Окноуправл": "443439",
    "Изображение конвейера": "77968"
  },
  "96783": {
    "conv_left_part": "310139",
    "conv_right_part": "318348",
    "conv_part": "348745",
    "Окноуправл": "443731",
    "Изображение конвейера": "96811"
  },
  "390003": {
    "Изображение вентилятора": "390032",
    "Окноуправл 1": "459780"
  },
  "390682": {
    "Изображение вентилятора": "390711",
    "Окноуправл 1": "468123"
  },
  "391361": {
    "Изображение вентилятора": "391390",
    "Окноуправл 1": "460398"
  },
  "392040": {
    "Изображение вентилятора": "392069",
    "Окноуправл 1": "460707"
  },
  "392719": {
    "Изображение вентилятора": "392748",
    "Окноуправл 1": "461016"
  },
  "393398": {
    "Изображение вентилятора": "393427",
    "Окноуправл 1": "461325"
  },
  "394077": {
    "Изображение вентилятора": "394106",
    "Окноуправл 1": "461634"
  },
  "394756": {
    "Изображение вентилятора": "394785",
    "Окноуправл 1": "461943"
  },
  "395435": {
    "Изображение вентилятора": "395464",
    "Окноуправл 1": "462252"
  },
  "396114": {
    "Изображение вентилятора": "396143",
    "Окноуправл 1": "462561"
  },
  "396793": {
    "Изображение вентилятора": "396822",
    "Окноуправл 1": "462870"
  },
  "397472": {
    "Изображение вентилятора": "397501",
    "Окноуправл 1": "463179"
  },
  "398151": {
    "Изображение вентилятора": "398180",
    "Окноуправл 1": "464724"
  },
  "398830": {
    "Изображение вентилятора": "398859",
    "Окноуправл 1": "465033"
  },
  "399509": {
    "Изображение вентилятора": "399538",
    "Окноуправл 1": "466578"
  },
  "400188": {
    "Изображение вентилятора": "400217",
    "Окноуправл 1": "466887"
  },
  "400867": {
    "Изображение вентилятора": "400896",
    "Окноуправл 1": "467196"
  },
  "401546": {
    "Изображение вентилятора": "401575",
    "Окноуправл 1": "467505"
  },
  "402225": {
    "Изображение вентилятора": "402254",
    "Окноуправл 1": "467814"
  },
  "68257": {
    "Окноуправл": "470176",
    "Изображение задвижки": "68285",
    "Valve": "68997"
  },
  "70029": {
    "Окноуправл": "470468",
    "Изображение задвижки": "70057",
    "Valve": "70769"
  },
  "70881": {
    "Окноуправл": "470760",
    "Изображение задвижки": "70909",
    "Valve": "71621"
  },
  "71733": {
    "Окноуправл": "471052",
    "Изображение задвижки": "71761",
    "Valve": "72473"
  },
  "72585": {
    "Окноуправл": "471344",
    "Изображение задвижки": "72613",
    "Valve": "73325"
  },
  "73437": {
    "Окноуправл": "471636",
    "Изображение задвижки": "73465",
    "Valve": "74177"
  },
  "74289": {
    "Окноуправл": "471928",
    "Изображение задвижки": "74317",
    "Valve": "75029"
  },
  "97850": {
    "Окноуправл": "472220",
    "Изображение задвижки": "97878",
    "Valve": "98590"
  },
  "98702": {
    "Окноуправл": "472512",
    "Изображение задвижки": "98730",
    "Valve": "99442"
  },
  "637003": {
    "Изображение вентилятора": "637039",
    "Окноуправл 1": "637404"
  },
  "637723": {
    "Изображение вентилятора": "637759",
    "Окноуправл 1": "638124"
  },
  "638443": {
    "Изображение вентилятора": "638479",
    "Окноуправл 1": "638844"
  },
  "639164": {
    "Изображение затвора": "639192",
    "Окноуправл": "639458",
    "Ручн/Авто": "639674"
  },
  "639857": {
    "Изображение затвора": "639885",
    "Окноуправл": "640151",
    "Ручн/Авто": "640367"
  },
  "640550": {
    "Изображение затвора": "640578",
    "Окноуправл": "640844",
    "Ручн/Авто": "641060"
  },
  "641243": {
    "Изображение затвора": "641271",
    "Окноуправл": "641537",
    "Ручн/Авто": "641753"
  },
  "641936": {
    "Изображение затвора": "641964",
    "Окноуправл": "642230",
    "Ручн/Авто": "642446"
  },
  "642629": {
    "Изображение затвора": "642657",
    "Окноуправл": "642923",
    "Ручн/Авто": "643139"
  },
  "643322": {
    "Изображение затвора": "643350",
    "Окноуправл": "643616",
    "Ручн/Авто": "643832"
  },
  "644015": {
    "Изображение затвора": "644043",
    "Окноуправл": "644309",
    "Ручн/Авто": "644525"
  },
  "644708": {
    "Изображение затвора": "644736",
    "Окноуправл": "645002",
    "Ручн/Авто": "645218"
  },
  "646003": {
    "11_6to1_2": "646013"
  },
  "648647": {
    "11_4to1_15": "648656"
  },
  "648915": {
    "11_3to1_4": "648924"
  },
  "649186": {
    "11_2to1_3": "649195"
  },
  "650092": {
    "11_9to1_4": "650101"
  },
  "655152": {
    "11_7to": "655161"
  },
  "662080": {
    "Изображение бункера": "662089"
  },
  "662580": {
    "Изображение бункера": "662589"
  },
  "662863": {
    "Изображение бункера": "662872"
  },
  "663146": {
    "Изображение бункера": "663155"
  },
  "663429": {
    "Изображение бункера": "663438"
  },
  "663607": {
    "Изображение бункера": "663616"
  },
  "664003": {
    "Изображение бункера": "664012"
  },
  "664286": {
    "Изображение бункера": "664295"
  },
  "664569": {
    "Изображение бункера": "664578"
  },
  "668003": {
    "11_30toS23": "668012"
  },
  "668343": {
    "11_32toS10": "668352"
  },
  "668641": {
    "11_36toS10": "668650"
  },
  "671003": {
    "4_4to7_15": "671012"
  },
  "675108": {
    "4_4to7_21": "675117"
  },
  "675643": {
    "4_3to7_21": "675652"
  },
  "675896": {
    "4_3to7_15": "675905"
  },
  "677003": {
    "11_35to7_19": "677012"
  },
  "678242": {
    "4_2to7_21": "678251"
  },
  "678495": {
    "4_1to7_14": "678504"
  },
  "681819": {
    "Изображение поворотной трубы": "681856",
    "Окноуправл": "682280",
    "rotate2": "683142"
  },
  "683464": {
    "4_5to7_13": "683473"
  },
  "683738": {
    "Изображение задвижки": "683768",
    "Valve": "684199",
    "Окноуправл": "684311"
  },
  "684639": {
    "Изображение задвижки": "684669",
    "Valve": "685100",
    "Окноуправл": "685212"
  },
  "685770": {
    "11_38to7_19": "685779"
  },
  "686246": {
    "11_37to4_5": "686255"
  },
  "686513": {
    "4_5to7_17": "686522"
  },
  "687345": {
    "4_1to7_17": "687354"
  },
  "687598": {
    "4_1to7_19": "687607"
  },
  "689003": {
    "4_4to7_18": "689012"
  },
  "689361": {
    "4_3to7_17": "689370"
  },
  "689614": {
    "4_3to7_18": "689623"
  },
  "689867": {
    "4_2to7_17": "689876"
  },
  "690120": {
    "4_2to7_19": "690129"
  },
  "691182": {
    "4_5toVB40": "691191"
  },
  "691466": {
    "4_5toS10": "691475"
  },
  "691719": {
    "4_1toVB41": "691728"
  },
  "691972": {
    "4_1toS10": "691981"
  },
  "692225": {
    "4_1toVB40": "692234"
  },
  "692373": {
    "Изображение бункера": "692382"
  },
  "692551": {
    "Изображение бункера": "692560"
  },
  "692729": {
    "Изображение бункера": "692738"
  },
  "692907": {
    "Изображение бункера": "692916"
  },
  "693653": {
    "4_1toVO": "693662"
  },
  "693906": {
    "4_1toSB50": "693915"
  },
  "694159": {
    "4_2toVB40": "694168"
  },
  "695003": {
    "Изображение задвижки": "695033",
    "Valve": "695464",
    "Окноуправл": "695576"
  },
  "695904": {
    "Изображение задвижки": "695934",
    "Valve": "696365",
    "Окноуправл": "696477"
  },
  "696805": {
    "Изображение задвижки": "696835",
    "Valve": "697266",
    "Окноуправл": "697378"
  },
  "697706": {
    "Изображение задвижки": "697736",
    "Valve": "698167",
    "Окноуправл": "698279"
  },
  "698607": {
    "Изображение задвижки": "698637",
    "Valve": "699068",
    "Окноуправл": "699180"
  },
  "699508": {
    "Изображение задвижки": "699538",
    "Valve": "699969",
    "Окноуправл": "700081"
  },
  "701099": {
    "Изображение бункера": "701108"
  },
  "701277": {
    "Изображение бункера": "701286"
  },
  "701455": {
    "Изображение бункера": "701464"
  },
  "702158": {
    "Изображение бункера": "702167"
  },
  "702336": {
    "Изображение бункера": "702345"
  },
  "703072": {
    "11_29to1_4": "703081"
  },
  "703325": {
    "11_25to1_4": "703334"
  },
  "703563": {
    "11_28to1_3": "703572"
  },
  "703876": {
    "11_24to1_3": "703885"
  },
  "705003": {
    "11_27to1_2": "705012"
  },
  "705346": {
    "11_26to1_1": "705355"
  },
  "705599": {
    "11_23o1_2": "705608"
  },
  "705852": {
    "11_22o1_1": "705861"
  },
  "706528": {
    "S12to11_24_25": "706537"
  },
  "706922": {
    "SB40to11_26_27": "706931"
  },
  "707316": {
    "SB41to11_28_29": "707325"
  },
  "707710": {
    "4_2toVB41": "707719"
  },
  "709003": {
    "1_15to11_37_38": "709012"
  },
  "710165": {
    "4_1to7_4": "710174"
  },
  "710418": {
    "4_2to7_4": "710427"
  },
  "711003": {
    "4_2toS60": "711012"
  },
  "711256": {
    "4_2toVB53": "711265"
  },
  "711762": {
    "4_2toVB43": "711771"
  },
  "712015": {
    "4_3toVB53": "712024"
  },
  "712268": {
    "4_3toVB41": "712277"
  },
  "712521": {
    "4_3toVB43": "712530"
  },
  "712774": {
    "4_3toS23": "712783"
  },
  "713027": {
    "4_3toSB52": "713036"
  },
  "713280": {
    "4_3toS71": "713289"
  },
  "713533": {
    "4_3toS72": "713542"
  },
  "713786": {
    "4_4toS23": "713795"
  },
  "714039": {
    "4_4toVB41": "714048"
  },
  "714292": {
    "4_4toS73": "714301"
  },
  "714545": {
    "4_4toVB43": "714554"
  },
  "714798": {
    "4_4toVB53": "714807"
  },
  "715051": {
    "4_4toVB63": "715060"
  },
  "82806": {
    "Изображение машины": "82815"
  },
  "95149": {
    "Изображение силосов": "95158"
  },
  "95435": {
    "Изображение машины": "95444"
  }
}
}
}