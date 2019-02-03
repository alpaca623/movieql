let movies = [
    {
        id:0,
        name:"Star wars",
        score:"4"
    },{
        id:1,
        name:"Avengers 3 - Infinity war",
        score:"2"
    },{
        id:2,
        name:"The gotFather",
        score:"1"
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = Movies.filter(person => person.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : `${movies.length}`,
        name : name,
        score : score
    };
    movies.push(newMovie);
    return newMovie;
}