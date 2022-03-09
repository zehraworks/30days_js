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

//Level 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1
let keys = Object.keys(users);
let sLengthArr = [];
for (let i = 0; i < keys.length; i++) {
  let s = users[keys[i]].skills;
  sLengthArr.push(s.length);
}
let index = sLengthArr.indexOf(Math.max(...sLengthArr));
console.log(keys[index]);

//2
const logins = [];
const points = [];

for (let [key, values] of Object.entries(users)) {
  if (values.isLoggedIn === true) {
    logins.push(key);
  }
  if (values.points >= 50) {
    points.push(key);
  }
}
console.log(logins);
console.log(points);

//3
const mern = [];
for (let [key, values] of Object.entries(users)) {
  let s = values.skills;
  switch (true) {
    case s.includes("MongoDB") &&
      s.includes("Express") &&
      s.includes("React") &&
      s.includes("Node"):
      mern.push(key);
      break;
  }
}
console.log(mern);

//4
const newUsers = Object.assign({}, users);
newUsers["Jane"] = {};

console.log(newUsers);

//5
const allKeys = Object.keys(users);
console.log(allKeys);

// 6
const allValues = Object.values(users);
console.log(allValues);

//7
const countries = {
  Palestine: {
    capital: "Jerusalem",
    populations: 4400000,
    languages: ["Arabic"],
  },
};
console.log(countries);
