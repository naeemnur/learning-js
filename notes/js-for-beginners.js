// JavaScript for Beginners - Notes - Day 1 - 10/08/2019

/**
= GETTING STARTED 
***************/

// Runs on all Browsers
// Js Engine - Chrome V8
// With node we can run Js out side of the browser
// ECMAScript = Specification
// JavaScript = Programming Language

console.log("Hello world"); //Statement

// Separation of Concerns
// Separate HTML (Content) from Js (Behaviour)

// JavaScript in Node
// node index.js

/** 
= Basics 
***************/

// 01. Variables

// Variables are the most fundamental concept of any programming language, we use a variable to store data temporarily

// var  - dont use. old.
// let - new way to set a variable ES

let namee = "naeem";
console.log(namee);

// Variables cannot be a reserved keyword
// if, else, let, const, true, false etc...
// Should be meaningful and descriptive
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// are case-sensitive

let ffname; // camelCase/camelNotation
let gName, lastName; // can define multiple variables

// 02. Constant variable
// const - value of a constant cannot change, cannot reasign
// should be default way to define

// 03. Primitive Types / Value Types

let name = "naeem"; // String Literal
let age = "30"; // Number Literal
let isApproved = true; // Boolean Literal (true, false)
let firstName = undefined;
let notFound = "";
let selectedColor = null;

// 04. Dynamic Typing
// There are two types of languages
// Static (Statically-typed) & Dynamic (Dynamically-typed)
// JavaScript is a dynamic language
// can change values in runtime

// 05. Objects
// Object is a reference type
// Reference Types consist of Object, Array, Function
// Object is like an object in real life, same concept in JS

// Object literal
// it has properties inside
// use curly brackets to define an object literal
let person = {
  name: "Naeem",
  age: 30
};

// Dot Notation <- concised and shorter, default choice
person.name = "Zainab";

// Bracket Notation <- can find a property in runtime
let selection = "name";
person[selection] = "Zeebee";

console.log(person.name);

// 06. Arrays
// List of products in a shopping cart
// Arrays can be used to store
// each element has an index which shows the position
// Array is an Object

let selectedColours = ["red", "blue"]; // Array Literal
selectedColours[2] = "green"; // add an element to array dynamically??
selectedColours[3] = 8;
console.log(selectedColours.length); // shows number of elements in an array

// 07. Functions
// Functions are one of the fundamental building blocks in JavaScript
// A function is basically a set of statement that performs a task or calculates a value
// functions can have inputs

// a function with a parameter = its a variable used inside the function

// Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Zainab", "Naeem"); // function with an argument
// Parameter is when it is defined at the time of declaration and argument is the value supplied for the parameter when calling the function

// 08. Types of Functions

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2)); // <-- there are two function calls here

/** 
= Operators 
***************/

// 01. Operators in JavaScript

// Operators Variables -> Expressions -> Logic/Algorithms

// Types of Operators
// 01. Arithmetic operator
// 02. Assignment operator
// 03. Comparison operator
// 04. Logical operator
// 05. Bitwise operator

// 02. Arithmetic Operators
// (x+y) is an expression in JavaScript, which is something produces a value

let x = 10;
let y = 3;

// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Remainder of division
// console.log(x ** y); // Exponentiation of division = X to the power of Y

// Increment Operator (++)
console.log(x++);
console.log(x); // prints 11

// Decrement Operator (--)
console.log(x--);
console.log(x); // prints 10

// 03. Assignment Operators

x += 5; // addition assignment
x -= 5; // Subtraction assignment
x *= 5; // Multiplication assignment
x /= 5; // Division assignment
x %= 5; // Remainder assignment

// 04. Comparison Operators (Boolean)

// Relational
console.log(x > 0); // Greater than
console.log(x >= 1); // Greater than or equal to
console.log(x < 1); // Less than
console.log(x <= 1); // Less than or equal to

// Equality
console.log(x === 1);
console.log(x !== 1);

// 05. Equality Operators

// Strict Equality (Type + Value )
console.log(1 === 1); // true
console.log("1" === 1); // false

// Lose Equality (Converts type on the right side with left)
console.log(1 == 1); // true
console.log("1" == 1); // true
console.log(true == 1); // true

// 06. Ternary/Condtional Operator (Mosh's fave)

// Example
// If a customer has more than points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type);

// 07. Logical Operators

// There are 3 types of logical operators
// we use logical operators to make decisions on multiple conditions

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); // TRUE
console.log(false && true); // False
console.log(true && false); // False

// EXAMPLE FOR (&&)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// Returns true if one of the operands is TRUE
let eligibleForLoanOR = highIncome || goodCreditScore;
console.log(eligibleForLoanOR); // TRUE

