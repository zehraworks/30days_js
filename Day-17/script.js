// Level 1
//1
console.log(localStorage.setItem("firstName", "Jane"));
console.log(localStorage.setItem("lastName", "Doe"));
console.log(localStorage.setItem("age", 30));
console.log(localStorage.setItem("country", "New Zealand"));
console.log(localStorage.setItem("city", "Auckland"));

// Level 2
//1
const student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  isMarried: false,
  skills: ["HTML", "CSS", "JS", "React", "Node", "PHP"],
};

const studentJSON = JSON.stringify(student, undefined, 2);
console.log(localStorage.setItem("student", studentJSON));
