var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Danza = require('./danza.model.js');
var ref = require('./conexion.js');


/*var admin = require('firebase-admin');
var serviceAccount = require("./oruro-como-llegar-d39af-firebase-adminsdk-sru7o-522c159d5b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://oruro-como-llegar-d39af.firebaseio.com"
});

var ref = admin.database().ref();
*/
router.get('/', function (req, res, next) {
	var object = ref.child("danza");
	object.on('value', function(data){
	    res.send(data.val());
	});
});
router.post('/guardar', function (req, res, next) {
//	console.log(req.body);
	var danza = {
		nombre: req.body.nombre, 
		descripcion: req.body.descripcion 
	};
	ref.child("danza").push(danza);
	res.send({});
});

module.exports = router;