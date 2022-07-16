// ***** CALLBACK ******************************************

// 1. Example
// Доповни код таким чином, щоб у змінній result був результат
// виконання функції makePizza, а у змінній pointer було посилання на
// функцію makePizza.

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// 2. Example
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим
// параметром(параметр callback) колбек - функцію і повертала її виклик.
// Функція deliverPizza або makePizza буде передаватися як колбек і
// очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return console.log(`Delivering ${pizzaName} pizza.`);
//   //   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   //   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage('Royal Grand', makePizza); // "Pizza Royal Grand is being prepared, please wait..."
// makeMessage('Ultracheese', deliverPizza); // "Delivering Ultracheese pizza."

// 3. Example
// Доповни другий виклик функції makePizza(pizzaName, callback),
// передавши другим аргументом інлайн колбек - функцію eatPizza(pizzaName),
//     яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// 4. Example
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onError,
//     передаючи йому аргументом рядок "There is no pizza with a name
//         < имя пиццы > in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onSuccess,
//         передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів.
// Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// ***** СТРІЛОЧНІ ФУНКЦІЇ ******************************************

// 5. Example
// Функція calculateTotalPrice(orderedItems) приймає один параметр
// orderedItems - масив чисел, і розраховує загальну суму його елементів,
// яка зберігається у змінній totalPrice і повертається як результат
// роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for,
// вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function calculateTotalPrice(number, index) {
//     totalPrice += orderedItems[index];
//     return totalPrice;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]); // 138
// calculateTotalPrice([164, 48, 291]); // 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // 1116
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 6. Example
// Функція filterArray(numbers, value) приймає масив чисел numbers
// і повертає новий масив, в якому будуть тільки ті елементи оригінального
// масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона
// використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// numbers.forEach(function filterArray(number, index) {
//   if (numbers[index] > value) {
//     filteredNumbers.push(numbers[index]);
//   }
// });

//   // Change code above this line
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // [5]
// filterArray([1, 2, 3, 4, 5], 5); // []
// filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]

// 7. Example
// Функція filterArray(numbers, value) приймає масив чисел numbers
// і повертає новий масив, в якому будуть тільки ті елементи оригінального
// масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона
// використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function getCommonElements(number, index) {
//     if (secondArray.includes(firstArray[index])) {
//       commonElements.push(firstArray[index]);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]) // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // []
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 8. Example
// Виконай рефакторинг функції calculateTotalPrice() таким чином,
// щоб вона була оголошена як стрілочна.

// Change code below this line

// // function calculateTotalPrice(quantity, pricePerItem)
// const calculateTotalPrice = (quantity, pricePerItem) =>
// {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// calculateTotalPrice(5, 100); // 500
// calculateTotalPrice(8, 60); // 480
// calculateTotalPrice(3, 400); // 1200
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 9. Example
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона
// використовувала неявне повернення.

// // Change code below this line
// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   return quantity * pricePerItem;
// // };
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Change code above this line

// calculateTotalPrice(5, 100); // 500
// calculateTotalPrice(8, 60); // 480
// calculateTotalPrice(3, 400); // 1200
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ***** МЕТОД FOREACH()******************************************

// 10. Example
// Виконай рефакторинг функції calculateTotalPrice(orderedItems),
// замінивши її оголошення на стрілочну функцію.Заміни колбек - функцію,
//   передану в метод forEach(), на стрілочну функцію.

// // Change code below this line
// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);

//   return totalPrice;
// }

// // Change code above this line

// calculateTotalPrice([12, 85, 37, 4]); // 138
// calculateTotalPrice([164, 48, 291]); // 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // 1116
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 11. Example
// Заміни оголошення функції filterArray() і колбек для методу forEach()
// на стрілочні функції.

// // Change code below this line
// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

//   const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // [5]
// filterArray([1, 2, 3, 4, 5], 5); // []
// filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 12. Example
// Заміни оголошення функції getCommonElements() і колбек для методу
// forEach() на стрілочні функції.

// // Change code below this line
// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];

// //   firstArray.forEach(function (element) {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]); // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); // []
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 13. Example
// Функція changeEven(numbers, value) приймає масив чисел numbers і
// оновлює кожен елемент, значення якого - це парне число, додаючи до
// нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою -
//   не змінювала масив чисел numbers, а створювала, наповнювала і повертала
//   новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
// Change code below this line
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     numbers[i] = numbers[i] + value;
//   }
// }

//   const newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       element = element + value;
//       // newArray.push(element + value);
//     }
//     newArray.push(element);
//   });
//   console.log(numbers);
//   console.log(newArray);
//   return newArray;

