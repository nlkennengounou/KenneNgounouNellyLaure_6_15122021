// class MediaFactory: trouver le type de media et le creer************ //
import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./VideoFactory.js";

export default class MediaFactory {

	// check if element is an image or a videa
	renderMedia(element) {
		let media = null;
		// eslint-disable-next-line no-prototype-builtins
		if (element.hasOwnProperty("image")) {
			media = new ImageFactory();
		// eslint-disable-next-line no-prototype-builtins
		} else if (element.hasOwnProperty("video")) {
			media = new VideoFactory();
		}
		return media.createHTML(element);
	}
}