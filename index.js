//
//For example, the following code defines a simple function named square:
function square(number) {
  return number * number;
}


//The function square takes one parameter, called number. The function consists of one statement that says to return the parameter of the function (that is, number) multiplied by itself. The statement return specifies the value returned by the function:
return number * number;


//When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

const mycar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
};

// x gets the value "Honda"
const x = mycar.make;

// the make property is changed by the function
myFunc(mycar);
// y gets the value "Toyota"
const y = mycar.make;


//When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


//Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:
const square = function (number) {
  return number * number;
}
const x = square(4); // x gets the value 16


//However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
}

console.log(factorial(3))


//Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function that should receive a function as first argument and an array as second argument:
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}


//In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as a second argument:
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
}

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);


//In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = 'Toyota';
  }
}


//Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows:
square(5);


//A function can call itself. For example, here is a function that computes factorials recursively:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


//You could then compute the factorials of 1 through 5 as follows:
const a = factorial(1); // a gets the value 1
const b = factorial(2); // b gets the value 2
const c = factorial(3); // c gets the value 6
const d = factorial(4); // d gets the value 24
const e = factorial(5); // e gets the value 120


//Consider the example below:
console.log(square(5)); // 25

function square(n) {
  return n * n;
}


//This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25


//Function hoisting only works with function declarations — not with function expressions. The code below will not work.
console.log(square); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
}


//In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

getScore(); // Returns "Chamakh scored 5"


//For example, consider the following function definition:
const foo = function bar() {
  // statements go here
}


//For example, consider the following loop:
let x = 0;
while (x < 10) { // "x < 10" is the loop condition
  // do stuff
  x++;
}


//It can be converted into a recursive function declaration, followed by a call to that function:
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);


//However, some algorithms cannot be simple iterative loops. For example, getting all the nodes of a tree structure (such as the DOM) is easier via recursion:
function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}


//In fact, recursion itself uses a stack: the function stack. The stack-like behavior can be seen in the following example:
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3


//The following example shows nested functions:
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
const a = addSquares(2, 3); // returns 13
const b = addSquares(3, 4); // returns 25
const c = addSquares(4, 5); // returns 41


//Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
const result = fnInside(5); // returns 8
const result1 = outside(3)(5); // returns 8


//Consider the following example:
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)


//When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest. This is the scope chain. The first on the chain is the innermost scope, and the last is the outermost scope. Consider the following:
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

outside()(10); // returns 20 instead of 10


//Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the outer function execution, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function is somehow made available to any scope outside the outer function.
const pet = function (name) {   // The outer function defines a variable called "name"
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  }
  return getName; // Return the inner function, thereby exposing it to outer scopes
}
const myPet = pet('Vivie');

myPet(); // Returns "Vivie"


//It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.
const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (typeof newSex === 'string' &&
        (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  };

  return pet;
}

const pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver


//In the code above, the name variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.
const getCode = (function () {
  const apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

getCode();    // Returns the apiCode


//If an enclosed function defines a variable with the same name as a variable in the outer scope, then there is no way to refer to the variable in the outer scope again. (The inner scope variable "overrides" the outer one, until the program exits the inner scope. It can be thought of as a name conflict.)
const createPet = function (name) {  // The outer function defines a variable called "name".
  return {
    setName(name) {    // The enclosed function also defines a variable called "name".
      name = name;               // How do we access the "name" defined by the outer function?
    }
  }
}


//The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:
arguments[i]


//For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:
function myConcat(separator) {
  let result = ''; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}


//You can pass any number of arguments to this function, and it concatenates each argument into a string "list":
// returns "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');


//In the following example, if no value is provided for b, its value would be undefined when evaluating a*b, and a call to multiply would normally have returned NaN. However, this is prevented by the second line in this example:
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;
  return a * b;
}

multiply(5); // 5


//With default parameters, a manual check in the function body is no longer necessary. You can put 1 as the default value for b in the function h