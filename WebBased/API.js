var crypto=require("crypto");
var express=require("express");
var app=express();
var server=require("http").createServer(app);
var os=require("os");
var bodyParser = require('body-parser');
var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
var rp = require('request-promise');
var fs = require('fs') 
var limit=0;
var arr = {};
const PORT=4000;
var firebase=require("firebase");
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyDibg-oYRpVXU9HqCAOLdxIpYXcZUPpAGM",
    authDomain: "geyser-74ddf.firebaseapp.com",
    databaseURL: "https://geyser-74ddf.firebaseio.com",
    projectId: "geyser-74ddf",
    storageBucket: "geyser-74ddf.appspot.com",
    messagingSenderId: "1001903322970",
    appId: "1:1001903322970:web:a904b91e99d67b22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

var hostAddress=os.hostname();
console.log("Startup successful.")
console.log("Listening on port "+PORT);
server.listen(PORT);


app.use(bodyParser.json()); 
app.post("/",async function(req,res){
	console.log("request received");
	console.log(req.body);
	
	res.json(await handle(req));
	res.end;
});



async function handle(req)
{
	if(req.body.type=="add")
	{
		console.log("add user");
		return addUser(req.body);
	}
	if(req.type=="remove")
	{
		console.log("remove user");
		return removeUser(req.body);
	}
	
}

function addUser(body)
{
	var salt=genSalt();
	var user=body.user;
	var pass=body.pass;
	var type="plumber";
	var finalPass=pass+salt;
	finalPass=hash(finalPass);
	db.collection("users").doc(user).set(
{
  
	
	password:finalPass,
	userType:type
}
);
	return "true";


}
function removeUser(body)
{
	var user=body.user;
	db.collection("users").doc(user).delete();
	return true;
}
function genSalt()
{
	var result="";
	var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var len=chars.length;
	for(var i=0; i<7;i=i+1)
	{
		result=result+chars.charAt(Math.floor(Math.random()*len));
	}
	return result;
}
function hash(passwrod)
{
	var hash=crypto.createHash("sha256");
	var result=hash.update(result);
	return result;
}