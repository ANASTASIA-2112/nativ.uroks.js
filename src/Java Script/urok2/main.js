//Урок методы массивов


const student = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },

    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 29,
        isMarried: false,
        scores: 100
    },

];
//Задача 1 вывести имена студентов

//Массив состоящий из имен студентов
//new Array()-глобальная функция конструктор //в любой точке кода она доступна (глобальный обьект)
//[] - синтаксический сахар - простоя синтаксическая конструкция (квадратные скобки- литерал)
//стрелочная функция,будем передовать нейки массив
//берем по очереди все обьекты исходного массива
//взяли первй применили функцию getName закинули функции обьект
//вернет функция имя обьекта
//возвратить return result
//получаем [ 'Bob', 'Alex', 'Nick', 'John' ]

//-------------------------------------------------
const getNames = (array) => {
    const result = new Array()
    const getName = el => el.name  // получить name из обьекта
    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
    }
    return result
}
console.log(getNames(student));

//Задача 2 определить средний бал в группе

//Упаковать в массив все очки   scores
//1. создаем новый массив
//2. определяем что именно будем делать с каждым элементом исходного массива
//3.запускаем цикл
//4.выполняем необходимое преобразование с каждым элементом изходного массива
//5. результат преобразования складываем в новый массив

//Все студенты сдали зачет надо добавить по 10 баллов
//имутабельно
const getScores = (array) => {
    const result = new Array()
    const getResult = el => el.scores // получить  количество баллов score из обьекта
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i])
    }
    return result
}
console.log(getScores(student));


const addScores = (array) => {
    const result = new Array()
    const getResult = el => ({...el, scores: el.scores + 10}) // получить  увеличивали очки на 10 из обьекта
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i])
    }

    return result
}
console.log(addScores(student));

//функцию для преобразования массивов  создаем заместо трех

// аргументы map/ функция преобразователь  mapFunc
const getMappedArray = (array, mapFunc) => {
    const result = new Array()
    for (let i = 0; i < array.length; i++) {
        result[i] = mapFunc(array[i]) //преобразователь в аргументах
    }
    return result
}
console.log(getMappedArray(student, st => st.name));// получить name из обьекта
console.log(getMappedArray(student, st => st.scores)); // получить  количество баллов score из обьекта
console.log(getMappedArray(student, st => ({...st, scores: st.scores + 10})));// получить  увеличивали очки на 10 из обьекта
//document.write(student.map( st=> st.name));// метод map

//метод filter
//Взять элемент в команду или не взять
// создаем новый массив
//затем цикл
// потом условие if если аргумент 2 в качестве параметра передадим исходный массив
//если функция нам скажет, что истина то берем в команду
// подобие счетчика если длина =  0 то положим array[i] по 0 индексу //  result[result.length+1] = array[i]
const getFilterArray = (array, filterFun) => {
    const result = new Array()
    for (let i = 0; i < array.length; i++) {
        if (filterFun(array[i]) === true) {
            result[result.length] = array[i]
        }
    }
    return result
}
console.log(getFilterArray(student, st => st.age >= 21));
console.log(student.filter(st => st.age >= 25));

//find,push,  indexOf, includes

const getFind = (array, findFun) => {
    const result = new Array()
    for (let i = 0; i < array.length; i++) {
        if (findFun(array[i]) === true) {
            result[result.length] = array[i]
        }
    }
    return result
}
console.log(getFind(student, st => st.age > 20));
console.log(student.find(st => st.age > 20));


//
const getPush = (array, PushFun) => {
    const result = new Array()
    for (let i = 0; i < array.length; i++) {
        const getResult = el => ({...el, scores: el.scores + 10})
        result[i] = getResult(array[i])
    }
    return result
}

console.log(getPush(student, st => ({...st, scores: st.scores + 40})));
//  console.log(student.push(st=>({...st, scores: st.scores + 40}) ));????
// console.log(student.indexOf(st => st.scores > 100));
// console.log(student.includes(st=> st.age >= 25));





