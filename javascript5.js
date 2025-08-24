// Advanced Objects:
// This
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined" because the method .this is not there, preventing dietType from being referenced

// Here’s where the keyword comes to the rescue. If we change the .diet() method to use this, .diet() will work! :
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore


// arrow functions and this:
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

// Code privacy: people place _ before a variable to show that it should not be touched:
const bankAccount = {
  _amount: 1000
} // amount can still be altered though


// Getters:

// Setters:
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

// getters and setters:
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  },
  
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

//factory functions:

// destructuring, when the key and value are the same you can use just one:
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
// destructured:
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};


/* destructured arguments:
We often want to extract key-value pairs from
objects and save them as
variables
. Take, for example, the following object:
*/
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

/*
If we wanted to extract the residence property as a variable, we could use the following code:
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
// However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment, we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

Look back at the vampire object’s properties in the first code example. Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. When we log the value of residence to the console, 'Transylvania' is printed.

We can even use destructured assignment to grab nested properties of an object: */
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

