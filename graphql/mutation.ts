import {
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLString
} from 'graphql'

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Available mutation APIs for :D GraphQL API',
  fields: {
    property: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Mutation for a given property',
      args: {
        id: {
          description: 'id of the property',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: () => {
        return 'okay'
      }
    }
  }
})
