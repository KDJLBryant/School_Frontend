let index = 0
let inputNum = 1
let maxNumber = 0
let minNumber = 0
const limit = document.getElementById('limit')
const input = document.getElementById('input')

const onButtonClick = (event) => {
    if (event === 'Plus') {
        index = index + inputNum
    } else if (event === 'Minus') {
        index = index - inputNum
    }
    console.log(index)

    if (index < minNumber || index > maxNumber) {
          document.getElementById('boom').innerText = 'Boom'
    } else {
        document.getElementById('boom').innerText = ''
    }
}

const saveToLocalStorage = () => {
    localStorage.setItem('index', index)
    localStorage.setItem('maxNumber', maxNumber)
    localStorage.setItem('minNumber', minNumber)
    localStorage.setItem('inputNum', inputNum)
    console.log('Saved number: ', index)
}

const getFromLocalStorage = () => {
    index = parseInt(localStorage.getItem('index'))
    maxNumber = parseInt(localStorage.getItem('maxNumber')) 
    minNumber = parseInt(localStorage.getItem('minNumber'))
    inputNum = parseInt(localStorage.getItem('inputNum'))
    document.getElementById('limit').value = maxNumber
    document.getElementById('input').value = inputNum
    console.log('Loaded number: ', index)
}

limit.addEventListener('input', event => {
    maxNumber = limit.value
    minNumber = -(maxNumber)
    console.log(maxNumber)
    console.log(minNumber)
})

input.addEventListener('input', event => {
    inputNum = parseInt(input.value)
})