// var express = require("express");
// var app = express();
// var crypto=require("crypto");
// var server = require("http").createServer(app);
// var os = require("os");
// var bodyParser = require('body-parser');
// var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
// var rp = require('request-promise');
// var fs = require('fs') 
// var limit=0;
// var arr = {};
// var firebase=require("firebase");
// require("firebase/firestore");
// var firebaseConfig = {
//     apiKey: "AIzaSyDibg-oYRpVXU9HqCAOLdxIpYXcZUPpAGM",
//     authDomain: "geyser-74ddf.firebaseapp.com",
//     databaseURL: "https://geyser-74ddf.firebaseio.com",
//     projectId: "geyser-74ddf",
//     storageBucket: "geyser-74ddf.appspot.com",
//     messagingSenderId: "1001903322970",
//     appId: "1:1001903322970:web:a904b91e99d67b22"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   var db = firebase.firestore();

// const PORT = process.env.PORT || 5000;

// var HostAddress = os.hostname();
// console.log("============ Starting server ============");
// console.log("Waiting for Incoming connections on "+HostAddress+":" + PORT);
// console.log("--------------------------------------------------");
// //clearLog();
// server.listen(PORT);
// app.use(express.static(__dirname+ "js"));
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({		extended: true		}));

// app.post("/", async function(req,res){
// 	console.log("request received");
// 	//console.log(req.body);


// 	console.log(req.body);
// 	// var data = req.body;

// 	// res.json(await type(data.type,data));
// 	res.json(await handle(req));
// 	res.end();
// });

// async function handle(req)
// {
// 	if(req.body.type=="addUser")
// 	{
// 		console.log("add user "+req.body.identifier);
// 		return addUser(req.body);
// 	}
// 	if(req.body.type=="removeUser")
// 	{
// 		console.log("remove user "+req.body.identifier);
// 		return removeUser(req.body);
// 	}
// 	if(req.body.type=="updateUser")
// 	{
// 		console.log("update user "+req.body.identifier);
// 		return updateUser(req.body);

// 	}
// 	if(req.body.type=="addGeyser")
// 	{
// 		console.log("add geyser "+req.body.identifier);
// 		return addGeyser(req.body);
// 	}
// 	if(req.body.type=="removeGeyser")
// 	{
// 		console.log("remove geyser "+req.body.identifier);
// 		return removeGeyser(req.body)
// 	}
// 	if(req.body.type=="updateGeyser")
// 	{
// 		console.log("update geyser "+req.body.identifier);
// 		return updateGeyser(req.body);
// 	}
// 	if(req.body.type=="addEmployee")
// 	{
// 		console.log("add employee "+req.body.identifier);
// 		return addEmployee(req.body);
// 	}
// 	if(req.body.type=="removeEmployee")
// 	{
// 		console.log("remove employee "+req.body.identifier);
// 		return removeEmployee(req.body);
// 	}
// 	if(req.body.type=="updateEmployee")
// 	{
// 		console.log("update employee "+req.body.identifier);
// 		return updateEmployee(req.body);
// 	}
// 	if(req.body.type=="addCase")
// 	{
// 		console.log("add case "+req.body.identifier);
// 		return addCase(req.body);
// 	}
// 	if(req.body.type=="removeCase")
// 	{
// 		console.log("remove case "+req.body.identifier);
// 		return removeCase(req.body);
// 	}
// 	if(req.body.type=="updateCase")
// 	{
// 		console.log("update case "+req.body.identifier);
// 		return updateCase(req.body);
// 	}
// 	if(req.body.type=="addCaller")
// 	{
// 		console.log("add caller "+req.body.identifier);
// 		return addCaller(req.body);
// 	}
// 	if(req.body.type=="removeCaller")
// 	{
// 		console.log("remove caller "+req.body.identifier);	
// 		return removeCaller(req.body);
// 	}
// 	if(req.body.type=="updateCaller")
// 	{
// 		console.log("update caller "+req.body.identifier);
// 		return updateCaller(req.body);
// 	}
// 	if(req.body.type=="addAgent")
// 	{
// 		console.log("add agent "+req.body.identifier);
// 		return addAgent(req.body);
// 	}
// 	if(req.body.type=="removeAgent")
// 	{
// 		console.log("remove agent "+req.body.identifier);
// 		return removeAgent(req.body);
// 	}
// 	if(req.body.type=="updateAgent")
// 	{
// 		console.log("update agent "+req.body.identifier);
// 		return updateAgent(req.body);
// 	}
// 	if(req.body.type=="login")
// 	{
// 		console.log("login attempt");
// 		return login(req.body);
// 	}
// 	if(req.body.type=="retrieveCaseID")
// 	{
// 		console.log("Case ID retrieve: "+req.body.identifier);
// 		return retrieveCaseID(req.body);
// 	}
	
