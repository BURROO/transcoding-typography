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
}

const renderReactangle = (x, y, radius) => {

    // We create a React Element inside our Document
    const newRectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    // Apply attributes based on parameters
    newRectangle.setAttribute('width', radius*2);
    newRectangle.setAttribute('height', radius*2);
    newRectangle.setAttribute('x', x-radius)
    newRectangle.setAttribute('y', y-radius)

    return newRectangle
}

const renderCustomShape = (x, y, radius) => {

    const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // 
    newPath.setAttribute('d', "M136.34,174.11c-51.16,37.72-182.59-9.79-119.6-67.91C79.72,48.08-16.35,6.95,68.58.42s161.75,65.29,112.29,90.11c-114.51,57.46.64,50.28-44.53,83.58Z")

    const scale = radius/400

    newPath.setAttribute('transform', `translate(${x-200}, ${y-200})`)

    return newPath
}
