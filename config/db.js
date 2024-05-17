import pg from 'pg';
import 'dotenv/config'
const { Pool } = pg;

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD } = process.env

const config = {
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
   allowExitOnIdle: true
}

export const pool = new Pool(config);


