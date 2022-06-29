const gasData = require('./gasData')

function calculateGasToSquares (gas) {
    // one square = 2000 units of gas
    let numOfSqaures = Math.floor(gas / 2000)
    let remainder = gas % 2000
    console.log(gas, numOfSqaures, remainder)
}

gasData.opcodes.forEach(item => {
    calculateGasToSquares(item.gas)
})