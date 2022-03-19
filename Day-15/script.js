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
  set setHabitat(habitat) {
    this.habitats.push(habitat);
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

// Level 2
//1
class Dog extends Cat {
  constructor(name, age, color, legs, numberOfChildren, habitats) {
    super(name, age, color, legs);
    this.numberOfChildren = numberOfChildren;
    this.habitats = habitats;
  }
  getInfo() {
    return `Name: ${this.name} \nHabitats: ${this.habitats}`;
  }
}
let dog = new Dog("Dog", 5, "black", 4, 0, "Garden");
console.log(dog.getInfo());

// Level 3
//1
class Statistics {
  constructor(data) {
    this.data = data;
  }
  count() {
    return this.data.length;
  }
  sum() {
    return this.data.reduce((acc, cur) => (acc += cur));
  }
  min() {
    return Math.min(...this.data);
  }
  max() {
    return Math.max(...this.data);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  median() {
    let val = Math.round((this.count() - 1) / 2);
    return this.data.sort((a, b) => a - b)[val];
  }
  mode() {
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
    return max;
  }
  var() {
    let mean = this.mean();

    return (
      Math.ceil(
        (this.data.reduce((acc, cur) => (acc += (cur - mean) ** 2)) /
          this.count()) *
          2
      ) / 2
    );
  }
  std() {
    return Math.sqrt(this.var()).toFixed(1);
  }
  freqDist() {
    // I dont know how to calculate frequency distribution
  }
  describe() {
    return `Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: ${this.mode()}
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${this.freqDist()}`;
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);

console.log(`Count: ${statistics.count()}`);
console.log(`Sum: ${statistics.sum()}`);
console.log(`Min: ${statistics.min()}`);
console.log(`Max: ${statistics.max()}`);
console.log(`Range: ${statistics.range()}`);
console.log(`Mean: ${statistics.mean()}`);
console.log(`Median: ${statistics.median()}`);
console.log(`Mode: ${statistics.mode()}`);
console.log(`Variance: ${statistics.var()}`);
console.log(statistics.describe());

//2
class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = [0];
    this.expenses = [0];
  }
  totalIncome() {
    let totalIncome = 0;

    for (let income of this.incomes) {
      totalIncome += income;
    }

    return totalIncome;
  }
  totalExpense() {
    let totalExpense = 0;

    for (let expense of this.expenses) {
      totalExpense += expense;
    }

    return totalExpense;
  }
  accountInfo() {
    return `First Name: ${this.firstName} \nLast Name: ${
      this.lastName
    } \nTotal Income: ${this.totalIncome()} \nTotal Expense: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`;
  }
  addIncome(amount) {
    this.incomes.push(amount);
    return `$${amount} added to incomes`;
  }
  addExpense(amount) {
    this.expenses.push(amount);
    return `$${amount} added to expenses`;
  }
  accountBalance() {
    let incomes = this.totalIncome(),
      expenses = this.totalExpense(),
      balance = incomes - expenses;

    return balance;
  }
}

const personAccount = new PersonAccount("Jane", "Doe");
console.log(personAccount);
console.log(personAccount.addIncome(5000));
console.log(personAccount.addIncome(7000));
console.log(personAccount.addExpense(300));
console.log(personAccount.addExpense(150));
console.log(personAccount.accountInfo());
