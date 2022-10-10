function digitN(k, n) {
   var arr = [];
   while(k > 0){
    arr[arr.length] = k % 10;
    k = parseInt(k / 10);
   }

   if(arr.length < n){
    console.log("Error");
   }

   console.log(arr[n - 1]);
}
digitN(1234, 4);