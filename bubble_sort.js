class BubbleSort extends BaseSort {
	constructor(arr) {
	super(arr, 'Bubble Sort');
    this.index = 0;
    this.flag = false;
	}

	display(x, y, w, h) {
		super.display(this.index, this.index + 1, x, y, w, h);
	}

	sort() {
		if (this.sorted) {
			return;
		}

		if (this.index === this.arr.length - 1) {
			this.index = 0;
			if (!this.flag) {
				this.sorted = true;
			}
			this.flag = false;
		} else {
			if (this.arr[this.index] > this.arr[this.index + 1]) {
				let temp = this.arr[this.index];
				this.arr[this.index] = this.arr[this.index + 1];
				this.arr[this.index + 1] = temp;
				this.flag = true;
			}
			this.index++;
		}
	}
}