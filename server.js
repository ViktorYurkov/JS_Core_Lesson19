var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log('Lesson 19');
    resp.send("<h1>Welcom to Lesson 17</h1>")
});

server.get('/user-data', function (request, response) {
    var obj = request.query;
    console.log(obj);
    response.send(obj);
});

server.post('/user-data', function (request, response) {
    var obj = request.body;
    console.log(obj);
    response.send(obj);
});


server.listen(3001);