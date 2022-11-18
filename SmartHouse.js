"use strict"

function SmartHouse(name){
  this.__name = name;
  this.__devices = [ ];
};
SmartHouse.prototype.addDevice = function(device){
  this.__devices.push(device);
};
SmartHouse.prototype.getDeviceByName = function(name){
  var find = null;
  this.__devices.forEach(function(device){
    if(device.getName() == name){
      find = device;
    }
  })
  return find;
}