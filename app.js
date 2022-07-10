var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    console.log("Hiii")
    res.render('index');
});

app.get('/create',(req,res)=>{
    res.render('create');
})

app.get('/bill',(req,res)=>{
    res.render('bill');
})

app.get('/AddItems',(req,res)=>{
    res.render('AddItems');
})

app.get('/final',(req,res)=>{
    res.render('final');
})



app.listen(3001,()=>{console.log(`http://localhost:${3001}`)});