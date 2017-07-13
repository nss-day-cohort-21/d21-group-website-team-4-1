console.log("main.js");

let productCard = [];
productCard.push({
	title: "Cuba and Its People: A Photographic Exploration", 
	copy: "Experience the evolution of Cuba through its people on a cultural program that uses photography as a means of getting to know Cubans from all walks of life. Join a National Geographic photographer and two Cuban photographers for an intimate look at Havana and the surrounding countryside. Rise with the sun to capture the old city’s early morning rhythms, and photograph the people you engage with on visits to schools, dance studios, art cooperatives, and more. This trip is limited to 16 travelers.", 
	price: "Starting at $1000.00",
	img: "../images/cuba.jpg"
});

productCard.push({
	title: "Advanced Photography and Lighting Workshop: Saint Lucia", 
	copy: "Blanketed in lush jungles, edged by luminous sandy beaches, and crowned by the staggering twin peaks of its iconic Pitons, Saint Lucia is one of the Caribbean’s most picturesque islands. Capture this stunning tropical scenery—and the stories of a vibrant Caribbean culture—while fine-tuning your photography and lighting skills. This advanced workshop is led by National Geographic photographer Joe McNally and a professional instructor and is designed for advanced photographers. The workshop is limited to 16 participants.", 
	price: "Starting at $3500.00",
	img: "../images/aussie.jpg"
});


// productCard.push({
// 	title: "Searching for Peace Gives You Life", 
// 	copy: "Lorem ipsum dolor sit amet, amet leo et tristique at pellentesque nibh, tempor wisi placerat elit phasellus et, nibh integer habitant magna, adipiscing in, dis libero diam quis elementum. Quam rem velit. Velit elit ad pellentesque, mi parturient, potenti pariatur hendrerit omnis quis, rhoncus augue cras morbi mi, at posuere mattis justo ut montes. Id sapien venenatis, blandit diam leo adipiscing lacinia sit tellus, nibh eget amet quisque rhoncus parturient euismod. Est fusce, in neque mi a odio et, vitae neque. Aliquam fusce. Non dolor, ligula ligula morbi mauris integer luctus, sodales fusce dui at wisi nec, a magna erat malesuada a, cursus non nunc duis porttitor ut arcu. Blandit diam quisque arcu erat, et venenatis posuere sit sed ut faucibus. Sed mi sit nam gravida, id neque sit erat commodo, ac felis non. Risus pellentesque molestie tempor erat ut eros, semper velit in proin nunc, dolor at eget est ac et, elit gravida. Sit malesuada amet.", 
// 	date: "Author: Dr. T | Published: 7/11/17"
// 	img: "../images/cuba.jpg"
	
// });
//console.log("productCard", productCard);

// //for each object in here...I want to list each item of each line/array
productCard.forEach(function(item){
	document.getElementById("products").innerHTML += `<div class="card">
			<h2>${item.title}</h2>
			<img src="${item.img}">
			<p>${item.copy}</p>
			<p class="price">Investment in your happiness: <br>${item.price}</p>
			<button><a href="#">Learn More</a></button>
		</div>`;
	
});


	// <img src="${item.img}">