// }



// /*
// for plumbers
// request:
// {
// 	identifier: identifier,
// 	type: addUser,
// 	user: username,
// 	pass: password,
// 	userType: user type,
// 	case: case id

// }
// for admins
// request:
// {
// 	identifier: identifier,
// 	type: addUser,
// 	user: username,
// 	pass: password,
// 	userType: user type

// }
// */

// function addUser(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var passSalt=genSalt();
// 	var user=body.user;
// 	var pass=body.pass;
// 	/*console.log(pass);
// 	console.log(user);
// 	console.log(salt);*/
// 	var type=body.userType;
	
// 	var finalPass=pass+salt;
// 	finalPass=toUpperCase(hash(pass));
// 	var useIdentifier=generateIdentifier();
// 	//console.log(finalPass);
// 	if(type=="plumber")
// 	{
// 		var caseToWork=body.case;
// 	db.collection("users").doc(user).set(
// 	{
//   	identifier:useIdentifier,
// 	caseToWorkOn:caseToWork,
// 	password:finalPass,
// 	salt:passSalt,
// 	userType:type
// 	}
// 	);
// 	}
// 	if(type=="admin")
// 	{
// 		db.collection("users").doc(user).set(
// 	{
//   	identifier:useIdentifier,
// 	password:finalPass,
// 	salt:passSalt,
// 	userType:type
// 	}
// 	);	
// 	}
// 	return "true";


// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: removeUser,
// 	user: username
// }
// */
// function removeUser(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var user=body.user;
// 	db.collection("users").doc(user).delete();
// 	return "true";
// }
// function genSalt()
// {
// 	var result="";
// 	var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	var len=chars.length;
// 	for(var i=0; i<7;i=i+1)
// 	{
// 		result=result+chars.charAt(Math.floor(Math.random()*len));
// 	}
// 	return result;
// }
// function generateIdentifier()
// {
// 		var result="";
// 	var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	var len=chars.length;
// 	for(var i=0; i<10;i=i+1)
// 	{
// 		result=result+chars.charAt(Math.floor(Math.random()*len));
// 	}
// 	return result

// }
// function hash(password)
// {
// 	var hash=crypto.createHash("sha256");
// 	hash.update(password);
// 	return hash.digest('hex');
// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: updateUser,
// 	user: username,
// 	param: parameter to update,
// 	newVal: updated value
// }
// */
// function updateUser(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var param=body.param;
// 	var user=body.user;
// 	var val=body.newVal;
// 	db.collection("users").doc(user).update(
// 	{
// 		[param]:val
// 	}
// 		);
// 	return "true";
	

// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: addEmployee,
// 	id: employee id,
// 	dob: date of birth,
// 	addr: address,
// 	cellnum: celphone number,
// 	gen: gender,
// 	idnum: id number,
// 	name: employee name
// }
// */
// function addEmployee(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	var dob=body.dob;
// 	var addr=body.addr;
// 	var cellnum=body.cellnum;
// 	var gen=body.gen;
// 	var idnum=body.idnum;
// 	var userName=body.name;
	

