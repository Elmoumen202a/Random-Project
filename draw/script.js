document.addEventListener("DOMContentLoaded", () => {
    // Get references to the canvas and its context
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;

    // Variables to keep track of drawing state and properties
    let painting = false;
    let startX, startY;
    let color = "#000000";
    let brushSize = 5;
    let shape = "freehand";

    // Get references to the toolbar elements
    const colorPicker = document.getElementById("colorPicker");
    const brushSizeInput = document.getElementById("brushSize");
    const shapeSelector = document.getElementById("shape");

    // Event listener to update color
    colorPicker.addEventListener("input", (e) => {
        color = e.target.value;
    });

    // Event listener to update brush size
    brushSizeInput.addEventListener("input", (e) => {
        brushSize = e.target.value;
    });

    // Event listener to update shape
    shapeSelector.addEventListener("change", (e) => {
        shape = e.target.value;
    });

    // Function to start drawing
    function startPosition(e) {
        painting = true;
        startX = e.clientX - canvas.offsetLeft;
        startY = e.clientY - canvas.offsetTop;
        if (shape === "freehand") {
            draw(e);
        }
    }

    // Function to end drawing
    function endPosition() {
        if (shape !== "freehand" && painting) {
            drawShape(startX, startY, event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        }
        painting = false;
        ctx.beginPath();
    }

    // Function to draw freehand
    function draw(e) {
        if (!painting || shape !== "freehand") return;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = color;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    // Function to draw shapes (rectangle or circle)
    function drawShape(x1, y1, x2, y2) {
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctx.beginPath();

        if (shape === "rectangle") {
            // Draw a rectangle from (x1, y1) to (x2, y2)
            ctx.rect(x1, y1, x2 - x1, y2 - y1);
        } else if (shape === "circle") {
            // Draw a circle with the center at (x1, y1) and radius calculated from (x1, y1) to (x2, y2)
            const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            ctx.arc(x1, y1, radius, 0, Math.PI * 2);
        }
        
        ctx.stroke();
        ctx.closePath();
    }

    // Event listeners for mouse actions on the canvas
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);
});
