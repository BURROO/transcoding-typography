
// Accessing the preview Element
const preview = document.getElementById("preview");
const controlFontSize = document.getElementById("control-font-size");
const controlGrvt = document.getElementById("control-grvt");
const controlRada = document.getElementById("control-rada"); // NEW!



// ***** NEW PART *****

// Note: Because multiple axis are all handled within on css property (font-variation-settings)
// We have to combine two variable all into a string,
// The easiest way to do this is, by storing the values in a global variable:
// The «let» keyword, allows us to change the value later, in contrast to «const» which does not
let grvt = 50;
let rada = 50;




// **** REMOVED PART ****


// We call the event function on input on our input field
controlFontSize.oninput = (event) => {
    // inside we extract the value (through current Target)
    const fontSize = event.currentTarget.value;

    // change the font size of the element
    preview.style.fontSize = fontSize + "px"
}

// We call the event function on input on our input field
controlGrvt.oninput = (event) => {
    // inside we extract the value (through current Target)
    grvt = event.currentTarget.value; // new we change the global variables defined earlier

    // ***** NEW PART *****
    // We can use back ticks for a string, and inject variables like so:
    const fontFeatureSettings = `"GRVT" ${grvt}, "RADA" ${rada}` // "GRVT" 300, "RADA" 200

    // Or we can use the plus to combine string and calues together
    // But then we have to be carful with the spaces!
    // const fontFeatureSettings = '"GRVT" ' + grvt}, "RADA" ${rada}` // "GRVT" 300, "RADA" 200

    // change the font size of the element
    preview.style.fontVariationSettings = fontFeatureSettings
}

// ***** NEW PART *****

// And we do the same for the second axis control
controlRada.oninput = (event) => {
    // Make sure to update the right variable here:
    rada = event.currentTarget.value; // new we change the global variables defined earlier

    const fontFeatureSettings = `"GRVT" ${grvt}, "RADA" ${rada}` // "GRVT" 300, "RADA" 200

    preview.style.fontVariationSettings = fontFeatureSettings

}
