// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 
const svgText = document.getElementById("svg-text")

// Functions we need

// • Empty Canvas
// • Render Grid
// • Render  Glyph
// • Render Text

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Events / Interactions

// A function to clean up the canvas
const emptyCanvas = () => {
    // First delete previous letters
    const previousGlyph = document.getElementById('glyph-group')

    // Remove the element
    if(previousGlyph) previousGlyph.remove()
}


const renderGrid = () => {

    const width = bitmapFont.parameters.width
    const height = bitmapFont.parameters.height
    const columns = bitmapFont.parameters.columns
    const rows = bitmapFont.parameters.rows


    const gridUnitWidth = width / columns
    const gridUnitHeight = height / rows
    // Lets create a group for order and organisation
    const gridGroup = 
        // document.getElementById('grid-guide-lines') 
        // || 
        document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // gridGroup.innerHTML = ''
    // Remove previous element if available!!

    // Lets give the grid a id, so we can show and hide it Later
    gridGroup.setAttribute('class', 'grid')

    if(!bitmapFont.parameters.showGrid) return

    // Create the grid
    for(let i = 0; i < columns+1; i++){
        // Create a horizontal line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        line.setAttribute('x1', i * gridUnitWidth)
        line.setAttribute('x2', i * gridUnitWidth)
        line.setAttribute('y1', 0)
        line.setAttribute('y2', height)

        gridGroup.appendChild(line)
    }

    // Create the grid
    for(let i = 0; i < rows+1; i++){
        // Create a horizontal line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')


        // Place the line
        line.setAttribute('x1', 0)
        line.setAttribute('x2', width)
        line.setAttribute('y1', i * gridUnitHeight)
        line.setAttribute('y2', i * gridUnitHeight)

        // Choose the color of the line

        gridGroup.appendChild(line)
    }
    // svgLetter.appendChild(gridGroup)

    return gridGroup
}

// Actuall render the grid
renderGrid()


const renderGlyph = (character) => {


    const currentLetter = bitmapFont.glyphs[character] || bitmapFont.glyphs['.notdef']

    // Lets create a group for later deletion
    const glyphGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    // Lets give the grid a id, so we can show and hide it Later
    glyphGroup.setAttribute('id', 'glyph-group')


    const width = bitmapFont.parameters.width
    const height = bitmapFont.parameters.height
    const columns = bitmapFont.parameters.columns
    const rows = bitmapFont.parameters.rows

    const gridUnitWidth = width / columns
    const gridUnitHeight = height / rows


    const copies = bitmapFont.parameters.copies.count

    for(let copyIndex = 0; copyIndex < copies; copyIndex++){

        const radius = bitmapFont.parameters.radius - copyIndex * bitmapFont.parameters.copies.offset.scale

        const inc = copyIndex/copies

        // const color = c % 2 === 0 ? "black" : '#00ff00'
        const r = 255 - inc * 255
        const g = 255 - inc * 255
        const b = 255 - inc * 255

        const color = `rgb(${r}, ${g}, ${b})`

        for(let i = 0; i < columns; i++){
            // Create a horizontal line

            for(let k = 0; k < rows; k++){

                const rowCount = k * rows; // for each row we have finished, we multiply with columns
                const colCount = i
                const pixelIndex = rowCount + colCount;
                const currentPixel = currentLetter[pixelIndex]
                // console.log("currentPixel", currentPixel)
                // Check if pixel is black, if not, we excape the loop with continue
                if(currentPixel !== 1) continue;

                // Calculating the position
                const x = i * gridUnitWidth + gridUnitWidth/2
                const y = k * gridUnitHeight + gridUnitHeight/2


                const pixel = renderPixel(x, y, radius, copyIndex)
                // pixel.setAttribute('fill', color)
                pixel.setAttribute('fill', "black")

                // pixel.style.fill = color

                if(copyIndex % 2 === 0) {
                    // pixel.setAttribute('fill', '#00ff2fff')
                    pixel.setAttribute('fill', `white`)
                    // pixel.setAttribute('fill', `rgb(${255 - 50 * copyIndex}, 255, 0)`)
                }

                glyphGroup.appendChild(pixel)
            }
        }
        const grid = renderGrid()
        glyphGroup.appendChild(grid)

    }

    return glyphGroup
    // svg.appendChild(glyphGroup)

}


const renderText = () => {


    const text = bitmapFont.preview.text
    // const spacing = bitmapFont.parameters.width/5
    const spacing = bitmapFont.parameters.spacing

    const characterWidth = bitmapFont.parameters.width + spacing

    const width = text.length * characterWidth
    const height = bitmapFont.parameters.height

    svgText.setAttribute('viewBox', `0 0 ${width} ${height}`)


    svgText.innerHTML = ""

    const rextGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    rextGroup.setAttribute('transform', `translate(${spacing/2}, 0)`)

    text.split("").forEach((character, i) => {


        const glyph = renderGlyph(character)

        const ofstX = i * characterWidth

        glyph.setAttribute('transform', `translate(${ofstX}, 0)`)

        rextGroup.appendChild(glyph)
    })

    svgText.appendChild(rextGroup)
}



const inputField = document.getElementById('input-text')

inputField.oninput = (e) => {

    bitmapFont.preview.text = e.currentTarget.value

    renderText()
}

// Now after creating this, we can to add it to the element:
// const previewElement = document.getElementById("preview")
// previewElement.appendChild(svg)
window.addEventListener('keydown', (event) => {

    // Currently typed key
    const typedCharacter = event.key
    bitmapFont.preview.character = typedCharacter

    // First remove previous Glyph
    emptyCanvas()

    // Render new glyph
    renderText()

})
