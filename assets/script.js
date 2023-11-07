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
	}
]

let arrowLeft = document.querySelector("img.arrow_left");
let arrowRight = document.querySelector("img.arrow_right");
let changingImage = document.querySelector("img.banner-img");
let changingText = document.querySelectorAll(".text");

let containerDots = document.querySelector(".dots");

let i = 1;
let y = 0;

arrowLeft.addEventListener('click', function() { /* i-- qd arrowLeft click avec le retour si i = 0 */
	i--;
	if (i === 0) {
		i = 4;
	} 
	y = i - 1;
	updateSelectedDot();
	changeSlide();
});

arrowRight.addEventListener('click', function(){ /* i++ qd arrowLeft click avec le retour si i = 5 */
	i++;
	if ( i === 5) { 
		i = 1;
	}
	y = i - 1;
	updateSelectedDot();
	changeSlide();
});



function CreateDot() {
	for(let i = 0; i < 4; i++){
		const spanElement = document.createElement('span');
		spanElement.className = 'dot';

		containerDots.appendChild(spanElement);
	}
}
CreateDot();

function FirstDot() {
	document.addEventListener('DOMContentLoaded', function() { /* 1st dot load quand la page load */
	const firstDot = document.querySelector('span.dot:nth-child(1)');
	firstDot.classList.add('dot_selected');
});
}
FirstDot();


function updateSelectedDot() { /* function update le i en ++ ou -- avec les arrows attention ne fait pas l'effet infini */
	const dots = document.querySelectorAll('span.dot');

	dots.forEach((dot, index) => {
		if (index + 1 === i) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	})
}

function changeSlide() {
	changingImage.setAttribute('src', slides[y].image);
	changingText.forEach((textElement, index) => {
		textElement.innerHTML = slides[y].tagLine;
	});
}