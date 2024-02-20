const typeDefs =`
    type Book {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String
    }
    type User {
        username: String!
        email: String!
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(userId: ID!): User
        me: User
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addBook(authors: [String], description: String!, bookId: String!, image: String, link: String, title: String): Book
        addBooksToUser(userId: ID!, savedBooks: [Book]): User
        removeUser: User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;