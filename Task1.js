function find(){
  var a = 5;
  var b = 4;
  return function(){
    var P, S;
    P = 2 * a + 2 * b;
    S = a * b;
    console.log("P = " + P + " S = " + S ); 
  }
}

var pr = find();

pr();