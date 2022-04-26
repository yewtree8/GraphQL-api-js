const {ApolloServer} = require("apollo-server");
const { typeDefs } = require('./schema/type-defs').default

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`The API is running on ${url}`);
})