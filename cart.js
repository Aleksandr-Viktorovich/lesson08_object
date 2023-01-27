'use strict';
const cart = {
  items: [],
  totalPrice: 10,
  count: 0,
  getTotalPrice () {
    return this.totalPrice
  },
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
    this.totalPrice = this.items.reduce((acc, num) => acc + (num.price * num.number), 0);
  },
  clear () {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
  print () {
    this.items.forEach(item => console.log(item.name,  JSON.stringify(item)));
    console.log(cart.getTotalPrice());
  },
}



console.log(cart.add('Телевизор', 100, 50));
console.log(cart.add('Телефон', 60, 40));
console.log(cart.add('Приставка', 500, 1));
cart.print();



