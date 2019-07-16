var expect=require('chai').expect;
var request=require('request');


var addUserJSON={
	identifier:'unittester',
	type:'addUser',
	user:'unitTest',
	pass:'justatest'
};
var updateUserJSON={
	identifier:'unittester',
	type:'updateUser',
	user:'unitTest',
	param:'userType',
	newVal:'test'
};
var removeUserJSON={
	identifier:'unittester',
	type:'removeUser',
	user:'unitTest'
};
var addEmployeeJSON={
	identifier:'unittester',
	type:'addEmployee',
	id:'testemployee',
	dob:'today',
	addr:'26 test street',
	cellnum:'084651332645',
	gen:'female',
	idnum:'123246321653241',
	name:'bob'
};
var updateEmployeeJSON={
	identifier:'unittester',
	type:'updateEmployee',
	id:'testemployee',
	param:'dateOfBirth',
	newVal:'tomorrow'
};
var removeEmployeeJSON={
	identifier:'unittester',
	type:'removeEmployee',
	id:'testemployee'
};

var addGeyserJSON={
	identifier:'unittester',
	type:'addGeyser',
	num:'420',
	addr:'26 test street',
	cap:'69',
	cellnum:'063214156432',
	path:'NA',
	insure:'yes',
	manu:'uwucorp',
	mod:'4654',
	firstName:'uwu',
	secondName:'ligam'
};

var updateGeyserJSON={
	identifier:'unittester',
	type:'updateGeyser',
	id:'420',
	param:'capacity',
	newVal:'1'
};
var removeGeyserJSON={
	identifier:'unittester',
	type:'removeGeyser',
	number:'420'
};
var addCaseJSON={
	identifier:'unittester',
	type:'addCase',
	caseId:'uwu420',
	closeDate:'today',
	status:'closed',
	agentID:'unittest'
};
var updateCaseJSON={
	identifier:'unittester',
	type:'updateCase',
	id:'uwu420',
	param:'caseStatus',
	newVal:'open'
};
var removeCaseJSON={
	identifier:'unittester',
	type:'removeCase',
	id:'uwu420'
};
var addCallerJSON={
	identifier:'unittester',
	type:'addCaller',
	id:'unittest',
	addr:'26 test street',
	callback:'08465123245',
	cellnum:'56213546325',
	client:'uwu420',
	callername:'wuw',
	callersurname:'sumga',
	callreason:'test',
	servtype:'testserv'
};
var updateCallerJSON={
	identifier:'unittester',
	type:'updateCaller',
	id:'unittest',
	param:'serviceType',
	newVal:'nottestserv'
};
var removeCallerJSON={
	identifier:'unittester',
	type:'removeCaller',
	id:'unittest'
};
var addAgentJSON={
	identifier:'unittester',
	type:'addAgent',
	id:'unittest',
	agentname:'uwu420',
	agentpass:'wilma7'
};
var updateAgentJSON={
	identifier:'unittester',
	type:'updateAgent',
	id:'unittest',
	param:'password',
	newVal:'wilma72'
};
var removeAgentJSON={
	identifier:'unittester',
	type:'removeAgent',
	id:'unittest'
};

request({
url:"http://localhost:4000",
method:"POST",
json:true,
body:addUserJSON},
function(error,response,body){
	console.log("Testing user add feature. Response should be true:");
	expect(body).to.equal("true");

});
request({
url:"http://localhost:4000",
method:"POST",
json:true,
body:updateUserJSON},
function(error,response,body){
	console.log("Testing user update feature. Response should be true:");
	expect(body).to.equal("true");

});

request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:removeUserJSON
},
	function(error,response,body){
		console.log("Testing user remove feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:addEmployeeJSON
},
	function(error,response,body){
		console.log("Testing employee add feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:updateEmployeeJSON
},
	function(error,response,body){
		console.log("Testing employee update feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:removeEmployeeJSON
},
	function(error,response,body){
		console.log("Testing remove employee feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:addGeyserJSON
},
	function(error,response,body){
		console.log("Testing add geyser feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:updateGeyserJSON
},
	function(error,response,body){
		console.log("Testing update geyser feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:removeGeyserJSON
},
	function(error,response,body){
		console.log("Testing remove geyser feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:addCaseJSON
},
	function(error,response,body){
		console.log("Testing add case feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:updateCaseJSON
},
	function(error,response,body){
		console.log("Testing update case feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:removeCaseJSON
},
	function(error,response,body){
		console.log("Testing remove case feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:addCallerJSON
},
	function(error,response,body){
		console.log("Testing add caller feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:updateCallerJSON
},
	function(error,response,body){
		console.log("Testing update caller feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:removeCallerJSON
},
	function(error,response,body){
		console.log("Testing remove caller feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:addAgentJSON
},
	function(error,response,body){
		console.log("Testing add agent feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:updateAgentJSON
},
	function(error,response,body){
		console.log("Testing update agent feature. Response should be true:");
		expect(body).to.equal("true");
});
request({
	url:"http://localhost:4000",
	method:"POST",
	json:true,
	body:removeAgentJSON
},
	function(error,response,body){
		console.log("Testing remove agent feature. Response should be true:");
		expect(body).to.equal("true");
});
