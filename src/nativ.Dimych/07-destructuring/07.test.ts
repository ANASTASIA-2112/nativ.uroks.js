//перед каждым тестом пожалуйста переменной props присваевай вот такой обьект
//можно описать каждый тип
// type sreetType={
//     title:string
// }
// type addressType = {
//     street: sreetType
//
// }
//
// type lessonType={
//     title: string
// }


import {ManType} from "./07";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Nastya",
        age: 36,
        lessons: [{title: "1", name: "React"}, {title: "2", name: "React"}, {title: "3", name: "React"}],
        adress: {
            street: {
                title: "Park"
            }
        }
    }
})
test("1", () => {

    const {age, lessons} = props;
    const {title} = props.adress.street

    expect(age).toBe(36)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Park")

});
//деструктуризация массивов
//достаем когда не большое количество в массиве
test("", () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    // const [ls1,ls2]= props.lessons
//если нужно достать одно только значение путо вместо старых

    //const [,,ls3]= props.lessons

    //можем создать другой массив

    const [, ls2, ...restlessons] = props.lessons


    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls2.title).toBe("2")

    expect(restlessons.length).toBe(1)
    expect(restlessons[0].title).toBe("3")
    expect(restlessons[0].name).toBe("React")
    expect(restlessons[0]).toStrictEqual({title: "3", name: "React"})

    //expect(ls2.title).toBe("2")
    //expect(ls3.title).toBe("3")

});
