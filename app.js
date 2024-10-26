const mysql = require('mysql');
const express = require('express');

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // L’utilisateur MySQL par défaut est `root`
    password: '', // Laissez vide si vous n’avez pas défini de mot de passe MySQL
    database: 'mon_sitelvv' // Remplacez par le nom de votre base de données
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à MySQL :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

app.listen(3001, () => {
    console.log('Serveur démarré sur le port 3001');
});

app.get('/LLMs', (req, res) => {
    const sql = 'SELECT * FROM LLMs';

    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});
