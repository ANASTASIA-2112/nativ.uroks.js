export type ManyType = {
    name: string
    age: number
}

export const people: Array<ManyType> = [
    {name: 'Adrew Ivanov', age: 33},
    {name: 'Alexsandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]
//вызывть функцию для каждого человека //функция создаст новый обьект
// const transformator = (man: ManyType) => ({// это не тело функции, а мы конструируем обьект
//         stack: ["CSS,HTML,JS", "TDD", "React"],
//         firstName: man.name.split(" ")[0],//домтанем по пробелу
//         lastName: man.name.split(" ")[1],
// })
//1 способ получения массива
const dev1 = [
    {
        stack: ["CSS,HTML,JS", "TDD", "React"],
        firstname: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ["CSS,HTML,JS", "TDD", "React"],
        firstname: 'Alexsandr', lastName: 'Petrov'
    },
    {
        stack: ["CSS,HTML,JS", "TDD", "React"],
        firstname: 'Dmitry', lastName: 'Sidorov'
    },

]
// let d1= transformator(people[0])
// let d2= transformator(people[0])
// let d3= transformator(people[0])
//2 способ получения массива
// const dev2 = [
//     transformator(people[0]),
//     transformator(people[1]),
//     transformator(people[2]),
// ]
//3 способ получения массива
//const dev3 = people.map(transformator)
//создал новый массив и вызывал функцию, то что она ретурнит будет новый элемент в массиве
//4 способ получения массива
const dev4 = people.map(man => ({// это не тело функции, а мы конструируем обьект
    stack: ["CSS,HTML,JS", "TDD", "React"],
    firstName: man.name.split(" ")[0],//домтанем по пробелу
    lastName: man.name.split(" ")[1],
}))
//попривествывать!Массив сообщенй
//map - преобразование во что угодно
//На основе people (массива приветственное сообщение)
// для кажого человека  у нас три человека  три получим сообщения при помощи map
//Сюда приходит man  и мы для этого man должны вернуть строку ретурнуться строка с права
//`Hello ${man.name.split("по пробелу разделить") и взять первое слово имя  [0]}.Welcom to IT-Incubator` )
// тип message - это всегда массив /результат отработки мапа это всегда массив сколько элементов столько же в people
export const message = people.map(man => `Hello ${man.name.split("")[0]}.Welcom to IT-Incubator`)



