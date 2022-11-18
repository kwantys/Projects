"use strcit"

function Alarms(name){
  Device.call(this,name);
  this.__password = "1234";
}

Alarms.prototype = Object.create(Device.prototype);
Alarms.prototype.constructor = Alarms;

Alarms.prototype.checkPassword = function(pas){
  pas = prompt("Enter password");
  var er = "Ви ввели неправильний пароль";
  if(this.__password == pas){
    this.__status = true;
  }else{
    this.__status = er;
  }
}

Alarms.prototype.changePassword = function(pas){
  this.__password = pas;
}

Alarms.prototype.getPassword = function(){
  return this.__password;
}