// Function to create a flickering effect for the pumpkin's eyes
function flickerEyes() {
    // Select all elements with the class 'eye'
    const eyes = document.querySelectorAll('.eye');
    
    // Randomly set opacity for each eye to create flicker
    eyes.forEach((eye) => {
        eye.style.opacity = Math.random() > 0.5 ? 1 : 0.2; // Randomly make eyes appear dim
    });
}

// Set an interval to run flickerEyes function every 500ms
setInterval(flickerEyes, 500);
