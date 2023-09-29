class ModelStore {
  constructor() {
    this.Models = [];
    this.Scenes = [];
    this.Flashes = [];
    this.Cameras = [];
  }

  getScene(n_scene) {
    return this.Scenes[n_scene];
  }

  NotifyChange() {
    // Реализация метода NotifyChange
    // Добавьте свой код здесь для обработки уведомлений об изменениях
  }

  ApplyUpdateModel() {
    // Реализация метода ApplyUpdateModel
    // Добавьте свой код здесь для применения обновлений модели
  }
}
