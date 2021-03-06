//************ class PhotographerProfil :  Affichage du Formulaire             ************//
//************                      Validation des champs de saisie     ************//
//************                      Gestion des messages d'erreur       ************//

import Modal from "./modal.js";
import ContactForm from "./form.js";
export default class PhotographerProfil {
	displayPhotographerProfil(data){
		let photographersData = data.photographers;
		//Recuperer l'id du photographe
		const id = window.location.search.split("id=")[1];
		const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
		const sectionPhotographerProfil = document.getElementById("photographe-profil-header");
		const templatePhotographerProfil = `
        <article aria-label="Photographer Profil" class="photographe-profil">
            <div class='photographe-infos'>
                <h2>${photographers[0].name}</h2>
                <p class="photographe-city">${photographers[0].city}, ${photographers[0].country}</p>
                <p class="photographe-tagline">${photographers[0].tagline}</p>
            </div>
            <button id="photographe-contact" title='Contact Me'>Contactez-moi</button>
            <a href='#' title='${photographers[0].name}'>
                <img src="media/profil/${photographers[0].portrait}" alt="Profil de ${photographers[0].name}">
            </a>
        </article>
        `;
		sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
		new Modal().modal(photographersData);
		new ContactForm().getfields();
	}
    
}
