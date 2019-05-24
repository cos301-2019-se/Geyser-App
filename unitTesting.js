var expect = require('chai').expect;
var fs = require("fs");
var request = require("request");
var rp = require('request-promise');


var capacity1 = "20Kl";
  var model1 = "1321";
 var barcode1 = 1132564;
var insurance1 = "yes";
var manufacturer1 = "kwikot";
  
  // owner details
  var name1 = "Bob";
  var surname1 = "Mclain";
  var cellNumber1 = 1326549870;
var address1 = "1 up street Pretoria";
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


describe('Unit testing', function () {
  console.log("Testing Upload of details unit");
    it('Should allow the upload of a new entry to the data base ', function () {
    var res = storeData();
      console.log("Uploaded success");
      expect(res).to.equal("success");
      barcode1="adf1214121";
      barcode1 = 1132564;
      

    });
    it('Should attempt to upload new details but should fail due to incorrect format of a field', function () {
    var res = storeData();
      console.log("Upload failed due to incorrect barcode format");
      expect(res).to.equal(false);
      insurance1="";

    });
     it('Should attempt to upload new details but should fail due to missing field value ', function () {
    var res = storeData();
      console.log("Correct format");
      expect(res).to.equal(false);

    });


     console.log("Testing Infomation retrieving");

      it('Should retrieve the information of a user with a specific geyser number', function () {
    var res = search(13264163);
      console.log("Information retrieved successfully");
      expect(res).to.equal(true);

    });

      it('Should attempt to retrieve the information of a user but fail due to incorrect code', function () {
    var res = search(3256);
      console.log("No inforomation match");
      expect(res).to.equal(false);

    });
      it('Should attempt to retrieve the information of a user but fail due to incorrect format of input', function () {
    var res = search("456987a");
      console.log("Incorrect format for barcode");
      expect(res).to.equal(false);

    });
    
     it('Should retrieve all users matching corrospondng manufacturer', function () {
    var res = searchName("HeatTech");
      console.log("Information retrieved successfully");
      expect(res).to.equal(true);

    });

      it('Should retrieve all users matching corrospondng manufacturer but fail due to no matching value', function () {
    var res = search("Bobs tech");
      console.log("No inforomation match");
      expect(res).to.equal(false);

    });
      it('Should retrieve all users matching corrospondng manufacturer but fail due to missing input', function () {
    var res = search("");
      console.log("No manufacturer value was enter");
      expect(res).to.equal(false);

    });
    
});

 function validate(name,pass)
{
  if(arr[name]==pass)
  {
     // arr[ID]=null;
      return "success";
  }else
  {
    return "failed incorrect details";
  }
}

function checkI(input)
{

var re = new RegExp("^([0-9]{5,})$");
if (re.test(input)) {
   return "Valid";
} else {
    return "Invalid";
}
}

function check(input)
{

var re = new RegExp("^([a-z0-9]{8})$");
if (re.test(input)) {
   return "Valid";
} else {
    return "Invalid";
}
}



function storeData()
{


if(checkI(barcode1)!="Valid")
  return false;


if(checkI(model1)!="Valid")
  return false;
  
  if(checkI(cellNumber1)!="Valid")
  return false;
  
   if(check(insurance1)!="Valid")
  return false;
 

//run all vars through regex checks

db.collection("geyser").doc().set(
{
  barcode: barcode1,
  capacity:capacity1,
  model:model1,
  manufacturer:manufacturer1,
  name:name1,
  surname:surname1,
  cellNumber:cellNumber1,
  address:address1,
  
  insurance:insurance1
}

)
return "success";

}

function search(bor) {
  
var bar=bor;
 if(checkI(bar)!="Valid"&&check(bar)!="Valid")
  return false;

var c=0;
db.collection("geyser").get().then(function(querySnapshot)
{
  querySnapshot.forEach(function(doc){
    if(bar==doc.data().barcode){
      c++;
    console.log("Name: "+doc.data().name+"\nSurname"+doc.data().surname
    +"\nAddress"+doc.data().address+"\nGeyser Model"+doc.data().model+"\n>Manufacturer"+doc.data().manufacturer
    +"\nCapacity"+doc.data().Capacity+"\nInsurance status"+doc.data().insurance

      );
    return true;
  }});
});
if(c==0)
{
  console.log("Couldnt find any records");
  return false;
}
}

function searchName(manu) {
  
var bar=manu;
if(check(bar)!="Valid")
  return false;

var c=0;
database.collection("geyser").get().then(function(querySnapshot)
{
  querySnapshot.forEach(function(doc){
    if(bar==doc.data().manufacturer){
      c++;
    console.log("\n\nName: "+doc.data().name+"\nSurname"+doc.data().surname
    +"\nAddress"+doc.data().address+"\nGeyser Model"+doc.data().model+"\n>Manufacturer"+doc.data().manufacturer
    +"\nCapacity"+doc.data().Capacity+"\nInsurance status"+doc.data().insurance
      //can add.details to be specific
      );
  }});
});
if(c==0)
{
  console.log("Couldnt find any records");
  return false;
}
}


describe('Integration testing',function(){
	it("Creating new valid entry...uploading and retrieving the same info",async function(){
		var res = fullRequest();
		expect(res).to.equal("success");
	//	res = JSON.stringify(res);

		console.log("successfully uploaded and downloaded");
   		// expect(res).to.equal(true);

	}); 
   
})

function fullrequest()
{

   capacity1 = "15Kl";
   model1 = "69869";
    barcode1 = 123654789;
   insurance1 = "YES";
   manufacturer1 = "HeatTech";
    
    // owner details
     name1 = "Jake";
     surname1 = "Paralta";
     cellNumber1 = 1326549870;

     address1="99th Precient brooklyn";
     storeData();
     search(123654789);
     return "success";

}
