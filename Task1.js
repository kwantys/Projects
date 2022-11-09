"use strict"

function random(min, max, delay, callback) {
  var data;
  var error;
  if(min < max){
    data = Math.floor(Math.random() * (max - min + 1) + min);
  }else{
    error = new Error("Min > max");
    data = error;
  }
  setTimeout(
    function(){
      callback(error,data)
    },
  delay);
}

random(1, 100, 2000, function (error, data) {
  console.log(data);
});

random(1000, 100, 3000, function (error, data) {
  console.log(data);
});

