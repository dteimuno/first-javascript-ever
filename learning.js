// first time ever javascript basics
console.log('JavaScript')
console.log(2011)
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)
console.log(26 + 3.5);
console.log(2025 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);
console.log('Hello' + 'World')
console.log('Hello' + ' ' + 'World')
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
var favoriteFood = 'pizza'

// let allows you to create a variable and then change the value later on
let changeMe = true;
changeMe = false;
console.log(changeMe);

// constants
const entree = 'Enchiladas';
console.log(entree);

//variables and mathematical expressions
let levelUp = 10;
levelUp +=5;
let powerLevel = 9001;
powerLevel -=100;
let multiplyMe = 32;
multiplyMe *=11;
let quarterMe = 1152;
quarterMe /=4;

// decrease or increase value by 1
let gainedDollar = 3;
gainedDollar ++;
let lostDollar = 50;
lostDollar --;

//interpolation
var myName = 'Dennis';
var myCity = 'Dallas';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//type of data type
let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

// conditional if and else statements
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

/* ternary operators for true or false:
instead of if or else you can use this */
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
let isLocked = false;


(isLocked) ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.')

let isCorrect = true;


isCorrect ? console.log('Correct!') : console.log('Incorrect!')

let favoritePhrase = 'Love That!';


favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")
// else if statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

// switches:
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// functions
function getReminder() {
  console.log('Water the plants.');
};
function greetInSpanish() {
  console.log('Buenas tardes.');
}

// calling a function:
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
};
sayThanks();

// return within functions
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors)

// arrow functions
// instead of the normal function style:
const plantNeedsWater = function (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
// you can use this:
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


/* Concise body arrow functions
if a function has a single parameter a parenthesis can be ignored. Also, when a function has a single line in the curl bracket that can also be ignore */
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