// 	db.collection("employeesDetails").doc(id).set(
// 	{

// 		DateOfBirth:dob,
// 		address:addr,
// 		cellNumber:cellnum,
// 		fullName:userName,
// 		gender:gen,
// 		idNumber:idnum,
// 		plumberID:id

// 	}
// 	);
// 	return "true";
// }
// /*
// request: 
// {
// 	identifier: identifier,
// 	type: removeEmployee,
// 	id: employee id,
// }
// */

// function removeEmployee(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	db.collection("employeesDetails").doc(id).delete();
// 	return "true";

// }
// /*
// request:
// {
// identifier: identifier,
// 	type: updateEmployee,
// 	id: employee id,
// 	param: parameter to update,
// 	newVal: updated value
// 	}
// */
// function updateEmployee(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var param=body.param;
// 	var id=body.id;
// 	var val=body.newVal;
// 	db.collection("employeesDetails").doc(id).update({
// 		[param]:val
// 	});
// 	return "true";

// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: addGeyser,
// 	num: geyser number,
// 	cap: geyser capacity,
// 	caseid: case id,
// 	path: image path,
// 	insure: insured?,
// 	manu: manufacturer,
// 	mod: model number

// }
// */
// function addGeyser(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var geysernum=body.num;
// 	var cap=body.cap;
// 	var caseid=body.caseid;
// 	var path=body.path;
// 	var insure=body.insure;
// 	var manu=body.manu;
// 	var mod=body.mod;
// 	var firstName=body.firstName;
// 	var secondName=body.secondName;
// 	db.collection("geyser").doc(geysernum).set({
// 		capacity:cap,
// 		caseID:caseid,
// 		imagePath:path,
// 		insurance:insure,
// 		manufacturer:manu,
// 		model:mod

// 	});
// 	return "true";

// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: removeGeyser,
// 	number: geyser number
// }
// */
// function removeGeyser(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var number=body.number;
// 	db.collection("geyser").doc(number).delete();
// 	return "true";

// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: updateGeyser,
// 	id: geyser number,
// 	param: update parameter,
// 	newVal: updated value
// }
// */
// function updateGeyser(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var param=body.param;
// 	var id=body.id;
// 	var val=body.newVal;
// 	db.collection("geyser").doc(id).update({
// 		[param]:val
// 	});
// 	return "true";

// }

// /*
// request:
// {
// 	identifier: identifier,
// 	type: addCase,
// 	id: case id,
// 	addr: address of case,
// 	caller: caller id,
// 	closedby: agent closed by,
// 	closeddate: date closed by,
// 	description: case description,
// 	openedby: agent opened by,
// 	status: case status,
// 	date: date of incident,
// 	plumid: plumber id
	

// }
// */
// function addCase(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	var addr=body.addr;
// 	var caller=body.caller;
// 	var closedby=body.closedby;
// 	var closeddate=body.closeddate;
// 	var description=body.description;
// 	var openedby=body.openedby;
// 	var status=body.status;
// 	var date=body.date;
// 	var plumid=body.plumid;
// 	db.collection("caseDetails").doc(id).set({
// 		addressOfIncident:addr,
// 		callerID:caller,
// 		caseClosedBy:closedby,
// 		caseClosedDate:closeddate,
// 		caseDescription:description,
// 		caseID:id,
// 		caseOpenedBy:openedby,
// 		caseStatus:status,
// 		incidentDate:date,
// 		plumberID:plumid
		
// 	});
// 	return "true";
// }

// request:
// {
// 	identifier: identifier,
// 	type: removeCase,
// 	id: case id
// }

// function removeCase(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	db.collection("caseDetails").doc(id).delete();
// 	return "true";
// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: updateCase,
// 	id: case id,
// 	param: update parameter,
// 	newVal: updated value
// }
// */
// function updateCase(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var param=body.param;
// 	var id=body.id;
// 	var val=body.newVal;
// 	db.collection("caseDetails").doc(id).update({
// 		[param]:val
// 	});
// 	return "true";
// }

