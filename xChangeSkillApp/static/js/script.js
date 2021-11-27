var stateObject = {
	"India": {
		"Maharashtra": ["Pune", "Mumbai", "Nagpur"],
		"Delhi": ["new Delhi", "North Delhi"],
		"Kerala": ["Thiruvananthapuram", "Palakkad"],
		"Goa": ["North Goa", "South Goa"],
	},
	"United States": {
		"Arizona": ["Tempe", "Scottsdale", "Phoenix"],
		"Texas": ["Austin", "Dallas"],
		"California": ["Los Angeles", "San Diego"],
		"Illinois": ["Chicago", "Springfield"],
	},
	"Australia": {
		"South Australia": ["Dunstan", "Mitchell"],
		"Victoria": ["Altona", "Euroa"]
	},
	"Canada": {
		"Alberta": ["Acadia", "Bighorn"],
		"Columbia": ["Washington"]
	},
}

var countySel = document.getElementById("countySel")
var stateSel = document.getElementById("stateSel")
var districtSel = document.getElementById("districtSel")

/*
window.onload = function () {

	/* for (var country in stateObject) {
	// 	countySel.options[countySel.options.length] = new Option(country, country);
	// }

	/* countySel.onchange(); // reset in case page is reloaded 
}
*/

countySel.onchange = function () {
	try{
	console.log("here")
	stateSel.length = 1; // remove all options bar first
	districtSel.length = 1; // remove all options bar first
	if (this.selectedIndex < 1) return; // done
	for (var state in stateObject[this.innerHTML]) {
		stateSel.options[stateSel.options.length] = new Option(state, state);
	}
}catch{
	console.error(message)
}

}

stateSel.onchange = function () {
	districtSel.length = 1; // remove all options bar first
	if (this.selectedIndex < 1) return; // done
	var district = stateObject[countySel.innerHTML][this.innerHTML];
	for (var i = 0; i < district.length; i++) {
		districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
	}
}

function showDiv() {
	var spans = $('.spanErrorField');
	spans.text('');
	var v = document.getElementById("register");
	var log = document.getElementById("loginForm");
	v.style.display = "block";
	log.style.display = "none";
	$('#contactUs').css('visibility', 'hidden');
}

function closeDiv() {
	var v = document.getElementById("register");
	var log = document.getElementById("loginForm");
	var hideShow = document.getElementById("hideShow");
	hideShow.style.display = "block";
	v.style.display = "none";
	log.style.display = "block";

}

$(document).ready(function () {
	$("#hide").click(function () {
		$('#loginForm').css('visibility', 'hidden');
	});

	$("#show").click(function () {
		$('#loginForm').css('visibility', 'visible');

	});

	var modal = document.getElementById("myModal");

	var showContact = document.getElementById("showContact");
	// When the user clicks the button, open the modal 
	showContact.onclick = function () {
		var v = document.getElementById("register");
		var log = document.getElementById("loginForm");
		var hideShow = document.getElementById("hideShow");
		v.style.display = "none";
		log.style.display = "none";
		hideShow.style.display = "none";
		modal.style.display = "block";

	}

	var span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {

		modal.style.display = "none";
		var log = document.getElementById("loginForm");
		log.style.display = "block";
	}

	var spans = $('.spanErrorField');
	spans.text('');


});

function addNewSkill() {
	// First create a DIV element.
	var txtNewInputBox = document.createElement('div');

	// Then add the content (a new input box) of the element.

	txtNewInputBox.innerHTML = "<span class='details'style='text-align:left'>Skill Name</span><input type='text' style='text-align:left' id='newInputBox'>";

	// Finally put it where it is supposed to appear.
	document.getElementById("newElementId").appendChild(txtNewInputBox);
}

function addNewWishSkill() {
	// First create a DIV element.
	var txtNewInputBox = document.createElement('div');

	// Then add the content (a new input box) of the element.

	txtNewInputBox.innerHTML = "<span class='details'style='text-align:left'>Skill Name</span><input type='text' style='text-align:left' id='newInputBox'>";

	// Finally put it where it is supposed to appear.
	document.getElementById("newWishElementId").appendChild(txtNewInputBox);
}

