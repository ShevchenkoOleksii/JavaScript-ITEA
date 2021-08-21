// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

// function binaryAgent(str) {
//     let arrayFromStr = str.split(' ');
//     let result = arrayFromStr.map((charCode) => {
//         return String.fromCharCode(parseInt(charCode, 2));
//     })
//     return str = result.join('');
// }
  
// console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

//----------------------------------------------------------------------------------------

// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.


// function truthCheck(collection, pre) {
//     let sizeCollection = collection.length,
//     i;

//     for(i = 0; i < sizeCollection; i += 1) {

//         if(!collection[i][pre]) {
//             return pre = false;
//         }
//     }
//     return pre = true;
// }
  
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); 
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
// console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"));
// console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"));
// console.log(truthCheck([{"single": "yes"}], "single"));
// console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));
// console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));
// console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));

//----------------------------------------------------------------------------------------
// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

// function addTogether(x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number' && y !== undefined) {
//         return undefined;
//     } else if(y === undefined) {
//         function sumTwoAnd(z) {
//             return x + z;
//         }
//         return sumTwoAnd;
//     } else {
//         return x + y;
//     }
// }
  
// console.log(addTogether(5)(7));
// console.log(addTogether(3, 2))
// console.log(addTogether('10', 2))

//----------------------------------------------------------------------------------------
// Make a Person
// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

// let Person = function(firstAndLast) {

//     let fullName = firstAndLast;

//     this.getFirstName = function() {
//         return fullName.split(' ')[0];
//     };

//     this.getLastName = function() {
//         return fullName.split(' ')[1];
//     };

//     this.getFullName = function() {
//         return fullName;
//     };

//     this.setFirstName = function(first) {
//         fullName = `${first} ${this.getLastName()}`;
//     };

//     this.setLastName = function(last) {
//         fullName = `${this.getFirstName()} ${last}`;
//     };

//     this.setFullName = function(firstAndLast) {
//         fullName = firstAndLast;
//     };

//     return firstAndLast;
//   };
  
// let bob = new Person('Bob Ross');

// console.log(Object.keys(bob).length);
// console.log(bob instanceof Person);
// console.log(bob.firstName);
// console.log(bob.lastName);
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.getFullName());
// bob.setFirstName("Haskell");
// console.log(bob.getFullName());
// bob.setLastName("Curry");
// console.log(bob.getFullName());
// bob.setFullName("Haskell Curry");
// console.log(bob.getFullName());
// bob.setFullName("Haskell Curry")
// console.log(bob.getFirstName());
// bob.setFullName("Haskell Curry")
// console.log(bob.getLastName());

//----------------------------------------------------------------------------------------

// Map the Debris

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
//----------------------------------------------------------------------------------------
// function orbitalPeriod(arr) {
//     const GM = 398600.4418,
//         earthRadius = 6367.4447,
//         Pi = Math.PI;
//     let sizeArg = arr.length,
//     i,
//     R,
//     T;

//     for(i = 0; i < sizeArg; i += 1) {
//         R = earthRadius + arr[i]['avgAlt'];
//         T = Math.round(2 * Pi * (Math.sqrt((R ** 3) / GM)));
//         delete arr[i].avgAlt;
//         arr[i]['orbitalPeriod'] = T;
//     }
//     return arr;
// }

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
