// ****************************** FISHEYE WEB SITE ****************************** //

export default class HomePage {
    /*
    displayPhotographers(data) {

        const dataphotographers = data.photographers
        
        const { photographers } = ({photographers: [...dataphotographers]})
        console.log( { photographers } )
        displayData(photographers);
    };



    getPhotographers(data) {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = data.photographers
        console.log(photographers)
        // et bien retourner le tableau photographers seulement une fois
        return ({photographers: [...photographers]})
    }

    displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };*/

    displayPhotographers(data) {
        // Récupère les datas des photographes
        const dataphotographers = data.photographers
        console.log(dataphotographers)
        // et bien retourner le tableau photographers seulement une fois
        const { photographers } =  ({photographers: [...dataphotographers]})
        
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };
    
}