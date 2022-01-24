// Factory pour creer le profil de la page d'un photographe
// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
	const { id, name, city, country, tagline, price, portrait } = data;
    
	const picture = `media/profil/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement( "article" );

		const img = document.createElement( "img" );
		img.setAttribute("src", picture);
		img.setAttribute("alt", `Portrait de ${name}`);

		const h2 = document.createElement( "h2" );
		h2.className = "name";
		h2.textContent = name;

		const a = document.createElement( "a" );
		a.setAttribute("href" , `photographer.html?id=${id}` );
		a.setAttribute("title", `${name}`);
		a.appendChild(img);
		a.appendChild(h2);
		article.appendChild(a); //

		let location = `${city}, ${country}`;
		const p1 = document.createElement( "p" );
		p1.className = "location";
		p1.textContent = location;
		article.appendChild(p1); //city, contry

		const p2 = document.createElement( "p" );
		p2.className = "tagline";
		p2.textContent = tagline;
		article.appendChild(p2); //tagline

		let prix =`${price}€/jour` ;
		const p3 = document.createElement( "p" );
		p3.className = "price";
		p3.textContent = prix;
		article.appendChild(p3); //price

		return (article);
	}
	return { name, picture, getUserCardDOM };
} 