

	var Couple = function(coupleDefined,children){
		this.coupleDefined = coupleDefined;
		this.children = children;
	};

	Couple.prototype.render = function () {

		for (var key in this.coupleDefined){
			//console.log(key);
			if (this.coupleDefined[key] === "Rich")  {
		//	console.log("Here is the First and Last Name", this.coupleDefined.partner1FirstName, this.coupleDefined.partner1LastName);
			//$('.couplesearchresults').append(this.coupleDefined.partner1FirstName + " ");
			//$('.couplesearchresults').append(this.coupleDefined.partner1LastName);


								// .after().text(this.coupleDefined.partner1LastName);

			/*$('.couplesearchresults').append().text("Hello1");
			$('.couplesearchresults').append().text("Hello2");*/


			}
			

		}

		//this.$el = $('.couple-details-template')
	
		// find couple 
		//console.log("Here is render on Couple2",this.coupleDefined);
		//this.$el.find('.couple-name').text(this.coupleDefined);
		//this.$el.append().text(this.coupleDefine);

		//console.log("got here after find",this.coupleDefined);
		//console.log("This is being returned ", this.$el);
		//return this.$el;

	};

	Couple.prototype.search = function (minage, maxage, haschildren, haspets, militaryservice) {
			var self = this;

			var answers = ["false", "false", "false"];
			console.log("answers array", answers);
				//this.coupleDefined = coupleDefined;
				this.minage = minage;
				this.maxage = maxage;
				this.haschildren = haschildren;
				this.haspets = haspets;
				this.militaryservice = militaryservice;
		 //call(this, minage, maxage, haschildren, haspets, militaryservice);
		//console.log("couple id", this.coupleDefined.coupleid);
		
		 var results = _.filter (self, function(couple) {
		//console.log("couple id", self.coupleDefined.coupleid);
		//console.log("minage", minage, self.coupleDefined.partner1Age );
		console.log("haschildren ", haschildren, self.coupleDefined.partner1HasChildren );
					//console.log("value", haschildren, self.coupleDefined.partner1HasChildren);
   				 if  ((minage >= self.coupleDefined.partner1Age || minage >= self.coupleDefined.partner2Age)
   				 	&& (maxage <= self.coupleDefined.partner1Age || minage <= self.coupleDefined.partner2Age)) {
   				 			  answers.push = "Between " + self.coupleDefined.partner1Age + " Years Old"  + self.coupleDefined.partner2Age + " Years Old";
   								console.log("Within the Age limit");
   				 } // partner age if end

   				 if  ((haschildren == self.coupleDefined.partner1HasChildren) || (haschildren == self.coupleDefined.partner2HasChildren)){
   				 		 answers.push("Have Children");
   				 			console.log("Have Children");
   				 } // children end if 
   				 
   				 if  ((haspets === self.coupleDefined.partner1Pets) || (haspets === self.coupleDefined.partner2Pets)){
   				 			return answers.push("Have Pets");
   				 			console.log("Have Pets");
   				 } // pets end if
   				 
   				 if  ((militaryservice === self.coupleDefined.partner1MilitaryService) || (militaryservice === self.coupleDefined.partner2MilitaryService)) {
   				 			return answers.push("Military Veteran");
   				 			console.log("Military Veterarn");
   				 } // end military service
   				 		return couple;

   				// } // end of If

				}); // end of filter

		 								$('.couplesearchresults').append(self.coupleDefined.coupleid + " " + '<br>')
														 .append(self.coupleDefined.partner1FirstName + " ")
   				 										 .append(self.coupleDefined.partner1LastName + " " + '<br>')
														 .append(self.coupleDefined.partner2FirstName + " ")
														 .append(self.coupleDefined.partner2LastName);

			console.log("New array: ", answers[0], answers[1], answers[3]);
		  return answers;
		//console.log("New array: ", newArray);
		//return false;

			 // Couple call(this, minage, maxage, haschildren, haspets, militaryservice).filter(function(this) {

				// 		if (this.haschildren = true){
			 // 			console.log(this.coupleDefined.partner1LastName);
				//  		}
			 		

				//  )};
				//console.log("from search ", this.coupleDefined.partner1LastName);
				
				//coupleDefined.filter(function(coupleDefined) {
							//if (this.haschildren = coupleDefined.partner2NumberOfChildren){
							
							//console.log(" got in filter for pets ", coupleDefined.partner1LastName);
					
						//	if (this.haspets === coupleDefined.partner1Pets){
						//		  console.log(" They have Pets ! " + coupleDefined.partner1LastName);
								 
						//	} else {
						//		console.log(" They DO NOT HAVE Pets ! " + coupleDefined.partner1LastName);
								
						//	} //end else
						
					//});

						
			//console.log("got here in search!");
			//var search = $(".couplesearchresults");
  	// 		var items  = $("#childrenyes");

  //  		$("#submitbutton").on("click", function(e){

  //       var v = search.val().toLowerCase();
  //      if(v == "") { 
  //          items.show();
  //          return;
     //   }
  //       $.each(items, function(){
  //           var it = $(this);
  //           var lb = it.find("label").text().toLowerCase();
  //           if(lb.indexOf(v) == -1) 
  //                it.hide();
  //       });

		// 	for (var key in this.coupleDefined){
		// 	//console.log(key);
		// 	if (this.coupleDefined[key] === "Rich")  {
		// 	console.log("Here is the First and Last Name", this.coupleDefined.partner1FirstName, this.coupleDefined.partner1LastName);
		// 	$('.couplesearchresults').append(this.coupleDefined.partner1FirstName + " ");
		// 	$('.couplesearchresults').append(this.coupleDefined.partner1LastName);


		// 	}
		// }
		

	}; // end of Couple Prototype 

	Couple.prototype.addCouple = function() {

	};

	 function loggedInCouple (loggedInCouple){
			//console.log("got here", loggedInCouple);
			//Couple.call(this,loggedInCouple);

			// var temp = Couple.call(this,loggedInCouple);
				var children = this.loggedInCouple.children;
		//	console.log("children ", loggedInCouple.children);
			$('.profilestatistics').after("<div>I'm a div!</div>").text(children);
			//$('.profile').append().text("Hello!!mf");
			//console.log("temp", temp);
			//return children;

	};

	

