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
// console.log(getNames(student));

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
// console.log(getScores(student));


const addScores = (array) => {
    const result = new Array()
    const getResult = el => ({...el, scores: el.scores + 10}) // получить  увеличивали очки на 10 из обьекта
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i])
    }

    return result
}
// console.log(addScores(student));

//функцию для преобразования массивов  создаем заместо трех

// аргументы map/ функция преобразователь  mapFunc
const getMappedArray = (array, mapFunc) => {
    const result = new Array()
    for (let i = 0; i < array.length; i++) {
        result[i] = mapFunc(array[i]) //преобразователь в аргументах
    }
    return result
}
// console.log(getMappedArray(student, st => st.name));// получить name из обьекта
// console.log(getMappedArray(student, st => st.scores)); // получить  количество баллов score из обьекта
// console.log(getMappedArray(student, st => ({...st, scores: st.scores + 10})));// получить  увеличивали очки на 10 из обьекта
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
// console.log(getFilterArray(student, st => st.age >= 21));
// console.log(student.filter(st => st.age >= 25));

//find,push,  indexOf, includes

//метод find не возврощает новый массив он возврощает ссылку на первый элемент который удол. усл.поиска
const getFind = (array, findFun) => {
    for (let i = 0; i < array.length; i++) {
        if (findFun(array[i]) === true) {
            return array[i]
        }
    }
}
//console.log(getFind(student, st => st.age > 20));
// console.log(student.find(st => st.age > 20));


// возвратил длину массива стало 5
const getPush = (array, el) => {
    array[array.length] = el
    return array.length
}
//console.log(getPush(student,st => el=> el.length))


// для поиска индекса первого вхождения определенного элемента в массиве или строке.
const getIndexOf = (array, element) => {
    return array.indexOf(element);
}
//console.log(getIndexOf(student, 3));


//присутствует ли определенный элемент в массиве, вы можете использовать метод Array.includes.
const getIncudes = (array, element) => {
    return array.includes(element);
}

//console.log(getIncudes(student, 3));

const selfMadeIndexOf = (array, el, start = 0) => {
    for (let i = start; i < array.length; i++) {
        if (array[i] === el) {
            return i
        }
    }
    return -1
}

//console.log(selfMadeIndexOf(student,23,2));

const selfMadeIncludes = (array, el, start = 0) => {
    for (let i = start; i < array.length; i++) {
        if (array[i] === el) {
            return true
        }
    }
    return false
}

//console.log(selfMadeIncludes(student,3));

//написать функцию, которая будет брать функцию и возврощать строку
//нужно вставить длинну массива
//это функция могла определять любую  длинну массива
//this это тот обьект или массив, который будет использовать эту функцию ${this.length}
//функция определи длину того массива, который тебя использует в качестве метода
//какой массив станет понятно , огда какой-то массив это сделает
//THIS использовать можно только,как функция //Контекст вызова использутьмя регулярной функцией
function getLength() {
    return `длинна массива равна ${this.length}`

}

//student.getLength => `длинна массива равна 4`

// у нашегоArray есть свойство prototype можно вызвать метод  getLength будет функция  getLength

Array.prototype.getLength = getLength
//Теперь все массивы будут иметь метод getLength

//console.log([].getLength())
console.log([1, 2, 3, 4, 5].getLength());

