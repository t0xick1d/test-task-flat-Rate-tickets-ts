const { Schema, model } = require('mongoose');

const ticketsSchema = new Schema({
  allplace: {
    type: Array,
  },
});

const Ticket = model('tickets', ticketsSchema);

module.exports = { Ticket };
