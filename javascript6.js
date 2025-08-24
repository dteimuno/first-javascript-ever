// Classes:
// Javascript calls the constructor() method every time it creates a class:
/* Now, we’re ready to create class instances. An instance is an object that contains the property names and
methods of a class, but with unique property values. Let’s look at our Dog class example. */
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'

/* Methods

At this point, we have a Dog class that spins up
objects Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects except we cannot include commas between methods. */

/// Inheritance III:
/* We’ve abstracted the shared properties and
methods of our Cat and Dog classes into a parent class called Animal here:  */
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }
    
  incrementBehavior() {
    this._behavior++;
  }
} 

--
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

