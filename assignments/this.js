/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The `this` keyword will allways try to point to the window context. The window context is 
    like a car lot you could look at a specific car but instead get all the information of a the car lot.
* 2. When using objects, whatever object is preceding the dot, myObj.say, the `this` keyword will bind to that object 
    automaticlly. This is implicit Binding
* 3. New binding, `this` key binds the constructor in witch it was used
* 4. Explicit binding is when the 'this' keyword is used in conjunction with functions and the .cll/.apply methods
*
* write out a code example of each explanation above
*/

// Principle 1
function thisExample(name) {
    return this.name;
}
// code example for Window Binding

// Principle 2
// Lifted from the code pen, its a good note for later
// Implicit Binding (Automatic) with objects and methods

const hobbit = {
    name: "Samwise",
    age: 102,
    food: "taters",
    cook: function() {
      return `${this.name} loves to cook ${this.food}`;
    }
  }
// code example for Implicit Binding

// Principle 3
function GameObject(obInfo) {
    this.createdAt = obInfo.createdAt;
    this.dimensions = obInfo.dimensions;
    this.name = obInfo.name;
  }

  const newObj = new GameObject({
    createdAt : `now`,
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    name : 'Objy'
  });


// code example for New Binding

// Principle 4
// Also from codepen
const person = {
    "name":"Ruby"
  }
  
  function introduction(skill1,skill2,skill3){
    return `Hello, my name is ${this.name} and I like to program in: ${skill1},${skill2},${skill3}`;
  }
  
  const skills = ["HTML","CSS","JS"];
  
  // Call accepts individual args
  console.log(introduction.call(person,...skills));
  
  // Apply needs an array if you want to pass in more args 
  console.log(introduction.apply(person,skills));
// code example for Explicit Binding