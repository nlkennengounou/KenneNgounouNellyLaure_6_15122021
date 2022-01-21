
export default class ImageFactory {
    // Create an image element
    createHTML(element) {
        let Image = document.createElement('img');
        let url_media = "";
        let name = "";
    
        if (element.photographerId == 243 ){
            name = "Mimi Keel";
        } else if (element.photographerId == 930 ){
            name = "Ellie-Rose Wilkens";
        } else if (element.photographerId == 82 ){
            name = "Tracy Galindo";
        } else if (element.photographerId == 527 ){
            name = "Nabeel Bradford";
        } else if (element.photographerId == 925 ){
            name = "Rhode Dubois";
        } else if (element.photographerId == 195 ){
            name = "Marcel Nikolic";
        }

        url_media =`./media/photographers/${name.split(" ")[0]}/${element.image}`;
        Image.setAttribute('src', url_media);

        Image.setAttribute('alt', element.title);
        Image.setAttribute('role', 'button');
        Image.className = 'photographe-media';
        return Image;
    }

   
}

function url_media(element){
    const id = window.location.search.split('id=')[1];
    let url_media = "";
    let name = "";

    if (element.photographerId == 243 ){
        name = "Mimi Keel";
    } else if (element.photographerId == 930 ){
        name = "Ellie-Rose Wilkens";
    } else if (element.photographerId == 82 ){
        name = "Tracy Galindo";
    } else if (element.photographerId == 527 ){
        name = "Nabeel Bradford";
    } else if (element.photographerId == 925 ){
        name = "Rhode Dubois";
    } else if (element.photographerId == 195 ){
        name = "Marcel Nikolic";
    }
    url_media =`./media/photographers/${name.split(" ")[0]}/${element.image}`;
    console.log(url_media)
    return url_media;
}