"use strict"
var Login = "Login1, LOgin2, login3, loGin4";
Login = Login.toLowerCase();
Login = Login.split("' '");
for(var i = 0; i < Login.length; i++){
  console.log(Login[i]);
}




