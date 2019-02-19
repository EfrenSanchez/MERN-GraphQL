//Dependecies
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const graphqlHttp = require('express-graphql');
const isAuth = require('./middleware/is-auth');

//GraphQl
const graphQlSchema = require('./graphql/schema');
const graphQlResolvers = require('./graphql/resolvers');

//DB
const mongo = require('./database/mongo');

//Server
const app = express();

// Setting
app.set('port', process.env.PORT || 8000);

//Middlewares 
app.use(morgan('dev'));
app.use(express.json());
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if(req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(isAuth);

//Endpoint
app.use('/graphql', graphqlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));

//Static Files
app.use(express.static(path.join(__dirname, 'client/public')));

// Listen server
if (mongo) {
  app.listen(app.get('port'), () => {
    console.log( `Server on port: ${app.get('port')}` );
  });
} 