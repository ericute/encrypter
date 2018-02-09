const express = require('express');
const app = express();
const encryption = require('./routes/encryption');
const http = require('http').Server(app);
//const config = require('tree-config');
//const log4js = require('log4js');
//const logger = log4js.getLogger('index.js');
const bodyParser = require('body-parser');
//var schedule = require('node-schedule');

const port = 2500;

//app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//config.initialize();

//app.use('/', index);
//app.use('/', index);
//app.use('/api', api);
app.use('/encryption', encryption);

//var j = schedule.scheduleJob('*/30 * * * * *', function(){
//  rcRequests.getOngoingApprovals();
//});

app.get('/', function (req, res) {
  res.send('Server is alive.');
});

const server = http.listen(port, function () {

 	var host = http.address().address;
  	var port = http.address().port;

  	//console.log('Example app listening at http://%s:%s', host, port);
    console.log('Encrypter is listening at port: ' + port);

  	/*config.configure({
	    sources: [
	        {
	            type: 'json',
	            src: 'config.json'
	        }
	    ]
	});*/
});

server.timeout = 600000;