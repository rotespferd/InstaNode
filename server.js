var http = require('http');
http.createServer(function (req, res) {
  var date = new Date();
  console.log(date.toLocaleString() + " : Handling new request");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<html><head><title>InstaNode</title></head><body>");
  res.write("<h1>This is InstaNode</h1>");
  res.write('<p>Just another Instagramm clone, written with the power of Node.js</p>');
  res.end("</body></html>");
}).listen(8124, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/');