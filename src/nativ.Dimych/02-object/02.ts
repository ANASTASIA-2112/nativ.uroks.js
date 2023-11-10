export type PropsType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: TypeAddress
    technologies: Array<TypeTechnologies>


}
type TypeAddress = {
    streetTitle: string
    city: TypeCity

}

type TypeCity = {
    title: string
    countryTitle: string
}


type TypeTechnologies = {
    id: number
    title: string
}

export const student: (PropsType) = {
    id: 1,
    name: "Anastasia",
    age: 36,
    isActive: true,

    address: {
        streetTitle: "Streets 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },

    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },

    ]
}
console.log(student.name)
console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies [2].title)

