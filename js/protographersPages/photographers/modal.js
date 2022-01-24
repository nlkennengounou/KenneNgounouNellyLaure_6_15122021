//************ class Modal :  Affichage de la modale            ************//
//************                Fermer la modale    ************//
export default class Modal {
	// Déclencher la modale au clic sur le bouton 'contact me' 
	modal(data) {
		let modalBtn = document.getElementById("photographe-contact");
		let closeBtn = document.getElementsByClassName("close-form-icon");

		if (modalBtn) {
			modalBtn.addEventListener("click", this.launchModal);
			this.displayPhotographeName(data);
		}
		if (closeBtn) {
			closeBtn[0].addEventListener("click", this.closeModal);
		}
	}

	// Afficher la modal
	launchModal() {
		let modalbg = document.getElementById("form-dialog");
		modalbg.style.display = "block";
	}

	// Fermer la modal
	closeModal() {
		let modalbg = document.getElementById("form-dialog");
		modalbg.style.display = "none";
	}

	// Affcher le Nom du photographe dans l'entete du formulaire
	displayPhotographeName(data) {
		let id = window.location.search.split("id=")[1];
		let photographers = !id ? data : data.filter(photographer => photographer.id == id);
		let phName = document.getElementById("photopraphe-form-name");
		let phNameTemplate = `${photographers[0].name}`;
		phName.innerHTML = phNameTemplate;
	}
}
