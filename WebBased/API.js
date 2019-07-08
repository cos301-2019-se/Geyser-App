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
	if(req.body.type=="addUser")
	{
		console.log("add user "+req.body.identifier);
		return addUser(req.body);
	}
	if(req.body.type=="removeUser")
	{
		console.log("remove user "+req.body.identifier);
		return removeUser(req.body);
	}
	if(req.body.type=="updateUser")
	{
		console.log("update user "+req.body.identifier);
		return updateUser(req.body);

	}
	if(req.body.type=="addGeyser")
	{
		console.log("add geyser "+req.body.identifier);
		return addGeyser(req.body);
	}
	if(req.body.type=="removeGeyser")
	{
		console.log("remove geyser "+req.body.identifier);
		return removeGeyser(req.body)
	}
	if(req.body.type=="updateGeyser")
	{
		console.log("update geyser "+req.body.identifier);
		return updateGeyser(req.body);
	}
	if(req.body.type=="addEmployee")
	{
		console.log("add employee "+req.body.identifier);
		return addEmployee(req.body);
	}
	if(req.body.type=="removeEmployee")
	{
		console.log("remove employee "+req.body.identifier);
		return removeEmployee(req.body);
	}
	if(req.body.type=="updateEmployee")
	{
		console.log("update employee "+req.body.identifier);
		return updateEmployee(req.body);
	}
	if(req.body.type=="addCase")
	{
		console.log("add case "+req.body.identifier);
		return addCase(req.body);
	}
	if(req.body.type=="removeCase")
	{
		console.log("remove case "+req.body.identifier);
		return removeCase(req.body);
	}
	if(req.body.type=="updateCase")
	{
		console.log("update case "+req.body.identifier);
		return updateCase(req.body);
	}
	if(req.body.type=="addCaller")
	{
		console.log("add caller "+req.body.identifier);
		return addCaller(req.body);
	}
	if(req.body.type=="removeCaller")
	{
		console.log("remove caller "+req.body.identifier);	
		return removeCaller(req.body);
	}
	if(req.body.type=="updateCaller")
	{
		console.log("update caller "+req.body.identifier);
		return updateCaller(req.body);
	}
	if(req.body.type=="addAgent")
	{
		console.log("add agent "+req.body.identifier);
		return addAgent(req.body);
	}
	if(req.body.type=="removeAgent")
	{
		console.log("remove agent "+req.body.identifier);
		return removeAgent(req.body);
	}
	if(req.body.type=="updateAgent")
	{
		console.log("update agent "+req.body.identifier);
		return updateAgent(req.body);
	}
	
}

/*
request:
{
	identifier: identifier,
	type: addUser,
	user: username,
	pass: password,

}
*/

function addUser(body)
{
	//var salt=genSalt();
	var user=body.user;
	var pass=body.pass;
	/*console.log(pass);
	console.log(user);
	console.log(salt);*/
	var type="plumber";
	//var finalPass=pass+salt;
	finalPass=hash(pass);
	//console.log(finalPass);
	db.collection("users").doc(user).set(
{
  
	
	password:finalPass,
	userType:type
}
);
	return "true";


}
/*
request:
{
	identifier: identifier,
	type: removeUser,
	user: username
}
*/
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
function hash(password)
{
	var hash=crypto.createHash("sha256");
	hash.update(password);
	return hash.digest('hex');
}
/*
request:
{
	identifier: identifier,
	type: updateUser,
	user: username,
	param: parameter to update,
	newVal: updated value
}
*/
function updateUser(body)
{
	var param=body.param;
	var user=body.user;
	var val=body.newVal;
	db.collection("users").doc(user).update(
	{
		[param]:val
	}
		);
	return true;
	

}
/*
request:
{
	identifier: identifier,
	type: addEmployee,
	id: employee id,
	dob: date of birth,
	addr: address,
	cellnum: celphone number,
	gen: gender,
	idnum: id number,
	name: employee name
}
*/
function addEmployee(body)
{
	var id=body.id;
	var dob=body.dob;
	var addr=body.addr;
	var cellnum=body.cellnum;
	var gen=body.gen;
	var idnum=body.idnum;
	var userName=body.name;
	

	db.collection("employeesDetails").doc(id).set(
	{

		DateOfBirth:dob,
		address:addr,
		cellNumber:cellnum,
		gender:gen,
		idNumber:idnum,
		name:userName,
		plumberID:id

	}
	);
	return true;
}
/*
request: 
{
	identifier: identifier,
	type: removeEmployee,
	id: employee id,
}
*/

