const app = require('./app');
const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log('Database connection successful');
  })
  .catch((error: Error) => {
    console.log(error.message);
    process.exit(1);
  });
