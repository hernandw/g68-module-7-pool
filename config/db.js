import pg from 'pg';
import 'dotenv/config'
const { Pool } = pg;



const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
   allowExitOnIdle: true
}

export const pool = new Pool(config);


