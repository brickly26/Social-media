const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    getPosts: async () => {
      const posts = await Post.find()
      return posts
    }
  }
}

module.exports = resolvers