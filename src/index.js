"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var Query = require('./resolvers/Query');
var resolvers = {
    Query: Query,
};
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers,
});
var options = {
    port: 5000
};
server.start(options, function (_a) {
    var port = _a.port;
    return console.log("serveur started on http://localhost:" + port);
});