// /*
// request:
// {
// 	identifier: identifier,
// 	type: addCaller,
// 	id: caller id,
// 	addr: caller address,
// 	callback: call back number,
// 	cellnum: celphone number,
// 	client: client id,
// 	callername: caller name,
// 	callersurname: caller surname,
// 	callreason: reason for call,
// 	servtype: type of service

// }
// */
// function addCaller(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	var addr=body.addr;
// 	var callback=body.callback;
// 	var cellnum=body.cellnum;
// 	var client=body.client;
// 	var callername=body.callername;
// 	var callreason=body.callreason;
// 	var servtype=body.servtype;
// 	var callersurname=body.callersurname;
// 	db.collection("callerDetails").doc(id).set({
// 		address:addr,
// 		callBackNumber:callback,
// 		callerID:id,
// 		cellNumber:cellnum,
// 		clientType:client,
// 		name:callername,
// 		serviceType:servtype,
// 		surname:callersurname
// 	});
// 	return "true";
// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: removeCaller,
// 	id: caller id
// }
// */
// function removeCaller(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	db.collection("callerDetails").doc(id).delete();
// 	return "true";
// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: updateCaller,
// 	id: caller id,
// 	param: update parameter,
// 	newVal: updated value
// }
// */
// function updateCaller(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var param=body.param;
// 	var id=body.id;
// 	var val=body.newVal;
// 	db.collection("callerDetails").doc(id).update({
// 		[param]:val
// 	});
// 	return "true";	
// }
// /*
// request: 
// {
// 	identifier: identifier,
// 	type: addAgent,
// 	id: agent id,
// 	agentname: username,
// 	agentpass: password
// }
// */
// function addAgent(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	var agentname=body.agentname;
// 	var agentpass=body.agentpass;
// 	var userIdentifier=generateIdentifier();
// 	var passSalt=genSalt();
// 	agentpass=agentpass+passSalt;
// 	agentpass=hash(agentpass);
// 	db.collection("agentCredentials").doc(id).set({
// 		identifier:userIdentifier,
// 		agentID:id,
// 		name:agentname,
// 		password:agentpass,
// 		salt:passSalt
// 	});
// 	return "true";
// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: removeAgent,
// 	id: agent id
// }
// */
// function removeAgent(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var id=body.id;
// 	db.collection("agentCredentials").doc(id).delete();
// 	return "true";

// }
// /*
// request:
// {
// 	identifier: identifier,
// 	type: updateAgent,
// 	id: agent id,
// 	param: update parameter,
// 	newVal: updated value
// }
// */
// function updateAgent(body)
// {
// 	if(!validateIdentifier(body))
// 	{
// 		console.log("Invalid user detected "+body.identifier);
// 		return "false";
// 	}
// 	var param=body.param;
// 	var id=body.id;
// 	var val=body.newVal;
// 	db.collection("agentCredentials").doc(id).update({
// 		[param]:val
// 	});
// 	return "true";
// }

// /*
// for both login functions
// {
// 	type: login/loginAgent,
// 	userName: user name,
// 	password: password
// } 
// */
// function login(body)
// {
// 	var user=body.userName;
// 	console.log(user);
// 	return db.collection('users').doc(user).get().then(doc=>{

		
// 	console.log(doc.exists);
// 	if(!doc.exists)
// 	{
// 		var returnData={
// 			Error: 'User does not exist'
// 		}
// 		return JSON.stringify(returnData);
// 	}else
// 	{
// 		var data=doc.data();
// 		var pass=body.password;
// 		pass=pass+data.salt;
// 		pass=hash(pass);
// 		pass=pass.toUpperCase();
// 		if(pass==data.password)
// 		{
// 			var returnData={
// 				identifier:data.identifier,
// 				userType: data.userType
// 			}
// 			return JSON.stringify(returnData);
// 		}
// 		else{
// 			var returnData={
// 				Error: 'Incorrect password'
// 			}
// 			return JSON.stringify(returnData);
// 		}
// 	}
// });
// }


