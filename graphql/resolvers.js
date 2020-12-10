import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, arg) => {
      const { limit, rating } = arg;
      return getMovies(limit, rating);
    },
  },
};

export default resolvers;
