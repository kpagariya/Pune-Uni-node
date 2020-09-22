var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'nodelogindb'
});

var app = express();
app.use(session({
	//This is the secret used to sign the session ID cookie.
	secret: 'secret',
	// Forces the session to be saved back to the session store
	resave: true,
	// Save Uninitialized session to session store. 
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});


app.post('/loginValidate', function(request, response) {
	var username = request.body.txtUsername;
	var password = request.body.txtPassword;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, Passwordord], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter the Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Hi, How are you, ' + request.session.username + '!');
	} else {
		response.send('Please login!');
	}
	response.end();
});

app.listen(3001, function() {
  console.log('Server is listening on port 3001!');
});
