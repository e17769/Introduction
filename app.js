// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<html> <body> <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'></script> <script src='image.js'> </script> <dir id='divDisplay' style='padding-top: 99px;'> <div id='divTitle' style='color:#F8F8FF;font-family: Georgia;line-height: 1.4;font-weight: normal;font-stretch: normal;font-variant: small-caps;font-size: 42px;'></div> <img id='keyImg' src='barcodeA.gif'></img> </div> </body> </html>");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.port|| 1337, '127.0.0.1');

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");