"use strict"

function maxS(a){
  var max = 0;
  for(var key in a){
    if(a[key] > max){
      max = a[key];
    }
  }
  
  console.log("Max = " + max);
}

var salaries = {
  John: 100,
  Bill: 300,
  Mike: 250,
};

maxS(salaries);

var salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50,
};

maxS(salaries);