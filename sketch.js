let previousMinute = 0;
function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	previousMinute = minute();
}


function draw() {
	background(255, 255, 230);

	// Hours
	let h = hour();
	let m2 = map(h, 0, 23, 183, 55);
	let translate1 = map(h, 0, 23, 0, 450);
	noStroke();
	fill(m2, 255, 255);
	square(563, translate1, 150, 5);
	
	// Minutes
	let min = minute();
	if (min != previousMinute) {
		console.log(min);
		previousMinute = min;
	}
	let m3 = map(min, 0, 59, 237, 206);
	let m4 = map(min, 0, 59, 175, 41);
	let translate2 = map(min, 0, 59, 0, 450);
	noStroke();
	fill(m3, m4, 255);
	square(325, translate2, 150, 5);
	
	// Seconds
	let s = second();
	let m5 = map(s, 0, 59, 207, 62);
	let m6 = map(s, 0, 59, 198, 23);
	let translate3 = map(s, 0, 59, 0, 450);
	noStroke();
	fill(m5, m6, 255);
	square(87, translate3, 150, 5);
}
