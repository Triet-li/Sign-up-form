

const passConfirmed = document.getElementById("pass-confirm");
let showedMismatch = false;
const passField = document.querySelector(".pass-field");
const pass = document.getElementById("pass");
const mismatchPass = document.querySelector(".pass-condition");
passConfirmed.addEventListener("keyup", () => {
	if(pass.value != passConfirmed.value && showedMismatch == false) 
	{
		showedMismatch = true;
		mismatchPass.innerHTML = "*Password do not match";
		mismatchPass.style.cssText = "color: red;";
		passConfirmed.style.cssText = "border-color: red;";
		passField.appendChild(mismatchPass);
	}
	else if(pass.value == passConfirmed.value)
	{
		passField.removeChild(mismatchPass);
		passConfirmed.style.cssText = "border-color: green;";
		mismatchPass.style.cssText = "color: rgb(83, 87, 87);";
		mismatchPass.textContent =  "Password must contain at least 8 characters.";
		passField.appendChild(mismatchPass);
		showedMismatch = false;
	}
});

