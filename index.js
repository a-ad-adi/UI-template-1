var express = require('express'); 
var path = require('path');
var app = express();
var router = require('./Router/router');

app.use(express.static(path.join(__dirname,'/client')));

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use('/',router);

app.listen(3332,function(){
    console.log('Server running at 3332..');
});
