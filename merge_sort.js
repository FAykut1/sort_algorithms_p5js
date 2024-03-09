class MergeSort extends BaseSort {
	constructor(arr) {
		super(arr, 'Merge Sort');
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
		
		throw new Error('You have to implement the method sort!');
	}
}