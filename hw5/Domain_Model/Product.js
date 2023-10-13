class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }

  getProductId() {
    return this.productId;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}
