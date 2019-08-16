<?php

if(isset($_POST['submit'])){

	echo "Address: ".htmlspecialchars($_POST['streetaddress'])."<br/>";
	echo "City: ".htmlspecialchars($_POST['city'])."<br/>";
	echo "State: ".htmlspecialchars($_POST['state'])."<br/>";
	echo "Zipcode: ".htmlspecialchars($_POST['zipcode'])."<br/>";
	
}