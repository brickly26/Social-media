const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
  }
`
/* 
  type Comment {

  }

  type Post {

  }

  type Mutation {

  }
*/

module.exports = typeDefs

