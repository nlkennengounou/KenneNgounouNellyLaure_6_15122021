//************ class LightBox :  Affichage de la LightBox modale                                    ************//
//************                   Afficher les éléments suivant et précédents le media en cours      ************//
//************                      Affchier le media selectionné                                   ************//

export default class LightBox {
	constructor() {
		this.currentIndex = 0;
	}

	// ouvrir la lightbox quand on clique sur un media
	open(currentMedia, currentMediaName) {
		let getMedias = Array.from(document.getElementsByClassName("photographe-media"));
		getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
			let lightBoxMedia = document.getElementById("gallery-lightbox-media");
			let lightBoxName = document.getElementById("gallery-lightbox-name");
			let src = currentMedia[index]; // recuperer la source
			let nameSrc = currentMediaName[index]; //recuperer le nom du media
			this.currentIndex = index; 

			//Charger le contenu de la lightBox
			document.getElementById("gallery-lightbox").style.display = "block";
			lightBoxMedia.innerHTML = `${src}`;
			lightBoxName.innerHTML = `${nameSrc}`;
		}));

		this.previous(document.querySelector(".left-arrow-lightbox-icon"), currentMedia, currentMediaName);
		this.next(document.querySelector(".right-arrow-lightbox-icon"), currentMedia, currentMediaName);
		this.close();
		this.keyboard(currentMedia, currentMediaName);
		return this;
	}

	// retourne le media précédent
	previous(elt, media, name) {
		elt.addEventListener("click", () => {
			this.currentIndex -= 1;
			let lightBoxMedia = document.getElementById("gallery-lightbox-media");
			let lightBoxName = document.getElementById("gallery-lightbox-name");

			if (this.currentIndex < 0) {
				this.currentIndex = media.length - 1;
				this.currentIndex = name.length - 1;
			}

			let src = media[this.currentIndex];
			let nameSrc = name[this.currentIndex];

			lightBoxMedia.innerHTML = `${src}`;
			lightBoxName.innerHTML = `${nameSrc}`;
		});
	}

	// retourne le media suivant
	next(elt, media, name) {
		elt.addEventListener("click", () => {
			this.currentIndex += 1;
			let lightBoxMedia = document.getElementById("gallery-lightbox-media");
			let lightBoxName = document.getElementById("gallery-lightbox-name");

			if (this.currentIndex > name.length - 1) {
				this.currentIndex = 0;
			}

			let src = media[this.currentIndex];
			let nameSrc = name[this.currentIndex];

			lightBoxMedia.innerHTML = `${src}`;
			lightBoxName.innerHTML = `${nameSrc}`;
		});
	}

	// fermer la lightbox modal
	close() {
		document.querySelector(".close-lightbox-icon").addEventListener("click", () => {
			let lightbox = document.getElementById("gallery-lightbox");

			lightbox.style.display = "none";
		});
	}

	// permettre la manipulation de la lightbox avec les touches du clavier
	keyboard(currentMedia, currentMediaName) {
		document.addEventListener("keydown", (key) => {
			let lightBoxMedia = document.getElementById("gallery-lightbox-media");
			let lightBoxName = document.getElementById("gallery-lightbox-name");

			// Appuyer la touche ECHAP pour fermer la lightbox
			if (key.code == "Escape") {
				let lightBox = document.getElementById("gallery-lightbox");
				lightBox.style.display = "none";
			}

			// utiliser la flèche droite pour afficher le media suivant
			else if (key.code == "ArrowRight") {
				this.currentIndex += 1;

				if (this.currentIndex > currentMediaName.length - 1) {
					this.currentIndex = 0;
				}

				let src = currentMedia[this.currentIndex];
				let nameSrc = currentMediaName[this.currentIndex];

				lightBoxMedia.innerHTML = `${src}`;
				lightBoxName.innerHTML = `${nameSrc}`;
			}

			// utiliser la flèche gauche pour afficher le media précédent
			else if (key.code == "ArrowLeft") {
				this.currentIndex -= 1;

				if (this.currentIndex < 0) {
					this.currentIndex = currentMedia.length - 1;
					this.currentIndex = currentMediaName.length - 1;
				}

				let src = currentMedia[this.currentIndex];
				let nameSrc = currentMediaName[this.currentIndex];

				lightBoxMedia.innerHTML = `${src}`;
				lightBoxName.innerHTML = `${nameSrc}`;
			}
		});
	}
}
