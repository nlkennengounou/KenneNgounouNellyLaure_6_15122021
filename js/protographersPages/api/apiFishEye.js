// ****************************** FISHEYE WEB SITE ****************************** //

// Get all data  Photographers and Media from json file
export default class ApiFishEye {
    async getDataFromJsonFile() {
        let dataUrl = '/api/data/photographers.json';
        let response = await fetch(dataUrl);
        let data = await response.json();

        const dataFishEyePhotographers = [...data.photographers];
        const dataFishEyeMedias = [...data.media];

        return {
            'photographers': dataFishEyePhotographers,
            'media': dataFishEyeMedias
        };
    }
}