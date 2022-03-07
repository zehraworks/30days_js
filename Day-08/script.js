//Level 1
// 1
const dog = {};

// 2
console.log(dog);

// 3
dog.name = "Karabaş";
dog.legs = 4;
dog.color = "Gold";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};

// 4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

//5
dog.breed = "Golden";
dog.getDogInfo = function () {
  let name = this.name,
    legs = this.legs,
    color = this.color,
    age = this.age,
    breed = this.breed;

  return `It name is ${name} and it is ${age} years old. It has a ${legs} legs. It is ${breed} breed and it color is ${color}.`;
};

console.log(dog.getDogInfo());