// function agentLogin(body)
// {
// 	var user=body.userName;
// 	var record=db.collection('agentCredentials').doc(user);
// 	if(!record.exists)
// 	{
// 		var returnData={
// 			Error: 'User does not exist'
// 		}
// 		return JSON.stringify(returnData);
// 	}else
// 	{
// 		var data=record.data();
// 		var pass=body.password;
// 		pass=pass+data.salt;
// 		pass=hash(pass);
// 		if(pass==data.password)
// 		{
// 			var returnData={
// 				identifier:data.identifier,
// 				userType: 'agent'
// 			}
// 			return JSON.stringify(returnData);
// 		}
// 	}
// }

// function validateIdentifier(body)
// {
// 	var id=body.identifier;
// 	db.collection("users").where('identifier','==',id).get()
// 	.then(snapshot=>{
// 		if(snapshot.empty){
// 			return false;
// 			// db.collection("agentCredentials").where('identifier','==',id)
// 			// .get().then(snapshot=>{
// 			// 	if(snapshot.empty){
// 			// 		return false;
// 			// 	}
// 			// 	return true;
// 			// });
// 		}
// 		return true;
// 	});
// }

// /*
// {
// 	identifier: user identifier,
// 	type:retrieveCaseID,
// 	userid: id of user
// }
// */
// function retrieveCaseID(body)
// {
// 	var returnResult;
// 	if(validateIdentifier(body))
// 	{
// 		var record=db.collection('users').doc(body.userid);
// 		if(record.exists)
// 		{
// 			returnResult={
// 			Error: 'Invalid user ID'
// 		}
// 		return JSON.stringify(returnResult);
// 		}
// 		var data=record.data();
// 		returnResult= {
// 			casid: data.caseToWorkOn
// 		}
// 		return JSON.stringify(returnResult);


// 	}else
// 	{
// 		returnResult={
// 			Error: 'Invalid user'
// 		}
// 		return JSON.stringify(returnResult);
// 	}
// }






// // async function type(type,content)
// // {
// // 	switch(type.toLowerCase()){
// // 		case "generate":{
// // 				var pin = generatePin(content.ClientID);

// // 				console.log("Pin generated: "+ pin)

// // 				var result = await sendOTP(content.ClientID,pin);
// // 				console.log(result);

// // 	if(result.status == "success"){
// // 		return ({ "Success":"true"})
// // 	}else{
// // 		return({ "Success":"false","message":"something went wrong"})
// // 	}
// // 				break;
// // 		}
// // 		case "validate":{
// // 				console.log("Pin Entered: "+ content.pin);
// // 				var result=validate(content.ClientID,content.pin);
// // 				if(result == "success"){
// // 					return ({ "ClientID" : content.ClientID,"Success":"true","message":"Correct OTP"})
// // 				}else{
// // 					return({"ClientID" : content.ClientID, "Success":"false","message":"Incorrect OTP or no OTP created"})
// // 				}
// // 			break;
// // 		}
// // 		default:{
// // 			throw '{ "status": 400, "message":"Invalid Notification Type"}'
// // 		}
// // 	}

// // }

// // function generatePin(clientID)
// // {
// // 	// Declare a digits variable  
// //     // which stores all digits 
// //     var digits = '0123456789'; 
// //     let OTP = ''; 
// //     for (let i = 0; i < 4; i++ ) { 
// //         OTP += digits[Math.floor(Math.random() * 10)]; 
// //     } 
// //      limit=limit+1;

// //      arr[clientID]=OTP;
// //    addLog(clientID,OTP);
   
    
// //     return OTP; 

// // }
// // function validate(ID,pin)
// // {
// // 	if(arr[ID]==pin)
// // 	{
// // 			arr[ID]=null;
// // 			console.log(arr);
// // 			return "success";

