

// 1. Config for controls
const controlsNumber = [
    {
        label: 'Letter Spacing',
        // value: 1000,
        min: 0,
        max: 1000,
        path: 'parameters.spacing', // -> font > config > width
    },
    {
        label: 'Width',
        // value: 1000,
        min: 200,
        max: 2000,
        path: 'parameters.width', // -> font > config > width
    },
    {
        label: 'Radius',
        min: 20,
        max: 500,
        path: 'parameters.radius', // -> font > config > radius
    },
    {
        label: 'Copies',
        min: 1,
        max: 30,
        path: 'parameters.copies.count', // -> font > config > radius
    },
    {
        label: 'Copy Offset Scale',
        min: -10,
        max: 20,
        path: 'parameters.copies.offset.scale', // -> font > config > radius
    },
    {
        label: 'Copy Offset X',
        min: -100,
        max: 100,
        path: 'parameters.copies.offset.x', // -> font > config > radius
    },
    {
        label: 'Copy Offset Y',
        min: -100,
        max: 100,
        path: 'parameters.copies.offset.y', // -> font > config > radius
    }
]

// 2. Controls for Grid
const controlsSwitch = [
    {
        label: 'Show Grid',
        path: 'parameters.showGrid',
        value: true
    }
]



// 2. Applied range slider controls to dom
const controlWrapper = document.getElementById('controls')

controlsNumber.forEach((control) => {

    const initialValue = _.get(bitmapFont, control.path)

    // Create the input element
    const input = document.createElement('input')
    input.type = "range"
    input.min = control.min
    input.max = control.max
    input.defaultValue = initialValue
    input.id = control.path

    // Add the input control
    input.oninput = (e) => {

        label.innerHTML = control.label + `[${_.get(bitmapFont, control.path)}]`

        // Set allows us to set valus inside an object
        // 1) your entire font
        // 2) adjust the value at the given path
        // 3) change tha value at the path!
        _.set(bitmapFont, control.path, parseFloat(e.currentTarget.value))

        // everytime a value is updated, we refresh the font rendering
        const typedCharacter = bitmapFont.preview.character

        // First remove previous Glyph
        emptyCanvas()

        // First we update the grid (we might have changed the columns!)
        renderGrid()

        // Render Text
        // const textGroup = 
        renderText(typedCharacter)

        // svgText.appendChild(textGroup)

    }

    const label = document.createElement('label')
    label.innerHTML = control.label + `[${_.get(bitmapFont, control.path)}]`
    label.htmlFor = control.path

    controlWrapper.appendChild(label)
    controlWrapper.appendChild(input)

})


controlsSwitch.forEach((control) => {
    
    // 1. Setting up the controls 
    const initialValue = _.get(bitmapFont, control.path)

    // Create the input element
    const input = document.createElement('input')
    input.type = "checkbox"
    input.defaultChecked = initialValue
    // input.defaultValue = initialValue
    input.id = control.path
    input.innerHTML = "Show Grid"
    input.name = "Show Grid"

    // 2. Handle the controls action

    // Add the input control
    input.oninput = (e) => {


        const value = e.currentTarget.checked


        if(value){
            svgText.classList.add('showGrid')
        }else{
            svgText.classList.remove('showGrid')
        }
    }

    const label = document.createElement('label')
    label.innerHTML = control.label + `[${_.get(bitmapFont, control.path)}]`
    label.htmlFor = control.path

    controlWrapper.appendChild(label)
    controlWrapper.appendChild(input)

})
