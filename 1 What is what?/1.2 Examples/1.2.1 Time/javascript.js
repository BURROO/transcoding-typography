// Coming soon…
const els = document.querySelectorAll("#container > div")

// Get all cells
const elTopLeft  = els[0]
const elTopRight = els[1]
const elBotLeft  = els[2]
const elBotRight = els[3]

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––– TOP LEFT ––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Goal: We want a counter, that counts every second we have had this website open
// and just counts endlessly

// Lets inject css styling directly with javascript
elTopLeft.style.fontSize = '300px'
elTopLeft.style.display = 'flex'
elTopLeft.style.alignItems = 'center'
elTopLeft.style.justifyContent = 'center'

let counter = 0

setInterval(() => {
    
    // we increase the counter for the next round
    counter++

    // We change the content of the div
    elTopLeft.innerHTML = counter
}, 1000)



// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––– TOP RIGHT –––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Lets handle css with Javascript
elTopRight.style.display = 'grid';
elTopRight.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
elTopRight.style.gridTemplateRows = '1fr 1fr';
elTopRight.style.gap = '1px';
elTopRight.style.fontSize = '100px';
elTopRight.style.width = '50vw';
elTopRight.style.height = '50vh';
elTopRight.style.background = 'black';

// Add children
// We do it dynamically and define the text-align value for each item!
const textAlignAllElements = [
    // // row 1
    // 'left', 'center', 'right',
    // // row 2
    // 'left', 'center', 'right',

    // row 1
    'right', 'right', 'right', 'right',
    // row 2
    'right', 'right', 'right', 'right',
]

textAlignAllElements.forEach((textAlign) => {

    // Create a div and add it as Child
    const div = document.createElement('div')
    div.style.textAlign = textAlign
    div.style.background = "white"


    elTopRight.appendChild(div)
})

setInterval(() => {
    // Handle time

    const now = new Date()

    // Get current data 
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    // Get current Time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Get each snippet in a different element
    elTopRight.childNodes[0].innerHTML = year
    elTopRight.childNodes[1].innerHTML = month
    elTopRight.childNodes[2].innerHTML = day
    // elTopRight.childNodes[2].innerHTML = day
    elTopRight.childNodes[4].innerHTML = hours
    elTopRight.childNodes[5].innerHTML = minutes
    elTopRight.childNodes[6].innerHTML = seconds
    elTopRight.childNodes[7].innerHTML = milliseconds


},10)

// Now add the right value to each child

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––– BOTTOM LEFT –––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = 'abcdefghijklmnopqrstuvwxy'
const figures = '0123456789'
const specialChars = '.,-ß?$%&/()@*'

const charPools = [
    uppercase,
    lowercase,
    figures,
    specialChars
]

// For each iteration, we create a password of the length of
const passwordLength = 12

// We want the password to include at least on of char of each group
// So lets add track this:


elBotLeft.style.display = "flex"
elBotLeft.style.alignItems = "center"
elBotLeft.style.justifyContent = "center"
elBotLeft.style.fontSize = "100px"

setInterval(() => {
    let password = ''

    for(let i = 0; i < 12; i++){

        // now for simplicity, we switch the pool at every iteration, we can do that using Modulo
        const poolIndex = i % charPools.length // will always print 0-3 if charPool is 4!

        // Pick a pool (first, second, third, fourth and first again…)
        const pickedPool = charPools[poolIndex]

        // Check the amount of characters in our pool
        const currentPoolSize = pickedPool.length

        // Pick a random char in the current pool
        const randomCharIndex = Math.floor(currentPoolSize * Math.random())

        // 
        const randomCharacter = pickedPool[randomCharIndex]

        password += randomCharacter
    }

    // If we want more randomness and prevent the password 
    // to always start with an uppercase letter, 
    // we can mess with the order:
    password = password.split("").sort((a, b) => 0.5 - Math.random()).join("")

    elBotLeft.innerHTML = password
}, 1000)

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––– BOTTOM RIGHT ––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Fun experiment
// showing the mouse position


elBotRight.style.fontSize = "30px"


window.onmousemove = (e) => {

    const x = e.clientX;
    const y = e.clientY;

    elBotRight.innerHTML = `Your Cursor is at ${x}px to the left and ${y}px to the top!`
}