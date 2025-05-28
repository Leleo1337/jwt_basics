import express from 'express'
import path from 'path'
import { configDotenv } from 'dotenv'
import errorHandlerMiddleware from './middlewares/error-handler.js'
import notFound from './middlewares/not-found.js'
import login from './routes/login.js'
import dashboard from './routes/dashboard.js'

configDotenv()

const __dirname = import.meta.dirname

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

//@routes
app.use('/api/v1/login', login)
app.use('/api/v1/dashboard', dashboard)


app.use(notFound)
app.use(errorHandlerMiddleware);


export default app