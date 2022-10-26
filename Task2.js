"use srict"

function mul(a,b){
  return a * b;
}

var doubleMul = mul.bind(null,2);
var quadraMul  = mul.bind(null,4);

console.log(doubleMul(5)); // 10
console.log(quadraMul(5)); // 20