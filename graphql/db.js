let movies = [
    {
        id: 0,
        name: "Start Wars",
        score: 1
    },
    {
        id: 1,
        name: "Avangers",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    },
    
]

export const getMovies = () => movies

export const getById = id => {
    const filteredMovies = movies.filter(movies => String(id) === movie.id)
    return filteredMovies[0]
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id))
    if(movies.length > cleanedMovies.length){
        movie = cleanedMovies
        return true
    } else{
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}