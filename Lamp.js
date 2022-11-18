"use strict"

function Lamp(name){
  Device.call(this,name);
  this.__status = false;
  this.__brightness = 40;
};
Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;
Lamp.prototype.setBrightness = function(i){
  if(this.__status == true && this.__brightness < 100 && i <= 100 && i > 0){
    this.__brightness = i;
  }else{
    this.__brightness;
  }
}
Lamp.prototype.getBrightness = function(){
  var er = "Лампа виключена";
  if(this.__status == true){
    return this.__brightness;
  }else{
    return er;
  }
  
}