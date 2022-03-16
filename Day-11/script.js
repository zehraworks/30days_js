//Level 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
//1
let [e, pi, gravity, bodyTemp, boilingTemp] = constants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

//2
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

//3
let { width, height, area } = rectangle;
console.log(width, height, area);

//Level 2
//1
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

//2
for (const { name, skills } of users) {
  if (skills.length < 2) {
    console.log(name);
  }
}

//Level 3
//1
for (let { name, capital, population, languages } of countriesAll) {
  console.log(name, capital, population, languages);
}

//2
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;
const [, , jsScore, reactScore] = scores;
console.log(name, skills, jsScore, reactScore);

//3
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (array) => {
  let result = array.map((element) => {
    const [name, skills, scores] = element;
    return {
      name: name,
      skills: skills,
      scores: scores,
    };
  });
  return result;
};
console.log(convertArrayToObject(students));

//4
const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const newStudent = { ...student2 };
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");

console.log(newStudent);
