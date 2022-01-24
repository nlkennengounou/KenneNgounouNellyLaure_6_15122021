//************ class ContactForm :  Affichage du Formulaire             ************//
//************                      Validation des champs de saisie     ************//
//************                      Gestion des messages d'erreur       ************//

export default class ContactForm {

	/* Get all DOM elements for form fields*/
	getfields() {
		let formElt = document.getElementById("contact-form");
		let firstNameElt = document.getElementById("first-name");
		let lastNameElt = document.getElementById("last-name");
		let emailElt = document.getElementById("email");
		let messageElt = document.getElementById("message");

		formElt.addEventListener("submit", (e) => {
			e.preventDefault(); // enlever tous les comportements par defaut

			// Validation des champs
			let firstName = this.isFirstNameValid(firstNameElt);
			let lastName = this.isLastNameValid(lastNameElt);
			let email = this.isEmailValid(emailElt);
			let message = this.isMessageValid(messageElt);
          
			let isFormValid = firstName && lastName && email && message;
			if (isFormValid) {
				firstNameElt.style.border = "none";
				lastNameElt.style.border = "none";
				emailElt.style.border = "none";
				messageElt.style.border = "none";

				// Afficher le message de validation
				this.displayMessageValidation(firstNameElt, lastNameElt, emailElt, messageElt);
				document.getElementById("contact-form").reset();
			} 
		});

		// vérification au fur et à mesure de la saisie
		formElt.addEventListener("keyup", (e) => {
			e.preventDefault();
			let firstName = this.isFirstNameValid(firstNameElt);
			let lastName = this.isLastNameValid(lastNameElt);
			let email = this.isEmailValid(emailElt);
			let message = this.isMessageValid(messageElt);
          
			let isFormValid = firstName && lastName && email && message;
			if (isFormValid) {
				firstNameElt.style.border = "none";
				lastNameElt.style.border = "none";
				emailElt.style.border = "none";
				messageElt.style.border = "none";
			} 
		});
	}

	displayMessageValidation(firstName, lastName, email, message) {

		// Afficher le recapitulatif des saisies valides en console
		console.group("Contact Message");
		console.log("Prénom : " + firstName.value);
		console.log("Nom : " + lastName.value);
		console.log("Email : " + email.value);
		console.log("Message : " + message.value);
		console.groupEnd();
        
		// Afficher la modale de confirmation
		const confirmationMessageElt = document.getElementById("formDatas");

		let template=`
        <div class="confirmation-message" id="confirmation-message">
            <p class=""> Firstname = ${firstName.value} </p>
            <p class=""> LastName = ${lastName.value} </p>
            <p class=""> Email = ${email.value} </p>
            <p class=""> Message = ${message.value} </p>
            <p> </p>
            <span>Merci pour votre message.</span>
            <p> </p>
            <p> </p>
        </div>`;
		confirmationMessageElt.innerHTML=template;
	}


	isFirstNameValid(firstNameElt) {
		let inputFirstName = new InputFormElement(firstNameElt, "Le champ Prénom a un minimum de 2 caractères");
		let isValid = (firstNameElt.value.length >= 2);
		this.removeOrDisplayError(inputFirstName, isValid);
		return isValid;
	}
      
	isLastNameValid(lastNameElt) {
		let inputLastName = new InputFormElement(lastNameElt, "Le champ Nom a un minimum de 2 caractères");
		let isValid = (lastNameElt.value.length >= 2);
		this.removeOrDisplayError(inputLastName, isValid);
		return isValid;
	}

	checkRegexFormat(str, strFormat) {
		return strFormat.test(str);
	}

	isEmailValid(emailElt) {
		let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let inputEmail = new InputFormElement(emailElt, "Le format du Champ Email est invalide");
		let isValid = this.checkRegexFormat(emailElt.value, emailFormat);
		this.removeOrDisplayError(inputEmail, isValid);
		return isValid;
	}

	isMessageValid(messageElt) {
		let inputMessage = new InputFormElement(messageElt, "Veuillez renseigner un message");
		let isValid = (messageElt.value.length >= 2);
		this.removeOrDisplayError(inputMessage, isValid);
		return isValid;
	}

	removeOrDisplayError(elt, isValid) {
		isValid ? elt.removeDisplayError() : elt.displayError();
	}

}

class InputFormElement {
	constructor(element, errorMessage) {
		this.element = element;
		this.errorMessage = errorMessage;
	}
	// Recupérer l'élément parent 
	getParent() {
		return this.element.parentElement;
	}
  
	// Afficher le message d'erreur
	displayError() {
		this.getParent().setAttribute("data-error-visible", "true");
		this.getParent().setAttribute("data-error", this.errorMessage);
	}
    
	// Retirer le message d'erreur
	removeDisplayError() {
		this.getParent().removeAttribute("data-error-visible");
		this.getParent().removeAttribute("data-error");
	}
}