function removeEmployee(body)
{
	var id=body.id;
	db.collection("employeesDetails").doc(id).delete();
	return true;

}
/*
request:
{
identifier: identifier,
	type: updateEmployee,
	id: employee id,
	param: parameter to update,
	newVal: updated value
	}
*/
function updateEmployee(body)
{
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("employeesDetails").doc(id).update({
		[param]:val
	});
	return true;

}
/*
request:
{
	identifier: identifier,
	type: addGeyser,
	num: geyser number,
	addr: geyser address,
	cap: geyser capacity,
	cellnum: owner celphone,
	path: image path,
	insure: insured?,
	manu: manufacturer,
	mod: model number,
	firstName: first name of owner,
	secondName: second name of owner
}
*/
function addGeyser(body)
{
	var geysernum=body.num;
	var addr=body.addr;
	var cap=body.cap;
	var cellnum=body.cellnum;
	var path=body.path;
	var insure=body.insure;
	var manu=body.manu;
	var mod=body.mod;
	var firstName=body.firstName;
	var secondName=body.secondName;
	db.collection("geyser").doc(geysernum).set({
		address:addr,
		capacity:cap,
		cellNumber:cellnum,
		imagePath:path,
		insurance:insure,
		manufacturer:manu,
		name:firstName,
		surname:secondName
	});
	return true;

}
/*
request:
{
	identifier: identifier,
	type: removeGeyser,
	number: geyser number
}
*/
function removeGeyser(body)
{
	var number=body.number;
	db.collection("geyser").doc(number).delete();
	return true;

}
/*
request:
{
	identifier: identifier,
	type: updateGeyser,
	id: geyser number,
	param: update parameter,
	newVal: updated value
}
*/
function updateGeyser(body)
{
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("geyser").doc(id).update({
		[param]:val
	});
	return true;

}

/*
request:
{
	identifier: identifier,
	type: addCase,
	caseID: case id,
	closeDate: close date of the case,
	status: case status,
	agentID: agent id

}
*/
function addCase(body)
{
	var id=body.caseId;
	var closeDate=body.closeDate;
	var status=body.status;
	var agentID=body.agentID;
	db.collection("caseDetails").doc(id).set({
		caseClosedDate:closeDate,
		caseID:id,
		caseStatus:status,
		closeByAgentID:agentID
	});
	return true;
}
/*
request:
{
	identifier: identifier,
	type: removeCase,
	id: case id
}
*/
function removeCase(body)
{
	var id=body.id;
	db.collection("caseDetails").doc(id).delete();
	return true;
}
/*
request:
{
	identifier: identifier,
	type: updateCase,
	id: case id,
	param: update parameter,
	newVal: updated value
}
*/
function updateCase(body)
{
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("caseDetails").doc(id).update({
		[param]:val
	});
	return true;
}

/*
request:
{
	identifier: identifier,
	type: addCaller,
	id: caller id,
	addr: caller address,
	callback: call back number,
	cellnum: celphone number,
	client: client id,
	callername: caller name,
	callersurname: caller surname,
	callreason: reason for call,
	servtype: type of service

}
*/
function addCaller(body)
{
	var id=body.id;
	var addr=body.addr;
	var callback=body.callback;
	var cellnum=body.cellnum;
	var client=body.client;
	var callername=body.callername;
	var callreason=body.callreason;
	var servtype=body.servtype;
	var callersurname=body.callersurname;
	db.collection("callerDetails").doc(id).set({
		address:addr,
		callBackNumber:callback,
		callerID:id,
		cellNumber:cellnum,
		clientType:client,
		name:callername,
		serviceType:servtype,
		surname:callersurname
	});
	return true;
}
/*
request:
{
	identifier: identifier,
	type: removeCaller,
	id: caller id
}
*/
function removeCaller(body)
{
	var id=body.id;
	db.collection("callerDetails").doc(id).delete();
	return true;
}
/*
request:
{
	identifier: identifier,
	type: updateCaller,
	id: caller id,
	param: update parameter,
	newVal: updated value
}
*/
function updateCaller(body)
{
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("callerDetails").doc(id).update({
		[param]:val
	});
	return true;	
}
/*
request: 
{
	identifier: identifier,
	type: addAgent,
	id: agent id,
	agentname: username,
	agentpass: password
}
*/
function addAgent(body)
{
	var id=body.id;
	var agentname=body.agentname;
	var agentpass=body.agentpass;
	db.collection("agentCredentials").doc(id).set({
		agentID:id,
		name:agentname,
		password:agentpass
	});
	return true;
}
/*
request:
{
	identifier: identifier,
	type: removeAgent,
	id: agent id
}
*/
function removeAgent(body)
{
	var id=body.id;
	db.collection("agentCredentials").doc(id).delete();
	return true;

}
/*
request:
{
	identifier: identifier,
	type: updateAgent,
	id: agent id,
	param: update parameter,
	newVal: updated value
}
*/
function updateAgent(body)
{
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("agentCredentials").doc(id).update({
		[param]:val
	});
	return true;
}

//add special case retrievals below