class BaseSort {
  constructor(arr, name) {
    this.name = name
    this.arr = arr.slice();
    this.max = Math.max(...this.arr);
    this.sorted = false;
  }

  display(curr, target, x, y, w, h) {
    for (let i = 0; i < this.arr.length; i++) {
      let _x = map(i, 0, this.arr.length, 0, w);
      let _h = map(this.arr[i], 0, this.max, 0, h);
      if (i === curr) {
        fill('green')
      } else if (i === target) {
        fill('red')
      }
      else {
        fill(255);
      }
      rect(x + _x, y + h - _h, w / this.arr.length, _h);
    }
    fill('black');
    textAlign(CENTER);
    text(this.name, x + w / 2, 50)
  }

  sort() {
    throw new Error('You have to implement the method sort!');
  }
}