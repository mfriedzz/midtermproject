

	var Couple = function(coupleDefined,children){
		this.coupleDefined = coupleDefined;
		this.children = children;
	};

	var Couple.prototype.render = function () {

		this.$el = $('#coupledetail').clone()
		.attr('id', "");
		console.log("got here1");
		// find couple 
		this.$el.find('couple-name').text(this.coupleDefined);
		console.log("got here",this.coupleDefined);
		return this.$el;

	};

	var Couple.protoype.search = function () {


	};

	var Couple.prototype.addCouple () {

	};


// Defining Couple # 1 Object to be passed to the Couple Class
	var coupleDefined1 = {
		partner1FirstName: "Michael",
		partner1MiddleName: "David",
		partner1LastName: "Friedman",
		partner1HomePhone: "508-693-0056",
		partner1MobilePhone: "774-563-9352",
		partner1WorkPhone: "508-555-1212",
		partner1BirthDate: 10/16/1966,
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
		partner2FirstName: "Katherine",
		partner2MiddleName: "Adair",
		partner2LastName: "Reardon",
		partner2HomePhone: "508-693-0056",
		partner2MobilePhone: "508-728-6554",
		partner2WorkPhone: "508-555-1212",
		partner2BirthDate: 10/4/1967,
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
		childFirstName: "Zachary",
		childMiddleName: "Luke",
		childLastName: "Friedman",
		childBirthDate: "5/27/2011",
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
		partner1FirstName: "Rich",
		partner1MiddleName: "Ryan",
		partner1LastName: "Little",
		partner1HomePhone: "617-111-2222",
		partner1MobilePhone: "617-555-9352",
		partner1WorkPhone: "617-555-1212",
		partner1BirthDate: 01/16/1964,
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
		partner2FirstName: "Barbara",
		partner2MiddleName: "dana",
		partner2LastName: "Smith",
		partner2HomePhone: "617-555-1156",
		partner2MobilePhone: "508-111-1254",
		partner2WorkPhone: "508-555-1214",
		partner2BirthDate: 10/7/1975,
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
		partner2NumberOfChildren: 0,
		partner2MilitaryService: false,
		partner2MilitaryDetails: "   ",
		partner2AllowCoriCheck: true,
		partner2Activities: [],
		partner1Pet: true,
		partner1PetType: "cat",
		partner1PetBreed: "Tomcat",
		partner1PetName: "Suddy",
		partner1Married: false,
		partner1CivilUnion: false






	}; 

	var children21 = {
		childFirstName: "Lynn",
		childMiddleName: "Laura",
		childLastName: "Little",
		childBirthDate: "3/27/1988",
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
		childFirstName: "Jack",
		childMiddleName: "Lot",
		childLastName: "Little",
		childBirthDate: "5/7/2001",
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
		partner1FirstName: "Lynn",
		partner1MiddleName: "Radar",
		partner1LastName: "Rodger",
		partner1HomePhone: "508-693-0045",
		partner1MobilePhone: "774-563-1152",
		partner1WorkPhone: "508-555-1212",
		partner1BirthDate: 10/15/1986,
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
		partner2FirstName: "Lisa",
		partner2MiddleName: "Lona",
		partner2LastName: "Likee",
		partner2HomePhone: "617-333-1212",
		partner2MobilePhone: "774-555-1212",
		partner2WorkPhone: "617-111-1212",
		partner2BirthDate: 10/22/1987,
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
 console.log("Couple 1", couple1);
 var couple2 = new Couple(coupleDefined2,children21, children22);
 console.log("Couple 2", couple2);
 var couple3 = new Couple(coupleDefined3, 0);
 console.log("Couple 3", couple3);
	

// Beginning of Jquery	
$(document).on('ready', function() {



	$('.couplesdisplay').append(couple1.render());
	console.log(couple1.render());

	console.log(couple1);
 


 


  
});  // end of Jquery Ready