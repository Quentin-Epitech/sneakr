const express = require('express')
const mysql = require('mysql')
const cors = require('cors') 
const app = express()
const expressPort = 3001
app.use(cors())
app.use(express.json())

const dataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'root',
    database: 'users_db'
})

dataBase.connect((err) => {
    if (err) {
        console.log("Erreur de connexion:", err)
        return
    }
    console.log("Connexion à la base de données réussie")
})

app.get('/items', (req, res) => {
    const sql = 'SELECT * FROM produits;'
    dataBase.query(sql, (err, results) => {
        if (err) {
            console.log("Erreur SQL :", err); 
            return res.status(500).json({ 
                error: 'Erreur du serveur',
                details: err.message  
            })
        }
        return res.status(200).json(results)
    })
})

app.get('/get',(req,res)=> {
    console.log(req.body);  
    const { nom,description,image,prix } = req.body;  
    const sql = "SELECT * FROM Sneaker;"; 
    dataBase.query(sql, [nom,description,image,prix], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur du serveur' });
        }
        return res.status(201).json(results);
    });
 });






app.listen(expressPort, () => {
    console.log(`Serveur lancé sur le port ${expressPort}`);
});

