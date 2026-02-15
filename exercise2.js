/**
 * Exercise 2: Data Attribute Reader
 * 
 * Goal: Use 'this' with data-* attributes to create dynamic behavior
 */

const swatches = document.querySelectorAll('.swatch');

// Define a function that reads this.dataset.color
function applyColor() {
    // Read the data-color attribute using dataset
    const colorValue = this.dataset.color;
    
    // Apply the color as the background
    this.style.backgroundColor = colorValue;
    this.style.color = 'white'; // Add white text for better contrast
    this.style.border = 'none'; // Remove border for cleaner look
}

// Attach the function to every swatch
swatches.forEach(function(swatch) {
    swatch.addEventListener('click', applyColor);
});

/**
 * Explanation:
 * this.dataset gives us access to all data-* attributes.
 * this.dataset.color reads the value from data-color="value".
 * A regular function ensures 'this' points to the clicked element.
 */