// // 	}else
// // 	{
// // 		return "failed";
// // 	}
// // }

	

    	

// // async function sendLog()
// // {
// // 	var contents = fs.readFileSync('auditLog.txt', { 'encoding': 'utf8'});
// // 	console.log(contents.toString());

// // 	var postData=JSON.parse(contents);
// // var host= 'https://still-oasis-34724.herokuapp.com';
// // 	//port: 80,
// // 	var path= '/uploadLog';
// // 	var options ={
// // 		method :'POST',
// // 		uri:host+path,
// // 		body: postData,
// // 		json: true

// // 	};
// // 	return await rp(options)
// // 	.then(function (parseBody){
		
// // 		return parseBody;
// // 	})
// // 	.catch(function(err)
// // 	{
// // 		console.log(err);

// // 	});
	


// // }

// // function clearLog()
// // {
// // 	var data = '{ "logs":[';

// // 	fs.writeFile('auditLog.txt', data.toString(), (err) => { 
      
// //     // In case of a error throw err. 
// //     if (err) throw err;
// //     console.log("auditLog successfully created.") ;
// // }) 
// // 	limit=0;
// // 	return;
// // }

// // function addLog(ID,pin)
// // {
// // 	if(ID==null)
// // 	{
// // 		return "failed missing arguement 'client_id'";
// // 	}
// // 	if(pin==null)
// // 	{
// // 		return "failed missing arguement 'pin'";
// // 	}
// // 	var today = new Date();
// //         var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// //         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// //         var dateTime =  date+' '+time;
// //         var data = '{"ClientID" : '+'"'+ID+'"'+',"pin" : '+'"'+pin+'"'+',"success" : '+'"true",' +'"timestamp": '+'"'+dateTime
// //         +'"'+'}';
// // 	console.log(data);


// // 	if(limit<5){
// // 	// append data to file
// // fs.appendFile('auditLog.txt',data.toString()+',', 'utf8',
// //     // callback function
// //     function(err) { 
// //         if (err) throw err;
// //         // if no error
// //         console.log("Data is appended to log successfully.");
// //         return;
// // });

// // 	}	


// // 	else
// // 	{
		
// // 	var ender='], "system": '+'"otp"}';
// // 	// append data to file
// // 	fs.appendFile('auditLog.txt',data+ender, 'utf8',
// //     // callback function
// //     function(err) { 
// //         if (err) throw err;
// //         // if no error
// //         console.log("Data is appended to log successfully. Data will now be sent over server");
// //         sendLog();
// //         clearLog();
// // });
		
// // 		return;
// // 	}

	

	


// // }

// // function createLog()
// // {
// // 	let data = "{ 'logs':[";

// // 	fs.writeFile('auditLog.txt', data, (err) => { 
      
// //     // In case of a error throw err. 
// //     if (err) throw err;
// //     console.log("auditLog successfully created.") 
// // }) 
// // }

// // async function sendOTP (clientID, pin){
// // 	var url = "http://merlotnotification.herokuapp.com/";//"ec2-35-174-115-93.compute-1.amazonaws.com:5000";
// // 	var otp = {
// // 		"ClientID" : clientID,
// // 		"Type" : "OTP",
// // 		"Content" : {
// // 			"pin": pin
// // 		}
// // 	}
// // 	var options ={
// // 		method :'POST',
// // 		uri:url,
// // 		body: otp,
// // 		json: true

// // 	};
// // 	return await rp(options)
// // 	.then(function (parseBody){
// // 		return parseBody;
// // 	})
// // 	.catch(function(err)
// // 	{
// // 		console.log(err);

