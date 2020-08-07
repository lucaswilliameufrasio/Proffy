import * as dotenv from 'dotenv'
import * as paths from 'path'

dotenv.config({ path: paths.resolve(__dirname, '..', '.env') })

import express from 'express'
import routes from './routes'
import cors from 'cors'
import env from './config/env'

const PORT = env.PORT

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(PORT)
