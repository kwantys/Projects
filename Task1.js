"use strict"
function createMP3(name, color, volume){
  return {
    name: name,
    color: color,
    volume: volume,
    song : ["a", "b", "c", "d"],
    info: function(){
      console.log("name: " + this.name + " color: " + this.color + " volume = " + this.volume);
    },
    start: function(){
      console.log("починає грати музика")
    },
    stop: function(){
      console.log("музика не грає");
    },
    addVolume: function (){
      this.volume++;
      if(this.volume <= 100){
        console.log("volume: " + this.volume);
      }else{
        console.log("volume: Неможливо збільшити гучність" );
      }
    },

    downVolume: function(){
      this.volume--;
      if(this.volume >= 0){
        console.log("volume: " + this.volume);
      }else{
        console.log("volume: Неможливо зменшити гучність");
      }
    },
    song1: function(number){
        for(var i = 0; i < this.song.length; i++){
            if( i + 1 == number){
              console.log("music: " + this.song[i]);
              break;
            }
        }
    }
  }
}

var MP3_1 = createMP3("host","red", 99);
MP3_1.info();
MP3_1.start();

MP3_1.addVolume();
MP3_1.addVolume();

MP3_1.downVolume();
MP3_1.downVolume();

MP3_1.song1(4);
MP3_1.stop();