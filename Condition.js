"use strict"

function AirConditioning(name){
  Device.call(this, name);
  this.__temperature = 15;
};
AirConditioning.prototype = Object.create(Device.prototype);
AirConditioning.prototype.constructor = AirConditioning;
AirConditioning.prototype.setTemperature = function(t){
  var er = "Нова температура не відповідає вимогам";
  if(this.__status == true && t <= 30 && t > 0){
    this.__temperature = t;
  }else{
    this.__temperature =  er;
  }
}
AirConditioning.prototype.getTemperature = function(){
  var er = "Кондиціонер виключений";
  if(this.__status == true){
    return this.__temperature;
  }else{
    return er;
  }
}