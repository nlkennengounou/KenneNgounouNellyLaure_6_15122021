import apiFishEye from '../js/protographersPages/api/apiFishEye.js';
import homePage from '../js/homePage/homePage.js';

import PhotographerProfil from './protographersPages/photographers/photographer.js';

(function applauncher() {
    new apiFishEye().getDataFromJsonFile().then((data) => {
        console.log(data)
     
        if (window.location.pathname.includes("/photographer.html")) {
            console.log("bonjour")
            new PhotographerProfil().displayPhotographerProfil(data);

        } else if(window.location.pathname.includes("/index.html")) {
            new homePage().displayPhotographers(data);
        }
        
    })
    
    /*.catch( () => {
        console.error('Failed to load apiFishEye');
    })*/
})();
