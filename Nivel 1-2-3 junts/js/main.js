const form = document.getElementById('myFormId');
var validacion = false;
let textMsn = {
	nombre: "El nom no cumple el formato de mes de tres caràcters",
	cognom: "El cognom no cumple el formato de mes de tres caràcters",
	email: "El email no cumple el formato",
	password: "Password mínim 8 caràcters, una majúscula i un número",
	contrasenya : "La contrasenya no coincideix amb l'anterior",
	codigoPostal: "El codi postal no compleix els requisitis",
	obligatorio: "Este campo es obligatorio",
	check: "Acepta las bases"
}

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');

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

	if(inputName.value == "") {
		ShowMsn(inputName, errorName, textMsn.obligatorio);
		acumErrores ++;
    }else if(!validar_name(inputName.value)){
		ShowMsn(inputName, errorName, textMsn.nombre);
		acumErrores ++;
	}

	if(inputSurname.value == "") {
		ShowMsn(inputSurname, errorSurname, textMsn.obligatorio);
		acumErrores ++;
    }else if(!validar_name(inputSurname.value)){
		ShowMsn(inputSurname, errorSurname, textMsn.cognom);
		acumErrores ++;
	}

	if(inputEmail.value == "") {
		ShowMsn(inputEmail, errorEmail, textMsn.obligatorio);
		acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		ShowMsn(inputEmail, errorEmail, textMsn.email);
		acumErrores ++;
	}

	if(inputPassword.value == "") {
		ShowMsn(inputPassword, errorPassword, textMsn.obligatorio);
		acumErrores ++;
	}else if(!validar_password(inputPassword.value)){
		ShowMsn(inputPassword, errorPassword, textMsn.password);
		acumErrores ++;
	}

	if(!validar_password2(inputPassword.value, inputPassword2.value)){
		ShowMsn(inputPassword2, errorPassword2, textMsn.contrasenya);
		acumErrores ++;
	}

	if(inputAddress.value == "") {
		ShowMsn(inputAddress, errorAddress, textMsn.obligatorio);
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		ShowMsn(inputProvince, errorProvince, textMsn.obligatorio);
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		ShowMsn(inputCity, inputCity, textMsn.obligatorio);
		acumErrores ++;
	}

	if(inputZipOk.length!==5) {
		ShowMsn(inputZip, errorZip, textMsn.codigoPostal);
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		ShowMsn(gridCheck, errorCheck, textMsn.check);
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

function ShowMsn(clas, msn, text){
	clas.classList.add("is-invalid");
	msn.textContent = text;
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
