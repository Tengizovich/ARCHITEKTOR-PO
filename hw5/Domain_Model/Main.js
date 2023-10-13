class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  getName() {
    return this.name;
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
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

class Order {
  constructor(id) {
    this.id = id;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getOrderId() {
    return this.id;
  }

  getProducts() {
    return this.products;
  }
}

// Create a customer
const customer = new Customer("1", "Иван Иванов");

// Create products
const product1 = new Product("1", "Телефон", 10000.0);
const product2 = new Product("2", "Ноутбук", 50000.0);

// Create an order and add products
const order = new Order("1");
order.addProduct(product1);
order.addProduct(product2);

// Add the order to the customer
customer.addOrder(order);

// Print customer information and orders
console.log("Клиент: " + customer.getName());
console.log("Заказы:");
customer.getOrders().forEach((customerOrder) => {
  console.log("Заказ №" + customerOrder.getOrderId());
  console.log("Товары:");
  customerOrder.getProducts().forEach((product) => {
    console.log("- " + product.getName() + " (" + product.getPrice() + " руб.)");
  });
  console.log();
});
