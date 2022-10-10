var arr = [];

for(var i = 0; i <=2; i++){
  (function(iLocal){
    return (arr[iLocal] = function(){
      console.log(iLocal)
    })
  })(i)
}

arr[0](); // 0
arr[arr.length - 1]();//2