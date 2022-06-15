
// !We want you to create a shopping list price displayer. You should be able to see in a list each item followed by its price!

// !Instructions
// !- Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// !- Store this information using the most appropriated data structures we've studied so far
// !- Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// !- Output a list displaying each item and its price
// !- Output the total at the end
// !Tips
// !- Pay attention to your data types, and what can you do with them/

let items = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready meals"];
let prices = [1.20, 2.00, 2.00, 2.50, 2.00, 5.00];

let addItem = String(prompt("What item would you like to add to your list?"));

let addPrice = Number(prompt("What is the price of this item?"));

items.push(addItem);
prices.push(addPrice);
// console.log(items);
// console.log(prices);

for (let i = 0; i < items.length; i++) {
    console.log(items[i] + ": " + prices[i]);
}

// for(let item of items) {
//     console.log(item + ": " + prices[items.indexOf(item)]);
// }
let total = 0;
for(let price of prices) {
    total += price;
}
console.log("Total is : " + total);
