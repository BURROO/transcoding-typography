

// Now we manipulate the DOM (Document Object Model)
// With DOM, we can change contents and looks of html elements or even add new Elements


// Always check in the console quickly if your script loads
console.log("Let’s manipulate …")

// Accessing the DOM

// First we want to get the access to the element with the id "wrapper"
// To later access it, we store the element in a const variable 
const wrapper = document.getElementById("wrapper")


// Now we add content and change the font size
wrapper.innerHTML = "Hello"
wrapper.style.fontSize = "200px"
wrapper.style.fontFamily = "Helvetica"


// Now to play around, we add some random words that shuffles the text
// to create random sentences
const randomsWordsList = ["Have", "a", "nice", "day", "good", "silly", "Hat", "Tree", "have", "give"]


// Idea: Every Second we change the word and for that we pick a random word
// We can use the function «setInterval» to create this effect:

setInterval(() => {

    // At every iteration we pick any word in our list
    // 1. First we get a random index
    const randomNumber = randomsWordsList.length * Math.random() // For instance 3.1251225
    // Explaination: Math is an Object we have access to in Javascript and it helps us to compute tasks.
    // > the .random() function gives us a random number between 0 and 1
    // > multiplying it with the length of the word list, gives us a number between 0 and the length of the array list
    // But to choose an index in the list, we need an absolute number without decimals, so we need to round the number
    // For this we use the functon caled .floor() in the math object
    const randomIndex = Math.floor(randomNumber); // For Instance "3"

    const newWord = randomsWordsList[randomIndex]

    wrapper.innerHTML = newWord

    // ––––––––––––––––––––––––––––––––––––

    // We can also change the color for instance
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    // > Note: String insertion
    // We can use javascript variables inside a string if we use backticks
    // We then need to mark the variable inside with a dollar sign and wrap it inside curly brackets, like so:
    wrapper.style.background = `rgb(${r}, ${g}, ${b})` // for example: "rgb(234, 34, 235)"

}, 1000) // 1000 milliseconds = 1 second