function logInValidation() {

	const loginUserNameValue = document.getElementById('userLoginId').innerHTML.trim();
	const loginPasswordValue = document.getElementById('userLoginPassword').innerHTML.trim();
	//let anyError = false;


	if (loginUserNameValue === '') {
		document.getElementById('userLogID').innerHTML = "Username cannot be empty";
		//anyError = true;
	} else {
		document.getElementById('userLogID').innerHTML = "";
	}
	if (loginPasswordValue === '') {
		document.getElementById('userLogPass').innerHTML = "Password cannot be empty";
		//anyError = true;
	} else {
		document.getElementById('userLogPass').innerHTML = "";
	}
	//return !anyError;

}
/*
 Registration Form Validation
*/
/*const regForm = document.getElementById('regForm');


regForm.addEventListener('submit', e => {
	e.preventDefault();
	regValidation();
});*/

$("#refForm").click(function () {
	return regValidation();
});

function regValidation() {
	let anyError = false;

	// trim to remove the whitespaces
	const firstName = document.getElementById('fName').value.trim();
	const lastName = document.getElementById('lName').value.trim();
	const username = document.getElementById('userName').value.trim();
	const email = document.getElementById('emailAddress').value.trim();
	const password = document.getElementById('password').value.trim();
	const c_password = document.getElementById('password2').value.trim();
	//const genderValue = document.getElementsByName('gender').value();
	const country = document.getElementById('countySel').value.trim();
	const state = document.getElementById('stateSel').value.trim();

	const streetAddress = document.getElementById('streetAddress').value.trim();
	const cityName = document.getElementById('districtSel').value;


	const zipCodeValue = document.getElementById('zipCode').value.trim();
	const phoneNumberValue = document.getElementById('phoneNumber').value.trim();

	const dobValue = document.getElementById('dateOfBirth').value.trim();

	const radioChecked = document.getElementById("dot-1").checked || document.getElementById("dot-2").checked;
	console.log(anyError)
		try {
		if (radioChecked) {

		} else {
			document.getElementById("genderSpan").innerHTML = "Select a gender";
			anyError = true;
		}

		if (firstName === '') {
			document.getElementById('firstName').innerHTML = "First Name cannot be blank";
			anyError = true;
		} else {
			document.getElementById('firstName').innerHTML = "";
		}

		if (lastName === '') {
			document.getElementById('lastName').innerHTML = "Last Name cannot be blank";
			anyError = true; 
		} else {
			document.getElementById('lastName').innerHTML = "";
		}

		if (username === '') {
			document.getElementById('username').innerHTML = "Username cannot be blank";
			anyError = true;
		} else {
			document.getElementById('username').innerHTML = "";
		}

		if (username !== "") {
			if (username.length > 6) {
				document.getElementById('username').innerHTML = "Username must contain at most 8 characters";
				anyError = true;
			} else {
				document.getElementById('username').innerHTML = "";
			}
		}
		if (email === '') {
			document.getElementById('emailId').innerHTML = "Email cannot be blank";
			anyError = true;
		} else {
			document.getElementById('emailId').innerHTML = "";
		}

		if (password === '') {
			document.getElementById('pass1').innerHTML = "Password cannot be blank";
			anyError = true;
			console.log("pwd");
		} else {
			document.getElementById('pass1').innerHTML = "";
		}


		if (c_password === '') {
			document.getElementById('pass2').innerHTML = "Please re-enter the password";
			anyError = true;
			console.log("cpwd");
		} else {
			document.getElementById('pass2').innerHTML = "";
		}
		if (password !== "") {
			if (password.length < 8) {
				document.getElementById('pass1').innerHTML = "Password must contain at most 8 characters";
				anyError = true;
				console.log("pwdl");
			} else {
				document.getElementById('pass1').innerHTML = "";
			}
		}
		if (password !== "") {
			if (password.search(/[0-9]/) == -1) {
				document.getElementById('pass1').innerHTML = "Password must contain at least one number (0-9)";
				anyError = true;
				console.log("pwdnu");
			} else {
				document.getElementById('pass1').innerHTML = "";
			}
		}
		if (password !== "") {
			if (password.search(/[a-z]/) == -1) {
				document.getElementById('pass1').innerHTML = "password must contain at least one lowercase letter (a-z)";
				anyError = true;
				console.log("pwdch");
			} else {
				document.getElementById('pass1').innerHTML = "";
			}
		}
		if (password !== "") {
			if (password.search(/[A-Z]/) == -1) {
				document.getElementById('pass1').innerHTML = "Password must contain at least one uppercase letter (A-Z)";
				anyError = true;
				console.log("pwdchcap");
			} else {
				document.getElementById('pass1').innerHTML = "";
			}
		}

		if (c_password === '') {
			document.getElementById('pass2').innerHTML = "Confirm password cannot be blank";
			anyError = true;
			console.log("cpwdb");
		} else if (password !== c_password) {
			document.getElementById('pass2').innerHTML = "Password and confirm password does not match";
			anyError = true;
			console.log("pwdchM");
		} else {
			document.getElementById('pass2').innerHTML = "";
		}

		if (streetAddress === '') {
			document.getElementById('streetAdd').innerHTML = "Street Address cannot be blank";
			anyError = true;
			console.log("st");
		} else {
			document.getElementById('streetAdd').innerHTML = "";
		}
		if (country === '') {
			document.getElementById('co').innerHTML = "Country cannot be blank";
			anyError = true;
			console.log("co");
		} else {
			document.getElementById('co').innerHTML = "";
		}

		if (state === '') {
			document.getElementById('stateName').innerHTML = "State cannot be blank";
			anyError = true;
			console.log("state");
		} else {
			document.getElementById('stateName').innerHTML = "";
		}

		if (cityName === '') {
			document.getElementById('city').innerHTML = "City cannot be blank";
			anyError = true;
			console.log("city");
		} else {
			document.getElementById('city').innerHTML = "";
		}

		if (zipCodeValue === '') {
			document.getElementById('zip').innerHTML = "Zip Code cannot be blank";
			anyError = true;
			console.log("zip");
		} else {
			document.getElementById('zip').innerHTML = "";
		}

		if (phoneNumberValue === '') {
			document.getElementById('phone').innerHTML = "Phone Number cannot be blank";
			anyError = true;
			console.log("ph");
		} else {
			document.getElementById('phone').innerHTML = "";
		}
	/*	if (phoneNumberValue !== '') {
			if (phoneNumberValue.length < 10) {
				document.getElementById('phone').innerHTML = "Phone Number cannot contain less than 10 digits";
				anyError = true;
				console.log("phless");
			} else {
				document.getElementById('phone').innerHTML = "";
			}
		}
		if (phoneNumberValue !== '') {
			if (phoneNumberValue.length > 10) {
				document.getElementById('phone').innerHTML = "Phone Number cannot contain more than 10 digits";
				anyError = true;
				console.log("phm");
			} else {
				document.getElementById('phone').innerHTML = "";
			}
		} */
		if (phoneNumberValue !== '') {
			if (isNaN(phoneNumberValue)) {
				document.getElementById('phone').innerHTML = "Enter digits only not characters";
				anyError = true;
				console.log("phch");
			} else {
				document.getElementById('phone').innerHTML = "";
			}
		}

		if (dobValue === '') {
			document.getElementById('dob').innerHTML = "DOB value cannot be blank";
			anyError = true;
			console.log("dob");
		} else {
			document.getElementById('dob').innerHTML = "";
		}
		console.log(anyError); 
		if(!anyError){
			alert('Form Succesfully Submitted');
		}
		/*if(!anyError){
			var v = document.getElementById("register");
			var log = document.getElementById("loginForm");
			var hideShow = document.getElementById("hideShow");
			console.log("done1"); 
			hideShow.style.display = "block";
			v.style.display = "none";
			log.style.display = "block";
			console.log("done2"); 
			alert('Form Succesfully Submitted');
			
		}*/
	}catch(message){
		console.error(message)
		//return false;
	}
	
	return !anyError;
}