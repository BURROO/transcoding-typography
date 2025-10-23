// A


// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// –––––––––––––––– ccessing elements inside a website (html) –––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// In context of a website, javascript has access two other objects, like
// – document
// – window

// Document
// – allows us to have access to all elements inside the html file
// - we can delete elements
// - we can add elements
// - we can change elements
// – we can change content
// … we can change their appearance with CSS!

// Window
// – we can access the current size of the browser window

// With both Document & Window, we can listen to interactions like
// – observe  the change of the window size by the user
// – we can observe to scrolling
// – we can do interactive things on click, hover, typing, etc…


// Lets get the window size for a start:
const width = window.innerWidth;
const height = window.innerHeight;


// We can track the mouse position and log the position to the console:
window.onmousemove = (e) => {

    // From our "event" we want to get the x and y positon of the cursor:
    const x = e.clientX;
    const y = e.clientY;

    console.log(`Your mouse course is ${x}pixels away from the left border and ${y} pixels away from the top border`)
}



// More coming…