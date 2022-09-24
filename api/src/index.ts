import 'dotenv/config'
import main from './main'
import './core/declare'
import { databaseConnect } from './core'

// entrypoint
try {
  databaseConnect().then(main)
} catch (E) {
  console.log(E)
}
