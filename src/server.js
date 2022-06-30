const http = require('http');
const dt = require('./myMods');
const url = require('url');
const fs = require("fs");

//sample requests
// /something/otherthan?year=2013&month=12

http.createServer(function (request, response) {
    response.writeHead(
        200, 
        {'Content-Type':'text/html'}
        );

    response.write('<h1>Hello World!</h1>');
    response.write('<br/>');
    response.write("Current date and time: " + dt.myDateTime() + "<br/>");
    response.write(request.url);

    response.write('<br/>');
    var q = url.parse(request.url, true).query;
    response.write('<br/>');
    var txt = q.year + " " + q.month;

    response.write('<br/>');
    response.write("Variables used: " + txt);
    response.write('<br/>');

    //file system
    // fs.readFile(
    //     "dummy1.html",
    //     function (err, data) {
            // response.writeHead(
            //     200,
            //     {"Content-type":"text/html"}
            // );
            // response.write(data);
            // return response.end();
        // });

    response.end('****End response***');
}).listen(8080);