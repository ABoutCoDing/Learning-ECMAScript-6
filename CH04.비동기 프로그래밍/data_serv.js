var http = require('http');
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/json; charset=UTF-8"});
  var json = {
    "Name": "수지",
    "Profession": "연예인",
    "Age": "25"
  };
  response.write(JSON.stringify(json));
  response.end();
}).listen(8888);  // http://127.0.0.1:8888
