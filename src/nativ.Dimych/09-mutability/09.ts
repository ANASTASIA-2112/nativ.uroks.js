//создаем обьект

export type TypeNewUser = {
    name: string
    age: number
}
//переменная ссылка на обьект
let newUser: TypeNewUser = {
    name: "Nastya",
    age: 36,

}

//создаем функцию, которая увеличивает возраст
function icreaseAge(u: TypeNewUser) {
    u.age++;
}