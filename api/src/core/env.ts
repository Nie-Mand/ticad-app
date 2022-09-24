export const port = Number(process.env.PORT)
export const jwtSecret = process.env.JWT_SECRET || 'secret'
export const postgres = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'test',
  password: process.env.POSTGRES_PASSWORD || 'test',
  database: process.env.POSTGRES_DB || 'test',
}
