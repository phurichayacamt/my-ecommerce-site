const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {


    
let filePath = '.' +req.url;
if(filePath ==="./") filePath = "./index.html";


const extname = path.extname(filePath);
let contentType = "text/html"
if(extname === ".css") contentType = "text/css" ;
if(extname === ".xml") contentType = "text/xml";
if(extname === ".js") contentType = "application/js";

fs.readFile(filePath, function(err, htmlDoc){
    if(err){
        res.writeHead(200,{'Content-Type': 'text/html'});
        return res.end("404:File not Found")
    }
    res.writeHead(200, {'Content-Type': contentType});
    const q = url.parse(req.url, true).query
    const txt = q.fname + ' ' + q.lname;
    res.write(htmlDoc)
    res.end();

});
 
});
server.listen(8080);