// NOT (!) = BANG!
let applicationRefused = !eligibleForLoan; // opposite of eligibleForLoan
console.log(eligibleForLoan); //

// 08. Logical Operators with Non-booleans

// Falsy Values

// undefined
// null
// 0
// false
// ''
// NaN (not a number)

// Anything that is not Falsy -> Truthy

// Short-citcuiting
let shortCitcuit = false || 1 || 2;

let userColor = "Pink";
let defualtColor = "Blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // prints Pink

// 09. Bitwise Operators

// In computers numbers are stored in binary formats
// 1 = 0000000 (Number 1 in the decimal system is represented as 7 zeros)
// each digit is a bit
// 2 = 00000010
// 3 = 00000011

// Are similar to logical operators

console.log(1 | 2); // Bitwise OR - prints 3
console.log(1 & 2); // Bitwise AND - prints 0

// Real-world example

// Read, Write, Execute (Access control system)
// 00000100 Read
// 00000110 Write
// 00000111 Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission); // prints 6

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);

// 10. Operators Precedence
// the condition of being considered more important than someone or something else; priority in importance, order, or rank.

let xx = (2 + 3) * 4;
console.log(xx); // 20
// BODMAS rule

// 11. QUIZ = DONE

// 12. Excercise - Swapping Variables (Couldnt solve :'()

let a = "red";
let b = "blue";

// Swap the values of a and b
let c = a; // give it the value of red
a = b; // now red is blue
b = c; // and blue is red

console.log(a);
console.log(b);

/** 
= Control Flow 
***************/

// 01.  If...else

// There are two types of conditional statements in JavaScript (if...else and Switch...case)

// Hour (24hrs)
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// 02.  Switch...case

let role;

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown role");
}

// prints Guest User
// we can do the same condition with If..else

if (role === "guest") {
  console.log("Guest User");
} else if (role === "moderator") {
  console.log("Moderator User");
} else {
  console.log("Unknown role");
}

// 03. For LOOP

// sometimes you want to repeat an action a number of times
// Suppose we want to print Hello World Five times

// Now this is where LOOPS come in
// there are various types of loops in JavaScript

// 01. For
// 02. While
// 03. Do...while
// 04. For...in
// 05. For...of

//for (initialExpression; condition; incrementExpression)

// Lets print Hello World five times!!!

for (let i = 1; i <= 5; i++) {
  console.log("Hello World", i);
}

// reverse
for (let i = 5; i >= 1; i--) {
  console.log("Hello World", i);
}

// 04. While LOOPs

// one key difference in for loop and while, in for loop i is the part of the loop

// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// 05. Do...while LOOP (not used while)
let i = 0;

do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// 06. Infinite LOOPs
// crashes browser

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++; // if not present, creates an infinte loop
// }

// while (true) {
//   // will run forever
// }

// 07. For...in
// so far we have learned about three kinds of loops

// for
// while
// do-while

// with all these loops we can repeat an action a number of times

// for-in
const persona = {
  name: "Naeem",
  age: 30
};

for (let key in persona) {
  console.log(key, persona[key]);
}

// Dot notation
persona.name;

// Bracket Notation
persona["name"];

const niceColors = ["red", "green", "blue"];

for (let index in niceColors) {
  console.log(index, niceColors[index]);
}

// used to iterate over properties of the object

// 08. For-of LOOPs
// introduced in ES6, very similar to for-in loop, instead of in keyword we use the of keyword

for (let color of niceColors) {
  console.log(color);
}

// iterates over items and elements in an array

// 09. Break and Continue

let pp = 0;
while (pp <= 10) {
  //if (pp === 6) break;
  if (pp % 2 === 0) {
    pp++;
    continue; //old legacy, not recommended to use
  }
  console.log(pp);
  pp++;
}

// 10. Excercise 1 - Max of Two Numbers
// Write a function that takes two numbers
// and returns the maximum of the two.

// function maximumOfTwo(num1, num2) {
//   return num1 || num2 >= num2 || num1;
// }

// console.log(maximumOfTwo(5, 4));

//IM A FAILURE

function max(a, b) {
  //   if (a > b) return a;
  //   return b;

  return a > b ? a : b;
  //condition ? a : b;
}

let number = max(6, 4);
console.log(number);

// 11. Excercise 2 - Landscape or Portrait
function isLandscape(width, height) {
  return width > height;
}

let width = isLandscape(1366, 768);
console.log(width);

// 12. Excercise 3 - FizzBuzz

