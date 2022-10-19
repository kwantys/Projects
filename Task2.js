//Стандартний
var car1 = {};
car1.model = "Opel";
car1.speed = 120;
car1.run = function(){
  console.log(car1.model + " їде зі швидкістю " + car1.speed + " км/год")
}
car1.stop = function(){
  console.log(car1.model + " зупинився");
}
car1.run();
car1.stop();  
//Масивів
var car2 = {};
car2["model"] = "Nissan";
car2["speed"] = 114;
car2["run"] = function(){
  console.log(car2.model + " їде зі швидкістю " + car2.speed + " км/год");
}
car2["stop"] = function(){
  console.log(car2.model + " зупинився");
}
car2.run();
car2.stop();
//Спрощений синтаксис створення
var car = {
  model: "BMW",
  speed: 180,
  run : function(){
    console.log(car.model + " їде зі швидкістю " + car.speed + " км/год");
  },
  stop : function(){
    console.log(car.model + " зупинився");
  }
};
car.run();
car.stop();
