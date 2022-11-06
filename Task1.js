"use strict"
function printArr(array){
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}
function change(array, string){
  for(var i = 0; i < array.length; i++){
    if(i == array.length - 2){
      array[i] = string;
    }
  }
}
console.log("Task1:");
var arr = ["JavaScript", "Python"];
console.log("Array:");
printArr(arr);
arr.push("Java");
console.log("Array after change:");
printArr(arr);
change(arr, "Kotlin");
console.log("Array after change:");
printArr(arr);
arr.shift();
console.log("Array after change:");
printArr(arr);
arr.unshift("Basic", "Pascal");
console.log("Array after change:");
printArr(arr);
