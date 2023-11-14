const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
	/*{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	}*/ /* Pour la soutenance */
]

let arrowLeft = document.querySelector("img.arrow_left");
let arrowRight = document.querySelector("img.arrow_right");
let changingImage = document.querySelector("img.banner-img");
let changingText = document.querySelectorAll(".text");

let containerDots = document.querySelector(".dots");

let i = 1;

arrowLeft.addEventListener('click', function() { 
	i--;
	if (i === 0) { 
		i = slides.length; 
	}  
	DotGenerator();
	changeSlide();
});

arrowRight.addEventListener('click', function(){ 
	i++;
	if ( i > slides.length) {  
		i = 1; 
	}
	DotGenerator();
	changeSlide();
});



function CreateDot() {
	for(let j = 0; j < slides.length; j++){
		const spanElement = document.createElement('span');
		spanElement.className = 'dot';

		containerDots.appendChild(spanElement);
	}
}
CreateDot();

function DotGenerator() {
	const dots = document.querySelectorAll("span.dot");

	dots.forEach((dot, index) => {
		if(index + 1 === i){
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

function changeSlide() {
	const y = i - 1;
	changingImage.setAttribute('src', slides[y].image);
	changingText.forEach((textElement, index) => {
		textElement.innerHTML = slides[y].tagLine; /* Remplacer y avec i */
	});
}

document.addEventListener('DOMContentLoaded', function(){
	DotGenerator();
});


