"use strict"

function Device(name){
  this.__status = false;
  this.__name = name;
};
Device.prototype.turnOffOn = function(){
  if(this.__status == false){
    this.__status = true;
  }else{
    this.__status = false;
  }
  return this.__status;
}
Device.prototype.getStatus = function(){
  return this.__status;
}
Device.prototype.getName = function(){
  return this.__name;
}