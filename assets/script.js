console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Bryant Porter" // HINT: Replace this with your own name!

// Cookie Count and Types
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')
// How to change cookies
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
// What is changing
const gbResult = document.querySelector('#qty-gb')
const ccResult = document.querySelector('#qty-cc')
const sugarResult = document.querySelector('#qty-sugar')
const total = document.querySelector('#qty-total')
// Name
credit.textContent = `Created by ${yourName}`
// Events
gbPlusBtn.addEventListener('click', function() {
gb = gb + 1;
gbResult.textContent = gb;
total.textContent = gb + cc + sugar;
})
gbMinusBtn.addEventListener('click', function() {
gb = gb - 1;
gbResult.textContent = gb;
total.textContent = gb + cc + sugar;
})
ccPlusBtn.addEventListener('click', function() {
cc = cc + 1;
ccResult.textContent = cc;
total.textContent = gb + cc + sugar;
})
ccMinusBtn.addEventListener('click', function() {
cc = cc - 1;
ccResult.textContent = cc;
total.textContent = gb + cc + sugar;    
console.log('Chocolate Chip - button was clicked!')
})
sugarPlusBtn.addEventListener('click', function() {
sugar = sugar + 1;
sugarResult.textContent = sugar;
total.textContent = gb + cc + sugar;
})
sugarMinusBtn.addEventListener('click', function() {
sugar = sugar - 1;
sugarResult.textContent = sugar;
total.textContent = gb + cc + sugar;    
console.log('Sugar Cookie - button was clicked!')
})
// TODO: Hook up event listeners for the rest of the buttons