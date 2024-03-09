const offset = 20;
let sorts = [];

function setup() {
	const offset = 30;
	let arr = createArray(16);
	shuffle(arr, true)
	sorts.push(new BubbleSort(arr));
	sorts.push(new SelectionSort(arr));
	createCanvas(800 * sorts.length + offset * sorts.length, 800);
	textSize(36);
}

function draw() {
	background(120);

	for (let i = 0; i < sorts.length; i++) {
		let w = (width - offset) / sorts.length;
		sorts[i].display(i * (w + offset), 0, w, height);
		if (frameCount % 3 === 0) {
			sorts[i].sort();
		}
	}
}

function createArray(size) {
	let arr = [];
	for (let i = 1; i < size + 1; i++) {
		arr.push(i)
	}
	return arr;
}
