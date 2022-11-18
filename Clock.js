"use strict"

function Clock(name){
  Device.call(this, name);
  this.__hours = new Date;
};

Clock.prototype = Object.create(Device.prototype);
Clock.prototype.constructor =Clock;
Clock.prototype.hours = function(){
  var mas = [];
  mas.push(this.__hours.getHours());
  mas.push(this.__hours.getMinutes());
  mas = mas.join(":");
  return mas;
} 