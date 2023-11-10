import {userArray} from "./08";

type UserType = {
    [key: string]: { id: string, name: string }
}

let users: UserType
beforeEach(() => {
    users = {
        '10': {id: '10', name: 'Cristian'},
        '20': {id: '20', name: 'David'},
        '30': {id: '30', name: 'Jon'},
        '40': {id: '40', name: 'Tom'},
        '50': {id: '50', name: 'Nick'},
        '60': {id: '60', name: 'Ola'},
        '70': {id: '70', name: 'Valya'},
        '80': {id: '80', name: 'Petya'},
    }
})

//тест на обновления элемента
test("should update corresponding user", () => {
    users["10"].name = 'Ekaterina'
    //expect(users["10"].name).toBe('Ekaterina')
    //сравнивает по значениям/структура и значение они ровны
    //таким образом можно проверять и стейт/при тестировании reducer
    expect(users["10"]).toEqual({id: '10', name: 'Ekaterina'})

})

//тест на удаления элемента

test("should delete corresponding user", () => {
    delete users ["10"]
    expect(users ["10"]).toBeUndefined()

})
