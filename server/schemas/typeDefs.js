const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID
        authors: String
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User,
    }

    type Query {
        me: [User]!
        user(userId: ID!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        saveBook(author: String!, description: String!, title: String!, bookId: Int!, image: String!, link: String!): User
        removeBook(bookId: Int!): User
    }
`;