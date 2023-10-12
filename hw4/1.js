// Класс Автобус
class Autobus {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  addPassenger(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return true;
    } else {
      return false;
    }
  }
}

// Класс Пассажир
class Passenger {
  constructor(name) {
    this.name = name;
  }
}

// Создание объектов и использование методов
const bus = new Autobus(50);
const passenger1 = new Passenger("John");
const passenger2 = new Passenger("Alice");

bus.addPassenger(passenger1);
bus.addPassenger(passenger2);

console.log(bus.passengers);
//class Ticket {
  constructor(passenger, bus, seatNumber) {
    this.passenger = passenger;
    this.bus = bus;
    this.seatNumber = seatNumber;
  }
}

// Класс UserProvider для покупки билета
class UserProvider {
  static buyTicket(passenger, bus) {
    const seatNumber = UserRepo.findAvailableSeat(bus);
    if (seatNumber !== null) {
      const ticket = new Ticket(passenger, bus, seatNumber);
      UserRepo.addPassenger(passenger);
      return ticket;
    } else {
      return null;
    }
  }
}

// Класс UserRepo для хранения пассажиров
class UserRepo {
  static passengers = [];

  static findAvailableSeat(bus) {
    // Логика поиска свободного места в автобусе
    // Вернуть номер свободного места или null, если все места заняты
    // В этом примере, мы предполагаем, что места нумеруются от 1 до capacity
    for (let seatNumber = 1; seatNumber <= bus.capacity; seatNumber++) {
      if (!UserRepo.passengers.find(passenger => passenger.seatNumber === seatNumber)) {
        return seatNumber;
      }
    }
    return null;
  }

  static addPassenger(passenger) {
  	UserRepo.passengers.push(passenger);
  }
}

// Создание объектов и использование методов
const bus = new Autobus(50);
const passenger1 = new Passenger("John");
const passenger2 = new Passenger("Alice");

const ticket1 = UserProvider.buyTicket(passenger1, bus);
const ticket2 = UserProvider.buyTicket(passenger2, bus);

console.log(ticket1);
console.log(ticket2);
console.log(UserRepo.passengers);
