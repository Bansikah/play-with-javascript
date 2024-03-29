//const path = require('path');

//const pathObject = path.parse(__filename);
//console.log(pathObject);

const os = require('os');
var freeMemor = os.freemem();
var totalMemor = os.totalmem();

//console.log(freeMemor);
//using ES6 
/*
console.log(`Free memory: ${freeMemor} MB`);
console.log(`Total memory: ${totalMemor} MB`);
*/

//Dealing with files
/*
const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

fs.readFile(__filename, function(err, data){//function(err, data) in this case is a callback function
    if(err){
        console.log(err);
    }
    else{
        console.log(String);
    }
});
*/

//Events in node: A singnal that indicates that something has changed or happened to our application
