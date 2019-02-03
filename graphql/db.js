let movies = [
    {
        id:"0",
        name:"Star wars",
        score:"4"
    },{
        id:"1",
        name:"Avengers 3 - Infinity war",
        score:"2"
    },{
        id:"2",
        name:"The gotFather",
        score:"1"
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = Movies.filter(person => person.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleanedMovies.length){
        movie = cleanedMovies;
        return true;
    }else{
        return false;
    }
}