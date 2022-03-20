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

// Level 3
//1
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

personAccount.addIncome(50);
personAccount.addIncome(500);
personAccount.addIncome(230);
personAccount.addExpense(100);
personAccount.addExpense(115);
personAccount.addExpense(15);

const personAccountJSON = JSON.stringify(personAccount, undefined, 4);
console.log(localStorage.setItem("personAccount", personAccountJSON));
