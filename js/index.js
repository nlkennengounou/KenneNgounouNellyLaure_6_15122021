import apiFishEye from '../js/protographersPages/api/apiFishEye.js';
import homePage from '../js/homePage/homePage.js';

import PhotographerProfil from './protographersPages/photographers/photographer.js';
import DropDownGalleryFilter from './protographersPages/photographers/DropDownGalleryFilter.js';
import MediaBuilder from './protographersPages/media.js';

(function applauncher() {
    new apiFishEye().getDataFromJsonFile().then((data) => {
        console.log(data)
     
        if (window.location.pathname.includes("/photographer.html")) {
            console.log("bonjour PAGE DU PHOTOGRAPHE" )
            new PhotographerProfil().displayPhotographerProfil(data);

            new DropDownGalleryFilter().dropDown(data);

            new MediaBuilder().photographersMedias(data);

        } else if(window.location.pathname.includes("/index.html")) {
            console.log("PAGE D'ACCUEIL")
            new homePage().displayPhotographers(data);
        }
        
    })/*.catch( () => {
        console.error('Failed to load apiFishEye');
    })*/
})();
