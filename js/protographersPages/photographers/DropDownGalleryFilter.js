//************ class DropDownGalleryFilter Menu:                                      ************//
//************ proposer un menu de filtre qui s'ouvre pour choisir une option   ************//
//************ et se ferme une fois l'option selectionné                        ************//

import GalleryFactory from "../Factory/galleryFactory.js";

export default class DropDownGalleryFilter {

	// Open/close the DropDownGalleryFilter
	dropDown(data) {
		let arrowOpen = document.getElementsByClassName("filter-btn");
		let arrowClose = document.getElementsByClassName("arrow-up-close");
		let hiddenSort = document.getElementsByClassName("filter-options");

		if (arrowOpen) {
			arrowOpen[0].addEventListener("click", () => {
				hiddenSort[0].style.display = "block"; // Dérouler le Menu
			});
			this.sortMedias(data); // Appliquer le filtre
		}
		if (arrowClose) {
			arrowClose[0].addEventListener("click", () => {
				hiddenSort[0].style.display = "none"; // Fermer le Menu
			});
		}
	}

	// filter media by title, popularity or date
	sortMedias(data) {
		let mediaArraySort = [];
		let media = data.media;
		let btnSort = document.querySelector(".filter-btn");
		let hiddenSort = document.getElementsByClassName("filter-options");
		let sortBtn = Array.from(document.getElementsByClassName("filter-option"));

		sortBtn.forEach((btn, index) => btn.addEventListener("click", () => {
			hiddenSort[0].style.display = "none"; //fermer le menu
			if (index == 0) {
				btnSort.innerHTML = "Popularité"; //modifier l'option en cours

				mediaArraySort = media.sort((a, b) => { // Tri par popularité  
					return b.likes - a.likes;
				});

			} else if (index == 1) {
				btnSort.innerHTML = "Date"; //modifier l'option en cours

				mediaArraySort = media.sort((a, b) => { //  Tri par date
					return new Date(a.date).valueOf() - new Date(b.date).valueOf();
				});

			} else if (index == 2) {
				btnSort.innerHTML = "Titre"; //modifier l'option en cours

				mediaArraySort = media.sort((a, b) => { //  Tri par titre
					if (a.title.toLowerCase() < b.title.toLowerCase()) {
						return -1;
					} else if (a.title.toLowerCase() > b.title.toLowerCase()) {
						return 1;
					}
				});
			}
			this.displaySortMedia(mediaArraySort);
		}));
	}

	displaySortMedia(mediaArraySort) {
		// Afficher la gallerie du photographe selon le Tri
		document.getElementById("photographe-gallery").innerHTML = "";
		new GalleryFactory().builder(mediaArraySort);
	}
}