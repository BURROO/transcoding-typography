// Rendering a Pixel

// Parameters
// x – Postion
// y - Position
// radius – Scale
// index – Each iteration

const renderPixel = (x, y, radius, index) => {
    // Ofset per item
    const xOfst = bitmapFont.parameters.copies.offset.x * (index)
    const yOfst = bitmapFont.parameters.copies.offset.y * (index)

    // now we are handling the logic for placing the circles
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    // Applying the parameters to attributes
    newCircle.setAttribute('r', radius);
    newCircle.setAttribute('cx', x+xOfst)
    newCircle.setAttribute('cy', y+yOfst)

    return newCircle
}



const renderPixel2 = (x, y, radius, index) => {



    const scale = radius/100-index*0.01 * 2

    // Ofset per item
    const xOfst = (bitmapFont.parameters.copies.offset.x * (index)) - scale*50
    const yOfst = (bitmapFont.parameters.copies.offset.y * (index)) - scale*50

    // now we are handling the logic for placing the circles
    const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // Storing path as string
    const path = `M39.17,40.89c2.39,31.35-23.87,69.37-30.71,40.26S62.71,2.86,41.39,16.71C20.07,30.55.34,60.62.5,39.14c.16-21.48,56.01-58.55,63.01-25.46,7,33.1-1.59,35.8,16.55,28.16,18.14-7.64,8.59,78.92-14.64,49.96-23.23-28.96-26.25-50.92-26.25-50.92Z`

    // Adding Path as attribute
    newPath.setAttribute('d', path) 

    // transforming path
    newPath.setAttribute('transform', `translate(${x+xOfst}, ${y+yOfst}) scale(${scale})`)

    return newPath
}

// const renderPixel = (x, y, radius, index) => {

//     x = x - radius + bitmapFont.parameters.copies.offset.x
//     y = y - radius + bitmapFont.parameters.copies.offset.y
//     // now we are handling the logic for placing the circles
//     const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//     newCircle.setAttribute('width', radius*2);
//     newCircle.setAttribute('height', radius*2);
//     newCircle.setAttribute('x', x)
//     newCircle.setAttribute('y', y)
//     newCircle.setAttribute('transform', `rotate(${index * 10}, ${x}, ${y})`)

//     return newCircle
// }




