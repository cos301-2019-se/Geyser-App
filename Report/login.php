<?php


$db1 = 'geyserdetails';
$db = new mysqli('localhost','root','',$db1) or die("unable");



if(isset($_POST['un'])&&isset($_POST['pass']))
{
	$uName = $_POST['un'];
    $passW = $_POST['pass'];
	
	$record = mysqli_query($db,"select * from verify where username = '$uName'");
	
	while($show = mysqli_fetch_assoc($record))
    {
		if($show['userType'] == 'plumber')
		{
			
			header('Location: pageTwo.html');
		}
		else if($show['userType'] == 'admin')
		{
			
			header('Location: admin.html');
		}
		else
		{
			header('Location: report.html');
		}
		
		
	
	}
}
?>