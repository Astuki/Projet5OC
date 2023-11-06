const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector("img.arrow_left");
let arrowRight = document.querySelector("img.arrow_right");

let i = 1;

document.addEventListener('DOMContentLoaded', function() { /* So that 1st dot auto selected */
	const firstDot = document.querySelector('span.dot:nth-child(1)');
	firstDot.classList.add('dot_selected');
});

arrowLeft.addEventListener('click', function() {
	i--;
	console.log(i);
	if (i === 0) {
		i = 4;
		updateSelectedDot();
	} else {
		updateSelectedDot();
	}
});

arrowRight.addEventListener('click', function(){
	i++;
	console.log(i);
	if ( i === 5) {
		i = 1;
		updateSelectedDot();
	} else {
		updateSelectedDot();
	}
});

function updateSelectedDot() {
	const dots = document.querySelectorAll('span.dot');

	dots.forEach((dot, index) => {
		if (index + 1 === i) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	})
}
