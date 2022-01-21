export default class LightBox {
    constructor() {
        this.currentIndex = 0;
    }

    // initialize the lightbox when clicking on a media, call the functions allowing to navigate in the lightbox
    open(currentMedia, currentMediaName) {
        let getMedias = Array.from(document.getElementsByClassName('photographe-media'));
        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
            let lightBoxMedia = document.getElementById('gallery-lightbox-media');
            let lightBoxName = document.getElementById('gallery-lightbox-name');
            let src = currentMedia[index];
            let nameSrc = currentMediaName[index];
            this.currentIndex = index;
            console.log(src, nameSrc);
            document.getElementById('gallery-lightbox').style.display = 'block';
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        }))
        this.previous(document.querySelector('.left-arrow-lightbox-icon'), currentMedia, currentMediaName);
        this.next(document.querySelector('.right-arrow-lightbox-icon'), currentMedia, currentMediaName);
        this.close();
        this.keyboard(currentMedia, currentMediaName);
        return this;
    }

    // return to previous media
    previous(elt, media, name) {
        elt.addEventListener('click', () => {
            this.currentIndex -= 1;
            let lightBoxMedia = document.getElementById('gallery-lightbox-media');
            let lightBoxName = document.getElementById('gallery-lightbox-name');

            if (this.currentIndex < 0) {
                this.currentIndex = media.length - 1;
                this.currentIndex = name.length - 1;
            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

    // turn to the next media
    next(elt, media, name) {
        elt.addEventListener('click', () => {
            this.currentIndex += 1;
            let lightBoxMedia = document.getElementById('gallery-lightbox-media');
            let lightBoxName = document.getElementById('gallery-lightbox-name');

            if (this.currentIndex > name.length - 1) {
                this.currentIndex = 0;
            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

    close() {
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
            let lightbox = document.getElementById('gallery-lightbox');

            lightbox.style.display = 'none';
        })
    }

    keyboard(currentMedia, currentMediaName) {
        document.addEventListener('keydown', (key) => {
            let lightBoxMedia = document.getElementById('gallery-lightbox-media');
            let lightBoxName = document.getElementById('gallery-lightbox-name');

            // ESCAPE TO CLOSE
            if (key.code == "Escape") {
                let lightBox = document.getElementById('gallery-lightbox');
                lightBox.style.display = 'none';
            }

            // ARROW RIGHT TO STEP RIGHT
            else if (key.code == "ArrowRight") {
                this.currentIndex += 1;

                if (this.currentIndex > currentMediaName.length - 1) {
                    this.currentIndex = 0;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }

            // ARROW LEFT TO STEP LEFT
            else if (key.code == "ArrowLeft") {
                this.currentIndex -= 1;

                if (this.currentIndex < 0) {
                    this.currentIndex = currentMedia.length - 1;
                    this.currentIndex = currentMediaName.length - 1;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
        });
    }
}
