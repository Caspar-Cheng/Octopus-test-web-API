const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sum = require("./sum");
const reverseWord = require("./reverse-words");


app.use(bodyParser.urlencoded({extended: true}));


app.get("/hello", (req, res) => {
    res.status('204').send();
});

app.get("/sum", (req, res) => {
 
    const numbers = req.query.numbers; 
    if(numbers === undefined){
        res.status('400').send();
    }
    res.send(sum(numbers));
});

app.get("/reverse-words", (req, res) => {
    const sentence = req.query.sentence;
    res.send(reverseWord(sentence));
});



app.listen("3000", function(){
    console.log("Server started on port 3000!");
});

