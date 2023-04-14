'use strict';

// 1. isHometown 
function isHometown(town) {
    return town === 'San Francisco'; 
}
// console.log(isHometown('Seattle')); 


// 2. getFullName

// Define your function here
function getFullName(firstName,lastName){
    const fullName =`Hi, ${firstName} ${lastName}`;
    return fullName
}
// console.log(getFullName('vinitha','baskaran'))

// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05) {
    const subtotal = basePrice * (1 + tax); 

    let fee = 0 
    if (state === 'CA') {
        fee = 0.03 * subtotal; 
    } else if (state === 'PA') {
        fee = 2; 
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }

    return subtotal + fee; 
}
// console.log(calculateTotal(42, 'MA')); 
