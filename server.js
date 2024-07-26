// starter code provided from assignment
const express = require('express');
const routes = require('./routes');
// import sequelize connection
// received help from tutor on line 6 and line 21-25
const sequelize = require('./config/connection');


// invoke express
const app = express();
const PORT = process.env.PORT || 3001;

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// then pass routes through app.use
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  }); 
}); 

