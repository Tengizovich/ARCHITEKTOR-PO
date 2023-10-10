// Плохой пример без применения DIP
class UserService {
  constructor() {
    this.database = new Database();
  }

  getUsers() {
    return this.database.query('SELECT * FROM users');
  }

  saveUser(user) {
    this.database.save(user);
  }
}

// Хороший пример с применением DIP
class UserService {
  constructor(database) {
    this.database = database;
  }

  getUsers() {
    return this.database.query('SELECT * FROM users');
  }

  saveUser(user) {
    this.database.save(user);
  }
}

class Database {
  query(sql) {
    // Запрос к базе данных
  }

  save(data) {
    // Сохранение данных в базу данных
  }
}

// Использование классов
const database = new Database();
const userService = new UserService(database);

const users = userService.getUsers();
userService.saveUser({ name: 'John Doe' });
//В этом примере класс UserService использует базу данных для выполнения операций с пользователями. В плохом примере UserService прямо зависит от конкретной реализации базы данных (Database), что делает его жестко привязанным к этой реализации и затрудняет замену базы данных в будущем.
//В хорошем примере UserService не зависит напрямую от конкретной реализации базы данных. Вместо этого, в конструкторе UserService внедряется абстракция базы данных (database). Теперь UserService может работать с любой реализацией базы данных, поддерживающей тот же интерфейс (например, MySQL, PostgreSQL, MongoDB и т.д.), без необходимости изменения самого UserService или нарушения его функциональности.
//Таким образом, принцип DIP соблюдается, и зависимость UserService от базы данных инвертирована, чтобы использовать абстракцию. Это делает код более гибким, расширяемым и легко поддерживаемым. 
