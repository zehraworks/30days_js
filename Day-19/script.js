// Level 1
// 1
function outerFunction() {
  let counter = 0;
  function innerFunction() {
    counter++;
    return counter;
  }
  return innerFunction;
}

const result = outerFunction();
console.log(result());
console.log(result());
console.log(result());

// Level 2
//1
function start() {
  let number = 0;
  setTimeout(function () {
    console.log(number++);
    setTimeout(function () {
      console.log(number++);
      setTimeout(function () {
        console.log(number++);
      }, 100);
    }, 200);
  }, 300);
}
start();

// Level 3
//1
function personAccount(f, l) {
  let firstName = f,
    lastName = l,
    totalIncomes = 0,
    totalExpenses = 0,
    accountBalances = 0;

  const incomes = [0];
  const expenses = [0];

  function totalIncome() {
    for (let income of incomes) {
      totalIncomes += income;
    }
    return totalIncomes;
  }

  function totalExpense() {
    for (let expense of expenses) {
      totalExpenses += expense;
    }
    return totalExpenses;
  }

  function accountBalance() {
    totalExpenses = totalExpense();
    totalIncomes = totalIncome();

    return (accountBalances = totalIncomes - totalExpenses);
  }

  function addIncome(amount) {
    incomes.push(amount);
  }

  function addExpense(amount) {
    expenses.push(amount);
  }

  function accountInfo() {
    return `First name: ${firstName} \nLastname: ${lastName}`;
  }

  return {
    totalIncome: totalIncome,
    totalExpense: totalExpense,
    accountBalance: accountBalance,
    addIncome: addIncome,
    addExpense: addExpense,
    accountInfo: accountInfo,
  };
}

const person = personAccount("Jane", "Doe");

person.addExpense(500);
person.addExpense(100);
person.addExpense(30);
person.addIncome(800);
person.addIncome(200);
person.addIncome(850);

console.log(person.totalIncome());
console.log(person.totalExpense());
console.log(person.accountBalance());
console.log(person.accountInfo());