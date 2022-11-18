"use strict"

var house = new SmartHouse("My house");
house.addDevice(new AirConditioning("LG"));
house.addDevice(new Lamp("first"));
house.addDevice(new Alarms("Bib bib"));
house.addDevice(new Windows("home"));
house.addDevice(new Clock("clock"));

var q = 0;
var change;
while(q < 3){
  house.getDeviceByName("Bib bib").checkPassword();
  console.log("Пароль правильний чи ні: " + house.getDeviceByName("Bib bib").getStatus());
  if(house.getDeviceByName("Bib bib").getStatus() == true){
    console.log("Зараз така година: " + house.getDeviceByName("clock").hours());
    console.log("Вікно закрите чи ні:"  + house.getDeviceByName("home").close());
    console.log("Кондиціонер уввімкнений чи ні: "+ house.getDeviceByName("LG").getStatus());
    house.getDeviceByName("LG").turnOffOn();
    console.log("Кондиціонер уввімкнений чи ні: "+ house.getDeviceByName("LG").getStatus());
    house.getDeviceByName("LG").setTemperature(30);
    console.log("Температрура в будинку: " +  house.getDeviceByName("LG").getTemperature());
    house.getDeviceByName("LG").setTemperature(31);
    console.log("Температрура в будинку: " +  house.getDeviceByName("LG").getTemperature());
    house.getDeviceByName("LG").turnOffOn();
    console.log("Кондиціонер уввімкнений чи ні: "+ house.getDeviceByName("LG").getStatus());

    console.log("Світло ввімкнене чи ні: " + house.getDeviceByName("first").getStatus());
    house.getDeviceByName("first").turnOffOn();
    console.log("Світло ввімкнене чи ні: " + house.getDeviceByName("first").getStatus());
    console.log("Яскравість освітлення:" + house.getDeviceByName("first").getBrightness() );
    house.getDeviceByName("first").setBrightness(45);
    console.log("Яскравість освітлення:" + house.getDeviceByName("first").getBrightness() );
    house.getDeviceByName("first").turnOffOn();
    console.log("Світло ввімкнене чи ні: " + house.getDeviceByName("first").getStatus());
    change = prompt("Enter new password", "Yes or No");
    if(change == "Yes"){
      house.getDeviceByName("Bib bib").changePassword("4321");
      console.log("Пароль змінений на: " + house.getDeviceByName("Bib bib").getPassword());
    }else{
      console.log("Пароль не змінено");
    }   
  }
  if(house.getDeviceByName("Bib bib").getStatus() == true){
    break;
  }
  q++;
}
