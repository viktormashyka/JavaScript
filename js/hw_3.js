// 1. Example
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// 2. Example
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// 3. Example
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;
// console.log(aptPrice);
// const aptTags = apartment.tags;
// console.log(aptTags);
// // Change code above this line

// 4. Example
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);
// // Change code above this line

// 5. Example
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// console.log(aptRating);
// const aptDescr = apartment['descr'];
// console.log(aptDescr);
// const aptPrice = apartment['price'];
// console.log(aptPrice);
// const aptTags = apartment['tags'];
// console.log(aptTags);
// // Change code above this line

// 6. Example
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// console.log(apartment);
// // Change code below this line

// 7. Example
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;

// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.log(apartment);
// // Change code below this line

// 8. Example
//
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(product);

// 9. Example
//
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

// 10. Example
//
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// let keys = [];
// let values = [];
// // Change code below this line

// // Варіант 1
// // keys = Object.keys(apartment);
// // console.log(keys);

// // values = Object.values(apartment);
// // console.log(values);

// // Варіант 2
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// 11. Example

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line

//   console.log(keys);
//   console.log(values);
// }

// 12. Example

// Напиши функцію countProps(object), яка рахує і повертає кількість
// власних властивостей об'єкта в параметрі object.
// Використовуй змінну propCount для зберігання кількості властивостей
// об'єкта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

// Варіант 1)
//   propCount = Object.keys(object).length;
//   console.log(propCount);

// Варіант 2)
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   // Change code above this line
//   return propCount;
// }

// countProps({}); // 0
// countProps({ name: 'Mango', age: 2 }); // 2
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3

// 13. Example
//
// Перебери об'єкт apartment, використовуючи метод Object.keys()
// і цикл for...of.Запиши у змінну keys масив ключів власних властивостей
// об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   //   console.log(apartment[key]);
//   values.push(apartment[key]);
// }
// console.log(values);

// 14. Example
// Виконай рефакторинг функції countProps(object), використовуючи
// метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   console.log(keys);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }

// countProps({}); // 0
// countProps({ name: 'Mango', age: 2 }); // 2
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3

// 15. Example
// Запиши у змінну keys масив ключів власних властивостей об'єкта
// apartment, а у змінну values - масив всіх значень його властивостей.
// Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// 16. Example
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// де ім'я властивості - це ім'я співробітника, а значення властивості -
//   це зарплата.Функція повинна розрахувати загальну суму зарплат
//   співробітників і повернути її.Використовуй змінну totalSalary для
//   зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const employeeSalaries = Object.values(salaries);
//   console.log(employeeSalaries);

//   for (const salary of employeeSalaries) {
//     totalSalary += salary;
//   }
//   console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({}); // 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // 400

// 17. Example
// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex, а в масив rgbColors -
//   значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
// }

// for (const color of colors) {
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// 18. Example
// Напиши функцію getProductPrice(productName), яка приймає один параметр
// productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям
//   (властивість name) в масиві products і повертає його ціну
//   (властивість price).Якщо продукт з такою назвою не знайдений,
//     функція повинна повертати null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let price = null;
//   for (const product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//       price = product.price;
//       break;
//     }
//   }
//   console.log(price);
//   return price;

//   // Change code above this line
// }

// getProductPrice('Radar'); // 1300.
// getProductPrice('Grip'); // 1200.
// getProductPrice('Scanner'); // 2700.
// getProductPrice('Droid'); // 400.
// getProductPrice('Engine'); // null.

// 19. Example
// Напиши функцію getAllPropValues(propName), яка приймає один
// параметр propName - ім'я (ключ) властивості. Функція повинна
// повернути масив всіх значень властивості з таким ім'ям з кожного
// об'єкта в масиві products.Якщо в об'єктах відсутні властивості
// з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const values = [];

//   for (const product of products) {
//     // console.log(product);

//     const key = Object.keys(product);
//     // console.log(key);
//     // console.log(propName);

//     const value = product[propName];

//     // console.log(value);
//     if (key.includes(propName)) values.push(value);
//   }
//   console.log(values);
//   return values;
//   // Change code above this line
// }

// getAllPropValues('name'); // ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues('quantity'); // [4, 3, 7, 9]
// getAllPropValues('price'); // [1300, 2700, 400, 1200]
// getAllPropValues('category'); // []

