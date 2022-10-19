var MP3 = {
  volume: 0,
  song: ["ascsc", "aqwq", "reffr"],
  start: function(){
    console.log("починає грати музика")
  },
  stop: function(){
    console.log("музика не грає");
  },
  addVolume: function (a, b){
    console.log(a + b);
  },
  downVolume: function(b){
    console.log(MP3.volume - b);
  },
  switchSong: function(a){
    switch (a){
      case "+":
        console.log(MP3.song[2]);
        break;
      case "-":
        console.log(MP3.song[0]);
        break;
      default :
        console.log(MP3.song[1]);   
        break; 
    }
  }
};

var volume;
volume = MP3.volume;

MP3.start();
volume  = MP3.addVolume(volume, 4);

MP3.switchSong('+');
MP3.stop();
