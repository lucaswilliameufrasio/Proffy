import express from 'express'
import env from './config/env'

const PORT = env.PORT

const app = express()

app.use(express.json())


app.listen(PORT)
