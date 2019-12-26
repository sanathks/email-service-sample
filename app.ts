import express from 'express'
import bodyParser from 'body-parser'
import './src/config/container'
import mongoose from 'mongoose'
import mail from '@sendgrid/mail'
import expressValidator from 'express-validator'
import sendEmail from './src/controllers/send-email-controller'
import viewEmail from './src/controllers/view-email-controller'
import deleteEmail from './src/controllers/delete-email-controller'
import { CONNECTION_URL } from './src/config/mongo'
import { SENDGRID_API_KEY } from './src/config/sendgrid'

// tslint:disable-next-line:no-var-requires
require('dotenv').config()

const app: express.Application = express()
const router: express.Router = express.Router()

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch((error) => console.error(error))

mail.setApiKey(SENDGRID_API_KEY)

app.use(bodyParser.json())
app.use(expressValidator())

router.post('/emails', sendEmail)

router.route('/emails/:id')
    .get(viewEmail)
    .delete(deleteEmail)

app.use('/v1/', router)

export default app
