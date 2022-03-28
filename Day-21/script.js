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

// Level 2
//1
firstP.style.color = 'red'
secondP.style.backgroundColor = 'blue'
thirdP.style.fontSize = '24px'
fourthP.style.border = '1px solid #ccc'

//2
allP.forEach((title, i) => {
    if (i % 2 === 0) {
      title.style.color = 'green'
    } else {
      title.style.color = 'red'
    }
})

//3
firstP.innerHTML = '<h4>whats up</h4>'
secondP.className = 'no-way'
thirdP.id = 'good-job'
