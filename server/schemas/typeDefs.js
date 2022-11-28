const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [bookSchema]!
    }

    type Book {
        bookId: String
        authors: String
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: Userclear

    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;