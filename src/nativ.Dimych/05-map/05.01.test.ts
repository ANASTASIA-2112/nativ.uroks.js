//исходные данные
import {ManyType, people} from "./05";
//const нельзя не чего переприсваивать
//далше через beforeEach

beforeEach(() => {
    let people: Array<ManyType> = [
        {name: 'Adrew Ivanov', age: 33},
        {name: 'Alexsandr Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

//"должен появиться массив поздравительных сообщений"
// test("should get array of greeting messages", ()  => {
//   //говорим people
//     const message = people.map(man => `Hello ${man.name.split(" ")[0]}.Welcom to IT-Incubator`)
//     //мы ожидаем что длинна будет 3
//     expect(message.length).toBe(3);
//     //месадж нулевой должен быть и пишим сообщение
//     expect(message[0]).toBe("Hello Adrew.Welcom to IT-Incubator");
//     expect(message[1]).toBe("Hello Alexsandr.Welcom to IT-Incubator");
//     expect(message[2]).toBe("Hello Dmitry.Welcom to IT-Incubator");
// })
// вернем то что возврощает мап
const creatGreetingMessage = (people: Array<ManyType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}.Welcom to IT-Incubator`)
}
test("should get array of greeting messages", () => {
    //говорим people
    const message = creatGreetingMessage(people)

    expect(message.length).toBe(3);
    //месадж нулевой должен быть и пишим сообщение
    expect(message[0]).toBe("Hello Adrew.Welcom to IT-Incubator");
    expect(message[1]).toBe("Hello Alexsandr.Welcom to IT-Incubator");
    expect(message[2]).toBe("Hello Dmitry.Welcom to IT-Incubator");
})