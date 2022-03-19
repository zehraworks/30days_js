// Level 1
//1
class Animal {
  constructor(name, age, color, legs, numberOfChildren, habitats) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.numberOfChildren = 0;
    this.habitats = [];
  }
  get getNumberOfChildren() {
    return this.numberOfChildren;
  }
  get getHabitat() {
    return this.habitats;
  }
  set setNumberOfChildren(numberOfChildren) {
    this.numberOfChildren += numberOfChildren;
  }
  set setHabitat(habitats) {
    this.habitats.push(habitats);
  }
  getInfo() {
    return `Name: ${this.name} \nAge: ${this.age} \nColor: ${this.color} \nLegs: ${this.legs}`;
  }
}
const animal = new Animal("Zebra", 10, "black & white", 4);
console.log(animal);
animal.setHabitat = "Savanna";
animal.setNumberOfChildren = 8;
console.log(animal.getHabitat);
console.log(animal.getNumberOfChildren);
console.log(animal.getInfo());

const animal2 = new Animal("Bird", 2, "yellow", 2);
animal2.setHabitat = "Nature";
animal2.setHabitat = "Cage";
animal2.setNumberOfChildren = 4;
console.log(animal2.getHabitat);
console.log(animal2.getNumberOfChildren);
console.log(animal2.getInfo());

//2
class Cat extends Animal {
  constructor(name, age, color, legs, numberOfChildren, habitats) {
    super(name, age, color, legs);
    this.numberOfChildren = numberOfChildren;
    this.habitats = habitats;
  }
}
const cat = new Cat("Cat", 3, "gray", 4, 7, "street");
console.log(cat);
console.log(cat.getInfo());
