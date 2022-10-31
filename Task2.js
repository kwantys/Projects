"use strict"

function Square(a){
  this._a = a;
}
Square.prototype.getA = function(){
  return this._a;
};
Square.prototype.setA = function(a){
  this._a = a;
};
Square.prototype.perimeter = function(a){
  console.log("Perimetr square = " + this._a * 4);
};
var sq = new Square(5);
sq.perimeter();

function Cube(b){
  this._b = b;
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
Cube.prototype.getB = function(){
  return this._b;
};
Cube.prototype.setB = function(b){
  this._b = b;
}
Cube.prototype.perimeter = function(){
  console.log("Perimetr cuba = " + this._b * 8);
};
var cube = new Cube(5);
cube.perimeter();

Cube.prototype.perimeter = function(){
  Square.prototype.perimeter.call(this);
  console.log("Perimetr cuba = " + this._b * 8);
};

var cube1 = new Cube(10);
cube1.perimeter();