// class VideoFactory: Creer un media de type Video************ //

export default class VideoFactory {
	// Create a video element
	createHTML(element) {
		let video = document.createElement("video");
		video.setAttribute("controls", "controls");

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

		url_media =`./media/photographers/${name.split(" ")[0]}/${element.video}`;

		video.setAttribute("src", url_media);
		video.setAttribute("role", "button");
		//video.setAttribute("poster", `./media/photographers/${name.split(" ")[0]}/poster.jpg`);
		video.className = "photographe-media";

		return video;
	}

}
