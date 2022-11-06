"use strict"

console.log("Task2")

Array.prototype.sortDesc = function(){
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    var wasSwap = false;
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] < arr[j + 1]) {
            var swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
}
return arr;
}

var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr);// [5, 4, 3, 2, 1]
