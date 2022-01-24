// ****************************** FISHEYE WEB SITE ****************************** //
// class HomePage: Afficher la page d'accueil ************ //
export default class HomePage {
	displayPhotographers(data) {
		// Récupère les données des photographes
		const dataPhotographers = data.photographers;
        
		// et bien retourner le tableau photographers seulement une fois
		const { photographers } =  ({photographers: [...dataPhotographers]});
        
		const photographersSection = document.querySelector(".photographers_section");

		photographers.forEach((photographer) => {
			// eslint-disable-next-line no-undef
			const photographerModel = photographerFactory(photographer);
			const userCardDOM = photographerModel.getUserCardDOM();
			photographersSection.appendChild(userCardDOM);
		});
	}
    
}