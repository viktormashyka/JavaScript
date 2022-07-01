// // console.log('Hellow world');

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';

//   // Change code above this line
// }
// prompt = 'Введи пароль: ';
// checkPassword('jqueryismyjam');

// console.log();

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// for (let i = 0; i <= fruits.length; i += 1) {
//   console.log(i);
// }

// // for (let i = 0; i <= 20; i += 5) {
// //   console.log(i);
// // }

// // const fruitsArrayLength = fruits.length;

// console.table(fruits);

// 8. Завдання
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;

// const lastElement = fruits[lastElementIndex];

// console.log(`Останній елемент масиву: ${lastElement}`);

// 9. Завдання
// Напиши функцію getExtremeElements(array), яка приймає один параметр
// array - масив елементів довільної довжини.Функція повинна повертати
// масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//   console.log(array);

//   const firstElementIndex = [array[0]];
//   console.log(firstElementIndex);
//   const lastElementIndex = [array[array.length - 1]];
//   console.log(lastElementIndex);

//   const newArray = firstElementIndex.concat(lastElementIndex);

//   console.log(newArray);

//   return newArray;

//   // Change code above this line
// }

// getExtremeElements(['Apple', 'Samsung', 'Xiaomi', 'Nokia', 'Motorolla']);

// getExtremeElements([1, 2, 3, 4, 5]);

// 10. Завдання
// Доповни код функції splitMessage(message, delimeter) таким чином, щоб вона повертала
// у змінній words результат поділу рядка message за роздільником delimeter - масив рядків.

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line

//   words = message.split(delimeter);

//   console.log(words);

//   // Change code above this line
//   return words;
// }

// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');

// 11. Завдання
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
//   залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок,
//   що складається зі слів, розділених лише пробілами(параметр message) та ціну гравірування
//   одного слова(параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   let words;

//   words = message.split(' ').length;

//   let totalPrice;

//   totalPrice = words * pricePerWord;

//   console.log(totalPrice);

//   return totalPrice;

//   // Change code above this line
// }

// calculateEngravingPrice('JavaScript is in my blood', 10); // 50
// calculateEngravingPrice('JavaScript is in my blood', 20); // 100
// calculateEngravingPrice('Web-development is creative work', 40); // 160
// calculateEngravingPrice('Web-development is creative work', 20); // 80

// 12. Завдання
// Доповни код функції makeStringFromArray(array, delimeter) таким чином, щоб вона повертала
// у змінній string результат з'єднання елементів масиву array з роздільником delimeter - рядок.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimeter);

//   console.log(string);

//   // Change code above this line
//   return string;
// }

// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '); // "Mango hurries to the train"
// makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''); // "Mango"
// makeStringFromArray(['top', 'picks', 'for', 'you'], '_'); // "top_picks_for_you"

// 13. Завдання
// Термін slug - це людино - зрозумілий унікальний ідентифікатор, який використовується у веб - розробці
// для створення читабельних URL - адрес.

//   Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx,
//   можна зробити slug з назви статті.В результаті адреса буде приємнішою для сприйняття: mysite.com
//     / posts / arrays -for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug,
//   створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   // Change code below this line

//   let stringTitle;

//   stringTitle = title.toLowerCase().split(' ').join('-');

//   console.log(stringTitle);

//   return stringTitle;

//   // Change code above this line
// }

// slugify('Arrays for begginers'); // "arrays-for-begginers"
// slugify('English for developer'); // "english-for-developer"
// slugify('Ten secrets of JavaScript'); // "ten-secrets-of-javascript"
// slugify('How to become a JUNIOR developer in TWO WEEKS'); // "how-to-become-a-junior-developer-in-two-weeks"

// 14. Завдання
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 16. Завдання
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву
// з усіма елементами двох вихідних firstArray і secondArray.Параметр maxLength містить максимально
// допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути
// копію масиву довжиною maxLength елементів.В іншому випадку функція повинна повернути
// новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   let newArray = firstArray.concat(secondArray).slice(0, maxLength);

//   console.log(newArray);

//   return newArray;

//   // Change code above this line
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3); // ["Mango", "Poly", "Ajax"]
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4); // ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3); // ["Mango", "Ajax", "Chelsea"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2); // ["Earth", "Jupiter"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0); // []
// makeArray(); // з випадковими масивами і випадковим числом повертає правильний масив

// 17. Завдання
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// // Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// 18. Завдання
// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і повертає суму
// всіх цілих чисел від одиниці і до цього числа.Наприклад, якщо number дорівнює 3,
//   то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   // Change code below this line

//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     console.log(i);

//     sum += i;
//   }

//   console.log(`Загальна сума чисел до числа ${number}: ${sum}`);
//   return sum;

//   // Change code above this line
// }

// calculateTotal(1); // 1
// calculateTotal(3); // 6
// calculateTotal(7); // 28
// calculateTotal(18); // 171
// calculateTotal(24); // 300
// calculateTotal(); // з випадковим числом повертає правильне значення

// 19. Завдання
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20. Завдання
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
//   і обчислює загальну суму його елементів.Загальна сума елементів повинна зберігатися
//   у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
//   }

//   console.log(`Загальна сума замовлення: ${total} гривень`);

//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]); // 138
// calculateTotalPrice([164, 48, 291]); // 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // 1116
// calculateTotalPrice(); // з випадковим масивом повертає правильне значення

//21. Завдання
// Напиши функцію findLongestWordstring), яка приймає довільний рядок, що складається
// тільки зі слів, розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   // Change code below this line

//   console.log(`Задане довільне речення: ${string}`);
//   if (!string) return;

