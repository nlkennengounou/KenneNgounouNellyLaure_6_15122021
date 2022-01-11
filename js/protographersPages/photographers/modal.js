export default class Modal {
    // Events, launch/close the modal by clicking on the 'contact me' button
    modal(data) {
        let modalBtn = document.getElementById("photographe-contact");
        let closeBtn = document.getElementsByClassName('close-form-icon');

        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal);
            this.displayPhotographeName(data);
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }

    // Launch modal
    launchModal() {
        let modalbg = document.getElementById("form-dialog");
        modalbg.style.display = 'block';
    }

    // Close modal
    closeModal() {
        let modalbg = document.getElementById("form-dialog");
        modalbg.style.display = 'none';
    }

    // Display Photographer name in contact form
    displayPhotographeName(data) {
        let id = window.location.search.split('id=')[1];
        let photographers = !id ? data : data.filter(photographer => photographer.id == id);
        let phName = document.getElementById('photopraphe-form-name');
        let phNameTemplate = `${photographers[0].name}`
        console.log(photographers)
        phName.innerHTML = phNameTemplate;
    }
}
