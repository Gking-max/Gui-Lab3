/**
 * Exercise 3: Object Context Challenge
 * 
 * Goal: Use .bind() to keep 'this' pointing to the object,
 * not the button element that triggered the event
 */

const display = document.querySelector('#count-display');

const CounterApp = {
    count: 0,
    
    increment: function() {
        // Increment the count property
        this.count++;
        // Update the display
        display.textContent = this.count;
    },
    
    decrement: function() {
        // Decrement the count property
        this.count--;
        // Update the display
        display.textContent = this.count;
    }
};

// Get button references
const incBtn = document.querySelector('#inc-btn');
const decBtn = document.querySelector('#dec-btn');

// Attach methods using .bind() to preserve the CounterApp context
incBtn.addEventListener('click', CounterApp.increment.bind(CounterApp));
decBtn.addEventListener('click', CounterApp.decrement.bind(CounterApp));

/**
 * Explanation:
 * Without .bind(), 'this' inside the handler would refer to the button element.
 * .bind(CounterApp) creates a new function where 'this' is permanently set to
 * the CounterApp object, allowing us to access and modify its properties.
 */