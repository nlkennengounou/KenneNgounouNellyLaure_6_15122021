export default class ContactForm {

    /* Get all DOM elements for form fields*/
    getfields() {
        let formElt = document.getElementById('contact-form');
        let firstNameElt = document.getElementById('first-name');
        let lastNameElt = document.getElementById('last-name');
        let emailElt = document.getElementById('email');
        let messageElt = document.getElementById('message');
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
    }

    checkIfFormIsValid(event) {
        event.preventDefault(); // move all default reactions on fields
      
        let firstName = isFirstNameValid();
        let lastName = isLastNameValid();
        let email = isEmailValid();
        let message = isMessageValid();
      
        let isFormValid = firstName && lastName && email && message
        if (isFormValid){

            console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
        }
    }

    isFirstNameValid() {
        let inputFirstName = new InputFormElement(firstNameElt, "Le champ Prénom a un minimum de 2 caractères");
        let isValid = (firstNameElt.value.length >= 2);
        removeOrDisplayError(inputFirstName, isValid);
        return isValid;
      }
      
    isLastNameValid() {
        let inputLastName = new InputFormElement(lastNameElt, "Le champ Nom a un minimum de 2 caractères");
        let isValid = (lastNameElt.value.length >= 2);
        removeOrDisplayError(inputLastName, isValid);
        return isValid;
    }

    isEmailValid() {
        let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let inputEmail = new InputFormElement(emailElt, "Le format du Champ Email est invalide");
        let isValid = checkRegexFormat(emailElt.value, emailFormat);
        removeOrDisplayError(inputEmail, isValid);
        return isValid;
    }

    isEmailValid() {
        let inputMessage = new InputFormElement(messageElt, "Veuillez renseigner un message");
        let isValid = (messageElt.value.trim() === '' || messageElt.value.trim() == null);
        removeOrDisplayError(inputMessage, isValid);
        return isValid;
    }

}


class InputFormElement {
    constructor(element, errorMessage) {
      this.element = element;
      this.errorMessage = errorMessage;
    }
  
    getParent() {
      return this.element.parentElement;
    }
  
    displayError() {
      this.getParent().setAttribute("data-error-visible", "true");
      this.getParent().setAttribute("data-error", this.errorMessage);
    }
  
    removeDisplayError() {
      this.getParent().removeAttribute("data-error-visible");
      this.getParent().removeAttribute("data-error");
    }
  }