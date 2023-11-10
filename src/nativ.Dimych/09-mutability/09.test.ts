//создаем функцию, которая увеличивает возраст
import {TypeNewUser} from "./09";
import {User} from "../06-callback/06";

function icreaseAge(u: TypeNewUser) {
    u.age++;
}


type UserType = {
    name: string
    age: number
    address: { title: string }
}
test("big reference type  test", () => {
    //у нас в пямяти храниться два обьекта
    let newUser: UserType = {
        name: "Nastya",
        age: 36,
        address: {
            title: "Minsk"
        }
    }
    //мы отдаем ссылку на оюьект буква u будет ссылаться на этот же обьект
    //когда условно букву U меняем на i++ меняем мутируем u.age = u.age +1;
    //мы меняем u берем старый возраст прибовляем 1
    //u - это этот же обьект
    icreaseAge(newUser);
//мутируем /изменяем этот же обьект, соотвественно он меняеться
    expect(newUser.age).toBe(37)

    //ссылка на этот же обьект мы меняем это же обьект на который он ссылаеться
    //обращаясь к исходной переменной /стартовой там тоже произошло изменнение
    //перескопиовали ссылку
    //когда меняем через точку присваеваем мы мутируем обьект
    //ссылки разные, но обьект один-это ссылочный тип /это не копия 
    const superman = newUser
    superman.age = 1000
    expect(newUser.age).toBe(1000)
})

test("array  test", () => {
    let user = [
        {
            name: "Nastya",
            age: 36,
        },
        {
            name: "Sasha",
            age: 35,
        }
    ]
//users-добовляем нового админа
    let admins = user
    //добовление нового обьекта, мутирует исходный обьект
    admins.push({name: "Sofia", age: 15})
    expect(user[2]).toEqual({name: "Sofia", age: 15})


})

test("array reference  test", () => {
    let users = [
        {
            name: "Nastya",
            age: 36,

        },
        {
            name: "Sasha",
            age: 35,
        }
    ]
//users-добовляем нового админа
    let admins = users
    //добовление нового обьекта, мутирует исходный обьект
    admins.push({name: "Sofia", age: 15})
    expect(users[2]).toEqual({name: "Sofia", age: 15})


})

test("value type test", () => {
    //примитивное значение 100
    let usersCount = 100;//примитив, у примитива нет методов/присваевание
    let adminsCount = usersCount
    //добовление нового обьекта, мутирует исходный обьект
    //говорим adminsCount равен 100

    //делаем переприсваевание
    adminsCount = adminsCount + 1;//101
    adminsCount++
    //const не защищает переменную от изменения, если это обьект,то примитивы защищают
    expect(usersCount + 1).toBe(101);


})
test("reference type  test", () => {
    const adress = {
        title: "Minsk"
    }
    //это адрес отдаем различным user
    let user: UserType = {
        name: "Nastya",
        age: 36,
        address: adress
    }
    //addr-будешь равен user и заберем address
    //всего в памяти 3 обьекта/ 2 user и 1 address
    //{}==={}/false
    //[]===[]/ не равны между сабой это два разных обьекта
    //если они равны значит это один и тот же обьект

    let addr = user.address

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }
    //если менияеться адрес то переезжает и другой user
    user2.address.title = "Kanary";
    //единственный обьект
    adress.title = "Minsk City"
    //два обьектва равны, если один и тот же обьект

    expect(user.address.title).toBe("Minsk City")
})

//массивы
test("reference type array test", () => {
    const adress = {
        title: "Minsk"
    }
    //это адрес отдаем различным user
    let user: UserType = {
        name: "Nastya",
        age: 36,
        address: adress
    }
    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }
    const users = [user, user2, {name: "Katya", age: 18, address: adress}]
    //если менияеться адрес то переезжает и другой user
    user2.address.title = "Kanary";
    //меняем users через точку или users[0]

    const admins = [user, user2];
    //Изменили один обьект
    admins[0].name = "Anastasiya"


    expect(users[0].name).toBe("Anastasiya")
    expect(user.name).toBe("Anastasiya")
})
test('sort array test', () => {

    const lettets = ['c', 'd', 'a', 'z', 'e']
//зарегистрировать в системе
    passportist(lettets)

    expect(lettets).toEqual(['a', 'c', 'd', 'e', 'z'])
});
//reducer должны быть чистыми функциями. Нельзя делать /менять стейт
// Нельязя props.sort,props.push, props.user.push,props.user.sort, user.name-менять на другое значение
//нельзя мутироваить обьект которые прищли
function passportist(letters: any) {
    const copy = [...letters, letters.sort()];
    console.log(copy)
}
