var a = 21;
var b = 20;
var ans;
var k = 0;

while(k < a){
    k = k + b;
    if(k > a){
      k = k - b;
      break;
    }
}
ans = a - k;
console.log("answer = " + ans);