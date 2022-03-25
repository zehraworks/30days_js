// Level 1
// 1
function outerFunction() {
    let counter = 0
    function innerFunction() {
        counter++
        return counter
    }
    return innerFunction
}

const result = outerFunction()
console.log(result())
console.log(result())
console.log(result())
