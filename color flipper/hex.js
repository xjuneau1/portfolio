
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B',
'C', 'D', 'E', 'F']
const colors = ["green", "red", "rgba(133,122,200)",
"#f1f5f8", 'coral', 'purple', 'blue', 'rgba(103,54,176)']
const cssColors = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond',
'Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk',
'Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGrey','DarkGreen','DarkKhaki','DarkMagenta',
'DarkOliveGreen','DarkOrange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkSlateGrey']

const btnEl = document.getElementById('btn')
const color = document.querySelector('.color')

const navBtn = document.getElementById("nav-btn")
const input = document.getElementById("input")
let inputValue = ''

const open = document.getElementById("open")
const list = document.getElementById("list-container")
const close  = document.getElementById("close")

const listColors = document.getElementById("list-colors")
const listHex = document.getElementById("list-hex")
const refresh = document.getElementById("refresh")

//Sets the text of 'Background Color : ' and changes to color of the background
btnEl.addEventListener('click', function(){
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomElement()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

//Refreshses the list of Hex values
refresh.addEventListener("click", function(){
    listHex.innerHTML = ''
    listHexMultiple()
    listColors.innerHTML = ''
    listColorsMultiple()
})

//Generates a random number for a reference to an element in the Hex array
function getRandomElement(){
    return Math.floor(Math.random()*hex.length)
}

function getRandomColor(){
    return Math.floor(Math.random()*cssColors.length)
}

//Takes input from the user and sets the text of 'Background Color : ' and 
//changes the color of the background 
navBtn.addEventListener("click", function(){
    inputValue = input.value.replace(/\s+/g, '')
    input.value = ''
    document.body.style.backgroundColor = inputValue
    color.textContent = inputValue
})

//Controls the opening and closing of the colors and hex codes list
open.addEventListener("click", function() {
    list.classList.add('show')
})

close.addEventListener("click", function() {
    list.classList.remove('show')
})

//Calls the Hex values for creating a list 6 times
function listHexMultiple(){
    for (let i =0; i<6; i++){
        listHexValues()
    }
}

//Creates an html li element with the randomly generated hex value
function listHexValues(){
    let hexValue = '#'
    for(let i = 0; i < 6; i++){
        hexValue += hex[getRandomElement()]
    }
    listHex.innerHTML += `
            <li>${hexValue}</li>      
        `
}
//Call the function at least once so when the user opens the list
//hex values have already populated the list
listHexMultiple()

//Calls the cssColor elements for creating a list 6 times
function listColorsMultiple(){
    for (let i =0; i<6; i++){
        listOfColors()
    }
}
//Creates an html li element with the randomly selected color
function listOfColors(){
    let colors = ''
    for(let i = 0; i < 1; i++){
        colors += cssColors[getRandomColor()]
    }
    listColors.innerHTML += `
            <li>${colors}</li>      
        `
}
//Call the function at least once so when the user opens the list
//colors have already populated the list
listColorsMultiple()
