function calc(a, b, op){
  var ans;
  switch(op){
    case 1:
      ans = a + b;
      console.log("a + b = " + ans );
      break;
    case 2:
      ans = a * b; 
      console.log("a * b = " + ans);
      break;
     case 3:
      ans = a / b;
      console.log("a / b = " + ans);
      break;
    default:
      ans = a + b;
      console.log("a + b = " + ans ); 
  }
}

var a = 8;
var b = 4;

calc(a,b,2);