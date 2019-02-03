import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (limit, rating) => getMovies(limit, rating)
  }
};

export default resolvers;
