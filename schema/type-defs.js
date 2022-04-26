const {gql} = require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }

    type Film {
        id: ID!
        name: String!
        published: Int!
        inTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        films: [Film!]!
        film(name: String!): Film!
    }

    enum Nationality {
        CHILE
        INDIA
        CANADA
        BRAZIL
        GERMANY
        UK
    }
`;
module.exports = { typeDefs };