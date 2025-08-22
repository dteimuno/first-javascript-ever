// my age represented by a variable
var myAge = 26;
//early years variable
var earlyYears = 2;
earlyYears = earlyYears * 10.5;
//later years variable
var laterYears = myAge - 2;
//lateryears new variable is lateryears by 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//myage in dog years is early years plus later years
var myAgeInDogYears = earlyYears + laterYears;
//place your name is all smaller letters
myName =  'Dennis'.toLowerCase();
// interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
