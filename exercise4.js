/**
 * Exercise 4: Identifying the Bug
 * 
 * Goal: Debug arrow function lexical scoping and learn about event.currentTarget
 */

const box = document.querySelector('.box');

// BUGGY CODE (commented out to show the issue)
// box.addEventListener('click', (event) => {
//     // This will FAIL because arrow functions don't have their own 'this'
//     // 'this' here inherits from the parent scope (likely the Window object)
//     this.classList.add('active');
// });

/**
 * BUG EXPLANATION:
 * The arrow function fails because arrow functions do not have their own 'this'
 * binding. They inherit 'this' from the enclosing lexical scope (the parent context).
 * In this case, 'this' would refer to the Window object, not the box element,
 * so this.classList is undefined, causing an error.
 */

// FIXED CODE:
box.addEventListener('click', (event) => {
    // Use event.currentTarget instead of 'this'
    // event.currentTarget always refers to the element the listener is attached to
    event.currentTarget.classList.add('active');
});

/**
 * SOLUTION EXPLANATION:
 * event.currentTarget returns the element that the event listener is attached to.
 * This is exactly what 'this' would be in a regular function handler.
 * It solves the problem because we can access the box element directly from the
 * event object, regardless of how 'this' is bound in the arrow function.
 */