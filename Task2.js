"use strict"

function Sumator(){
  this.__firstNumber  = 10;
  this.__secondNumber = 5;
}

Sumator.prototype.__numberValid = function(number){
  return typeof number === "number";
}

Sumator.prototype.__calc = function(firstNumber,secondNumber){
  if(this.__numberValid(firstNumber) && this.__numberValid(secondNumber)){
    return firstNumber + secondNumber;
  }
}

Sumator.prototype.result = function(firstNumber,secondNumber){
  if(firstNumber === undefined && secondNumber === undefined){
    return this.__calc(this.__firstNumber, this.__secondNumber);
  }else{
    if(this.__numberValid(firstNumber) && this.__numberValid(secondNumber)){
      this.__firstNumber  = firstNumber;
      this.__secondNumber = secondNumber;
      return this.__calc(firstNumber,secondNumber); 
    }
    if(this.__numberValid(firstNumber)){
      this.__firstNumber = firstNumber;
      return this.__calc(firstNumber, this.__secondNumber);
    }
    if(this.__numberValid(secondNumber)){
      this.__secondNumber = secondNumber;
      return this.__calc(this.__firstNumber, secondNumber);
    }
  }
}

var sumator = new Sumator();
console.log(sumator.result());
sumator.result('12', '10');
console.log(sumator.result());
sumator.result(45);
console.log(sumator.result());

