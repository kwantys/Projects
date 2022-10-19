'use strict'
var tv = {
  currentChannel: 1,
  nextChannel: function(a){
    return a + 1;
  },
  previousChannel: function(a){
    if(a > 0){
    return  a - 1;
    }else{
      return Error;
    }
  },
  setChannel: function(number){
    if(number > 0){
      return number;
    }else{
      return Error;
    }
  }
};

var channel;

channel = tv.currentChannel;
console.log(channel);
channel = tv.nextChannel(channel);
console.log(channel);
channel = tv.previousChannel(channel);
console.log(channel);
console.log(tv.setChannel(1));







