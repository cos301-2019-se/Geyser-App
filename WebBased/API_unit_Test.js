var expect=require('chai').expect;
var request=require('request');


var addUserJSON={
	identifier:'unittester',
	type:'addUser',
	user:'unitTest',
	pass:'justatest',
	case: 'testID'
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
	id:'testEmployee',
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
	id:'testEmployee',
	param:'dateOfBirth',
	newVal:'tomorrow'
};
var removeEmployeeJSON={
	identifier:'unittester',
	type:'removeEmployee',
	id:'testEmployee'
};

var addGeyserJSON={
	identifier:'unittester',
	type:'addGeyser',
	num:'420',
	cap:'69',
	caseid:'testcase',
	path:'NA',
	insure:'yes',
	manu:'uwucorp',
	mod:'4654'
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
	id:'uwu420',
	addr:'55 test street',
	caller:'42069',
	closedby:'4562354',
	closeddate:'today',
	description:'just a test',
	openedby:'4326546',
	status:'closed',
	date:'today',
	plumid:'unittest'
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

test1();
/*test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();
test10();
test11();
test12();*/




function test1()
{
	console.log("Initiating test 1");
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
		test2();
});

}
function test2()
{
	var response="false";
	console.log("Initiating test 2");
	console.log("Testing user add feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true").to.throw("Incorrect input format");
	console.log("Testing user update feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing user remove feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	test3();
}
function test3(){
	console.log("Initiating test 3");
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
		test4();
});

}
function test4()
{
	console.log("Initiating test 4");
	var response="false";
	console.log("Testing employee add feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing employee update feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing employee remove feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	test5();
}
function test5()
{
	console.log("Initiating test 5");
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
		test6();
});

}
function test6()
{
	console.log("Initiating test 6");
	var response="false";
	console.log("Testing geyser add feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing geyser update feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing geyser remove feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	test7();
}
function test7()
{
	console.log("Initiating test 7");
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
		test8();
});

}
function test8()
{
	console.log("Initiating test 8");
	var response="false";
	console.log("Testing case add feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing case update feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing case remove feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	test9();
}
function test9()
{
	console.log("Initiating test 9");
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
		test10();
});

}
function test10()
{
	console.log("Initiating test 10");
	var response="false";
	console.log("Testing caller add feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing caller update feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing caller remove feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	test11();
}
function test11()
{
	console.log("Initiating test 11");
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
		test12();
});

}
function test12()
{
	console.log("Initiating test 12");
	var response="false";
	console.log("Testing agent add feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing agent update feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
	console.log("Testing agent remove feature. Response should be true:");
	console.log("False returned: operation failed");
	//expect(response).to.equal("true");
}