//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10); // [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10); // [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100); // [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100); // [144, 13, 81, 192, 136, 154]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ***** МЕТОД MAP()******************************************

// 14. Example
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив
// довжин назв планет.Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(element => element.length);

// 15. Example
// Використовуючи метод map(), зроби так, щоб у змінній titles
// вийшов масив назв книг(властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(element => element.title);

// ***** МЕТОД FLATMAP()******************************************

// 16. Example
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres
// вийшов масив усіх жанрів книг(властивість genres) з масиву книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(element => element.genres);

// 17. Example
// Доповни функцію getUserNames(users) таким чином, щоб вона
// повертала масив імен користувачів(властивість name) з масиву
// об'єктів в параметрі users.

// // Change code below this line
// const getUserNames = users => users.map(element => element.name);
//   // Change code above this line

// 18. Example
// Доповни функцію getUserEmails(users) таким чином, щоб вона
// повертала масив поштових адрес користувачів(властивість email)
// з масиву об'єктів в параметрі users.

// // Change code below this line
// const getUserEmails = users => users.map(element => element.email);
//   // Change code above this line

// ***** МЕТОД FILTER()******************************************

// 19. Example
// Доповни код таким чином, щоб у змінній evenNumbers утворився
// масив парних чисел з масиву numbers, а в змінній oddNumbers -
//     масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(element => element % 2 === 0);
// const oddNumbers = numbers.filter(element => element % 2 !== 0);

// 20. Example
// Доповни код таким чином, щоб у змінній allGenres був масив
// всіх жанрів книг(властивість genres) з масиву books, а у змінній
//   uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(element => element.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

// 21. Example
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість
//   rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з
// ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// 22. Example
// Доповни функцію getUsersWithEyeColor(users, color) таким чином,
// щоб вона повертала масив користувачів, у яких колір очей(властивість
//   eyeColor) збігається зі значенням параметра color.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
// // Change code above this line

// 23. Example
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином,
// щоб вона повертала масив користувачів, вік яких(властивість age)
// потрапляє у проміжок від minAge до maxAge.

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) =>
// users.filter(user => user.age > minAge && user.age < maxAge);
// // Change code above this line

// 24. Example
// Доповни функцію getUsersWithFriend(users, friendName) таким чином,
// щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі
//   friendName.Масив друзів користувача зберігається у властивості friends.

// Change code below this line
// const getUsersWithFriend = (users, friendName) => users.flatMap(user => user.friens).filter(user => user.friends === friendName);

// // Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));
// // Change code above this line

// 25. Example
// Доповни функцію getFriends(users) таким чином, щоб вона
// повертала масив друзів всіх користувачів(властивість friends).
// У декількох користувачів можуть бути однакові друзі, зроби
// так, щоб масив, що повертається, не містив повторень.

// // Change code below this line
// const getFriends = (users) =>
//    users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
// // Change code above this line

// 26. Example
// Доповни функцію getActiveUsers(users) таким чином, щоб
// вона повертала масив активних користувачів, значення
// властивості isActive яких - true.

// // Change code below this line
// const getActiveUsers = (users) =>
//    users.filter(user => user.isActive === true);
// // Change code above this line

// 27. Example
// Доповни функцію getInactiveUsers(users) таким чином,
// щоб вона повертала масив неактивних користувачів,
//   значення властивості isActive яких - false.

// // Change code below this line
// const getInactiveUsers = (users) =>
//    users.filter(user => user.isActive === false);
// // Change code above this line

// ***** МЕТОД FIND()******************************************

// 28. Example
// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої
// (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої
// (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// 29. Example
// Доповни функцію getUserWithEmail(users, email) таким
// чином, щоб вона повертала об'єкт користувача, пошта якого
// (властивість email) збігається зі значенням параметра email.

// // Change code below this line
// const getUserWithEmail = (users, email) =>
//    users.find(user => user.email === email);
// // Change code above this line

// ***** МЕТОД EVERY()******************************************

// 30. Example
// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// 31. Example
// Доповни функцію isEveryUserActive(users) таким чином,
// щоб вона перевіряла, чи всі користувачі зараз активні
//   (властивість isActive) і повертала true або false.

// // Change code below this line
// const isEveryUserActive = (users) =>
//    users.every(user => user.isActive === true);
// // Change code above this line

// ***** МЕТОД SOME()******************************************

// 32. Example
// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// 33. Example
// Доповни функцію isAnyUserActive(users) таким чином, щоб
// вона перевіряла наявність активних користувачів
//   (властивість isActive) і повертала true або false.

// // Change code below this line
// const isAnyUserActive = users =>
//    users.some(user => user.isActive === true);
// // Change code above this line

// ***** МЕТОД REDUCE()******************************************

