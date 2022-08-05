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
    // squareBox.style.alignItems = 'center'
    squareBox.style.alignSelf = 'start'
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

function appendInformation (name, info) {
    const element = document.getElementById(name)
    let informationBox = document.createElement("div")

    informationBox.style.width = '12px'
    informationBox.style.height = '12px'
    informationBox.style.margin = '6px 0px 0px 6px'
    informationBox.style.backgroundImage = 'url("./assets/i.svg")'

    informationBox.onmouseover(() => {
        displayInfoModal(name, info, element)
    })
    element.appendChild(informationBox)
}

function displayInfoModal (name, info, element) {
    
}


gasData.opcodes.forEach(item => {
    calculateGasToSquares(item.gas, item.name, '#0091e6')
    if (item.information.length > 0) {
        appendInformation(item.name, item.information)
    }
})
gasData.contractCalls.forEach(item => {
    calculateGasToSquares(item.gas, item.name,  '#fa6132')
})