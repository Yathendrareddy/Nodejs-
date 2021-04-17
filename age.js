// application has access to the http module

const http = require('http');
const url = require('url');

// create http server

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);

  
var q = url.parse(req.url, true);
console.log(q.query.year);
console.log(q.query.month);
console.log(q.query.date);
console.log(q.query.name)

// used npm install age-calculator

var ageCalculator = require('age-calculator');
let{AgeFromDateString, AgeFromDate} = require('age-calculator');
let ageFromDate = new AgeFromDate(new Date(q.query.year,q.query.month-1,q.query.date)).age;
console.log("Year" + ageFromDate);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("Hello " + q.query.name + ".   You are currently " + ageFromDate + " years old.")
}).listen(8080);


