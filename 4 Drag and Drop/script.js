console.log("test")


// Adding elements

const aside = document.getElementById("aside")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Store the currently dragged image URL
let draggedimageSrc = null;

// 1. Drag Start • Store Img Src
const imageList = [
    `./images/cat.webp`,
    `./images/graphic-1.png`,
    `./images/graphic-2.png`,
    `./images/cat.webp`,
]

// Add the images to the aside
imageList.forEach(img => {

    const imgEl = document.createElement("img")
    aside.appendChild(imgEl)

    imgEl.src = img
    imgEl.draggable = true
    imgEl.style.objectFit = "cover"
    imgEl.style.width = "100%"

    imgEl.addEventListener("dragstart", e => {
        draggedImageSrc = e.target.src;
        e.dataTransfer.setData("text/plain", draggedImageSrc);
    });

})


// ––––––––––––––––––––––––––––––––––––––––

// Resize the canvas when the screensize is changed!

const handleScreenSize = () => {

    const resolution = 1

    canvas.width = (window.innerWidth - 400) * resolution
    canvas.height = window.innerHeight * resolution
}

window.addEventListener("resize", handleScreenSize())


// ––––––––––––––––––––––––––––––––––––––––

// Changing default behavior to allow drop!
canvas.addEventListener("dragover", e => {
    e.preventDefault(); // allow drop
});

// ––––––––––––––––––––––––––––––––––––––––

canvas.addEventListener("drop", e => {
    e.preventDefault(); // we overwrite the standard behavior

    //  Measuring the size of the canvas
    const rect = canvas.getBoundingClientRect();
    
    // Position inside canvas
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Draw image at the right position
    drawImage(x, y, draggedImageSrc)
});

// ––––––––––––––––––––––––––––––––––––––––

// Render / Draw data (Helper Function to be re-used)
const drawImage = (x, y, src) => {

  const img = new Image();
  img.src = src;

  img.onload = () => {

    const pos = {
        // x: x,
        // y: y,
        x: x,
        y: y,
    }

    const width = img.width
    const height = img.height 

    ctx.drawImage(img, pos.x, pos.y), width, height;
  };

}


// 
const drawLayout = (data) => {


    layout.elements.forEach((element) => {


        // You can also have different types
        // int our case we only have: type = "img"

        drawImage(element.x, element.y, element.src)
    })

}


drawLayout()