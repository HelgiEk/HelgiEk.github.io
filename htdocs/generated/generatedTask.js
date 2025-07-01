self.GLOBAL={}
self.outputParams={}
self.inputParams={}
self.state={}
importScripts('../screentask/common.js')
importScripts('../screentask/standardFunctions.js')
importScripts('../screentask/standardFB.js')
const RetainEnum = {
RETAIN: 0,
NON_RETAIN: 1,
CONSTANT: 2,
NONE: 3,
INTERNAL_RETAIN: 4
}

function Main_Program() {
}
Main_Program.prototype._call = function() {
var __TempValueEnO, TRASH;
 GLOBAL.Zvukovoj_Signal_ID_2805251.EnO = true;  __TempValueEnO = fbcall(GLOBAL.Zvukovoj_Signal_ID_2805251); 
}
Main_Program.prototype._saveRetain = function(dict, retain) {
let _temp;
_temp = dict["Zvukovoj_Signal_ID_2805251"];
if (_temp === undefined) {
_temp = {};
dict["Zvukovoj_Signal_ID_2805251"] = _temp;
}
GLOBAL.Zvukovoj_Signal_ID_2805251._saveRetain(_temp, retain);
}
Main_Program.prototype._loadRetain = function(dict, retain) {
let _temp;
_temp = dict["Zvukovoj_Signal_ID_2805251"];
if (_temp !== undefined) GLOBAL.Zvukovoj_Signal_ID_2805251._loadRetain(_temp, retain);
}
function Zvukovoj_Signal_ID_2805251() {
this.Filjtr_Trevog = false;
this.EnO = true;
this.PlaySound_1= new StandardFB.PlaySound({ItemId:2805256})

this.Start = false;
this.Finish = false;
}
Zvukovoj_Signal_ID_2805251.prototype._call = function() {
var __TempValueEnO, TRASH;
if (this.Filjtr_Trevog==true) { 
this.Start=true;
 this.Finish=false;
  } else { this.Start=false;
 this.Finish=true;
  } this.PlaySound_1.Play=this.Start;
this.PlaySound_1.Rep=true;
this.PlaySound_1.Sound="signal.mp3";
this.PlaySound_1.Stop=this.Finish;
 this.PlaySound_1.EnO = true;  __TempValueEnO = fbcall(this.PlaySound_1); 
}
Zvukovoj_Signal_ID_2805251.prototype._saveRetain = function(dict, retain) {
let _temp;
if (retain == RetainEnum.RETAIN) {
dict["Filjtr_Trevog"] = this.Filjtr_Trevog;
dict["EnO"] = this.EnO;
_temp = dict["PlaySound_1"];
if (_temp === undefined) {
_temp = {};
dict["PlaySound_1"] = _temp;
}
this.PlaySound_1._saveRetain(_temp, RetainEnum.RETAIN);
dict["Start"] = this.Start;
dict["Finish"] = this.Finish;
}
}
Zvukovoj_Signal_ID_2805251.prototype._loadRetain = function(dict, retain) {
let _temp;
if (retain == RetainEnum.RETAIN) {
_temp = dict["Filjtr_Trevog"];
if (_temp !== undefined) this.Filjtr_Trevog = _temp;
_temp = dict["EnO"];
if (_temp !== undefined) this.EnO = _temp;
_temp = dict["PlaySound_1"];
if (_temp !== undefined) this.PlaySound_1._loadRetain(_temp, RetainEnum.RETAIN);
_temp = dict["Start"];
if (_temp !== undefined) this.Start = _temp;
_temp = dict["Finish"];
if (_temp !== undefined) this.Finish = _temp;
}
}
GLOBAL.Main_Program= new Main_Program({})

GLOBAL.Zvukovoj_Signal_ID_2805251= new Zvukovoj_Signal_ID_2805251({})
self.inputParams['Zvukovoj_Signal_ID_2805251.Filjtr_Trevog'] = {}
self.outputParams['Zvukovoj_Signal_ID_2805251.EnO'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.PlaySound_1._STType'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.PlaySound_1.ItemId'] = {}
self.outputParams['Zvukovoj_Signal_ID_2805251.PlaySound_1.EnO'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.PlaySound_1.Play'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.PlaySound_1.Rep'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.PlaySound_1.Sound'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.PlaySound_1.Stop'] = {}
self.outputParams['Zvukovoj_Signal_ID_2805251.Start'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.Start'] = {}
self.outputParams['Zvukovoj_Signal_ID_2805251.Finish'] = {}
self.inputParams['Zvukovoj_Signal_ID_2805251.Finish'] = {}
bindParams(self.outputParams)
bindParams(self.inputParams)
GLOBAL.Main_Program._onStart?.();
self.onmessage = function (e) {
if (e.data.isLoadRetain) {
GLOBAL.Main_Program._loadRetain(e.data.input, RetainEnum.INTERNAL_RETAIN)
return;
}
setFBParams(e.data)
if (e.data.fbName) {
const fb = getFB(e.data.fbName)
if(typeof fb._call === 'function') fb._call()
} else {
GLOBAL.Main_Program._call()
}
const values = getOutValues(e.data.isNewWindow)
if (values) {
values._retain = {}
GLOBAL.Main_Program._saveRetain(values._retain, RetainEnum.INTERNAL_RETAIN)
postMessage(values)
}
}