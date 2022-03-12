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

//Level 3
// 1
const personAccount = {
  firstName: "Jane",
  lastName: "Doe",
  incomes: [0],
  expenses: [0],
  totalIncome: function () {
    let totalIncome = 0;

    for (let income of this.incomes) {
      totalIncome += income;
    }

    return totalIncome;
  },
  totalExpense: function () {
    let totalExpense = 0;

    for (let expense of this.expenses) {
      totalExpense += expense;
    }

    return totalExpense;
  },
  accountInfo: function () {
    return `First Name: ${this.firstName} \nLast Name: ${
      this.lastName
    } \nTotal Income: ${this.totalIncome()} \nTotal Expense: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`;
  },
  addIncome: function (amount) {
    this.incomes.push(amount);
    return `$${amount} added to incomes`;
  },
  addExpense: function (amount) {
    this.expenses.push(amount);
    return `$${amount} added to expenses`;
  },
  accountBalance: function () {
    let incomes = this.totalIncome(),
      expenses = this.totalExpense(),
      balance = incomes - expenses;

    return balance;
  },
};

console.log(personAccount.addIncome(50));
console.log(personAccount.addIncome(500));
console.log(personAccount.addIncome(230));
console.log(personAccount.addExpense(100));
console.log(personAccount.addExpense(115));
console.log(personAccount.addExpense(15));

console.log(personAccount.accountInfo());

//2
const usersDB = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(username, email, password) {
  const charset = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "y",
    "z",
    "q",
    "w",
    "x",
  ];

  const date = new Date();

  let day = date.getDate().toString();
  day = day.length == 1 ? `0${date.getDate()}` : date.getDate();
  let month = (date.getMonth() + 1).toString();
  month =
    month.length == 1 ? `0${date.getMonth() + 1}` : date.date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours().toString();
  hour = hour.length == 1 ? `0${date.getHours()}` : date.getHours();
  let minute = date.getMinutes().toString();
  minute = minute.length == 1 ? `0${date.getMinutes()}` : date.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";

  let _id = "",
    createdAt = `${day}/${month}/${year} ${hour}:${minute} ${ampm}`,
    isLoggedIn = false,
    random = 0,
    error = 0;

  for (let i = 0; i < 6; i++) {
    random = Math.round(Math.random() * (charset.length - 1));
    _id += charset[random];
  }

  for (let user of usersDB) {
    if (
      user._id === _id ||
      user.email === email ||
      user.username === username
    ) {
      error += 1;
    }
  }

  if (error === 0) {
    usersDB.push({
      _id: _id,
      username: username,
      email: email,
      password: password,
      createdAt: createdAt,
      isLoggedIn: isLoggedIn,
    });
    console.log("The user created");
  } else {
    console.log("The user has already been created");
  }
}

console.log(usersDB);
signUp("jane", "jdoe@gmail.com", "123456");
signUp("jane", "jdoe@gmail.com", "123456");
console.log(usersDB);

function signIn(username, password) {
  let error = 0,
    id;

  for (let user of usersDB) {
    if (user.username === username && user.password === password) {
      error += 1;
      user.isLoggedIn = true;
      id = user._id;
    } else if (user.email === username && user.password === password) {
      error += 1;
      user.isLoggedIn = true;
      id = user._id;
    }
  }

  if (error !== 0) {
    return id;
  } else {
    return "Couldn't sign in";
  }
}

console.log(signIn("jane", "123456"));

//3
function rateProduct(username, password, productId, rate) {
  let login = signIn(username, password);

  if (login !== false) {
    for (let product of products) {
      if (product._id === productId) {
        product.ratings.push({
          userId: login,
          rate: rate,
        });
      }
    }
  }

  return products;
}

console.log(rateProduct("jdoe@gmail.com", "123456", "eedfcf", 2));

function averageRating(productId) {
  for (let product of products) {
    if (product._id === productId) {
      let total = 0;

      for (let rate of product.ratings) {
        total += rate.rate;
      }

      return (total / product.ratings.length).toFixed(1);
    }
  }
}

console.log(averageRating("eedfcf"));

//4
function likeProduct(productId, userId) {
  for (let product of products) {
    if (product._id === productId) {
      if (product.likes.includes(userId)) {
        let index = product.likes.indexOf(userId);
        product.likes.splice(index, 1);
        return `#${userId} user unlike to #${productId} product`;
      } else {
        product.likes.push(userId);
        return `#${userId} user like to #${productId} product`;
      }
    }
  }
}

console.log(likeProduct("hedfcg", "eedfcf"));
console.log(likeProduct("hedfcg", "eedfcf"));
console.log(products);
