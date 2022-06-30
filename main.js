const gasData = require('./gasData')

function calculateGasToSquares (gas, name) {
    // one square = 2000 units of gas
    let numOfSqaures = Math.floor(gas / 2000)
    let remainder = gas % 2000
    addSquaresToDOM(name, numOfSqaures, remainder)
}

function addSquaresToDOM (elementID, squares, remainder) {
    const element = document.getElementById(elementID)
    let squareBox = document.createElement("div")
    squareBox.style.display = 'flex'
    squareBox.style.alignItems = 'center'
    squareBox.style.flexWrap = 'wrap'
    squareBox.style.maxWidth = '100px'
    // squareBox.style.flexDirection = 'row-reverse'
    squareBox.style.marginRight = '5px'
    for (let i = 0; i < squares; i++) {
        let newSquare = square(i * 10, 0);
        console.log('new square: ', newSquare)
        squareBox.appendChild(newSquare)
    } 
    element.prepend(squareBox)
}

function square (x, y) {
    let square = document.createElement("div")
    square.style.width = '10px'
    square.style.height = '10px'
    square.style.border = '1px solid #FFFFFF'
    square.style.backgroundColor = '#FF0000'
    square.style.display = "block"
    return square;
}

gasData.opcodes.forEach(item => {
    calculateGasToSquares(item.gas, item.name)
})