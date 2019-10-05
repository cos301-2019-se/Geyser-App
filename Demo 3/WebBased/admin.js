 var uid;
 var pass;
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

  var database =firebase.firestore();


  function upload()
{
var user = document.getElementById('UserName').value;

var password1=document.getElementById('pass').value;
var password2=password1+genSalt();
var output=document.getElementById("confirmDiv");
output.style.visibility="visible";  

//run all vars through regex checks

database.collection("users").doc(user).set(
{
  password:password1,
  userType:"plumber"

}

);



}

function remove()
{
  var user=document.getElementById('UserName').value;
  database.collection("users").doc(user).delete();
  var output=document.getElementById("confirmDiv");
  output.style.visibility="visible";
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
