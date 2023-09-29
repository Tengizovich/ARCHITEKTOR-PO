// Объявляем интерфейс IModelChanger
// В JavaScript интерфейсы не поддерживаются напрямую, но мы можем создать объект, который определяет методы интерфейса.

const IModelChanger = {
  NotifyChange: function() {
    // Реализация метода NotifyChange
    // Здесь вы можете добавить код, который будет выполняться при уведомлении о изменениях модели.
  }
};

// Пример использования интерфейса IModelChanger

// Создаем объект, который реализует интерфейс IModelChanger
const modelChanger = {
  NotifyChange: function() {
    console.log('Уведомление об изменении модели...');
    // Реализация уведомления об изменении модели
  }
};

// Вызываем метод NotifyChange через объект modelChanger
modelChanger.NotifyChange();
