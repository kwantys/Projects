"use strict"

console.log("Task4");
var arr = ["Tom", "Sam", "Bob"];
console.log("Map:");
function change(value){
  return "<li>" + value + "/li>";
}
console.log(arr.map(change));
