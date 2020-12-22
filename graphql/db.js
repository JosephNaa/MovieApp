export const people = [
    {
        id: "0",
        name: "Joseph",
        age: 26,
        gender: "male"
    },
    {
        id: "1",
        name: "JD",
        age: 18,
        gender: "female"
    },
    {
        id: "2",
        name: "flynnn",
        age: 16,
        gender: "male"
    },
    
]

export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id)
    return filteredPeople[0]
}