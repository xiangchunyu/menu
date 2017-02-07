var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    //console.log(__dirname);
    var readpath = __dirname + '/' + url.parse('index.html').pathname;
    //console.log(readpath);
    var indexPage = fs.readFileSync(readpath);
    res.end(indexPage);
}).listen(3000);
console.log('server start');