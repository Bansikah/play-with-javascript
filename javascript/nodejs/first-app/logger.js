var url = "http://mylogger.io/log";

console.log(__filename)
console.log(__dirname)
function log(message) {
    //SEnd an http request
    console.log(message);
}

module.exports.log = log;