/**
 * Exercise 1: Multi-Button Highlight
 * 
 * Goal: Use 'this' to reference the clicked element in an event handler
 */

const buttons = document.querySelectorAll('.color-btn');

// 1. Define a function called changeColor
function changeColor() {
    // 'this' refers to the button that was clicked
    // Set its background color to yellow
    this.style.backgroundColor = 'yellow';
}

// 2. Loop through buttons with forEach
// Attach changeColor as the click handler
buttons.forEach(function(button) {
    button.addEventListener('click', changeColor);
});

/**
 * Explanation:
 * In a regular function used as an event handler,
 * 'this' automatically refers to the DOM element that
 * the listener is attached to (the clicked button).
 */