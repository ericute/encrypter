const express = require('express');
const router = express.Router();
const encrypter = new (require('encrypter'))('Very secured encryption string. Good job!');

router.get('/encrypt/:str', function(req, res){
	var hex = encrypter.encrypt(req.params.str);
	console.log(hex);
	res.send(hex);
});

router.get('/decrypt/:str', function(req, res){
	//var normal = encrypter.decrypt('{"ct":"ZlnPiI0DKInb","mac":"ZflpSRJQKlC6eRCDhv8LYlDtyTc="}');
	var normal = encrypter.decrypt(req.params.str);
    console.log(normal);
    res.send(normal);
});

module.exports = router;