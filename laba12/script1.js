let obj1 = {
    name:"lesha",
    age: 19,
    car:"Silvia",
    country: "Belarus",
    education: "BSUIR",
};
for( key in obj1){
console.log(key);
}

let obj2 = {
    name:"Platon",
    age: 21,
    car:"ZIL",
    country: "Belarus",
    education: "BSUIR",
};
for( key in obj2){
    console.log(key);
    }

    let hotel = {
        name : localStorage,
        adres:"sreet",
        zvezdiy: 5,
        etazhi:"40",
        bassein: "est'",
      
    }
    ShowAll = function(){
let message = 'Привет!';
console.log(message);
console.log(`${hotel.name},ул. ${hotel.adres}, ${hotel.zvezdiy} звёзд, ${hotel.etazhi} этажей, ,бассейн: ${hotel.bassein}`);
    }

ShowAll();


document.write(obj2.name+" ");
document.write(obj2.age+" ");
document.write(obj2.car+" ");
document.write(obj2.country+" ");
document.write(obj2.education+"<br>");

let Cafe = {
    name: '',
    address: '',
    price: '',
    tables: 0,
  
    // Геттеры
    getName() {
      return this.name;
    },
  
    getAddress() {
      return this.address;
    },
  
    getPrice() {
      return this.price;
    },
  
    getTables() {
      return this.tables;
    },
  
    // Сеттеры
    setName(newName) {
      this.name = newName;
    },
  
    setAddress(newAddress) {
      this.address = newAddress;
    },
  
    setPrice(newPrice) {
      this.price = newPrice;
    },
  
    setTables(newTables) {
      this.tables = newTables;
    }
  };
  // Установка значения свойств объекта Кафе с помощью сеттеров
  Cafe.setName('Барбадос');
  Cafe.setAddress('Улица Пушкина, дом Колотушкина');
  Cafe.setPrice('$$');
  Cafe.setTables(15);
  
  // Вывод информации об объекте на веб-страницу
  document.write('Название кафе: ' + Cafe.getName() + '<br>');
  document.write('Адрес: ' + Cafe.getAddress() + '<br>');
  document.write('Ценовая категория: ' + Cafe.getPrice() + '<br>');
  document.write('Количество столиков: ' + Cafe.getTables() + '<br>');

  let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
  
  let duplicatePerson = { ...person };

  console.log(person);
  console.log(duplicatePerson);