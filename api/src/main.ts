import Express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import { port } from './core/env'
import morgan from 'morgan'
import routes from './routes'

export default function main() {
  const app = Express()
  app.use(cors())
  app.use(json())
  app.use(morgan(':method :status :url - :response-time ms'))
  app.get('/', (_q, s) => s.send('hello world'))
  app.use(routes)
  app.listen(port, () => console.log(`App is 🚀 on ${port}`))
}
