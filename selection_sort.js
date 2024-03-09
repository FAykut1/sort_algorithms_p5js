class SelectionSort extends BaseSort {
	constructor(arr) {
		super(arr, 'Selection Sort');
		this.index = 0;
		this.target = 0;
		this.min = 0;
	}

	display(x, y, w, h) {
		super.display(this.index, this.target, x, y , w, h);
	}

	sort() {
		if (this.sorted) {
			return;
		}

		if (this.arr[this.target] < this.arr[this.min]) {
			this.min = this.target;
		}

		if (this.target === this.arr.length - 1) {
			let temp = this.arr[this.index];
			this.arr[this.index] = this.arr[this.min];
			this.arr[this.min] = temp;
			this.index++;
			this.min = this.index;
			this.target = this.index;
		}

		this.target++;

		if (this.index === this.arr.length - 1) {
			this.sorted = true;
		}
	}
}