// the popular FizBuzz Algorithm

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input) {
  // Divisible by both 3 and 5 => FizzBuzz
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  // Divisible by 3 => Fizz
  if (input % 3 === 0) return "Fizz";

  // Divisible by 5 => Fizz
  if (input % 5 === 0) return "Buzz";

  // Not a number => 'Not a number'
  let notAnumber = typeof input !== "number";
  if (notAnumber) return NaN;

  // ELSE Not divisible by 3 or 5 => input
  return input;
}

const output = fizzBuzz(77);
console.log(output);

// 13. Excercise 4 - Demerit Points

// Speed Limit = 70 (if under speed limit print OK)
// If speed: 5 -> 1 Point (every 5km above the speed limit they are gonna get 1 point)
// use Math.floor(1.3)
// 12 points ->suspended (print: License Suspended)

//IM A FAILURE

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("license suspended");
  else console.log("Points", points);
}

const outputSpeed = checkSpeed(71);
console.log(outputSpeed);

// 14. Excercise 5 - Even and Odd Numbers

function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    // this works too
    if (i % 2 === 0) {
      console.log(i, "Even");
    } else {
      console.log(i, "Odd");
    }

    // Solution
    // const message = i % 2 === 0 ? "EVEN" : "ODD";
    // console.log(i, message);
  }
}

showNumbers(10);

// 15. Excercise 6 - Count Truthy

//Example

const isActive = true; // Boolean True
const truthyName = "Naeem"; // Truthy (true)
if (truthyName) console.log("hello");

// list of falsy values:
// undefined
// null
// ''
// false
// 0
// NaN

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(countTruthy([false, "naeem", 0, "zainab"]));

// 16. Excercise 7 - String properties
// Print the string type of object only

function showProperties(obj) {
  //   obj !== typeof "string" ? obj : "";
  //   console.log(obj);

  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

const movie = {
  title: "Rainman",
  releaseYear: 2000,
  rating: 4.6,
  director: "Memy"
};

showProperties(movie);

// 17. Excercise 8 - Sum of multiples of 3 and 5

// Multiple of 3: 3, 6, 9
// Multiple of 5: 5, 10

function sum(limit) {
  let sum = 0;

  for (i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }

  console.log(sum);
}

sum(10);

// 18. Excercise 9 - Grade

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

const marks = [40, 60, 100];
console.log(calculateGrade(marks));

// 19. Excercise 10 - Stars
// example of an nested loop

function showStars(rows) {
  star = "$";
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 1; i < row; i++) {
      pattern += star;
    }
    console.log(pattern);
  }
}

showStars(10);

// 20. Excercise - Prime numbers

// Prime (whose factors are 1 and itself)
// Composite

function showPrimes(limit) {
  for (number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

showPrimes(10);

/** 
= Objects
***************/
// 01. Basics

// objects are collection of key-value pairs
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  isVisible: true,
  draw: function() {
    console.log("draw");
  }
};

circle.draw(); // Method
// OOP

// 02. Factory Functions

// Factory function produces objects
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// 03. Constructor Functions
// its job is to create a function

// Camel Notation
// Pascal Notation

// Constructor function - use pascal notation
function Circle(radius) {
  this.radius = radius; // adding a new property to an empty object
  this.draw = function() {
    console.log("draw");
  };
}

const circle3 = new Circle(1); // new operator
console.log(circle3);

// 04. Dynamic Nature of Objects

const circular = {
  radius: 1
};

circular.color = "Pink";
circular.draw = function() {};

delete circular.radius;

console.log(circular);

// 05. Constructor Property
// every object has a constructor property in JavaScript

// 06. Functions are objects
// ^ read line 773
// key take-away

// 07. Value vs Reference Types

// Value Types: Number, String, Boolean, Symbol, undefined, null (Primitives)

// Reference Types: Object, Function, Array

// values are independent of each other unless its an object

// Primitives are copied by their value
// Reference type Objects are copied by their reference

// 08. Enumerating properties of an Object

// objects are not iterable

for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key);

for (let entry of Object.entries(circle)) console.log(entry);

if ("radius" in circle) console.log("yes");

// 09. Cloning an Object

// old way to clone
// const another = {};
// for (let key in circle) another[key] = circle[key];
// console.log(another);

// new way to clone
// const another = Object.assign(
//   {
//     color: "yellow"
//   },
//   circle
// );

// another simpler and elegant way to clone
const another = { ...circle };
console.log(another);

// 10. Garbage collection
// happens behind the scene

/* 
    Day 2 -  11/08/2019
*/

// 11. Math (built in object)

console.log(Math.random());
console.log(Math.round(1.9));
console.log(Math.max(1, 2, 4, 5, 6));
console.log(Math.min(1, 2, 4, 5, 6));

