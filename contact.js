		
		function validation(){
			var name = document.forms["mailForm"]["name"].value;
			var emailAddress = document.forms["mailForm"]["mail"].value;			

			if(name == ""){
				getErrorInfoName.style.color = "red"; 
				getErrorInfoName.innerHTML = "Required";

				return false;
			}
			if(emailAddress == ""){
				getErrorInfoMail.style.color = "red";
				getErrorInfoMail.innerHTML = "Required";

				return false; 
			}
		}