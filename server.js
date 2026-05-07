const express = require("express");
const app = express();
const sqlite3 = require('sqlite3');

const PORT = 3000;
const db = new sqlite3.Database('./Projekt.db');

db.run(`CREATE TABLE IF NOT EXISTS Test (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    namn TEXT NOT NULL, beskrivning TEXT,
    status BOOLEAN NOT NULL,
    prioritet TINYINT NOT NULL (prioritet BETWEEN 1 AND 3),
    skapad DATE NOT NULL,
    deadline DATE NOT NULL )`);

app.get("/", (req,res) => {
    res.send("Servern funkar");
});

app.post("/NyttProjekt",(req,res) =>{
    const id = req.params.id;
    const namn = req.params.namn;
    const status = req.params.status;
    const prioritet = req.params.prioritet;
    const skapad = req.params.skapad;
    const deadline = req.params.deadline;

});

app.listen ( PORT, () => {
console.log(`Server is running on port ${PORT}`);
});