<?php


$db1 = 'geyserdetails';
$db = new mysqli('localhost','root','',$db1) or die("unable");

//plumber details
$plumberID = $_POST['eid'];
$plumberName = $_POST['nm'];
$plumberSurname = $_POST['sur'];
$plumberCellNo = $_POST['cn'];

//geyser details
$capacity = $_POST['cap'];
$manu = $_POST['manu'];
$model = $_POST['model'];
$barcode = $_POST['barcode'];

//installers details
$OwnerName = $_POST['n'];
$OwnerSurname = $_POST['s'];
$OwnerCellNumber = $_POST['c'];
$OwnerAddress = $_POST['add'];
$OwnerInsurance = $_POST['resp'];


$sql = "INSERT INTO detailsg (capacity,Manufacturer,Model,Barcode,inId,inName,inSurname,inCell,owName,owSurname,owCell,owInsurance,owAddress) VALUES('$capacity','$manu','$model','$barcode','$plumberID','$plumberName','$plumberSurname','$plumberCellNo','$OwnerName','$OwnerSurname','$OwnerCellNumber','$OwnerInsurance','$OwnerAddress')";

if(!mysqli_query($db,$sql))
{
	echo "Details could not be entered.";
}
else
{
	echo "Details entered successfully.";
	header('Location: report.html');
	
}


?>
