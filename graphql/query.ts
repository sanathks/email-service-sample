import {
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql'

import restaurant from '../src/restaurant/graphql/'

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    restaurant: {
      type: new GraphQLNonNull(GraphQLList(restaurant.types.GraphQLRestaurant)),
      args: {
        id: {
          type: GraphQLList(GraphQLID)
        }
      },
      resolve: restaurant.resolvers.restaurant
    }
  })
})
