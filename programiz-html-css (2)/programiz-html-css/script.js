
// Welcome message
console.log("---Welcome to Split My Bill---");

// Get the total bill
const billTotal = parseFloat(prompt("What is the total bill?"));

// Get the number of people sharing
const people = parseInt(prompt("How many people are sharing?"));

// Get the tip percentage
const tipPercentage = parseInt(prompt("What percentage tip would you like to leave?"));

// Calculate the tip total and final bill
const percentageDecimal = tipPercentage / 100;
const tipTotal = billTotal * percentageDecimal;
const finalBill = billTotal + tipTotal;

// Calculate the cost per person
const costPerPerson = finalBill / people;

// Display the results
console.log(`Total bill including tip is £${finalBill.toFixed(2)}`);
console.log(`Total cost per person is £${costPerPerson.toFixed(2)}`);
