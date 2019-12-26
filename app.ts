import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import expressValidator from 'express-validator'
import graphqlHTTP from 'express-graphql'
/*import { CONNECTION_URL } from './config/mongo'
import './config/container'*/
import { schema } from './graphql/schema'

// tslint:disable-next-line:no-var-requires
require('dotenv').config()

const app: express.Application = express()

/*
mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch((error) => console.error(error))
*/

app.use(bodyParser.json())
app.use(expressValidator())

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
)

export default app
