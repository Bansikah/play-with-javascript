/* OOP 4 main pillars
- Inheritance: Reusability of code and reduce complexity
- Abstraction: Reduce complexity and isolates impact of changes
- Polymorphism: Doing somthing in two or more forms
- Encapsulation: Refactor ugly switches or case statements
*/

//Encapsulation in practice:
let baseSalary = 3000;
let overTime = 20;
let rate = 30;

//Encapsulating the getWage method, also encapsulation is archieved by the "this" keyword
function getWage(baseSalary, overTime, rate){
    return baseSalary + (overTime * rate)
}

let employee = {
    baseSalary: 300_00,
    overTime: 20,
    rate: 30,
    getWage: function(){
        return this.baseSalary + (this.overTime * this.rate)
    }
    
}

employee.getWage();