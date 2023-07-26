const app = require('./app');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');

const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.use('./graphql', graphqlHTTP({}));
    app.listen(PORT);
    console.log('Database connection successful');
  })
  .catch((error: Error) => {
    console.log(error.message);
    process.exit(1);
  });
