const gasData = require('./gasData')

function calculateGasToSquares (gas, name, color) {
    // one square = 2000 units of gas
    let numOfSqaures = Math.floor(gas / 2000)
    let remainder = gas % 2000
    addSquaresToDOM(name, numOfSqaures, remainder, color)
}

function addSquaresToDOM (elementID, squares, remainder, color) {
    const element = document.getElementById(elementID)
    let squareBox = document.createElement("div")
    squareBox.style.display = 'flex'
    squareBox.style.alignItems = 'center'
    squareBox.style.alignSelf = 'center'
    squareBox.style.flexWrap = 'wrap'
    squareBox.style.maxWidth = '100px'
    // squareBox.style.flexDirection = 'row-reverse'
    squareBox.style.marginRight = '5px'
    for (let i = 0; i < squares; i++) {
        let newSquare = square(10, color);
        squareBox.appendChild(newSquare)
    } 
    // scoped for legibility, create the remainder square
    {
        const division = (remainder / 20)
        const remainderWidth = (division * 10) / 100
        if (remainderWidth > 0) {
            const remainderSquare = remainderWidth < 1 ? square(1, color) : square(remainderWidth, color)
            squareBox.appendChild(remainderSquare)
        }
    }
    element.prepend(squareBox)
}

function square (width, color) {
    let square = document.createElement("div")
    square.style.width = `${width}px`
    square.style.height = '10px'
    square.style.margin = '1px'
    square.style.backgroundColor = color
    square.style.display = "block"
    return square;
}


gasData.opcodes.forEach(item => {
    calculateGasToSquares(item.gas, item.name, '#0091e6')
})
gasData.contractCalls.forEach(item => {
    calculateGasToSquares(item.gas, item.name, '#fa6132')
})