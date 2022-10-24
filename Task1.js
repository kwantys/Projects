"use strict"

function mul() {
  var  dob = 1;
  var k = 0;
  for(var i = 0; i < arguments.length; i++){ // перевірка на наявність чисел
    if(typeof arguments[i] === "number"){
      k = k + 1;
    }
  } 
  if(k > 0){
    for(var i = 0; i < arguments.length; i++){
      if(typeof arguments[i] === "number"){
        dob = dob * arguments[i];
        k += 1;
      }
    }  
    return dob; 
  }else{
    return 0;
  }
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0