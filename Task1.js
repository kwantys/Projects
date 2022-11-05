"use strict"
function addTwoDays(date){
  return date.getDate() + 2;
}

var myDate = new Date();
console.log("сьогоднішня дата: " + myDate.getDate());
console.log("дата через два дні: " + addTwoDays(myDate));
