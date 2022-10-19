var human = {
  human1 : {
    name : "Jonh",
    age: 28,
    experience: 1,
    languages: ["Java" ,"JavaSsript", "SQL"],
    print: function(){
      console.log("Name " + human.human1.name + " age " + human.human1.age + " experience " + human.human1.experience + " languages " + human.human1.languages );
    }
  },
  human2 : {
    name : "Bill",
    age: 30,
    experience: 5,
    languages: ["HTML" ,"CSS", "JavaScript"],
    print: function(){
      console.log("Name " + human.human2.name + " age " + human.human2.age + " experience " + human.human2.experience + " languages " + human.human2.languages );
    }
  },
  human3:{
    name : "Mike",
    age: 32,
    experience: 4,
    languages: ["Python" ,"SQL"],
    print: function(){
      console.log("Name " + human.human3.name + " age " + human.human3.age + " experience " + human.human3.experience + " languages " + human.human3.languages );
    }
  }
};
human.human1.print();
human.human2.print();
human.human3.print();

