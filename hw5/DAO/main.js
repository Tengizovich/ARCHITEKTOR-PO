class UserDao {
  constructor() {
    this.users = [];
  }
  
  addUser(user) {
    this.users.push(user);
  }
  
  getUser(name) {
    return this.users.find(user => user.name === name);
  }
  
  updateUser(user) {
    // Логика обновления пользователя
  }
  
  deleteUser(user) {
    const index = this.users.findIndex(u => u === user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}

class Main {
  static main() {
    const userDao = new UserDao();
    
    const user1 = new User("Иван", 25);
    userDao.addUser(user1);
    
    const user2 = userDao.getUser("Николай");
    user2.setAge(30);
    userDao.updateUser(user2);
    
    userDao.deleteUser(user2);
  }
}

Main.main();
