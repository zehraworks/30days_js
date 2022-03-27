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

// level 2
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
