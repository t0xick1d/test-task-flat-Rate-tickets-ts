import express from 'express';
const logger = require('morgan');
const cors = require('cors');
const schema = require('./schema/ticketsSchema');
const { graphqlHTTP } = require('express-graphql');

require('dotenv').config();

const ticketsRouter = require('./routes/api/tickets');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.use('/api/tickets', ticketsRouter);

app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err: Error, req: express.Request, res: express.Response) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
