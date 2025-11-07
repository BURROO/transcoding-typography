console.log("renderPixel")
// Rendering a single Pixel

// x - coordinates
// y - coordinate
// radius 

const renderPixel = (x, y, radius) => {

    // We create a Circle Element inside our Document
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    // Apply attributes based on parameters
    newCircle.setAttribute('r', radius);
    newCircle.setAttribute('cx', x)
    newCircle.setAttribute('cy', y)

    return newCircle
    // 
    // const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    // // Apply attributes based on parameters
    // rect.setAttribute('width', radius);
    // rect.setAttribute('height', radius);
    // rect.setAttribute('x', x-radius/2)
    // rect.setAttribute('y', y-radius/2)

    // return rect
}