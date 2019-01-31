import { GraphqlServer } from 'graphql-yoga';

const server = new GraphqlServer({

});

server.start(()=>console.log("graphql Server Running"));