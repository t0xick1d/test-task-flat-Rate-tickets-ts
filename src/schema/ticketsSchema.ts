import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
const { Ticket } = require('../models/tickets');

const Tickets = new GraphQLObjectType({
  name: 'Tickets',
  fields: (): any => ({
    id: {
      type: GraphQLString,
    },
    allplace: {
      type: new GraphQLList(PlaceType),
    },
  }),
});

const PlaceType = new GraphQLObjectType({
  name: 'Place',
  fields: () => ({
    section: { type: GraphQLString },
    row: { type: GraphQLString },
    seatnumber: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    tickets: {
      type: Tickets,
      args: { id: { type: GraphQLString } },
      resolve(parent: any, args: any) {
        return Ticket.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
