let sales = 123_456_789; //this is of type number
let course = "TypeScript"; //this is of type string
let is_complete = true; //this is of type boolean
let something; //this is of type any

let render = function(ducument: any){
    console.log(ducument);
}


//Arrays
let numbers: number[] = [1,2,3];
numbers.forEach(n => n.toPrecision)

//Tuples: A fixed length of an array where each element has a particular type, most significant when we have key: value pairs
let tuple: [string, number] = ["Hello", 123];
tuple[1] = 456;


//Enums
const enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Green;
console.log(color);

//Functions
function add(a: number, b: number): number {
    return a + b;
}

let result = add(1, 2);
console.log(result);

//Objects, Using type aliases in our code
type Employee = {
    readonly name: string;
    age: number;
    retired:(date: Date) => void;
}

let employee1: Employee = {
    name: "John",
    age: 30,
    retired: (date: Date) => {
        console.log(date);
    }
}
let employe2: Employee = { name: 'Noel', age: 20, 
retired: (Date) =>{
    console.log(Date);
}
}

//Union Types: giving a variable or function two or more types
function KgToLbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return 0;
    }
}

KgToLbs(10.0)
KgToLbs("10.0kg")

//Intersection Types: an object with both a string and a number at same time
type Dragable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget =  Dragable & Resizable;

let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types:  Limit the values we assign to a partticular variable
type Quantity = 50 | 100;
let quantity: Quantity = 100;


type Metric = 'cm' | 'inch';//Also applicable for strings
let metric: Metric = 'cm';

//Nullable Types: 
function greet(name: string | null){
    console.log(`Hello ${name}`);
}

greet(null)

//Optional Chainging
type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null {

    if (id === 1) {
        return { birthday: new Date() };
    } else {
        return null;
    }
}