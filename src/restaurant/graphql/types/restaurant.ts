import {
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLString
} from 'graphql'

export const GraphQLRestaurant = new GraphQLObjectType({
  name: 'Restaurant',
  description: 'Restaurant info',

  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'Restaurant Id'
    },

    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'Restaurant name'
    },

    reviews: {
     // TODO Restaurant review based on user role
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))),
      description: 'Restaurant name'
    }
  }
})
