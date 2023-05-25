<?php

	if(isset($_POST["submit"])){
		 $firstName = $_POST["firstName"];
		 $lastName = $_POST["lastName"];
		 $phone = $_POST["phone"];
		 $company = $_POST["company"]; 
		 $category = $_POST["category"]; 
		 $mailFrom = $_POST["mail"];
		 $message = $_POST["message"];
		 		 
		 $mailTo = "denis.brankovic@gmail.com"; 
		 $headers = "From: my website. Sender: ".$mailFrom; 
		 $txt = "Incoming mail from ".$firstName." ".$lastName.".\n\n".$message;
		 mail($mailTo, $category, $txt, $headers);
		 header("Location: index.html?mailsend");
		 
	 }else{
		 header("Location: contactForm.php"); 
	 }