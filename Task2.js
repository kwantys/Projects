"use strict"

var squad = (function(){
  var a;
  var b;
  function operatoin(){
    return a * b;
  }
  return {
    setA: function(number){
      if(typeof(number) === 'number' && number > 0){
        a = number;
      }
    },
    setB: function(number){
      if(typeof(number) === 'number' && number > 0){
        b = number;
      }
    },
    operatoin: function(){
      return operatoin();
    }
  }
})()