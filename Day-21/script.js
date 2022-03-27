// Level 1
//1
const firstP = document.querySelector('p')
console.log(firstP)

//2
const secondP = document.getElementById('second-p')
const thirdP = document.getElementById('third-p')
const fourthP = document.getElementById('fourth-p')

console.log(secondP)
console.log(thirdP)
console.log(fourthP)

//3
const allP = document.querySelectorAll('p')
console.log(allP)

//4
allP.forEach(text => console.log(text.innerText))

//5
allP[3].textContent = 'Fourth Paragraph'
console.log(fourthP)

//6
firstP.setAttribute('class', 'new-class')
allP[1].setAttribute('class', 'new-class')
thirdP.classList.add('title', 'new-class')
