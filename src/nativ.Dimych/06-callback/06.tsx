import React, {ChangeEvent, MouseEvent} from "react";
//import {HouseType} from "../02-object/02_02";


//callback -это функция в которую мы передаем обьекты.Функцию можно отправить.
//функция обратного вызова -callback
//


// export const createMessages = (houses: Array<HouseType>) => {
//     let strings = (h: HouseType) => {
//         return `Hello guys from ${h.address.street.title}`
//
//
//     }
//     let strings1 = houses.map(strings);
//     return strings1
// }
//дайте мне функцию,которую запущу через секунду
//ананимная функция ()=>{}
//этот колбэк мы не вызываем.Мы его отдаем
//название функции являеться ссылкой
//при вызове функции - это значит, что она обязательно, что-то ретурнит
//скобки не нужны функцию запустит, кто-то другой
// const calback = (): number => {
//     alert("Hello")
//     return 12;
// }
// window.setTimeout(calback, 1000);
//обработка событий UI

//подписка в js при помощи  addEventListener()


//логика работы удаления юзера
//подписаться на событие значит отдать свою функцию,вызвали когда событие произойдет
//удалить юзера
export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
        //обьект event у тебя есть такое свойство  event.currentTarget это и есть тот элемент с которым произашло событие
        //alert('user have been deleted');

    }
    //функция которая  сробатывает на событие имя изменилось
    const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("name changed")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed")
    }
        // const search = (event: MouseEvent<HTMLButtonElement>) => {
        //     alert(event.currentTarget.value);
        // }


        //currentTarget это то, что ожидаем получить с которым произошло событие на которое мы подписались
        //event.currentTarget.value -то значение, которое новое на которое изменилась значение почему наш обработчик был вызван
        //обработчик фокус потерян
        const focusLostHandler = () => {
            console.log("focus lost")
        }
        //есть элементы в фокусе,которых мы можем оказаться
        //фокус tabIndex={}
        //textarea уходит сробатывает событие onBlur фокус потерян
        return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}
        >Dimych
        </textarea>

            <input onChange={onAgeChanged} type={"number"}/>

            <button name={"delete"} onClick={deleteUser}>x</button>
            <button name={"save"} onClick={deleteUser}>x</button>
            {/*<button name={"delete"} onClick={search}>search</button>*/}
        </div>
    }
//однонго разработчика отдадим двум разным кнопкам
//ты кнопка вызови нашу функцию deleteUser,когда по тебе кликнут
//будет вызвана по одной из причин

//есть разные методы события on...onclik,onBlur,onContexMenu

//обьект события
//если проиходит какое-то событие этот элемент нас уведомляет и вызывает нашу функцию
//когда проиходит событие генерируеться обьект
// обьект это структура данных состоящих ключ/значение (прмитивы,строки,булевые значения,обьект ---массив и функция )
//когда проиходит событие в системе генерируеться обьект события (e)он называеться event
//содержит всю информацию о произашедшем событии
//нам нужно знать детали --например какая клавиша была нажата, какое значение сейчас в элементе который изменился,в каком месте произошел клик
//сами элементы вызывают эти функци

//что такое обьект event - altKey-был ли нажат ctrl
//мы хотим узнать получить доступ к элементу событие с которым это проиходит
//deleteUser мы прицыпили к кнопке поэтому нам надо достучаться к нопке при помощи   event
//наша универсальная функция являеться обработчикам для клика по разным кнопкам
