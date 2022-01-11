// ****************************** FISHEYE WEB SITE ****************************** //

export default class HomePage {
    displayPhotographers(data) {
        // Récupère les datas des photographes
        const dataphotographers = data.photographers
        console.log(dataphotographers)
        // et bien retourner le tableau photographers seulement une fois
        const { photographers } =  ({photographers: [...dataphotographers]})
        
        const photographersSection = document.querySelector(".photographers_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };
    
}