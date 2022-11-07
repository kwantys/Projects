"use strict"
console.log("task2")
function isNumber(n) {
  return !isNaN(Number(n));
}
var a = true; // умвова виходу із while
var str;
var arr;
var tabl = [];
var k = 0; // умова для число не число
var q = 0; // для виводу 
var c = 1; //
var inOut = "Inut\t\tOutput";
console.log(inOut);
while(a){
  str  = prompt("Enter string");
  if(str == 'end'){
    a = false;
      break;
  }
  arr = str.split('');
  for(var i = 0; i < arr.length; i++){
    if(isNumber(arr[i])){
      k = k + 1;
    }
  }
  arr = arr.join('');
  if(k > 0){
    tabl.push("Numbers");
  }else{
    tabl.push("No numbers");
  }
  for(var i = q; i < c; i++){
    console.log(`${arr}\t\t${tabl[i]}`);
  }
  q++;
  c++;
  k = 0;
}









