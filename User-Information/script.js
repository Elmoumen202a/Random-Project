const sliders = document.querySelectorAll('.slider');

// Function to handle input events
function handleInput(event) {
  const slider = event.target;
  const value = slider.value;
  const label = slider.previousElementSibling;

  // Update label style based on value
  if (value !== '') {
    label.style.transform = 'translateY(-20px)';
    label.style.fontSize = '12px';
  } else {
    label.style.transform = 'none';
    label.style.fontSize = 'inherit';
  }
}

// Add event listener for each slider
sliders.forEach(slider => {
  slider.addEventListener('input', handleInput);
});
