import pg from 'pg'

export const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'practice',
  password: 'runey.2212',
  port: 5432
})


client.connect()



