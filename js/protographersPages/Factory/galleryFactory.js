import LightBox from '../photographers/lightbox.js';
import MediaFactory from './MediaFactory.js';

export default class GalleryFactory {
    constructor() {
        this.totalLike = 0;
    }
    
    // build the gallery with the medias
    builder(dataMedia) {
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedia.forEach(element => {
            if (id == element.photographerId) {
                let sectionPhotographeGallery = document.getElementById('photographe-gallery');
                let articlePhotographeGallery = document.createElement("article");
                let mediaHTML = mediaFactory.renderMedia(element);
                let galleryTemplate = `
                <a href='#' title=${element.title}> ${mediaHTML.outerHTML} </a>
                <div class="photographe-gallery-elt-text">
                    <h2 class="photographe-gallery-title">${element.title}</h2>
                    <div class='photographe-elt-like'>
                        <span class="photographe-gallery-like">
                            <a class="like-counter">${element.likes}</a>
                        </span>
                        <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                    </div>
                </div>
                `
                articlePhotographeGallery.innerHTML = galleryTemplate;
                sectionPhotographeGallery.appendChild(articlePhotographeGallery);
                articlePhotographeGallery.classList.add("photographe-gallery-elt");
                this.totalLike += parseInt(element.likes);
                currentMedia.push(mediaHTML.outerHTML);
                currentMediaName.push(element.title);
                let lightBox = new LightBox()
                lightBox.open(currentMedia, currentMediaName)
            }
        })
        return this;
    }
}
