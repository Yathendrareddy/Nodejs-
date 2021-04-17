
const http = require('http');
const url = require('url');


http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);

  
var q = url.parse(req.url, true);
console.log(q.query.object);
console.log(q.query.metric);
console.log(q.query.radius);

  res.writeHead(200, {'Content-Type': 'text/html'});
  if(q.query.metric == "area" && q.query.object == "circle"){
  res.end("area of circle is " + 3.14 * (q.query.radius ** 2 ))
  }
  if(q.query.metric == "volume" && q.query.object == "sphere") {
      res.end("volume of sphere is " + (1.333333 * 3.14 * (q.query.radius ** 3)))
  }

  
}).listen(8080);



