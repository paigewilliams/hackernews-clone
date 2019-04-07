const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API for my Hackersnews Clone`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log(`server is running on http://localhost:4000`))