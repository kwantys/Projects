"use strict"
function bind(func, context) {
  return function(){
    var key = Date.now().toString();
    context[key] = func;
    var result = context[key]();
    delete context[key];
    return result;
  }
}
function func() {
  console.log(this.name + " - " + this.age);
}
var user = {
  name: "Tom",
  age: 20,
};
var f = bind(func, user);
f(); // "Tom – 20"