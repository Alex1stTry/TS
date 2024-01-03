// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10,
// -999, 123, 3.14, 2.7, 16, true, false.
let w1: string = 'hello'
let w2: string = 'owu'
let w3: string = 'com'
let w4: string = 'ua'
let n1: number = 1
let n2: number = 10
let n3: number = -999
let n4: number = 123
let n5: number = 3.14
let n6: number = 2.7
let n7: number = 16
let b1: boolean = true
let b2: boolean = false
//     Вивести кожну змінну за допомогою: console.log
console.log(w1, w2, w3, w4, n1, n2, n3, n4, n5, n6, n7, b1, b2)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
let firstName: string = 'kokos'
let surName: string = 'good'
let lastName: string = 'palmovich'

// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let person: string = `${firstName} ${surName} ${lastName}`
console.log(person)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a: number = 100
let b: string = '100'
let c: boolean = true
console.log(typeof (a))
console.log(typeof (b))
console.log(typeof (c))

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let userName:string = prompt('What is your name')
let userSurName:string = prompt('What is your Surname')
let userAge:number = +prompt('What is your age')
let userInfo:{}={name:userName,surName:userSurName,age:userAge}
console.log(userInfo)
console.log(typeof (userInfo))
console.log(typeof (userAge))