// 20. Example
// Напиши функцію calculateTotalPrice(productName), яка приймає один
// параметр productName - назва товару.Функція повинна повернути загальну
// вартість(ціна * кількість) товару з таким ім'ям з масиву products

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }
//   console.log(totalPrice);
//   return totalPrice;
//   // Change code above this line
// }

// calculateTotalPrice('Blaster'); // 0
// calculateTotalPrice('Radar'); // 5200
// calculateTotalPrice('Droid'); // 2800
// calculateTotalPrice('Grip'); // 10800
// calculateTotalPrice('Scanner'); // 8100

// 21. Example

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22. Example

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23. Example

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Exampel 24.
// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася
// деструктуризація об'єкта.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25. Exampel
// Ми отримали прогноз погоди на два дні, з мінімальними і
// максимальними температурами, а також необов'язковими іконками.
// Заміни оголошення всіх змінних однією операцією деструктуризації
// властивостей об'єкта forecast.Задай значення за замовчуванням для
// іконок, змінних todayIcon і tomorrowIcon - рядок
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const  {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// 26. Example
//
// Функція calculateMeanTemperature(forecast) приймає один параметр
// forecast - об'єкт температур на два дні наступного формату.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh
// однією операцією деструктуризації властивостей об'єкта forecast.

// Change code below this line

// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//       low: todayLow,
//       high: todayHigh
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh,
//     }
//   } = forecast;

// // function calculateMeanTemperature(forecast) {
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27. Example
// У змінній scores зберігається масив результатів тестування.
// Використовуючи розподіл і методи Math.max() і Math.min(),
//     доповни код таким чином, щоб у змінній bestScore був найвищий
// бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// 28. Example
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// 29. Example
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти
// налаштування за замовчуванням і поверх них застосувати перевизначені
// налаштування.Доповни код таким чином, щоб у змінній finalSettings
// утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// 30. Example
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи
// напряму параметр data.У новому об'єкті повинна бути властивість completed,
//  значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві,
//     category і priority, можуть бути відсутніми.Тоді, в новому об'єкті
// завдання, у властивостях category і priority повинні бути значення за
// замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//   const text = undefined;

//   const finalSetting = { completed, category, priority, text, ...data };
//   console.log(finalSetting);
//   return finalSetting;

//   // Change code above this line
// }

// makeTask({}); // { category: "General", priority: "Normal", completed: false }
// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }); // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: 'Finance', text: 'Take interest' }); // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: 'Low', text: 'Choose shampoo' }); // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: 'Buy bread' }); // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// 31. Example
// Використовуючи операцію rest, доповни код функції add() таким
// чином, щоб вона приймала будь - яку кількість аргументів, рахувала
// і повертала їх суму.

// Change code below this line
// function add(...args) {
//   let totalSum = 0;

// Варіант 1)
//   for (let i = 0; i < args.length; i += 1) {
//     // console.log(args[i]);
//     totalSum += args[i];
//   }

// Варіант 2)
//   for (const arg of args) {
// totalSum += arg;}

//   console.log(totalSum);
//   return totalSum;

//   // Change code above this line
// }

// add(15, 27); // 42
// add(12, 4, 11, 48); // 75
// add(32, 6, 13, 19, 8); // 78
// add(74, 11, 62, 46, 12, 36); // 241

// 32. Example
// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри
// і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки
// тих аргументів, які більші за задане число.Це число повинно бути першим
// параметром функції.

// Change code below this line
// function addOverNum(firstNumber, ...otherArgs) {
//   let total = 0;

//   for (let i = 0; i < otherArgs.length; i += 1) {
//     console.log(otherArgs[i]);
//     if (otherArgs[i] <= firstNumber) continue;
//     total += otherArgs[i];
//   }

//   console.log(`total: ${total}`);
//   return total;
//   // Change code above this line
// }

// addOverNum(50, 15, 27); // 0
// addOverNum(10, 12, 4, 11, 48, 10, 8); // 71
// addOverNum(15, 32, 6, 13, 19, 8); // 51
// addOverNum(20, 74, 11, 62, 46, 12, 36); // 218

// 33. Example
// Функція findMatches() приймає довільну кількість аргументів.
// Першим аргументом завжди буде масив чисел, а решта аргументів будуть
// просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив
// matches, в якому будуть тільки ті аргументи, починаючи з другого,
//     які є в масиві першого аргументу.

//     Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна
// повернути масив[1, 2], тому що тільки вони є в масиві першого аргументу.

// Change code below this line
// function findMatches(array, ...numbers) {
//   const matches = []; // Don't change this line

//   let newArray = [...array, ...numbers];
//   //   let twiceNumber = 0;

//   console.log(array);
//   console.log(numbers);

//   console.log(newArray);

//   for (let i = 0; i < newArray.length; i += 1) {
//     if (numbers.includes(array[i])) {
//       matches.push(array[i]);
//     }
//   }
//   console.log(`matches: ${matches}`);

//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); // [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16); // []

// 34. Example
// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати
// просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає
// рядок "Deleting book <назва книги>", де < назва книги > -
//     це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// Повертає рядок "Updating book <стара назва> to <нова назва>",
//     де < стара назва > і < нова назва > - це значення параметрів
//     oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

//   // Change code above this line
// };

// bookShelf.getBooks(); // "Returning all books"
// bookShelf.addBook('Haze'); // "Adding book Haze"
// bookShelf.removeBook('Red sunset'); // "Deleting book Red sunset"
// bookShelf.updateBook('Sands of dune', 'Dune'); // "Updating book Sands of dune to Dune"

// 35. Example
// Доповни метод updateBook(oldName, newName) таким чином, щоб він
// змінював назву книги з oldName на newName у властивості books.
// Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
//     і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(`Old array: ${this.books}`);
//     for (let book of this.books) {
//       //   console.log(book);
//       if (book === oldName) {
//         const indexOfOldBook = this.books.indexOf(oldName);
//         this.books.splice(indexOfOldBook, 1, newName);
//       }
//     }
//     console.log(`New array: ${this.books}`);
//     return this.books;

//     // Change code above this line
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles'); // значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// bookShelf.updateBook('The last kingdom', 'Dune'); // значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// 36. Example
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила
// програму для ведення інвентарю - додавання, видалення, пошуку та
// оновлення зілля.Додай об'єкту atTheOldToad властивість potions,
// значенням якої зроби порожній масив.

// const atTheOldToad = {
//   // Change code below this line

//   potions: [],

//   // Change code above this line
// };

// 37 Example
// Додай об'єкту atTheOldToad метод getPotions(), який просто
// повертає значення властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// atTheOldToad.getPotions(); // ["Speed potion", "Dragon breath", "Stone skin"]

// 38. Example
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля
// potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//       this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion('Invisibility'); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion('Power potion'); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// 39. Example
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв
// зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     console.log(this.potions);
//     for (let book of this.potions) {
//       if (book === potionName) {
//         const indexOfBook = this.potions.indexOf(potionName);
//         this.potions.splice(indexOfBook, 1);
//       }
//     }
//     console.log(this.potions);
//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion('Dragon breath'); // ["Speed potion", Stone skin"]
// atTheOldToad.removePotion('Speed potion'); // ["Stone skin"]

// 40. Example
// Доповни метод updatePotionName(oldName, newName) таким чином,
// щоб він оновлював назву зілля з oldName на newName в масиві зілля
// у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     console.log(this.potions);
//     for (let book of this.potions) {
//       if (book === oldName) {
//         const indexOfBook = this.potions.indexOf(oldName);
//         this.potions.splice(indexOfBook, 1, newName);
//       }
//     }
//     console.log(this.potions);
//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'); // ["Speed potion", "Polymorth", "Stone skin"]
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility'); // ["Speed potion", "Polymorth", "Invisibility"]

// 41. Example
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином,
// щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля.Повертає значення
// властивості potions.
//     addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив
// у властивості potions, але тільки, якщо такого зілля ще немає
// в інвентарі.В іншому випадку повертається рядок.
//         removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName
// з масиву у властивості potions.
//         updatePotionName(oldName, newName) - оновлює властивість name
// об'єкта-зілля з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },

//   // Change code above this line
// };

// atTheOldToad.getPotions(); // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }); //
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 }); //
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); // масив potions не змінюється
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); // массив potions не змінюється
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); // повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); // повертає рядок "Error! Potion Stone skin is already in your inventory!"

// atTheOldToad.removePotion('Dragon breath'); // [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion('Speed potion'); // [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'); // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'); // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
