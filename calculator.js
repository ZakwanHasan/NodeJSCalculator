const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

var urlencodedParser = bodyParser.urlencoded({ extended: true })

// load calculator page
app.get("/calculator", function(req,res){
  res.sendFile(__dirname + "/calculator.html");
});


// get input from calculator page post
var num1, num2, action, result;
app.post("/calculator", urlencodedParser, function(req,res){
  action = req.body.calculate;
  num1 = parseInt(req.body.num1);
  num2 = parseInt(req.body.num2);
  switch(action)
  {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1*num2;
      break;
    case "/":
      result = num1/num2;
      break;
  }
  res.send("The Result is " + result );
});

// load calculator page
app.get("/bmi", function(req,res){
  res.sendFile(__dirname + "/bmi.html");
});


// get input from calculator page post
var weight, height, result;
app.post("/bmi", urlencodedParser, function(req,res){
  weight = parseFloat(req.body.weight);
  height = parseFloat(req.body.height);
  result = weight*10000/(height*height);
  res.send("The Result is " + result.toFixed(2) );
});

app.listen(3000,function(){
  console.log("Server started at port 3000");
});
