// Lets create an array with all your «imagined» variable font axes inside

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––– FOR EACH LOOPS –––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


const axes = [
    // Axis 1: Font Weight
    {

        label: 'Font Weight',
        name: 'wght', // technical name!
        min: 100,
        max: 600,
        defaultValue: 200 // Lets set it to Regular initially…
    },
    // Axis 2: Font Width
    {

        label: 'Font Width',
        name: 'wdth', // technical name!
        min: 100,
        max: 400,
        defaultValue: 250 // Lets set it to Normal initially…
    },
    // Axis 3: Slanted Angle
    {

        label: 'Slant',
        name: 'slnt', // technical name!
        min: 0,
        max: 14,
        defaultValue: 0 // Lets set it to Regular initially…
    }
]



// For Each allows us, to easily run a function on each element in parallel
axes.forEach(axis => {

    // For a test we log each axis label to the console:
    // remember how we access the property "label" with the dot annotation
    console.log(axis.label)

    // -> After gthe whole loop has run, this will leave the following printed to the console:
    // FontWeight
    // Font Width
    // Slant
})

// We can also axes "index" inside the function, meaning a counter for each iteration
// Lets us this in praxis

// Notice how we acess index and also notice the extr parenthesis!
// -> Required if we axis multiple elements
// Position 1: always the iterated element
// Position 2: the counter of the iteration (index)
// We can chose the name of the variables; i choosed axis & index
axes.forEach((axis, index) => {

    // Index starts with 0, but in this case I start counting at 1, 
    // so I add +1
    const counter = index + 1
    // For a test we log each axis label to the console:
    // remember how we access the property "label" with the dot annotation
    console.log(`My ${counter}. Axis is called ${axis.label}`)

    // -> After gthe whole loop has run, this will leave the following printed to the console:
    // My 1. Axis is called Font Weight
    // My 2. Axis is called Font Width
    // My 3. Axis is called Slant
})


// EXPLORE: Of course inside the body of a forEach function, we can write anything we like.


// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––– MAP LOOPS ––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// The .map() function works very similar, but it can return a value!
// Previously we only printed something to the console inside the return
// but maybe ween need to manipulate a list and store the new date elswhere

// A made up scenario, let say I have a list of radi for multipl circles, 
// but maybe I want to turn it into a new format with more information

// Let say this array represents multiple radii
const radii = [10, 6, 200, 43, 50];

// We could calculate the
// – diameter
// – circumferrence (umfang)
// – area
// – random color

// With map, we can do it like so
const newDataSet = radii.map((radius) => {


    const diameter = radius * 2;
    const circumferrence = diameter * Math.PI;
    const area = Math.PI * (r * r)
    // Get rgb values
    const r = Math.floor(255 * Math.random())
    const g = Math.floor(255 * Math.random())
    const b = Math.floor(255 * Math.random())

    // Create the string (CSS Style)
    const color = `rgb(${r}, ${g}, ${b})`


    // Now we return all the data as an object
    return {
        radius: radius,
        diameter: diameter,
        circumferrence: circumferrence,
        area: area,
        color: color
    }

    // We can shorten it to (it returns the same result)
    // return {
    //     diameter,
    //     circumferrence,
    //     area,
    //     color
    // }
})

// Now our newDataset has the following data structure
// [
//     {
//         radius: 10,
//         diameter: 20,
//         circumferrence: 62.8218,
//         area: 314.159265,
//         color: 'rgb(129, 12, 203)'
//     },
//     { … },
//     { … },
//     { … },
// ]

// A new array with all our data generated…