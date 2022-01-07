import apiFishEye from '../js/protographersPages/api/apiFishEye.js';

import homePage from '../js/homePage/homePage.js';

(function applauncher() {
    new apiFishEye().getDataFromJsonFile().then((data) => {
        console.log(data)
     
        if (window.location.pathname.includes("/photographers.html")) {
            console.log("bonjour")
        }
        new homePage().displayPhotographers(data);

    })
    
    /*.catch( () => {
        console.error('Failed to load apiFishEye');
    })*/
})();
