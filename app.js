var express = require('express');
var app = express();
var path = require('path');
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});
app.listen(4000);
console.log('Achievs is running.');

