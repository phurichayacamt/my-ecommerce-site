const  http = require('http');
const uri = require('url');
const fs = require('fs');

const  server = http.createServer(function (req, res) {

    fs.readFile("./index.html",function(err,htmlDoc){

        // res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;
        var txt = q.fname + ' ' + q.lname;
        res.write(txt);
        res.end();
    });

})

server.listen(8080);