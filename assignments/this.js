/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding -- default binding  -- invoked in window/console context.
* 2. Implicit Binding -- set in function -- object before (to the left of) the dot is what `this` will be bound to - it sets the context.
* 3. New Binding - constructor functions -- refers to the specific instance of the object that is created and returned by a constructor function.
* 4. Explicit Binding -- .call .bind & .apply -- whenever call or apply method is used, this is explicityly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log("Your windows dimesnsions are " + this.innerWidth + " x " + this.innerHeight);

// Principle 2

// code example for Implicit Binding
const iSetIt = {
    greeting: 'Hello',
    foo: function(name, cb) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(`My scope is: ${this.constructor.toString()}`);
      console.log(arguments.callee.name)
      iSetIt.tst(cb)
    },
    tst: function() { console.log(`My scope is: ${this.constructor.toString()} \n I was called by: ${arguments.callee.caller.name}`) },
    xyz: console.log(`My scope is: ${this.constructor.name.toString()}`)
}
  iSetIt.foo("cat", "tst");

// Principle 3

// code example for New Binding
function Foo() {        
    this.name = 'Mike';
    this.say = function () {
    return "I am " + this.name; 
   };
}

var name = 'Frank'; //WE DON'T CARE ABOUT YOU FRANK
console.log('You think the name is going to be ' + name); 
var result = new Foo();
console.log('But its actually ' + result.name); //Mike wins the day

// Principle 4

// code example for Explicit Binding
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
};

var greetPerson = greet.bind(person); 
greetPerson();