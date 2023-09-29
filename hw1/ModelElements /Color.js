class Color {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  getRGB() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  getHex() {
    const redHex = toHex(this.red);
    const greenHex = toHex(this.green);
    const blueHex = toHex(this.blue);
    return `#${redHex}${greenHex}${blueHex}`;
  }
}

// Вспомогательная функция для преобразования числа в шестнадцатеричное значение
function toHex(value) {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