// 12. String (built in object)
// there are two kinds of strings in JavaScript

// String primitive
const message11 = "This is my first message";

// String object
const anouther = new String("hi");

// Some Builtin properties and methods
// message.length;
// message[0];
// message[1];
// message11.includes("my");
// message11.inscludes("not");
// message.startsWith("This");
// message.endswith("this");
// message.indexOf("my");
// message.replace("first", "second");
// message.toUpperCase();
// message.toLowerCase();
// message.trim();
// message.split();

// Escape Notation

// \'
// \n

// 13. Template Literals
// There are different kinds of literals in JavaScript

// Object literal: {}
// Boolean literal: true, false
// String literal: '', ""
// Template literal: `` (ES6)

const backTick = `This is my
first message`;

// Placeholders
// ${}
// any kind expression, variable, constant, functions etc...

const emailTemplate = `
Hi ${name},

This is my
first message`;

// 14. Date
// Date is a built-in object
// Date is a constructor function
// dateString (various supported formats)

const now1 = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

now1.toDateString();
now1.toTimeString();
now1.toISOString();

now1.setFullYear(2017);

// 15. Excercise 1 - Address Object
// Street
// city
// zipcode
// showAddress(address)

const address = {
  street: "Gudaibiya Avenue",
  city: "Manama",
  zipCode: "321"
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

// 16. Excercise 2 - Factory and Constructor functions

// factory-function

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

function createGameBoy(color, model) {
  return {
    color,
    model
  };
}

let gameboy = createGameBoy("Purple", "2000");
console.log(gameboy);

// const createdAddress = createAddress("a", "b", "c");
// console.log(createdAddress);

// constructor-function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function Gameboy(color, model) {
  this.color = color;
  this.model = model;
}

const gameboy1 = new Gameboy("Blue", 2004);
console.log(gameboy1);

const createdAddress = new Address("aaa", "bbb", "ccc");
console.log(createdAddress);

// 17. Excercise - Object Equality

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");
let address3 = address1;

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address2));

//18. Excercise - Blog post object

let blog = {
  title: "Title",
  body: "The body of the post",
  author: "Naeem",
  views: 20,
  comments: [
    {
      authur: "John Doe",
      body: "Comment"
    },
    {
      authur: "John Doe",
      body: "Comment"
    }
  ],
  isLive: true
};

console.log(blog);

// 19. Excercise - Constructor Function (Blogpost)

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let blogPost = new Post("a", "b", "e", true);
console.log(blogPost);

// 20. Excercise - Price Range Object

// inexpensive
// moderate
// pricey
// expensive

// create an array of object with a price range object

const priceRange = {
  inexpensive: 0 < 10,
  moderate: 20 <= 40,
  pricet: 40 <= 100
};

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 }
];

/** 
= Arrays
***************/

// 1. Intro

// Adding new elements
// Finding elements
// Removing elements
// Splitting arrays
// Combining arrays

// 2. Adding elements
const numbers = [1, 2, 3, 1, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(1, 0, "a", "b", 1, 4);

// 3. Finding elements (primitives)
numbers.indexOf(1);

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(0) !== -1); // ugly
console.log(numbers.includes(1)); // new stuff

// 4. Finding Elements (Objects are Reference types)

const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];

const course = courses.find(function(course) {
  return course.name === "a";
});

console.log(course);

// 5. Arrow Functions (ES6 BITCHES!!!)

const course2 = courses.find(course => course.name === "b");

console.log(course2);

// 6. Removing Elements

// End
const last = numbers.pop();

// Beginning
const first = numbers.shift();

// Middile
const middle = numbers.splice(2, 1);

// 7. Emptying an Array

// Solution 1 - doesnt work if u have multiple references
//numbers = []; // reaassign

// Solution 2 (GOOD)
numbers.length = 0;

// Solution 3
numbers.splice(0, numbers.length);

// Solution 4 - not recommended
while (numbers.length > 0) numbers.pop();

console.log(numbers);

// 8. Combining and Slicing Arrays

// Combining
const first1 = [1, 2, 3];
const second1 = [4, 5, 6];

const combined = first1.concat(second1);

// Slicing
const slice = combined.slice(3);

// 9. The spread operator (ES6!)

const combined2 = [...first1, ...second1];
console.log(combined2);

// 10. Iterating an Array

// for of
const unumbers = [1, 2, 3, 4, 5, 6];
for (let number of unumbers) console.log(number);

// for...in
for (let number in unumbers) console.log(number, unumbers[number]);

// forEach method
unumbers.forEach(function(number) {
  console.log(number);
});

