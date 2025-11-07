console.log("font")

// Don't type this

const bitmapFont = {
    parameters: {
        columns: 5,
        rows: 5,
        width: 1000,
        height: 1000,
        spacing: 100,
        showGrid: true,
        radius: 250,
        // 
        copies: {
            count: 3,
            offset: {
                scale: 20,
                x: 0,
                y: 0,
            }
        }
    },
    preview: {
        text: 'ABC'
    },
    glyphs: {
        ".notdef": [
            1,0,1,0,1,
            0,1,0,1,0,
            1,0,1,0,1,
            0,1,0,1,0,
            1,0,1,0,1,
        ],
        " ": [
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
        ],
        "A": [
            0,0,1,0,0,
            0,1,0,1,0,
            0,1,0,1,0,
            1,1,1,1,1,
            1,0,0,0,1
        ],
        "B": [
            0,1,1,1,0,
            0,1,0,0,1,
            0,1,1,1,0,
            0,1,0,0,1,
            0,1,1,1,0,
        ],
    }
} 