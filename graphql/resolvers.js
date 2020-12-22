const joseph = {
    name: "Joseph",
    age: 26,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => joseph
    }
}

export default resolvers