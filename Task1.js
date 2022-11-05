"use strict"

var perimetr = (function(){
  var a;
  var b;
  function operatoin(){
    var f = (2 * a) + (2 * b);
    return f;
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
      return operatoin()
    }
  }
})()