// // 	});
// // }

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
const PORT = process.env.PORT || 4000;
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
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","*");
	next();
});
app.post("/",async function(req,res){
	console.log("request received");
	console.log(req.body);
	
	res.json(await handle(req));
	res.end();
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
	if(req.body.type=="login")
	{
		console.log("login attempt");
		return login(req.body);
	}
	if(req.body.type=="retrieveCaseID")
	{
		console.log("Case ID retrieve: "+req.body.identifier);
		return retrieveCaseID(req.body);
	}
	
}

/*
for plumbers
request:
{
	identifier: identifier,
	type: addUser,
	user: username,
	pass: password,
	userType: user type,
	case: case id

}
for admins
request:
{
	identifier: identifier,
	type: addUser,
	user: username,
	pass: password,
	userType: user type

}
*/

function addUser(body)
{
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var passSalt=genSalt();
	var user=body.user;
	var pass=body.pass;
	/*console.log(pass);
	console.log(user);
	console.log(salt);*/
	var type=body.userType;
	
	var finalPass=pass+salt;
	finalPass=toUpperCase(hash(pass));
	var useIdentifier=generateIdentifier();
	//console.log(finalPass);
	if(type=="plumber")
	{
		var caseToWork=body.case;
	db.collection("users").doc(user).set(
	{
  	identifier:useIdentifier,
	caseToWorkOn:caseToWork,
	password:finalPass,
	salt:passSalt,
	userType:type
	}
	);
	}
	if(type=="admin")
	{
		db.collection("users").doc(user).set(
	{
  	identifier:useIdentifier,
	password:finalPass,
	salt:passSalt,
	userType:type
	}
	);	
	}
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var user=body.user;
	db.collection("users").doc(user).delete();
	return "true";
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
function generateIdentifier()
{
		var result="";
	var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var len=chars.length;
	for(var i=0; i<10;i=i+1)
	{
		result=result+chars.charAt(Math.floor(Math.random()*len));
	}
	return result

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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var param=body.param;
	var user=body.user;
	var val=body.newVal;
	db.collection("users").doc(user).update(
	{
		[param]:val
	}
		);
	return "true";
	

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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
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
		fullName:userName,
		gender:gen,
		idNumber:idnum,
		plumberID:id

	}
	);
	return "true";
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var id=body.id;
	db.collection("employeesDetails").doc(id).delete();
	return "true";

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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("employeesDetails").doc(id).update({
		[param]:val
	});
	return "true";

}
/*
request:
{
	identifier: identifier,
	type: addGeyser,
	num: geyser number,
	cap: geyser capacity,
	caseid: case id,
	path: image path,
	insure: insured?,
	manu: manufacturer,
	mod: model number

}
*/
function addGeyser(body)
{
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var geysernum=body.num;
	var cap=body.cap;
	var caseid=body.caseid;
	var path=body.path;
	var insure=body.insure;
	var manu=body.manu;
	var mod=body.mod;
	var firstName=body.firstName;
	var secondName=body.secondName;
	db.collection("geyser").doc(geysernum).set({
		capacity:cap,
		caseID:caseid,
		imagePath:path,
		insurance:insure,
		manufacturer:manu,
		model:mod

	});
	return "true";

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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var number=body.number;
	db.collection("geyser").doc(number).delete();
	return "true";

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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("geyser").doc(id).update({
		[param]:val
	});
	return "true";

}

