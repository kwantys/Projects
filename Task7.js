function sum(a){
  var sum = 0;
  for(var key in a){
    sum = a[key] + sum;
  }
  
  console.log("Sum = " + sum);
}

var salaries = {
  John: 100,
  Bill: 300,
  Mike: 250
};
sum(salaries);

var salaries1 = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};
sum(salaries1);