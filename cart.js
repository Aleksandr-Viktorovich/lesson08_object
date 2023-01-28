'use strict';
const cart = {
  items: [],
  get totalPrice () {
    return this.calculateItemPrice();
  },
  set totalPrice (i) {
    this.totalPrice = i;
  },
  count: 0,
  // totalPrice: 0,

  add (name, price, number = 1) {
    const product = {name, price, number};
    this.items.push(product);

    this.increaseCount(number);
    this.calculateItemPrice();
    return this.items
  },
  increaseCount (total) {
    this.count += total;
    return this.count;
  },
  calculateItemPrice () {
    return this.i = this.items.reduce((acc, num) => acc + (num.price * num.number), 0);
  },
  clear () {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
  print () {
    this.items.forEach(item => console.log(item.name,  JSON.stringify(item)));
    // console.log(cart.getTotalPrice());
  },
}


console.log(cart)
console.log(cart.add('Телевизор', 200, 50));
console.log(cart.add('Телефон', 160, 40));
console.log(cart.add('Приставка', 500, 1));