/*
request:
{
	identifier: identifier,
	type: addCase,
	id: case id,
	addr: address of case,
	caller: caller id,
	closedby: agent closed by,
	closeddate: date closed by,
	description: case description,
	openedby: agent opened by,
	status: case status,
	date: date of incident,
	plumid: plumber id
	

}
*/
function addCase(body)
{
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var id=body.id;
	var addr=body.addr;
	var caller=body.caller;
	var closedby=body.closedby;
	var closeddate=body.closeddate;
	var description=body.description;
	var openedby=body.openedby;
	var status=body.status;
	var date=body.date;
	var plumid=body.plumid;
	db.collection("caseDetails").doc(id).set({
		addressOfIncident:addr,
		callerID:caller,
		caseClosedBy:closedby,
		caseClosedDate:closeddate,
		caseDescription:description,
		caseID:id,
		caseOpenedBy:openedby,
		caseStatus:status,
		incidentDate:date,
		plumberID:plumid
		
	});
	return "true";
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var id=body.id;
	db.collection("caseDetails").doc(id).delete();
	return "true";
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("caseDetails").doc(id).update({
		[param]:val
	});
	return "true";
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
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
	return "true";
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var id=body.id;
	db.collection("callerDetails").doc(id).delete();
	return "true";
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("callerDetails").doc(id).update({
		[param]:val
	});
	return "true";	
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var id=body.id;
	var agentname=body.agentname;
	var agentpass=body.agentpass;
	var userIdentifier=generateIdentifier();
	var passSalt=genSalt();
	agentpass=agentpass+passSalt;
	agentpass=hash(agentpass);
	db.collection("agentCredentials").doc(id).set({
		identifier:userIdentifier,
		agentID:id,
		name:agentname,
		password:agentpass,
		salt:passSalt
	});
	return "true";
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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var id=body.id;
	db.collection("agentCredentials").doc(id).delete();
	return "true";

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
	if(!validateIdentifier(body))
	{
		console.log("Invalid user detected "+body.identifier);
		return "false";
	}
	var param=body.param;
	var id=body.id;
	var val=body.newVal;
	db.collection("agentCredentials").doc(id).update({
		[param]:val
	});
	return "true";
}

/*
for both login functions
{
	type: login/loginAgent,
	userName: user name,
	password: password
} 
*/
function login(body)
{
	var user=body.userName;
	console.log(user);
	return db.collection('users').doc(user).get().then(doc=>{

		
	console.log(doc.exists);
	if(!doc.exists)
	{
		var returnData={
			Error: 'User does not exist'
		}
		return JSON.stringify(returnData);
	}else
	{
		var data=doc.data();
		var pass=body.password;
		pass=pass+data.salt;
		pass=hash(pass);
		pass=pass.toUpperCase();
		if(pass==data.password)
		{
			var returnData={
				identifier:data.identifier,
				userType: data.userType
			}
			return JSON.stringify(returnData);
		}
		else{
			var returnData={
				Error: 'Incorrect password'
			}
			return JSON.stringify(returnData);
		}
	}
});
}


function agentLogin(body)
{
	var user=body.userName;
	var record=db.collection('agentCredentials').doc(user);
	if(!record.exists)
	{
		var returnData={
			Error: 'User does not exist'
		}
		return JSON.stringify(returnData);
	}else
	{
		var data=record.data();
		var pass=body.password;
		pass=pass+data.salt;
		pass=hash(pass);
		if(pass==data.password)
		{
			var returnData={
				identifier:data.identifier,
				userType: 'agent'
			}
			return JSON.stringify(returnData);
		}
	}
}

function validateIdentifier(body)
{
	var id=body.identifier;
	db.collection("users").where('identifier','==',id).get()
	.then(snapshot=>{
		if(snapshot.empty){
			return false;
			// db.collection("agentCredentials").where('identifier','==',id)
			// .get().then(snapshot=>{
			// 	if(snapshot.empty){
			// 		return false;
			// 	}
			// 	return true;
			// });
		}
		return true;
	});
}

/*
{
	identifier: user identifier,
	type:retrieveCaseID,
	userid: id of user
}
*/
function retrieveCaseID(body)
{
	var returnResult;
	if(validateIdentifier(body))
	{
		var record=db.collection('users').doc(body.userid);
		if(record.exists)
		{
			returnResult={
			Error: 'Invalid user ID'
		}
		return JSON.stringify(returnResult);
		}
		var data=record.data();
		returnResult= {
			casid: data.caseToWorkOn
		}
		return JSON.stringify(returnResult);


	}else
	{
		returnResult={
			Error: 'Invalid user'
		}
		return JSON.stringify(returnResult);
	}
}
