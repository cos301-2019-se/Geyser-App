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

//option 1  
// var info=database.collection('geyser').doc('SF');
// var details=info.get().then(doc=>{
//   if(!doc.exist){
//     console.log('not found');

//   }else
//   {
//     console.log('Data: 'doc.data());

//   }
// }).catch(err=>{console.log('Error',err);
// });

//option 2
function search() {
  
var bar=document.getElementById("barcode").value;
const display=document.querySelector("#display");
var c=0;
database.collection("geyser").get().then(function(querySnapshot)
{
  querySnapshot.forEach(function(doc){
    if(bar==doc.data().barcode){
      c++;
    console.log(doc.data().name
      
      //can add.details to be specific
      );
    display.innerHTML="<h3>Name</h3>"+doc.data().name+"<h3>Surname</h3>"+doc.data().surname
    +"<h3>Address</h3>"+doc.data().address+"<h3>Geyser Model</h3>"+doc.data().model+"<h3>Manufacturer</h3>"+doc.data().manufacturer
    +"<h3>Capacity</h3>"+doc.data().Capacity+"<h3>Insurance status</h3>"+doc.data().insurance;
  }});
});
if(c==0)
{
  display.innerHTML="Couldnt find any records";
}
}


