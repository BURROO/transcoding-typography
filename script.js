// A check, if the script gets loaded
// Open the developer tools in your browser
console.log("Script loaded")

// Access the controls
const controlFontSize = document.getElementById("control-font-size")
const controlWght = document.getElementById("control-axis-wght")
const controlXXXX = document.getElementById("control-axis-XXXX")

// We store the default values, which we are also manipulating later:
let valueFontSize = 300
let valueWght = `"wght" 100`
let valueXXX = `"XXXX" 100`

// Access the preview
const preview = document.getElementById("preview")

// Control variable font setting of preview

controlFontSize.oninput = (e) => {

    // We get the value of the current input field (Range Slider):
    const value = e.currentTarget.value
    valueFontSize = `${value}px`

    // We are changing a css property of the preview field
    preview.style.fontSize = valueFontSize
}


controlWght.oninput = (e) => {

    // We get the value of the current input field (Range Slider):
    const value = e.currentTarget.value
    valueWght = `"wght" ${value}`

    // We are changing a css property of the preview field
    preview.style.fontVariationSettings = `${valueWght}, ${valueXXX}`
    // Note: This renders something like: "wght" 100, "XXXX" 20

}

controlXXXX.oninput = (e) => {

    // We get the value of the current input field (Range Slider):
    const value = e.currentTarget.value
    valueXXX = `"XXXX" ${value}`

    // We are changing a css property of the preview field
    preview.style.fontVariationSettings = `${valueWght}, ${valueXXX}`

}

// Note:
// The css property to control variable axis is called "font-variation-settings"
// In the javascript world, we can not us dashes for variables, so the become «camelcase» like so: "fontVariationSettings"
// Inside