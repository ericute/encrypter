const express = require('express');
const app = express();
const encryption = require('./routes/encryption');
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const port = 2500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/encryption', encryption);

app.get('/', function (req, res) {
  res.send('Server is alive.');
});

const server = http.listen(port, function () {

 	var host = http.address().address;
  	var port = http.address().port;

    console.log('Encrypter is listening at port: ' + port);

});

server.timeout = 600000;