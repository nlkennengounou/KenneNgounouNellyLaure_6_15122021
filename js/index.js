// lanceur des differents modules
import apiFishEye from "../js/protographersPages/api/apiFishEye.js";
import homePage from "../js/homePage/homePage.js";

import PhotographerProfil from "./protographersPages/photographers/photographer.js";
import DropDownGalleryFilter from "./protographersPages/photographers/DropDownGalleryFilter.js";
import MediaBuilder from "./protographersPages/media.js";

(function applauncher() {
	new apiFishEye().getDataFromJsonFile().then((data) => {
     
		if (window.location.pathname.includes("/photographer.html")) {
			new PhotographerProfil().displayPhotographerProfil(data);

			new DropDownGalleryFilter().dropDown(data);

			new MediaBuilder().photographersMedias(data);

		} else if(window.location.pathname.includes("/index.html")) {
			new homePage().displayPhotographers(data);
		}
        
	}).catch( () => {
		console.error("Failed to load ApiFishEye");
	});
})();
