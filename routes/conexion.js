var admin = require('firebase-admin');
var serviceAccount = require("../oruro-como-llegar-d39af-firebase-adminsdk-sru7o-522c159d5b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://oruro-como-llegar-d39af.firebaseio.com"
});

var ref = admin.database().ref();
module.exports = ref;