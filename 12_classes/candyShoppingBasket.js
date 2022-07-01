class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.allItems = [];
  }

  addItem(item) {
    this.allItems = this.allItems.concat(item);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.allItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}

const candy = new Candy("Mars", 4.99);

// Check code is correct:

// candy.getName();
// // 'Mars'
// candy.getPrice();
// // 4.99
// const basket = new ShoppingBasket();
// basket.getTotalPrice();
// // 0

// basket.addItem(candy);

// basket.getTotalPrice();
// // 4.99

// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

// basket.getTotalPrice();
// // 12.97