// forEach method (arrow function)
unumbers.forEach(number => console.log(number));

unumbers.forEach((number, index) => console.log(index, number));

// 11. Joining Arrays
const joined = unumbers.join(",");
console.log(joined);

const message2 = "this is a message";
const parts = message2.split(" ");
console.log(parts);

const combined3 = parts.join("-");
console.log(combined3);

// 12. Sorting Arrays

// good for strings and numbers
//unumbers.sort();
//unumbers.reverse();

// 13. Testing the elements of an Array
//unumbers.every();

// 14. Filtering an Array

const filtered = unumbers.filter(n => n >= 0);
console.log(filtered);

// 15. Mapping an Array

const items1 = filtered.map(n => "<li>" + n + "</li");
const html = "<ul>" + items1.join("") + "</ul>";
console.log(html);

const items2 = filtered.map(n => ({ value: n }));
console.log(items2);

// chainable methods filter and map
// no need to explicitly define in a variable
unumbers.filter(n => n >= 0).map(n => ({ value: n }));

// 16. Reducing an Array

// Solution 1
let sum2 = 0;
for (let n of unumbers) sum2 += n;

// Solution 2
const sum3 = unumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum3);

// 17. EXCERCSE 1 - Array from Range

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

const arrayNum = arrayFromRange(1, 2);
console.log(arrayNum);

// 18. Excercise 2 - Includes
function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

// 19. Excercise 3 - Except
function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (excluded.includes(element)) output.push(elemet);
  return output;
}

// 20. Excercise 4 - Moving an Element
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length) {
    console.error("Invalid 0ffset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// 21. Excercise 5 - Count occurences

function countOccurences(array, searchElement) {
  let count = 0;

  // #1
  for (let element of array) if (element === searchElement) count++;
  return count;

  // #2
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  array.reduce(reducer, 0);
}

const accuNumbers = [1, 2, 3, 99, 1];
const countThem = countOccurences(accuNumbers, 5);
console.log(countThem);

// 22. Excercise 6 - Get Max

function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];

  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] > max) {
  //     max = array[i];
  //   }
  // }
  // return max;

  return array.reduce((a, c) => (a > c ? a : c));
}
const getmax = getMax(accuNumbers);
console.log(getmax);

// 23. Excercise 7 - Movies

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

// function getMovies(array) {
//   array.find(function(movie) {
//     if (array.rating > 4) return array.title;
//   });
// }

// let printMovies = getMovies(movies);

// console.log(printMovies);

const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);

// failed entirely

/** 
= Function 
***************/

// 1. Function declarations vs Expressions

// Function Declarion
function walk() {
  console.log("walk");
}

// Anonymous Functon Expression
let run = function() {
  console.log("run");
};

// Named Functon Expression
let runner = function runner() {
  console.log("run bitch");
};

runner();

// 2. Hoisting

// key difference between both is that u cant print function expression before initializing

// hoisting is the process of moving the function declaration to top of the file (done automatically by Js engine)

// 3. Arguments
// every function in JavaScript  special object called: arguments

// 4. The rest operator
// function sum(...args) {
// args.reduce((a, b) => a + b);
//}

// must be last parameter

// 5. Default Parameters
// make sure its the last parameter
function interest(principal, rate = 3.5, years = 5) {
  // defaulting parameters - old way
  // rate = rate || 3.5;
  // years = years || 5;

  return ((principal * rate) / 100) * years;
}

// 6. Getters and Setters

// getters => to access properties
// setters => to change (mutate) them

const bae = {
  firstName: "Zainab",
  lastName: "Naeem",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(bae.firstName);

// 7. Try & Catch
// throw new Error();
// try { }
// catch (e) {}

// 8. Local and Global Scope
// check video

// 9. Let vs Var
// avoid Var at any cost!!!

// var => function-scoped variable
// ES6: let, const => block-scoped variables

let xxx = 0;
var yxy = 0;

// 10. The this keyword

// What is 'this'?
// 'this' is the object that is executing the current function

// method ->obj
const video = {
  title: "a",
  play() {
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
};

video.stop();

// function ->global (window, global)
function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("b");

// 11. Changing the value of 'this'

// .call();
// .apply();
// .bind();

// 12. Excercise 1 - Sum of arguments

// sum()
// sum([1,2,3,4])
//

function sumArgs(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    items = [...args[0]];
  }
  return args.reduce((a, b) => a + b);
}

const sumAll = sumArgs([1, 2, 3, 4]);
console.log(sumAll);

// 13. Excercise 2 - Area of Circle

let circle4 = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle4.area);

//14. Exercise 3 - Error handling

// watch video
