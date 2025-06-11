
const express = require('express');
const mysql = require('mysql2'); 
const cors = require('cors')
const app = express();
const PORT = 3001;
app.use(cors())
const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejemplo'
});

DB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa');
});

app.get('/api/libre', (req, res) => {
    const SQL_QUERY = 'SELECT * FROM LIBRE';
    DB.query(SQL_QUERY, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

app.listen(PORT, () => { 
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});