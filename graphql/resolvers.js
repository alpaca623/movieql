import { people, getById } from './db';

const resolvers = { 
    Query : {
        people : () => people,
        // person : () => alpaca
    }
}

export default resolvers;