// 34. Example
// Ігровому сервісу необхідний функціонал підрахунку
// середнього часу, проведеного в іграх.Доповни код таким
// чином, щоб у змінній totalPlayTime вийшло загальний
// ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((prev, number) => {
//   return prev + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// 35. Example
// Нашому сервісу необхідно розрахувати середній час,
// проведений в одній грі для кожного гравця, і отримати
// загальну суму цих значень часу.Розрахувати час для
// кожного з гравців можна, розділивши його час
//   (властивість playtime) на кількість ігор
//     (властивість gamesPlayed).

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// 36. Example
// Доповни функцію calculateTotalBalance(users) таким чином,
// щоб вона рахувала і повертала суму всіх коштів
//   (властивість balance), які зберігають користувачі
//   з масиву users.

// // Change code below this line
// const calculateTotalBalance = users =>
//    users.reduce((acc, user) => {
//        return acc + user.balance;
//    }, 0);
// // Change code above this line

// 37. Example
// Доповни функцію getTotalFriendCount(users) таким чином,
// щоб вона рахувала і повертала загальну кількість друзів
//   (властивість friends) усіх користувачів з масиву users.

// // Change code below this line
// const getTotalFriendCount = users =>
//    users.reduce((acc, user) => {
//        return acc + user.friends.length;
//    }, 0);
// // Change code above this line

// ***** МЕТОД SORT()******************************************

// 38. Example
// Доповни код таким чином, щоб у змінній ascendingReleaseDates
// вийшла копія масиву releaseDates, відсортована за зростанням,
//   а у змінній alphabeticalAuthors - копія масиву імен авторів
// authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// 39. Example
// Онлайн бібіліотеці необхідно відображати книги,
// відсортовані за датою видання, за її зростанням або
// спаданням.Доповни код таким чином, щоб у змінній
// ascendingReleaseDates вийшла копія масиву releaseDates,
//   відсортована за зростанням, а у змінній descendingReleaseDates
//     - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((prev, next) => prev - next);

// const descendingReleaseDates = [...releaseDates].sort((prev, next) => next - prev);

// 40. Example
// Онлайн бібіліотеці необхідно відображати книги, відсортовані
// за автором, в алфавітному і зворотному алфавітному порядку.
// Доповни код таким чином, щоб у змінній authorsInAlphabetOrder
//  вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// 41. Example
// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// 42. Example
// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив
// користувачів, відсортований за зростанням їх балансу
// (властивість balance).

// // Change code below this line
// const sortByAscendingBalance = users =>
//    users.sort((a, b) => a.balance - b.balance);
// // Change code above this line

// 43. Example
// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив
// користувачів, відсортований за спаданням кількості їхніх друзів(властивість friends).

// // Change code below this line
// const sortByDescendingFriendCount = users =>
//    [...users].sort((a, b) => b.friends.length - a.friends.length);
// // Change code above this line

// 44. Example
// Доповни функцію sortByName(users) таким чином, щоб вона
// повертала масив користувачів, відсортований за їх ім'ям
// (властивість name) в алфавітному порядку.

// // Change code below this line
// const sortByName = users =>
// [...users].sort((a, b) => a.name.localeCompare(b.name));
// // Change code above this line

//******** ЛАНЦЮЖКИ МЕТОДІВ (ЧЕЙНІНГ, CHAINING) *************************/

// 45. Example
// Доповни код таким чином, щоб у змінній names вийшов масив
// імен авторів в алфавітному порядку, рейтинг книг яких
// більший за значення змінної MIN_BOOK_RATING.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];

// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);

// 46. Example
// Доповни функцію getNamesSortedByFriendCount(users)
// таким чином, щоб вона повертала масив імен користувачів,
//     відсортований за зростанням кількості їхніх друзів
//         (властивість friends).

// // Change code below this line
// const getNamesSortedByFriendCount = users =>
//       [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
// // Change code above this line

// 47. Example
// Доповни функцію getSortedFriends(users) таким чином, щоб
// вона повертала масив унікальних імен друзів
//   (властивість friends), відсортований за алфавітом.

// // Change code below this line
// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// // Change code above this line

// 48. Example
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
// щоб вона повертала загальний баланс користувачів(властивість balance),
//   стать яких(властивість gender) збігається зі значенням параметра gender.

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => {
//       return acc + user.balance;
//     }, 0);

//     // * Version 2
//     // const getTotalBalanceByGender = (users, gender) =>
//   // users
//   //   .filter(user => user.gender === gender)
//   //   .map(user => user.balance)
//   //   .reduce((acc, number) => {
//   //     return acc + number;
//   //   }, 0);
// // Change code above this line
