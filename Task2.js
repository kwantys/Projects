function createArrayIterator(arr){
  var i = -1;
  return function(){
    i = i + 1;
    return arr[i];
  }
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined
 