// Defining Couple # 1 Object to be passed to the Couple Class
	var coupleDefined1 = {
		coupleid:1,
		partner1FirstName: "Michael",
		partner1MiddleName: "David",
		partner1LastName: "Friedman",
		partner1HomePhone: "508-693-0056",
		partner1MobilePhone: "774-563-9352",
		partner1WorkPhone: "508-555-1212",
		partner1BirthDate: 10/16/1966,
		partner1Age: 45,
		partner1BirthCity: "Tuscon",
		partner1BirthState: "Arizona",
		partner1HomeStreetAddress: "67 Monroe Ave",
		partner1HomeMailingAddress: "P.O. Box 1296",
		partner1HomeCity: "Oak Bluffs",
		partner1HomeState: "Massachusetts",
		partner1HomeZipCode: "02557",
		partner1HomeEmail: "mfriedzz@ix.netcom.com",
		partner1HomeTwitter: "xxxx",
		partner1WorkPlaceName: "MV Location inc",
		partner1WorkStreetAddress: "12 Main Street",
		partner1WorkMailingAddress: "Box 345",
		Partner1WorkCity: "Tisbury",
		Partner1WorkState: "Massachusetts",
		partner1WorkZipCode: "02568",
		partner1WorkEmail: "mf@aol.com",
		partner1WorkTwitter: "  dd",
		partner1WorkJobPosition: " Banker",
		partner1WorkJobDescription: " VH Bank Manager",
		partner1HasChildren:true,
		partner1NumberOfChildren: 1,
		partner1MilitaryService: false,
		partner1MilitaryDetails: "   ",
		partner1AllowCoriCheck: true,
		partner1Activities: [],
		partner1Pets: true,
		partner1PetType: "dog",
		partner1PetBreed: "Mutt",
		partner1PetName:" Ruby",
		partner1Married: true,
		partner1CivilUnion: false,

		// Partner 2 Details
		coupleid:1,
		partner2FirstName: "Katherine",
		partner2MiddleName: "Adair",
		partner2LastName: "Reardon",
		partner2HomePhone: "508-693-0056",
		partner2MobilePhone: "508-728-6554",
		partner2WorkPhone: "508-555-1212",
		partner2BirthDate: 10/4/1967,
		partner2Age: 44,
		partner2BirthCity: "Worcester",
		partner2BirthState: "Massachusetts",
		partner2HomeStreetAddress: "67 Monroe Ave",
		partner2HomeMailingAddress: "P.O. Box 1296",
		partner2HomeCity: "Oak Bluffs",
		partner2HomeState: "Massachusetts",
		partner2HomeZipCode: "02557",
		partner2HomeEmail: "boolah@aol.com",
		partner2HomeTwitter: "xxxx",
		partner2WorkPlaceName: "MV Hospital",
		partner2WorkStreetAddress: "12 Main Street",
		partner2WorkMailingAddress: "Box 345",
		Partner2WorkCity: "Oak Bluffs",
		Partner2WorkState: "Massachusetts",
		partner2WorkZipCode: "02557",
		partner2WorkEmail: "mvboolah@aol.com",
		partner2WorkTwitter: "  dd",
		partner2WorkJobPosition: " Nurse Practioner",
		partner2WorkJobDescription: " MV Hospital Julie Stunkel & Henry Knider",
		partner2HasChildren:true,
		partner2NumberOfChildren: 1,
		partner2MilitaryService: false,
		partner2MilitaryDetails: "   ",
		partner2AllowCoriCheck: true,
		partner2Activities: [],
		partner2Pet: true,
		partner2PetType: "dog",
		partner2PetBreed: "Mutt",
		partner2PetName: "Ruby",
		partner2Married: true,
		partner2CivilUnion: false

	};

	var children1 = {
		coupleid:1,
		childFirstName: "Zachary",
		childMiddleName: "Luke",
		childLastName: "Friedman",
		childBirthDate: "5/27/2011",
		childAge: 3,
		childSexkey: "Male",
		childActivities: [],
		childLikes: [],
		childParent1: "Michael Friedman",
		childParent2: "Katherine Friedman",
		childPet: true,
		childPetType: "dog",
		childPetBreed: "Mutt",
		childPetName: "Ruby"



	};

	// Defining Couple # 2 Object to be passed to the Couple Class
	var coupleDefined2 = {
		coupleid:2,
		partner1FirstName: "Rich",
		partner1MiddleName: "Ryan",
		partner1LastName: "Little",
		partner1HomePhone: "617-111-2222",
		partner1MobilePhone: "617-555-9352",
		partner1WorkPhone: "617-555-1212",
		partner1BirthDate: 01/16/1964,
		partner1Age: 45,
		partner1BirthCity: "Boston",
		partner1BirthState: "Massachusetts",
		partner1HomeStreetAddress: "25 Hilburn Place ",
		partner1HomeMailingAddress: "P.O. Box 43",
		partner1HomeCity: "Roslindale",
		partner1HomeState: "Massachusetts",
		partner1HomeZipCode: "02131",
		partner1HomeEmail: "mrlittle@aol.com",
		partner1HomeTwitter: "xxxx",
		partner1WorkPlaceName: "Boston Fire Department",
		partner1WorkStreetAddress: "1 Main Street",
		partner1WorkMailingAddress: "Box 34",
		Partner1WorkCity: "Boston",
		Partner1WorkState: "Massachusetts",
		partner1WorkZipCode: "02132",
		partner1WorkEmail: "rl@aol.com",
		partner1WorkTwitter: "  xx",
		partner1WorkJobPosition: " Fire Fighter",
		partner1WorkJobDescription: " Hazardous Materials",
		partner1HasChildren:true,
		partner1NumberOfChildren: 2,
		partner1MilitaryService: false,
		partner1MilitaryDetails: "   ",
		partner1AllowCoriCheck: true,
		partner1Activities: [],
		partner1Pets: false,
		partner1PetType: null,
		partner1PetBreed: null,
		partner1PetName: null,
		partner1Married: false,
		partner1CivilUnion: false,

		// Partner 2 Details
		coupleid:2,
		partner2FirstName: "Barbara",
		partner2MiddleName: "dana",
		partner2LastName: "Smith",
		partner2HomePhone: "617-555-1156",
		partner2MobilePhone: "508-111-1254",
		partner2WorkPhone: "508-555-1214",
		partner2BirthDate: 10/7/1975,
		partner2Age: 37,
		partner2BirthCity: "Newton",
		partner2BirthState: "Massachusetts",
		partner2HomeStreetAddress: "1 Granby Ave",
		partner2HomeMailingAddress: "P.O. Box 12",
		partner2HomeCity: "Newton",
		partner2HomeState: "Massachusetts",
		partner2HomeZipCode: "02133",
		partner2HomeEmail: "bsmith@aol.com",
		partner2HomeTwitter: "xxxx",
		partner2WorkPlaceName: "Needham Hospital",
		partner2WorkStreetAddress: "12 Main Street",
		partner2WorkMailingAddress: "Box 5",
		Partner2WorkCity: "Needham",
		Partner2WorkState: "Massachusetts",
		partner2WorkZipCode: "02512",
		partner2WorkEmail: "bsmith@newtonhospital.com",
		partner2WorkTwitter: "  ",
		partner2WorkJobPosition: " Nurse Practioner",
		partner2WorkJobDescription: " Newton City Hospital",
		partner2HasChildren:false,
		partner2NumberOfChildren: 0,
		partner2MilitaryService: false,
		partner2MilitaryDetails: "   ",
		partner2AllowCoriCheck: true,
		partner2Activities: [],
		partner2Pet: true,
		partner2PetType: "cat",
		partner2PetBreed: "Tomcat",
		partner2PetName: "Suddy",
		partner1Married: false,
		partner2CivilUnion: false






	}; 

	var children21 = {
		coupleid:2,
		childFirstName: "Lynn",
		childMiddleName: "Laura",
		childLastName: "Little",
		childBirthDate: "3/27/1988",
		childAge: 26,
		childSexkey: "Female",
		childActivities: [],
		childLikes: [],
		childParent1: "Rich Little",
		childParent2: null,
		childPet: true,
		childPetType: "fish",
		childPetBreed: "Guppy",
		childPetName: "Swimmy"

	};
	var children22 = {
		coupleid:2,
		childFirstName: "Jack",
		childMiddleName: "Lot",
		childLastName: "Little",
		childBirthDate: "5/7/2001",
		childAge: 3,
		childSexkey: "Male",
		childActivities: ["biking", "tag", "kickball"],
		childLikes: ["Walt Disney World", "Transformers"],
		childParent1: "Rich Little",
		childParent2: "Kat Killie",
		childPet: false,
		childPetType: null,
		childPetBreed: null,
		childPetName: null
	}; 

