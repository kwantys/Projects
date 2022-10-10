function min(val){
    var min = val[0];
    for(var i = 0; i < val.length; i++ ){
      if(val[i] < min){
        min = val[i];
      }
    }
    console.log("min = " + min);
}

var numbers = [4,1,2,-5];

min(numbers);