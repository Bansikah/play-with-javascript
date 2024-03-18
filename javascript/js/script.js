//variables
let name = 'Noel';
console.log(name);
/*
Rules
- cannot start with a number
- should not be a reserved key word
- should not contain space
- should have an meaningful name
*/


//Constants: the values of constants do not change
const interestRate = 100;
console.log(interestRate);

//Premitive datatypes
 
/*
- string
- Number
- Boolean
- Integer
- undefined
- null
*/

isApproved == true

//Reference types in js
/*
- Arrays
- Objects
*/

let person = {
    id: 1,
    name: "John",
    age: 21
};


//Two ways of accessing the object person

//1. Dot notation
person.name= "James"

//2. Bracket notation
person['name'] = 'Mary';

console.log(person.name);


//Arrays
let people = ['noel', 'blanch']
console.log(person)

//functions
function greet(name, email){//name is a paramater
    console.log("Hello" + name);
}
//function call
greet('Noel', "noel@gmail.com")//Noel is an argument


//another function
function square(number){
   return number * number;
}

console.log(square(2))