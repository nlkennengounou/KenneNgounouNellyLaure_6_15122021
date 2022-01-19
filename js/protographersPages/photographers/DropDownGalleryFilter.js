import GalleryFactory from '../Factory/galleryFactory.js';


export default class DropDownGalleryFilter {

    // Open/close the DropDownGalleryFilter
    dropDown(data) {
        let arrowOpen = document.getElementsByClassName('filter-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('filter-options');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }

    // filter media by title, popularity or date
    sortMedias(data) {
        let mediaArraySort = [];
        let media = data.media;
        let btnSort = document.querySelector('.filter-btn');
        let hiddenSort = document.getElementsByClassName('filter-options');
        let sortBtn = Array.from(document.getElementsByClassName('filter-option'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => { // SORT BY POPULARITY  
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btnSort.innerHTML = `Date`;

                mediaArraySort = media.sort((a, b) => { // SORT BY DATE 
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                mediaArraySort = media.sort((a, b) => { // SORT BY TITLE
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                })
            }
            this.displaySortMedia(mediaArraySort);
        }));
    }

    displaySortMedia(mediaArraySort) {
        // DISPLAY PHOTOGRAPHERS WORKS WITH SORT
        document.getElementById("photographe-gallery").innerHTML = "";
        new GalleryFactory().builder(mediaArraySort);
    }
}