
console.log("script")

const svgText = document.getElementById("svg-text")


const emptyCanvas = () => {

    // First remove everything from the canvas/svg
    svgText.innerHTML = ""
}

const renderGrid = () => {

    // Basic Parameters
    const width = bitmapFont.parameters.width
    const height = bitmapFont.parameters.height
    const columns = bitmapFont.parameters.columns
    const rows = bitmapFont.parameters.rows

    // Calculate the Cell Size (Grid Unit)
    const gridUnitWidth = width / columns // 200
    const gridUnitHeight = height / rows // 200

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    group.setAttribute('class', 'grid')

    // Create our horizontal Grid
    // 1. Set our start value i=0
    // 2. Stop when i reached the value of columns
    // 3. Increase by 1
    for(let i = 0; i < columns+1; i++){
        // console.log('i', i)
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        // 
        line.setAttribute('y1', 0)
        line.setAttribute('y2', height)
        line.setAttribute('x1', i * gridUnitWidth)
        line.setAttribute('x2', i * gridUnitWidth)

        group.appendChild(line)
    }

    // Render horizontal lines
    for(let i = 0; i < rows+1; i++){

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        // 
        line.setAttribute('x1', 0)
        line.setAttribute('x2', width)
        // 
        line.setAttribute('y1', i * gridUnitHeight)
        line.setAttribute('y2', i * gridUnitHeight)

        group.appendChild(line)
    }

    svgText.appendChild(group)
}

renderGrid()


const renderGlyph = (character) => {

    // Get chosedn character or default to notdef glyph
    const currentLetter = bitmapFont.glyphs[character] || bitmapFont.glyphs['.notdef']

    const glyphGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    // Basic Parameters
    const width = bitmapFont.parameters.width
    const height = bitmapFont.parameters.height
    const columns = bitmapFont.parameters.columns
    const rows = bitmapFont.parameters.rows

    // Calculate the Cell Size (Grid Unit)
    const gridUnitWidth = width / columns // 200
    const gridUnitHeight = height / rows // 200

    // c = columnIndex
    for (let c = 0; c < columns; c++) {
    
        // r = rowIndex
        for (let r = 0; r < rows; r++) {

            // rows = 5
            const rowCount = r * columns
            const colCount = c
            const pixelIndex = rowCount + colCount
            const currentPixel = currentLetter[pixelIndex]

            if(currentPixel === 0) continue;

            // console.log("rowCount", rowCount) 
            const x = c * gridUnitWidth + gridUnitWidth/2
            const y = r * gridUnitHeight + gridUnitHeight/2
            const radius = 120

            const pixel = renderPixel(x, y, radius)

            glyphGroup.appendChild(pixel)
        }
    }
    
    svgText.appendChild(glyphGroup)
}

renderGlyph('A')