// End of Couple 2

// Defining Couple # 3 Object to be passed to the Couple Class
	var coupleDefined3 = {
		coupleid:3,
		partner1FirstName: "Lynn",
		partner1MiddleName: "Radar",
		partner1LastName: "Rodger",
		partner1HomePhone: "508-693-0045",
		partner1MobilePhone: "774-563-1152",
		partner1WorkPhone: "508-555-1212",
		partner1BirthDate: 10/15/1986,
		partner1Age: 28,
		partner1BirthCity: "Cambridge",
		partner1BirthState: "Massachusetts",
		partner1HomeStreetAddress: "12 putname Ave",
		partner1HomeMailingAddress: "P.O. Box 16",
		partner1HomeCity: "Cambridge",
		partner1HomeState: "Massachusetts",
		partner1HomeZipCode: "01672",
		partner1HomeEmail: "lradar@aol.com",
		partner1HomeTwitter: "xxxx",
		partner1WorkPlaceName: "Harvard University",
		partner1WorkStreetAddress: "121 Main Street",
		partner1WorkMailingAddress: "Box 35",
		Partner1WorkCity: "Cambridge",
		Partner1WorkState: "Massachusetts",
		partner1WorkZipCode: "01672",
		partner1WorkEmail: "lrodger@harvardu.org",
		partner1WorkTwitter: "  ldhu",
		partner1WorkJobPosition: "Professor",
		partner1WorkJobDescription: "English Department",
		partner1HasChildren:false,
		partner1NumberOfChildren: 0,
		partner1MilitaryService: true,
		partner1MilitaryDetails: ["army", "PFC", "Iraq War 2003", "Gulf War", "Hospital Platoon"],
		partner1AllowCoriCheck: true,
		partner1Activities: ["bike", "Jog"],
		partner1Pets: true,
		partner1PetType: "dog",
		partner1PetBreed: "Mutt",
		partner1PetName:"Curly",
		partner1Married: false,
		partner1CivilUnion: true,

		// Partner 2 Details
		coupleid:3,
		partner2FirstName: "Lisa",
		partner2MiddleName: "Lona",
		partner2LastName: "Likee",
		partner2HomePhone: "617-333-1212",
		partner2MobilePhone: "774-555-1212",
		partner2WorkPhone: "617-111-1212",
		partner2BirthDate: 10/22/1987,
		partner2Age: 28,
		partner2BirthCity: "Chicago",
		partner2BirthState: "Illinois",
		partner2HomeStreetAddress: "12 Recept Ave",
		partner2HomeMailingAddress: "P.O. Box 96",
		partner2HomeCity: "Cambridge",
		partner2HomeState: "Massachusetts",
		partner2HomeZipCode: "01672",
		partner2HomeEmail: "llikkk@aol.com",
		partner2HomeTwitter: "xxxx",
		partner2WorkPlaceName: "Harvard University",
		partner2WorkStreetAddress: "12 Main Street",
		partner2WorkMailingAddress: "Box 3",
		Partner2WorkCity: "Cambridge",
		Partner2WorkState: "Massachusetts",
		partner2WorkZipCode: "01672",
		partner2WorkEmail: "llikee@harvardu.org",
		partner2WorkTwitter: null ,
		partner2WorkJobPosition: " Assistant Professor",
		partner2WorkJobDescription: " Sociology Department",
		partner2HasChildren:false,
		partner2NumberOfChildren: 0,
		partner2MilitaryService: false,
		partner2MilitaryDetails: "   ",
		partner2AllowCoriCheck: true,
		partner2Activities: [],
		partner1Pet: false,
		partner1PetType: null,
		partner1PetBreed: null,
		partner1PetName: null,
		partner1Married: false,
		partner1CivilUnion: true
		};

	


