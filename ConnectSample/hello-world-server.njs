//var connect = require('connect'),http = require('http');
//var app = connect();
//app.use(connect.logger());
//
//app.use(function(req,res,next){
//            if(req.url == "/about"){
//                res.writeHead(200,{"Content-Type":"text/plain"});
//                res.end("Welcome to about page!");
//            }else{
//                next();
//            }
//        });
//
//app.use(function(req,res){
//            res.writeHead(200,{'Content-Type':'text/plain'});
//            res.end('Hello World\n');
//        }).listen(1337,'127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');

var express = require('express'),http = require('http');
var app = express();

app.all("*",function(req,res,next){
    res.writeHead(200,{"Content-Type":"text/plain"});
    next();
});

app.get("/",function(req,res){
            res.end("welcome to the homepage");
});
app.get("/about",function(req,res){
    res.end("welcome to the about page");
});

app.get("/hi/:user",function(req,res){
    res.end("hi "+req.params.user);
});

http.createServer(app).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
