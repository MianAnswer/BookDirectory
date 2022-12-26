import express from 'express'
import dotenv from 'dotenv'
import router from './routes'

if (process.env.NODE_ENV !== 'production') { dotenv.config() }
console.log(process.env.NODE_ENV)

const app = express()

app.use(router)

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.listen(port, () => {
  console.log(`Listening on http://${host}:${port}`)
})
