const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let video;
let asciiDiv;

function setup() {
	noCanvas();
	video = createCapture(VIDEO);
	video.size(130, 80);
	asciiDiv = createDiv();
}

function draw() {
	video.loadPixels();

	let asciiImage = '';
	for (let i = 0; i < video.height; i++) {
		for (let j = 0; j < video.width; j++) {
			const pixelIndex = (i * video.width + j) * 4;

			const r = video.pixels[pixelIndex + 0];
			const g = video.pixels[pixelIndex + 1];
			const b = video.pixels[pixelIndex + 2];

			const avg = (r + g + b) / 3;

			const len = density.length;
			const charIndex = floor(map(avg, 0, 255, len, 0));
			const c = density.charAt(charIndex);

			if (c == '' || c == ' ') {
				asciiImage += '&nbsp;';
			}
			else {
				asciiImage += c;
			}
		}
		asciiImage += '<br/>';
	}
	asciiDiv.html(asciiImage);
}