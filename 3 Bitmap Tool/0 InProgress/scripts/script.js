
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
 
    for(let i = 0; i <= columns; i++){
        // console.log('i', i)
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        // 
        line.setAttribute('y1', 0)
        line.setAttribute('x1', i * gridUnitWidth)
        // 
        line.setAttribute('y2', height)
        line.setAttribute('x2', i * gridUnitWidth)

        group.appendChild(line)
    }

    // Render horizontal lines
    for(let i = 0; i <= rows; i++){

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
    const scale = bitmapFont.parameters.copies.offset.scale
    const offsetX = bitmapFont.parameters.copies.offset.x
    const offsetY = bitmapFont.parameters.copies.offset.y

    // Calculate the Cell Size (Grid Unit)
    const gridUnitWidth = width / columns // 200
    const gridUnitHeight = height / rows // 200

    const copyCount = bitmapFont.parameters.copies.count


    
    for (let copyIndex = 0; copyIndex < copyCount; copyIndex++) {

    
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
                const x = c * gridUnitWidth + gridUnitWidth/2 + offsetX * copyIndex
                const y = r * gridUnitHeight + gridUnitHeight/2 + offsetY * copyIndex

                // 0, 1, 4, 9, 16, 25
                const radius = bitmapFont.parameters.radius - (copyIndex) * scale

                const pixel = renderPixel(x, y, radius)
                // const pixel = renderReactangle(x, y, radius)
                // const pixel = renderCustomShape(x, y, radius)

                // Color steps
                const red = 0
                const green = 255
                const blue = 255 / copyCount * copyIndex

                pixel.setAttribute('fill', `rgb(${red},${green},${blue})`)

                if(copyIndex % 2 === 0){
                    // pixel.setAttribute("fill", "black")
                    pixel.setAttribute('fill', `rgb(${green},${red},${blue})`)
                }else{
                    // pixel.setAttribute("fill", "white")
                }


                glyphGroup.appendChild(pixel)
            }
        }
    }
    
    svgText.appendChild(glyphGroup)
}


renderGlyph('A')