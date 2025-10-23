
// Accessing the preview Element
const preview = document.getElementById("preview");
// ••••• REMOVED *******
// const controlGrvt = document.getElementById("control-grvt");
// const controlRada = document.getElementById("control-rada");

// ***** NEW PART *****
// We can acces the aside tag with the quereySelector function
const controls = document.querySelector("aside")

// ***** NEW PART *****

// We add the input fields with javascript automated instead

// First we add all the axis with their right name inside an array
// This way we can also easily add a third axis and the rest of the code would still work!
// To undestand this part of code, check the  Data Types & Loops in  Chapter 1: What is what !
const axes = [
    // We need the following infos for our first axis
    // To get this information drop your font in font gauntlet!
    {
        label: 'Gravity', // Your choosen name
        name: 'GRVT', // the technical name > shown inparenthesis on the axis input
        min: 0,
        max: 100,
        value: 50, // we are going to change this with the input later!
    },
    // The second Axis
    {
        label: 'Radius', 
        name: 'RADA', 
        min: 0,
        max: 100,
        value: 50, // we are going to change this with the input later!
    }
]

// We loop through the array with forEach() like so:
axes.forEach((axis) => {

    // First we create a Label for each axis:
    const labelElement = document.createElement('div')

    // The label we give the name of the axis:
    labelElement.innerHTML = axis.label + "<br/>"  // we axis the label that we gave each axis above!

    // And we also create the input field
    const inputElement = document.createElement('input')

    // We want to add an input type called "range"
    inputElement.type = "range"
    inputElement.min = axis.min
    inputElement.max = axis.max
    inputElement.defaultValue = axis.value

    // Place the input inside the label Element
    labelElement.appendChild(inputElement)

    // We need to append the label to control:
    controls.appendChild(labelElement)

    // add a break inbetween (for visual structure)
    const br = document.createElement("br")
    controls.appendChild(br)

    // Now ew also add the onInput function to the input Element


    // We call the event function on input on our input field
    inputElement.oninput = (event) => {
        //Ew now change the value inside the current axis
        axis.value = event.currentTarget.value; 

        // ***** NEW PART *****
        // The next part introduces a few new concepts, the map function
        // Basically, what we want to do is
        // – overwrite the new value for each axis
        // – Turn it into the right format, to write the correct CSS string!

        // To achieve that we use map and loop through our axis.
        // For each axis, we build the appropriate string like: "GRVT" 300 > but with the correct value!
        // the next line gives us an array like so:
        // ['"GRVT" 40', '"RADA" 20"] but we need a string like: '"GRVT" 40, "RADA" 20' > each axis separated with a coma!
        const fontFeatureArray =  axes.map(axis => `"${axis.name}" ${axis.value}`);

        // We can do that with the join() function:
        // We basically combine the array together with a comma and a space in between!
        const fontFeatureSettings = fontFeatureArray.join(', ');

        // change the font size of the element
        preview.style.fontVariationSettings = fontFeatureSettings
    }
})

// ****** NEW PART *****
// For consistancy, we also dynamically add the fontsize slider!


const controlFontSizeLabel = document.createElement('label')
const controlFontSize = document.createElement('input');

// Add a label name
controlFontSizeLabel.innerHTML = "Font Size<br/>" 
// Appen input inside label 
controlFontSizeLabel.appendChild(controlFontSize)
// and label inside the controls container
controls.appendChild(controlFontSizeLabel)

controlFontSize.type ="range"
controlFontSize.min = 30
controlFontSize.max = 300

// Handling Font Size
controlFontSize.oninput = (event) => {
    
    const fontSize = event.currentTarget.value;

    preview.style.fontSize = fontSize + "px"
}