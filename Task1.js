function pov(a, n){
  var res = 1;
  var k = n;
  while(k > 0){
    res = res * a;
    k = k - 1;
  }
  console.log(a + " в степені " + n + " = " + res);
}

pov(5,3);