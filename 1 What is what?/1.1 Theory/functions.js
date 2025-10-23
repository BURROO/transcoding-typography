// Functions are very powerful and allow us the write some logic, that can be used elswhere and can be execute multiple times



// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––– SIMPLE FUNCTION WITH MATH ––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// We can for example us a function to return a random number between 0 & 1 like so:
const getRandomNumber = () => Math.random();

// Note: Name function usually start with an active verb like: get, calculate or handle to hint at an action!

// If we run this it looks like:
getRandomNumber(); // this might return 0.1818 or 0.71939

// We can store the generated number in a new variable
const myRandomNumber = getRandomNumber();

// This variable will now allways entail the same number!
console.log(myRandomNumber); // -> Always the same number
console.log(getRandomNumber()); // -> Always a different number

// if we want a number between 0-100 we do like so:
const getRandomNumber100 = () => Math.random() * 100;

// If we want a number between 0 - 100 but without decimals, we can use round()
const getRandomNumber100NoDecimals = () => Math.round(Math.random() * 100);


// We can also calc the results of two functions:
const sumRandom = getRandomNumber() + getRandomNumber()



// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––– USING DATA & TIME + INTERVALS ––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// we can access the date object
const now = new Date();

// Inside the date we can access:
const year = now.getFullYear(); // 2025
const month = now.getDate();
const day = now.getDay();

// Time
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.milliseconds();

// We can format the time/date ourselfs:
const date = `${day}. ${month}. ${year}`;
const time = `${hours}:${minutes}:${seconds}:${milliseconds}`;


// We can also use built in functions from javascript
// Lets use setInterval, to display the time every second!
// Set interval has two poperties,
// 1. a function with our logic
// 2. time between each call of the function in milliseconds

// Make sure to add a comma in between
// 1000 = 1 second

setInterval(() => {
    // This part will be executed every second:

    const now = new Date()

    // Get current time 
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Let turn it into one string
    const timeString = `${hours}:${minutes}:${second}:${milliseconds}`

    // Print the time to the console, every second:
    console.log(timeString)

}, 1000)
