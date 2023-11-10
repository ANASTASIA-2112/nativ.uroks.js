test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 30, 1, 100, 90, 14];

    //const predicate = (age: number) => age > 90; //если возраст больше  90,тогда true /В ДРУГУЮ КОМНАТУ, если 18 false 1способ


    const oldAges = ages.filter(age => age > 90);//2 способ

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]

    // const cheapPredicate = (course: CourseType) => course.price < 160 //возврат функции //1 способ
// метод фильтер пробежись по всем курсам и определи прайс меньше 160
    const chipCourses = courses.filter(course => course.price < 160);//2 способ
    //передаем функцию которая определяет пройдет ли дальше


    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("REACT");

})

// мы хотим отрендорить (получить только таски которые выполненые)
test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]
    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);

    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})
test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]
    const completedTasks = tasks.filter(task => !task.isDone)//таска не выполнена это true
    //если нет фигурной скобки все возврощаеться /происходит возврат
// ! - это отрицание
    expect(completedTasks.length).toBe(2);

    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);
})