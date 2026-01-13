// this document saves the data for the design


// We can structure our data how we want
// The data has to represent the data that we want to render on the screen, 
// so we can make changes to it or save it and edit it.
// Everything that is drawn to the canvas becomes pixel data, which can not be easliy edited


// In the layout data, we should save the position and info about everything we 
// draw/render to the canvas.

// This way we can also do things like erase or undo changes, 
// we could also apply effects or we can change the position of elements to create a new layout
// If we draw directly to the canvas, without storing it as data, we can not manipulate the layout afterwards.

// Our layout start with two images, which are placed on the canvas
// 
const layout = {
    config: {
        // Specific features
        filter: {
            invert: false, // render canvas negative?
            // …
        }
    },
    elements: [
        { 
            id: '1', // an ide is automatically given to easier selected an edit elements
            type: 'img', // type is given to check what element we are dealing with when rendering to canvas
            x: 0, // horizontal possition
            y: 0,  // vertical position
            src: `./images/cat.webp`, // file source
        },
        { 

            id: '2',
            type: 'img',
            x: 200,
            y: 120,
            src: `./images/graphic-1.png`,
        }
    ],
    // OPTIONAL: This can be implemented later on…
    // we store every action, so that we can later handle the history of every element!
    actions: [
        // 
        { type: 'add', id: '1', x: 0, y: 0 }, // We can late return by removing the element from the history
        { type: 'add', id: '2', x: 0, y: 0 },
        { type: 'move', id: '2', x: 200, y: 120 },
    ]
}

