import express from "express";
import {pool} from "../config/db.js"
const router = express.Router();


router.get("/", (req, res) => {

    res.send("Hola mundo")
})


router.get('/users', async (req, res) => {
    
const sql = await pool.query("SELECT * FROM users")
console.log(sql.rows)
res.send(sql.rows)

})



router.get('*', (req, res) => {
res.send("Ruta no encontrada")    
})


export default router