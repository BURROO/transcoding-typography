
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––– Variables & Static Data types –––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// In javascript everything we do an re-use is stored in a variable
// We can give it a name (ideally lowercase) and ther are a few rules
// – variable names can not have spaces in between
// - variable names can not start with a number
// – variable names can not include special characters, except underline

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––– CONST –––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// It is common to use camel case for variable, for separating word, like so
// myVariable > The first letter of a word is uppercase
const string = "Hello World!"

const courseName = "Transcoding Typography"
// We can also use single quotes or back ticks
const stringWithSingleQuotes = 'Transcoding Typography'
// Strings with Backticks will become helpful later on!!
const stringWithBackticks = `Transcoding Typography`


// We can also include variables inside a string with back ticks, like so
const introduction = `Welcome to my course: ${courseName}`

// Or another way to achieve the same is:
const goodbye = 'See you next week @' + courseName


// this is called «String cocatination»
// More: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––– LET ––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// "const" is a variable, that can not suddenly be changed.
// If we change the variable later on, we can use "let"

let afterThought = "I am not sure"

afterThought = "Actually, I am certain!"


// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––– A Variable can be anything ––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// A variable is essentially a «storage of data»
// We can different types of data in a variable

// NUMBER

const myFavoriteNumber = 7;

// We can also use math, the translates to a number
const anotherNumber = 5 + 10 * 2 // equals 10 (punkt for strich…)

// In javascript a number can be positive or negative and also can have multiple decimal numbers:
const negativeDecimal = -10.9183

// We can also use Math, that allows us access to things like Sinus, PI, Random, and other fun things
const radius = 10
const cirrcumference = 10 * 2 * Math.PI

const unknownNumber = Math.random() // This is a function because it needs to run to calculte a number, therefor we need to add the parenthesis to call it


// BOOLEAN • like a binary switch, either yes or no
const like = true
const dontLike = false

// ARRAY • an array is like a list of things
const collectionOfRandomStuff = ['Apple', 5, true, 123456789, Math.random()]

// In our case it will usually be a list of the same things, like all numbers, or all strings…
const favouriteFonts = ['Arial', 'Helvetica', 'Comic Sans']


// NOTE: Arrays are usually used with a loop:
// – we look through all objects and run some function over each element in parallel
// More in the loops.js file…



// Objects
// Note: Objects are ideal for data collections, 
// for instead when we have a variable font, and we want to store related information, like a excel sheet:
// – label: 'Weight'
// – name: 'wght'
// - min: 100
// - max: 600

// Inside the Object we can store anything we want, strings, numbers, booleans, arrays, other objects

// We can create our own Object
const axisInfo = {
    label: 'Weight',
    name: 'wght',
    min: 100,
    max: 600,
    value: 200,
}

// Inside an object, we can axes inner poperties with a '.' in between each level

// If we want to read the label name, wie can log it like so:
console.log(axisInfo.label)

// All though we are using a const, we can acutally change values inside the object, like so:
axisInfo.value = 350;


// Object can also be more complex and have multiple layers:
const font = {
    glyphs: {
        A: [
            0,0,1,0,0,
            0,1,0,1,0,
            0,1,0,1,0,
            1,1,1,1,1,
            1,0,0,0,1,
        ]
    }

}

// This is a sketch of the letter A represented with pixels, 0 meaning white and 1 meaning black
// If we want to access the data for the letter A, we can doe as such:
const letterA = font.glyphs.A
console.log(letterA)

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––– Variables & Static Data types –––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
