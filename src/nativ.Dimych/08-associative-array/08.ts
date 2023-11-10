//ассоциативный массив - это структура данных
//массив в js являеться обьектом
// у массива есть методы map, filter,foreEach
// есть свойста length -длинна

// let User = {
//     "name": "Nastya",
//     "age": 36,
//     "address": {
//         "city": {
//             "title": "Minsk"
//         }
//     }
// }

// console.log(User.address.city.title)//"Minsk"
// console.log(User["address"]["city"]["title"])//"Minsk" обязательно строка

//у нас есть ключ и значение обьект


//ДОСТАЕМ ОБЬЕКТ С АЙДИШНИКОМ 10
//он сразу дает по адресу
//users[10]


export const userArray = [
    {id: '10', name: 'Cristian'},
    {id: '20', name: 'David'},
    {id: '30', name: 'Jon'},
    {id: '40', name: 'Tom'},
    {id: '50', name: 'Nick'},
    {id: '60', name: 'Ola'},
    {id: '70', name: 'Valya'},
    {id: '80', name: 'Petya'},
]
//ДОСТАЕМ ОБЬЕКТ С АЙДИШНИКОМ 10
//методом пробигания сравния обьект
userArray.find(user=> user.id === '10')
userArray.filter(user => user.id === '10')
//сложность достования элементов O(n).Чем больше количество элементов в массиве тем
//сложнее достовать в ассоциативном массиве быстро сдесь долго




//в обычный массив добавить, что-то
//добовление/поиск/удаление максимально быстро
// let user = {id: '100', name: 'new user'};
// user[user.id] = user;
// //если обычное  добовление(мутабельное).Разришаеться мутировать обьект
// userArray.push(user)
// delete user[user.id]


//если имутабельное добовление
//делаем копию и забираем старые элементы и добовляем user
//есть риск дубликата нужно фильтровать
//что бы найти нужно пробегаться по всем элементам
let usersCopy = [...userArray.filter(u => u.id), user]

//удалить юзера
//затираеться ссылка памяти/ячейка на память
// let a ={a:1, b:2,c:3}
// undefined
// delete a
// false
// delete a.a
// true
// a
// {b: 2, c: 3}
//let userArray =userArray.filter(u=> u.id !== user.id ) пропусти у кого значение истина

//чтоб абдейт сделать нужно find найти и обновить
//если имутабельно, то map пробегаемся
//обращаемся к пользователю и перезаписываем его
//users[user.id].name = 'Masha'
//console.log(users)


