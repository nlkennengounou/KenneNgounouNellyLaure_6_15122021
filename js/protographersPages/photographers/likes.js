//************ class LikeSubscriber :  Aimer ou nom un media                            ************//
//************                      mettre à jour les compteurs de likes et icone       ************//
export default class LikeSubscriber {
	// Aimer ou retirer un like en cliquant sur l'icone like   
	constructor() {
		let media = document.getElementById("photographe-gallery");

		media.addEventListener("click", (e) => {
			let classListTarget = typeof e.target.classList === "undefined" ? [] : e.target.classList.value.split(" ");
			let hasClassBtn = -1 != classListTarget.indexOf("heart-btn");

			if (hasClassBtn) {
				let totalLikes = parseInt(document.getElementById("total-likes").innerHTML);
                
				let counterLike = e.target.parentNode.firstElementChild.firstElementChild;
                
				let likeValue = parseInt(counterLike.innerHTML);
				let isLiked = -1 != classListTarget.indexOf("isLiked");

				// mettre a jour le nombre total de likes du media du photographe 
				document.getElementById("total-likes").innerHTML = isLiked ? --totalLikes : ++totalLikes;
                
				// mettre a jour le nombre total de likes du media
				counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;
                
				// remplir ou non le bouton like
				if (isLiked) {
					e.target.classList.remove("isLiked");
					e.target.classList.replace("fas", "far");
				} else {
					e.target.classList.add("isLiked");
					e.target.classList.replace("far", "fas");
				}
			}
		});
	}
}
