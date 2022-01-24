// ****************************** FISHEYE WEB SITE ****************************** //
// Get all data  Photographers and Media from json file
export default class ApiFishEye {
	async getDataFromJsonFile() {
		let dataUrl = "/api/data/photographers.json";
		//Charger la ressource via l'url du fichier json
		let response = await fetch(dataUrl);
		//Convertir la reponse obtenu en json
		let data = await response.json();

		// Stocker les dpdonnes dans deux tableaux 
		const dataFishEyePhotographers = [...data.photographers];
		const dataFishEyeMedias = [...data.media];

		// retourner un dictionnaire ccontenant les données photographers et medias
		return {
			"photographers": dataFishEyePhotographers,
			"media": dataFishEyeMedias
		};
	}
}