//Dependecies
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import graphqlHttp from 'express-graphql';

//GraphQl
import graphiQlSchema from './graphql/schema';
import graphQlResolvers from './graphql/resolvers';

//DB
import mongo from './database/mongo';

//Server
const app = express();

// Setting
app.set('port', process.env.PORT || 3000);

//Middlewares 
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/graphql', graphqlHttp({
  schema: graphiQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Listen server
if (mongo) {
  app.listen(app.get('port'), () => {
    console.log( `Server on port: ${app.get('port')}` );
  });
} 