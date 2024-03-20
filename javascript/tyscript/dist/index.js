"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_complete = true;
let something;
let render = function (ducument) {
    console.log(ducument);
};
let numbers = [1, 2, 3];
numbers.forEach(n => n.toPrecision);
let tuple = ["Hello", 123];
tuple[1] = 456;
let color = 1;
console.log(color);
function add(a, b) {
    return a + b;
}
let result = add(1, 2);
console.log(result);
let employee1 = {
    name: "John",
    age: 30,
    retired: (date) => {
        console.log(date);
    }
};
let employe2 = { name: 'Noel', age: 20,
    retired: (Date) => {
        console.log(Date);
    }
};
function KgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return 0;
    }
}
KgToLbs(10.0);
KgToLbs("10.0kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let metric = 'cm';
function greet(name) {
    console.log(`Hello ${name}`);
}
greet(null);
function getCustomer(id) {
    if (id === 1) {
        return { birthday: new Date() };
    }
    else {
        return null;
    }
}
//# sourceMappingURL=index.js.map