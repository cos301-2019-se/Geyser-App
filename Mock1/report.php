<?php


$db1 = 'geyserdetails';
$db = new mysqli('localhost','root','',$db1) or die("unable");
$empID = $_POST['report'];


$record = mysqli_query($db,"select * from detailsg where Barcode = '$empID'");

while($show = mysqli_fetch_assoc($record))
{
	echo " Geyser Details: " .$show['capacity'];
	echo ", " .$show['Model'];
	echo ", " .$show['Manufacturer'];
	echo '<br>';
	echo '<br>';
	echo " Installed by: " .$show['inName'];
	echo " " .$show['inSurname'];
	echo '<br>';
	echo '<br>';
	echo " Installed at: " .$show['owAddress'];
	echo '<br>';
	echo '<br>';
	echo "Is it insured? " .$show['owInsurance'];
	echo "<br>";
	echo "<br>";
	
	
	
}



?>

<html>
<body>

<a href="login.html">Go back</a>
</body>
</html>
