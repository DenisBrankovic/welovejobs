		
		var getMobileMenu = document.getElementById("mobileMenu"); 
		var getHamburger = document.getElementById("hamburger"); 

		var getCompany = document.getElementById("company");
		var getSolutions = document.getElementById("solutions");

		var mobileMenuIsClosed = true;
		var companyIsClosed = true;
		var solutionsIsClosed = true; 

		function openMobileMenu(){
			if(mobileMenuIsClosed == true){

				getMobileMenu.classList.add("mobileMenuOpen");
				mobileMenuIsClosed = false;
				hamburgerSwitch(); 
			}else if(mobileMenuIsClosed == false){

				getMobileMenu.classList.remove("mobileMenuOpen");
				mobileMenuIsClosed = true;
				hamburgerSwitch();

			}
		}

		function hamburgerSwitch(){
			var getHamburgerTop = document.getElementById("hamburgerTop");
			var getHamburgerMiddle = document.getElementById("hamburgerMiddle");
			var getHamburgerBottom = document.getElementById("hamburgerBottom");
			getHamburgerMiddle.style.opacity = "0"; 
			if(mobileMenuIsClosed == false){
				getHamburgerTop.classList.add("hamburgerTopOpen");
				getHamburgerBottom.classList.add("hamburgerBottomOpen");
				getHamburgerMiddle.style.opacity = "0";
			}else if(mobileMenuIsClosed == true){
				getHamburgerTop.classList.remove("hamburgerTopOpen");
				getHamburgerBottom.classList.remove("hamburgerBottomOpen");
				getHamburgerMiddle.style.opacity = "1"; 
			}
		}

		function openCompany(){
			var getCompanyNested = document.getElementById("companyNested");

			if(companyIsClosed == true){
				getCompanyNested.classList.remove("nestedList");
				getCompanyNested.classList.add("nestedListOpen");
				
				companyIsClosed = false;
				}else if(companyIsClosed == false){
				getCompanyNested.classList.remove("nestedListOpen");
				getCompanyNested.classList.add("nestedList");

				companyIsClosed = true; 
			}	 
		}

		function openSolutions(){
			var getSolutionsNested = document.getElementById("solutionsNested");

			if(solutionsIsClosed == true){
				getSolutionsNested.classList.remove("nestedList");
				getSolutionsNested.classList.add("nestedListOpen");

				solutionsIsClosed = false;
				}else if(solutionsIsClosed == false){
				getSolutionsNested.classList.remove("nestedListOpen");
				getSolutionsNested.classList.add("nestedList");

				solutionsIsClosed = true; 
			}	 
		}

		getHamburger.addEventListener("click", openMobileMenu); 
		getCompany.addEventListener("click", openCompany); 
		getSolutions.addEventListener("click", openSolutions);