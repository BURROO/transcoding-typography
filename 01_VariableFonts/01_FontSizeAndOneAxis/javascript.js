
// Accessing the preview Element
const preview = document.getElementById("preview");
const controlFontSize = document.getElementById("control-font-size");
const controlGrvt = document.getElementById("control-grvt");


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
    const grvt = event.currentTarget.value;

    // change the font size of the element
    preview.style.fontVariationSettings = '"GRVT" ' + grvt

}