var couple1 = new Couple(coupleDefined1,children1);
 //console.log("Couple 1", couple1);
 var couple2 = new Couple(coupleDefined2,children21, children22);
 //console.log("Couple 2", couple2);
 var couple3 = new Couple(coupleDefined3, 0);
 //console.log("Couple 3", couple3);

 var coupleloggedin = loggedInCouple(couple1);
 
 	//var coupleloggedin = loggedInCouple(couple1);

 		// console.log("Logged in Couple: ", coupleloggedin);


//var coupleloggedindisplay = couple1.renderloggedinprofile(couple1);
	//	console.log("Rendered Couple ", coupleloggedindisplay);

	

// Beginning of Jquery	
$(document).on('ready', function() {

	


	//$('.couplesdisplay').append(couple2.render());
	//$('.couplesdisplay').append(couple3.render());
	//$('.couplesdisplay').append(couple1.render());


	// $('.couplesearchresults').before("Hello1");
	// $('.couplesearchresults').after("Hello2");
	
	//console.log(couple1.render());

	
	//search on items inputted by user

		//var search = $(".search");
   		//var items  = $("#childrenyes");

   		$("#submitbutton").on("click", function(e){
   			e.preventDefault();
   			//return false;
   			var minage = $('input[name=minage]').val();
   			var maxage = $('input[name=maxage]').val();


   			var haschildren = $('input[name=children]:checked').val();
   			var haspets = $('input[name=pets]:checked').val();
   			var militaryservice = $('input[name=militaryservice]:checked').val();
   			// console.log("got clickec");
   			
   			couple2.search(minage, maxage, haschildren, haspets, militaryservice);
   		
   			//	couple3.search(minage, maxage, haschildren, haspets, militaryservice);
			
   			// var search = $(".search");
   			// var items  = $("#childrenyes");
   			// console.log("search and items", search, items)

   			// console.log("clicked on the submit button");
   			// couple1.search();

   			 

   		});
 
   		//couple2.search(minage, maxage, haschildren, haspets, militaryservice);
		//	return false;
		//	couple3.search(minage, maxage, haschildren, haspets, militaryservice);

        //var v = search.val().toLowerCase();
       //if(v == "") { 
        //   items.show();
        //   return;
       		//}
       // $.each(items, function(){
        //    var it = $(this);
        //    var lb = it.find("label").text().toLowerCase();
        //    if(lb.indexOf(v) == -1) 
         //        it.hide();
        //});
    //});        

 //  End Search on items

  
});  // end of Jquery Ready