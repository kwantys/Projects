"use strict"

var user ={
  name: "Tom",
}

function format(beginMsg, endMsg){
  console.log(beginMsg + this.name + endMsg);
}

;(function(){
  var key = Date.now().toString();
  user[key] = format;
  var result = user[key]("<<<",">>>");
  delete user[key];
  return result;
})()

var tomFormat = format.bind(user);
tomFormat("<<<", ">>>");
