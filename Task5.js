"use strict"

console.log("Task5");
function matrixToArray(matrix) {
  console.log(matrix.reduce(function(flat, current) {
    return flat.concat(current);
    }, []));
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]