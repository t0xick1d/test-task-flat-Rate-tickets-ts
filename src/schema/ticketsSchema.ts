import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

const Tickets = new GraphQLObjectType({
  name: 'Tickets',
  fields: (): any => ({
    id: {
      type: GraphQLString,
    },
    allplace: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    tickets: {
      type: Tickets,
      args: { id: { type: GraphQLString } },
      resolve(parent: any, args: any) {},
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
