//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", function(req, res){
  res.render("languageChoice");
});

app.get('/language/*', function(req, res){
  res.render("languageChoice");
});

app.get("/en/page404", function(req, res){
  res.render("en404");
});

app.get("/pl/page404", function(req, res){
  res.render("pl404");
});


app.get("/:lang/:id", function(req, res){

  const requestedLang = req.params.lang;
  const requestedId = req.params.id;
  var fileName = "stand" + requestedId + requestedLang;

  if((requestedLang == 'en' || requestedLang == 'pl') && (requestedId < 14 && requestedId > 0)){
    res.render(fileName);
  } else {
    res.render("pl404");
  }
});

app.get("*", function(req, res){
  res.render("pl404");
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});

//
