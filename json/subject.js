const http = require('http');

const server = http.createServer(function(){
    resizeBy.writeHead(200,{'Content-Type' : 'text/json'});
    resizeBy.write(' "contactSubject": [ "General Enquiry", "Class","Suhedule",  "Instructor",  "Price", "Other" ]')
    res.end();



});
server.listen(4040)