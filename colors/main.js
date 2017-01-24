/*var http = require("http");
//read a txt file
var fs = require("fs");


http.createServer(function(request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, { 'Content-Type': 'text/plain' });

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(1234);
 
 console.log('italian passion');

fs.readFile('input.txt', function(err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");*/
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});


if (process.argv[2]) {
    var name = process.argv[2];
    if (process.argv[3]) {
        name = name + ' ' + process.argv[3];
    }
    console.warn(`Goodmorning ${name}, welcome back`);
}

