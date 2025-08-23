// arrays
/* while elements with a const variable are generally immutable, when they(elements) within in a list or array in javascript they are mutable */

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//add or append items to the end of a list= use push()
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//pop method removes the last item of an array:
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//more array options:
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Nested arrays
let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];

// for loop:
/*
A for loop contains three expressions separated by ; inside the parentheses:

an initialization starts the loop and can also be used to declare the iterator variable.
a stopping condition is the condition that the iterator variable is evaluated against — if the condition evaluates to true, the code block will run. If it evaluates to false, the code will stop.
an iteration statement is used to update the iterator variable on each loop.
The for loop syntax looks like this: 
*/
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

// for loop in reverse:
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter > -1; counter--){
  console.log(counter);
}

// nested loops

// Write your code below
let bobsFollowers = ['John', 'Peter', 'Moses', 'Abraham'];
let tinasFollowers = ['John', 'Peter', 'Priscilla'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let k =0; k < tinasFollowers.length; k++) {
    if (bobsFollowers[i] === tinasFollowers[k]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// while loop
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// another while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard // empty variable value
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// do.. while syntax:
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// another do while example:
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded ++
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded) 

// for loop with nestedif loop with a break:
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
  console.log(rapperArray[i])
}
console.log("And if you don't know, now you know.");


// high order functions





