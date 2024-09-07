// Task 1: Calculate the Tip

let bill = 57; // test bill amount
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;


// Task 2: Output Details

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}.`);


// Task 3: Create a Function calculateTip

function calculateTip(bill) {
    return tip
};
 
console.log(calculateTip(100));