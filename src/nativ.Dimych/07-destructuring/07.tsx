//Шапка теста пустого
//test("", () => {});

//деструктуризация обьектов
//У нас есть обьект  у него есть имя возраст,что он изучает

import {useState} from "react";

test("", () => {
    let props = {
        name: "Nastya",
        age: 36,
        lessons: [{title: "1"}, {title: "2"}],
        adress: {
            street: {
                title: "Park"
            }
        }
    }
//мы возрасту присваеваем возраст человека 1 способ
//     const age = props.age
//     const name= props.name
//     const lessons=props.lessons

    // мы возрасту присваеваем возраст человека 2 способ
    // const a = props.age
    // const n= props.name
    // const l=props.lessons

    //все эти строки 1 способа и 2способа можно заменить одной строчкой
    //мы хотим создать две переменных возраст и занятия
    //переменные заключаем в фигурные скобки - это значит что значение для этих переменных в  обьекте с справа который в props/
    //справа всегда должен быть только обьект-деструктурирование мы не можем делать из примитива
    //из обьекта забрать значение свойств
    const {age, lessons} = props;
    const {title} = props.adress.street

    //когда у обьекта забираем какие-то свойства мы делаем так const lessons=props.lessons
    //Ожидаем что переменная возраст будет ровна 36
    expect(age).toBe(36)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Park")

    //даем псевдонимы но лучше так не делать
    // //найди свойство возраст и создай переменную а/найди свойство занятие и создай переменную l
    // const  {age:a,lessons:l} = props;
    // expect(a).toBe(36)
    // expect(l.length).toBe(2)

});
//диструктурирование работае в функциях
export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string, name: string }>
    adress: { street: { title: string } }
}


export type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

//у нас есть константа, которая являеться React.FC-(функциональной компонентой)вот стакими пропсами PropsType
// export const ManComponent: React.FC< PropsType > = ({title,man})=>{
//     //const{title,man:{name}}=props; 1 способ
//     //const{title,man}=props;2 способ
//     return <div>
//         <h1>{title}</h1>
//         <hr/>
//         <div>
//             {man.name}
//         </div>
//     </div>
//
//}

//возврощает массив
function useNewState(m: string) {
    return [m, function () {
    }]

}

//возврощает обьект
function useNew2State(m: string) {
    return {
        message: m, setMessage: function () {
        }
    }

}

export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...restProps} = props; //- этот способ, очень актуальный
    const restProps2 = {
        food: props.food,
        car: props.car
    }

//функция которую мы вызываем (метод) и она нам возврощает массив , что то что мы у нее забираем
    const [m, setMessage] = useNewState("hello")
    //const {message, setMessage} = useNew2State("hello")
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {props.food}
        </div>
    </div>

}




