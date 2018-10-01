import {GraphQLServer} from "graphql-yoga";
const Query =require('./resolvers/Query');

const resolvers = {
    Query,
};
const server = new GraphQLServer( {
    typeDefs:'./src/schema.graphql',
    resolvers,
});

const options = {
    port:5000
};

server.start( options,({port}) =>
    console.log(`serveur started on http://localhost:${port}`));

