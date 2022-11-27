import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: String!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!){
        saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            saveBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;