"use strict"

console.log("Task");

var rectangle = {
  x1: prompt("Enter x1"),
  y1: prompt("Enter y1"),
  x2: prompt("Enter x2"),
  y2: prompt("Enter y2"),
}
Object.prototype.toString = function(){
  console.log("x1 = " + this.x1);
  console.log("y1 = " + this.y1);
  console.log("x2 = " + this.x2);
  console.log("y2 = " + this.y2);
}
rectangle.toString();
Object.prototype.valueOf = function(){
  var p;
  p = 2 * Math.abs(this.x1 - this.x2) + 2 * Math.abs(this.y1 - this.y2);
  console.log("Perimetr = " + p);
}
rectangle.valueOf();
