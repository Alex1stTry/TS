// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10,
// -999, 123, 3.14, 2.7, 16, true, false.
var w1 = 'hello';
var w2 = 'owu';
var w3 = 'com';
var w4 = 'ua';
var n1 = 1;
var n2 = 10;
var n3 = -999;
var n4 = 123;
var n5 = 3.14;
var n6 = 2.7;
var n7 = 16;
var b1 = true;
var b2 = false;
//     Вивести кожну змінну за допомогою: console.log
console.log(w1, w2, w3, w4, n1, n2, n3, n4, n5, n6, n7, b1, b2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
var firstName = 'kokos';
var surName = 'good';
var lastName = 'palmovich';
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var person = "".concat(firstName, " ").concat(surName, " ").concat(lastName);
console.log(person);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
var a = 100;
var b = '100';
var c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var userName = prompt('What is your name');
var userSurName = prompt('What is your Surname');
var userAge = +prompt('What is your age');
var userInfo = { name: userName, surName: userSurName, age: userAge };
console.log(userInfo);
console.log(typeof (userInfo));
console.log(typeof (userAge));
