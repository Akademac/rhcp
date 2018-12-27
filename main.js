

let btnR = document.querySelector('.glyphicon-arrow-right');
let btnL = document.querySelector('.glyphicon-arrow-left');

let images = document.querySelector('#albums');
let x = 0;



btnR.addEventListener('click', slider2);
btnL.addEventListener('click', slider);



function slider() {

	images.style.marginLeft = x + 'px';
	x-=300;

	if(x <= -2400) {
		x = -2270;
	}
}

function slider2() {
	images.style.marginLeft = x + 'px';
	x+=300;	

	if(x >= 1200) {
		x = 1100;
		}	
}