class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.products = [];
  }

  getOrderId() {
    return this.orderId;
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }
}
