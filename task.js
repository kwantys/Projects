"use strict"
function CreateMP3(name, color, volume){
    this.name = name;
    this.color = color;
    this.volume = volume,
    this.info =  function(){
      console.log("name: " + this.name + " color: " + this.color + " volume = " + this.volume);
    };
    this.start =  function(){
      console.log("починає грати музика");
    };
    this.stop =  function(){
      console.log("музика не грає");
    };
    this.addVolume=  function (){
      if(this.volume < 100){
        return this.volume + 1;
      }else{
        return this.volume;
      }
    };
    this.downVolume = function(){
      if(this.volume > 0){
        return this.volume - 1;
      }else{
        return this.volume;
      }
    };
  }

var MP3_1 = new CreateMP3("host","red", 12);
MP3_1.info();
MP3_1.start();
console.log(MP3_1.addVolume());
MP3_1.stop();