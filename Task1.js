"use strict"

function AudioPlayer(volume){
  this.__volume = 0;
  if(this.__volumeValid(volume)){
    this.__volume = volume;
  }
}

AudioPlayer.prototype.__volumeValid = function(volume){
  return volume >= 0 && volume <= 100;
}

AudioPlayer.prototype.setVolume = function(volume){
  if(this.__volumeValid(volume)){
    this.__volume = volume;
  }
}

AudioPlayer.prototype.getVolume = function(){
  return this.__volume;
}

AudioPlayer.prototype.volume = function(){
  if(this.volume == undefined){
    return this.__volume;
  }else{
    if(this.__volumeValid(this.volume)){
      this.__volume = volume;
    }
  }
}

var mp3 = new AudioPlayer(25);
console.log(mp3.getVolume());
mp3.setVolume(78);
console.log(mp3.getVolume());

