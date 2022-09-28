var arr = [];

var n = 12;
arr[0] = n;
console.log(arr[0]);

var str = "Hello";
arr[1] = str;
console.log(arr[1]);

arr[2] = (true || true);
console.log(arr[2]);

arr[3] = null;
console.log(arr[3]);

console.log("Size array = " + arr.length);

var a = prompt("Enter number", "12");
arr[4] = a;
console.log(arr[4]);
alert(a);


