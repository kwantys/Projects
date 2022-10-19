function isEmpty(obj){
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      return false;
    }
  }
  return true;
}
var opa = {
  //name: "Kler"
};
console.log(isEmpty(opa));