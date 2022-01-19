import ImageFactory from './ImageFactory.js';
import VideoFactory from './VideoFactory.js';


export default class MediaFactory {

    // check if element is an image or a videa
    renderMedia(element) {
        let media = null;
        if (element.hasOwnProperty('image')) {
            media = new ImageFactory();
        } else if (element.hasOwnProperty('video')) {
            media = new VideoFactory();
        }
        return media.createHTML(element);
    }
}