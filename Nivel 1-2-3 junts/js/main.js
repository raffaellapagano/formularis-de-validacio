const form = document.getElementById('myFormId');
var validacion = false;

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputName = document.forms["myForm"]["inputName"];
	var inputSurname = document.forms["myForm"]["inputSurname"];
	var inputEmail = document.forms["myForm"]["inputEmail"];
	var inputPassword = document.forms["myForm"]["inputPassword"];
	var inputPassword2 = document.forms["myForm"]["inputPassword2"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZip = document.forms["myForm"]["inputZip"];
    var inputZipOk = inputZip.value;
	var gridCheck = document.forms["myForm"]["gridCheck"];

	acumErrores = campoObligatorio(inputName, errorName, acumErrores);
	acumErrores = campoObligatorio(inputSurname, errorSurname, acumErrores);
	acumErrores = campoObligatorio(inputEmail, errorEmail, acumErrores);
	acumErrores = campoObligatorio(inputPassword, errorPassword, acumErrores);
	acumErrores = campoObligatorio(inputAddress, errorAddress, acumErrores);
	acumErrores = campoObligatorio(inputProvince, errorProvince, acumErrores);
	acumErrores = campoObligatorio(inputCity, errorCity, acumErrores);

	if(!validar_password2(inputPassword.value, inputPassword2.value)){
		inputPassword2.classList.add("is-invalid");
		errorPassword2.textContent = "La contrasenya no coincideix amb l'anterior";
		acumErrores ++;
	}
	
 
	if(inputZipOk.length!==5) {
		inputZip.classList.add("is-invalid");
		errorZip.textContent = "El codi postal no compleix els requisitis";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		errorCheck.textContent = "Acepta las bases";
		acumErrores ++;
	}

    if (acumErrores > 0){
		validacion = false;
        return false;
    }else{
		validacion = true;
		return true;
	}
}

function campoObligatorio(inputName, idError, acumErrores) {
	let verificador = false;
	switch (inputName.id) {
		case "inputName":
			verificador = validar_name(inputName.value);
			break;
		case "inputSurname":
			verificador = validar_name(inputName.value);
			break;
		case "inputEmail":
			verificador = validar_email(inputEmail.value);
			break;
		case "inputPassword":
			verificador = validar_password(inputPassword.value);
			break;
	}

	if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		idError.textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!verificador){
		switch (inputName.id) {
			case "inputName":
				inputName.classList.add("is-invalid");
				idError.textContent = "El nom no cumple el formato de mes de tres caràcters";
				acumErrores ++;
				break;
			case "inputSurname":
				inputName.classList.add("is-invalid");
				idError.textContent = "El nom no cumple el formato de mes de tres caràcters";
				acumErrores ++;
				break;		
			case "inputEmail":
				inputEmail.classList.add("is-invalid");
				idError.textContent = "El email no cumple el formato";
				acumErrores ++;
			break;
			case "inputPassword":
				inputPassword.classList.add("is-invalid");
				idError.textContent = "Password mínim 8 caràcters, una majúscula i un número";
				acumErrores ++;
				break;
			case "inputPassword2":
				inputPassword.classList.add("is-invalid");
				idError.textContent = "Password mínim 8 caràcters, una majúscula i un número";
				acumErrores ++;
				break;
		}
	}
	return acumErrores;
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_name(nom) {
	var regex = /(\w[a-zA-Z]{3})/;
	return regex.test(nom) ? true : false;
}

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-\ñ])+\@(([a-zA-Z0-9\-\ñ])+\.)+([a-zA-Z0-9]{2,4})$/;
	return regex.test(email) ? true : false;
}

function validar_password(password){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&+¿_\-\.]{8,}$/;
	return regex.test(password) ? true : false;
}

function validar_password2(password, password2){
    if(password === password2){
		return true;
	}else{
		return false;
	}
}

function abrirModal(){
	if (validacion == true){
	document.getElementById("modal-body2").style.display = "none";
	document.getElementById("modal-body").style.display  = "block";
	confirmName.textContent = inputName.value;
	confirmSurname.textContent =  inputSurname.value;
	confirmEmail.textContent =  inputEmail.value;
	confirmDireccion.textContent =  inputAddress.value;
	confirmCiudad.textContent = inputCity.value;
	confirmProvincia.textContent = inputProvince.value;
	confirmCP.textContent = inputZip.value;
	}else{
		document.getElementById("modal-body").style.display = "none";
		document.getElementById("modal-body2").style.display = "block";
	}return
}
