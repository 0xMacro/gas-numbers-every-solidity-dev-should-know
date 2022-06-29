const gasData = require('./gasData')

function calculateGasToSquares (gas, name) {
    // one square = 2000 units of gas
    let numOfSqaures = Math.floor(gas / 2000)
    let remainder = gas % 2000
    addSquaresToDOM(name, numOfSqaures, remainder)
}

function addSquaresToDOM (elementID, squares, remainder) {
    console.log(elementID)
    const element = document.getElementById(elementID)
    console.log(element)
}

gasData.opcodes.forEach(item => {
    calculateGasToSquares(item.gas, item.name)
})