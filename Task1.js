function digitSum(k){
  if(k < 10){
    return k;
  }else{
    return k % 10 + parseInt( digitSum(k / 10));
  }
}
var k = 12345;
console.log("Sum = " + digitSum(k));
var a = 147;
console.log("Sum = " + digitSum(a));
