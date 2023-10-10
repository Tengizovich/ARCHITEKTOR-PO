// Плохой пример без применения ISP
class Document {
  constructor() {
    this.content = '';
  }

  setContent(content) {
    this.content = content;
  }

  print() {
    // Печать документа
  }

  fax() {
    // Отправка документа по факсу
  }

  scan() {
    // Сканирование документа
  }
}

// Хороший пример с применением ISP
class Document {
  constructor() {
    this.content = '';
  }

  setContent(content) {
    this.content = content;
  }

  print() {
    // Печать документа
  }
}

class Fax {
  fax() {
    // Отправка документа по факсу
  }
}

class Scanner {
  scan() {
    // Сканирование документа
  }
}

// Класс, использующий только печать
class PrinterUser {
  constructor(printer) {
    this.printer = printer;
  }

  printDocument(document) {
    this.printer.print(document);
  }
}

// Класс, использующий только факс
class FaxUser {
  constructor(fax) {
    this.fax = fax;
  }

  sendFax(document) {
    this.fax.fax(document);
  }
}

// Класс, использующий только сканер
class ScannerUser {
  constructor(scanner) {
    this.scanner = scanner;
  }

  scanDocument() {
    return this.scanner.scan();
  }
}

// Использование классов
const document = new Document();
const printer = new Printer();
const fax = new Fax();
const scanner = new Scanner();

const printerUser = new PrinterUser(printer);
const faxUser = new FaxUser(fax);
const scannerUser = new ScannerUser(scanner);

printerUser.printDocument(document);
faxUser.sendFax(document);
scannerUser.scanDocument();
//В этом примере различные функциональности, такие как печать, факс и сканирование, выделены в отдельные классы. Класс Document содержит только методы, необходимые для работы с содержимым документа. Классы
//Printer, Fax, Scanner реализуют соответствующие интерфейсы. Затем классы PrinterUser, FaxUser и ScannerUser используют только необходимые интерфейсы. Таким образом, принцип ISP соблюдается путем разделения интерфейсов на более мелкие и специализированные, что делает код более модульным и позволяет легко добавлять или изменять функциональность без влияния на другие части системы
