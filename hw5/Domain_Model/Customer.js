// Класс "Клиент"
class Customer {
  constructor(customerId, name) {
    this.customerId = customerId;
    this.name = name;
    this.orders = [];
  }

  getCustomerId() {
    return this.customerId;
  }

  getName() {
    return this.name;
  }

  getOrders() {
    return this.orders;
  }

  addOrder(order) {
    this.orders.push(order);
  }
}
