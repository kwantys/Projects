var n = prompt("Enter number");
var k;

while(n != 0){
  k = n % 10;
  console.log(k);
  n = parseInt(n / 10);
}