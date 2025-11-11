console.log("controls")


const controlsNumber = [
    {
        label: 'Spacing',
        min: -40,
        max: 1000,
        path: 'parameters.spacing'
    },
    {
        label: 'Radius',
        min: 20,
        max: 800,
        path: 'parameters.radius'
    },
    {
        label: 'Copies',
        min: 1,
        max: 30,
        path: 'parameters.copies.count'
    },
    {
        label: 'Copy-Scale',
        min: 0,
        max: 100,
        path: 'parameters.copies.offset.scale'
    },
    {
        label: 'Copy-X',
        min: -100,
        max: 100,
        path: 'parameters.copies.offset.x'
    },
    {
        label: 'Copy-Y',
        min: -100,
        max: 100,
        path: 'parameters.copies.offset.y'
    }
]


const controlWrapper = document.getElementById('controls')

controlsNumber.forEach((control) => {

    const initialValue = _.get(bitmapFont, control.path)
    
    const input = document.createElement('input')
    input.type = 'range'
    input.min = control.min
    input.max = control.max
    input.defaultValue = initialValue
    input.id = control.path

    const label = document.createElement('label') //
    label.innerHTML = control.label
    label.htmlFor = control.path
    // <label>Spacing</label>

    controlWrapper.appendChild(label)
    controlWrapper.appendChild(input)

    input.oninput = (e) => {
        // 
        const value = parseInt(e.currentTarget.value)

        _.set(bitmapFont, control.path, value)
        // console.log(bitmapFont.parameters)

        const typedCharacter = bitmapFont.preview.character

        // First clean our canvas
        emptyCanvas()

        // We can render the grid
        renderGrid()

        // Render text
        renderGlyph(typedCharacter)
    }

})