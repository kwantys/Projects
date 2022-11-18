"use strict"

function Windows(name){
  Device.call(this, name);
};

Windows.prototype = Object.create(Device.prototype);
Windows.prototype.constructor = Windows;

Windows.prototype.close = function(){
  var time = new Date();
  if(time.getHours() > 8 && time.getHours() < 22){ // ?? 
    this.__status = "open";
  }else{
    this.__status  = "no open";
  }
  return this.__status;
}