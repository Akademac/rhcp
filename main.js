window.onload = function () {
// Active Members
	let request = new XMLHttpRequest();
	let text;
	let anthony = document.getElementById('singer');
	let text1;
	let flea = document.getElementById('bassist');
	let text2;
	let chad = document.getElementById('drummer');
	let text3;
	let josh = document.getElementById('gutarist');
	let data;
	request.open('GET', 'https://akademac.github.io/JSON/testJson.json');
		request.onload = function() {
			data = JSON.parse(request.responseText);
			console.log(data);
			text  =  `<p>
						<b>Anthony Kiedis</b> ${data[2].profil}
					  </p>`;
			text1 = `<p>
						<b>Michael Peter Balzary</b> ${data[3].profil}
					</p>`;
			text2 = `<p>
						<b>Chadwick Gaylord Smith</b> ${data[4].profil}
					</p>`
			text3 = `<p>
						<b>Josh Adam Klinghoffer</b> (born October 3, 1979) ${data[5].profil}
					</p>`
			anthony.innerHTML += text;
			flea.innerHTML += text1;
			chad.innerHTML += text2;
			josh.innerHTML += text3;
	};

	request.send();


//Former members

	let btn = document.querySelectorAll('.btn-outline-secondary');	
	let i;

	for(i=0; i<btn.length; i++) {
			btn[i].addEventListener('click', function() {

			let img = this.parentNode.previousElementSibling;

			img.style.display = 'none';


			let paragraph = document.createElement('P');

			paragraph.style.marginLeft = '5px';
			paragraph.style.marginTop = '-25px';


			let card = this.parentNode.previousElementSibling.parentNode;

			let data_id = this.getAttribute('data-id');
			
			this.style.display = 'none';

			let span = document.createElement('SPAN');


			class Profil {
				constructor(x, y) {
					this.x = x;
					this.y = y;
				}
				addText() {
					if(data_id === 'id' + this.y) {
						card.appendChild(paragraph);
						card.appendChild(span);
						span.innerHTML = 'x';
						span.style.fontWeight = 'bold';
						span.style.border = '1px solid black';
						span.style.textAlign = 'center';
						span.style.borderRadius = '2px';
						span.style.cursor = 'pointer';
						paragraph.style.height = '340px';
						paragraph.innerHTML += data[this.x].profil;
					}
				};
				removeText() {
					span.addEventListener('click', function() {
						this.style.display = 'none';
						img.style.display = 'block';
						paragraph.style.display = 'none';

					});
				}
			}
			let button1 = new Profil(6, 1);
			let button2 = new Profil(7, 2);
			let button3 = new Profil(8, 3);
			let button4 = new Profil(9, 4);
			let button5 = new Profil(10, 5);
			let button6 = new Profil(11, 6);
			let button7 = new Profil(12, 7);
			let button8 = new Profil(13, 8);
			let button9 = new Profil(14, 9);
			let button10 = new Profil(15, 10);

			button1.addText();
			button2.addText();
			button3.addText();
			button4.addText();
			button5.addText();
			button6.addText();
			button7.addText();
			button8.addText();
			button9.addText();
			button10.addText();

			button1.removeText();
			button2.removeText();
			button3.removeText();
			button4.removeText();
			button5.removeText();
			button6.removeText();
			button7.removeText();
			button8.removeText();
			button9.removeText();
			button10.removeText();


		})};



// Slider albums


let btnR = document.querySelector('.glyphicon-arrow-right');
let btnL = document.querySelector('.glyphicon-arrow-left');

let images = document.querySelector('#albums');
let x = 0;

btnR.addEventListener('click', slider2);
btnL.addEventListener('click', slider);



function slider() {

	x-=300;
	images.style.marginLeft = x + 'px';

	if(x <= -2400) {
		x = -2270;
	}
}

function slider2() {
	x+=300;	
	images.style.marginLeft = x + 'px';


	if(x >= 1200) {
		x = 1100;
		}	
}
}
