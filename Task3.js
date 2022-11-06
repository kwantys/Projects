"use strict"

console.log("Task3");
function deleteEvenNumbers(array){
  for(var i = 0; i < array.length; i++){
      if(array[i] % 2 == 0){
        array.splice(i,1);
      }
  }
  return array;
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]