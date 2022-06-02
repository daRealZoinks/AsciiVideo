// const density = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. "
// const density = "|!;:. ";
// const density = '█▓▒░:. ';
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

// const density0 = " ";
// const density1 = "⠁⠈⠂⠐⠄⠠";
// const density2 = "⠉⠒⠤⠃⠘⠡⠌⠑⠊⠅⠨⠆⠰⠢⠔";
// const density3 = "⠇⠸⠋⠙⠖⠲⠎⠱⠍⠩⠓⠚⠦⠴⠥⠬⠣⠜⠪⠕";
// const density4 = "⠛⠶⠏⠹⠧⠼⠗⠺⠞⠳⠫⠝⠮⠵⠭";
// const density5 = "⠟⠻⠾⠷⠯⠽";
// const density6 = "⠿";

// const density = density6 + density5 + density4 + density3 + density2 + density1 + density0;

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

			// const avg = (r + g + b) / 3;
			// const avg = r * 0.3 + g * 0.59 + b * 0.11;
			const avg = max(r, g, b);
			// const avg = min(r, g, b);
			// const avg = (max(r, g, b) + min(r, g, b)) / 2;

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