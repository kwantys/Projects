"use strict"

var  calculator = {
   a: NaN,
   b: NaN,
  read : function(){
      this.a = prompt("Enter first number");
      this.b = prompt("Enter second number");
  },
  sum: function(){
    return parseFloat(this.a) + parseFloat(this.b);
  },
  mul:function(){
    return this.a * this.b;
  }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