//   let arrStr = string.split(' ');
//   console.log(arrStr);
//   console.log(`В реченні: ${arrStr.length} слів.`);

//   let wordLength = 0;
//   let longestWord;
//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       console.log(`Найдовше слово => ${longestWord}`);

//       return longestWord;
//     }
//   }

//   // Change code above this line
// }

// findLongestWord('The quick brown fox jumped over the lazy dog'); // jumped
// findLongestWord('Google do a roll'); // Google
// findLongestWord('Mayorka the force be with you'); // force
// findLongestWord(); // з випадковим рядком повертає правильне значення

//22. Example
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона
// повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   console.log(`мінімальне число => ${min}, максимальне число => ${max}`);

//   // let minNumber = min;
//   // let maxNumber = max;

//   for (let i = min; i <= max; i += 1) {
//     // console.log(i);
//     numbers.push(i);
//     // let allNumber = numbers.push(i);
//     console.log(numbers);
//   }
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(1, 3); // [1, 2, 3]
// createArrayOfNumbers(14, 17); // [14, 15, 16, 17]
// createArrayOfNumbers(29, 34); // [29, 30, 31, 32, 33, 34]
// createArrayOfNumbers(); // з випадковими min і max повертає правильний масив

// 23. Example
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers)
// і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші
// за значення параметра value(число).

// function filterArray(numbers, value) {
//   // Change code below this line

//   console.log(
//     `всі числа => ${numbers}, значення числа, після якого мають бути більші числа => ${value}`
//   );

//   let largestNumber = 0;
//   let largestNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);

//     if (numbers[i] > value) {
//       // console.log(numbers[i]);
//       largestNumber = numbers[i];
//       // console.log(largestNumber);

//       largestNumbers.push(largestNumber);
//       // console.log(largestNumbers);
//     }
//   }
//   console.log(largestNumbers);
//   return largestNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // [5]
// filterArray([1, 2, 3, 4, 5], 5); // []
// filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]
// filterArray(); // з випадковим масивом і числом повертає правильний масив

// 24. Example
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє,
// чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   // const result = fruits.includes(fruit);
//   // console.log(result);

//   // return result;

//   return fruits.includes(fruit); // Change this line
// }

// checkFruit('plum'); // true
// checkFruit('mandarin'); // false
// checkFruit('pear'); // true
// checkFruit('Pear'); // false
// checkFruit('apple'); // true
// checkFruit(); // з випадковим словом повертає правильне значення boolean

// 25. Example
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

//   Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
//   оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8 присутні тільки
//     в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної
// довжини в параметри array1 і array2, і повертає новий масив, що складається з тих
// елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   let newArray = [...array1, ...array2];
//   let twiceNumber = 0;
//   let commonArray = [];

//   console.log(array1);
//   console.log(array2);

//   // console.log(newArray);

//   for (let i = 0; i < newArray.length - 1; i += 1) {
//     if (array2.includes(array1[i])) {
//       twiceNumber = array1[i];
//       // console.log(twiceNumber);

//       commonArray.push(twiceNumber);
//       console.log(commonArray);
//     }
//   }
//   console.log(`Спільними числави двох масивів є ${commonArray}`);
//   return commonArray;

//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]); // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); // []
// getCommonElements(); // з випадковими двома масивами повертає правильний масив

// 26. Example
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   // Change code above this line

//   for (const price of order) {
//     total += price;
//   }

//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]); // 138
// calculateTotalPrice([164, 48, 291]); // 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // 1116
// calculateTotalPrice([]); // 0
// calculateTotalPrice(); // з випадковим масивом чисел повертає правильну суму

// 27. Example
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // [5]
// filterArray([1, 2, 3, 4, 5], 5) // []
// filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]
// filterArray() // з випадковим масивом і числом повертає правильний масив

// 28. Example
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// 32. Example
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел
// від start до end.Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

// for (let i = 2; i <= 12; i += 1) {
//   console.log(i);
// }

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   let allNumbers = 0;
//   let evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     let allNumbers = i;
//     console.log(allNumbers);
//     if (i % 2 !== 0) {
//       continue;
//     } else {
//       evenNumbers.push(i);
//     }
//   }
//   console.log(evenNumbers);
//   return evenNumbers;
//   // Change code above this line
// }

// getEvenNumbers(2, 5); // [2, 4]
// getEvenNumbers(3, 11); // [4, 6, 8, 10]
// getEvenNumbers(6, 12); // [6, 8, 10, 12]
// getEvenNumbers(8, 8); // [8]
// getEvenNumbers(7, 7); // []
// getEvenNumbers(); // з випадковими start і end повертає правильний масив

// 30. Example
// Доповни код таким чином, щоб у змінну number записувалося перше число
// від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// 31. Example
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       console.log(i);
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// findNumber(2, 6, 5); // 5
// findNumber(8, 17, 3); // 9
// findNumber(6, 9, 4); // 8
// findNumber(16, 35, 7); // 21
// findNumber(); // з випадковим набором чисел повертає правильний результат

// 32. Example
// Напиши функцію includes(array, value), яка робить те саме, що і метод
// масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення
// value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати
// метод масив.includes(значення).

// function includes(array, value) {
//   // Change code below this line
//   let result;
//   let object;

//   console.log(array);
//   console.log(`Чи містить масив '${array}' об'єкт '${value}'`);

//   for (object of array) {
//     if (object === value) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }
//   console.log(result);
//   return result;

//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3); // true
// includes([1, 2, 3, 4, 5], 17); // false
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'); // true
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'); // false
// includes(['apple', 'plum', 'pear', 'orange'], 'plum'); // true
// includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'); // false
// includes(); // для випадкового масиву з випадковим value повертає правильний boolean
