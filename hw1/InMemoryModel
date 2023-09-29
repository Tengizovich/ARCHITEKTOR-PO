class Model {
  constructor() {
    // реализация базового класса Model
  }
}

class Texture {
  constructor() {
    // реализация класса Texture
  }
}

class Poligon {
  constructor() {
    // реализация класса Poligon
  }
}

class PoligonalModel extends Model {
  constructor() {
    super();
    this.texture = new Texture();
    this.poligon = new Poligon();
  }
}

class Flash {
  constructor() {
    // реализация класса Flash
  }
}

class Camera {
  constructor() {
    // реализация класса Camera
  }
}

class Scene {
  constructor() {
    this.modelStore = new ModelStore();
    this.camera = new Camera();
  }
}

class ModelStore {
  constructor() {
    this.models = [];
  }

  addModel(model) {
    this.models.push(model);
  }

  removeModel(model) {
    const index = this.models.indexOf(model);
    if (index !== -1) {
      this.models.splice(index, 1);
    }
  }
}
Обратите внимание, что классы PoligonalModel, Flash, Camera и Scene используют другие классы в своих конструкторах, чтобы создать необходимые свойства. Класс ModelStore представляет модельное хранилище моделей и предлагает методы для добавления и удаления моделей из хранилища.

