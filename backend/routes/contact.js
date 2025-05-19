const { error } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');

const sqlite3 = require("sqlite3").verbose();

const dbPath = path.join(__dirname, '..', 'data', 'contact.db');
const db = new sqlite3.Database(dbPath);

db.run(`CREATE TABLE IF NOT EXISTS contact(
        id INTEGER PRIMARY KEY,
        fname TEXT,
        lname TEXT,
        email TEXT,
        subject TEXT,
        message TEXT)`);

router.post('/', (req, res) => {
   const { fname, lname, email, subject, message } = req.body;
   //  console.log(fname, lname, email, subject, message)
   var sql = `INSERT INTO contact( 
                fname, 
                lname, 
                email, 
                subject, 
                message) 
                VALUES("`+ fname + `","` + lname + `","` + email + `","` + subject + `","` + message + `")`;

   db.run('INSERT INTO contact(fname,lname,email,subject,message) VALUES (?,?,?,?,?)',
      [fname, lname, email, subject, message]);

   console.log('Content from sumited', { fname, lname, email, subject, message });
   res.status(200).json({ status: 'Contact saved in database!!' });
});

router.get('/:action', (req, res) => {
   const { action } = req.params;

   // if(action=='all'){
      
   // }

   switch (action) {
      case 'all':
         var sql = "SELECT * FROM contact ORDER BY id AESC";
         db.all(sql, [], (err, rows) => {
            if (err) {
               return res.status(500).json({ error: 'Fail' })
            }
            console.log(rows)
            res.status(200).json(rows);
         });
         break;

      case 'beforelast':
         var sql = "SELECT * FROM contact WHERE id = (SELECT MAX(id) - 1 FROM contact)";
         db.all(sql, [], (err, rows) => {
            if (err) {
               return res.status(500).json({ error: 'Fail' });
            }
            console.log(rows);
            res.status(200).json(rows);
         });
         break;

      case 'last2':
         var sql = "SELECT * FROM contact ORDER BY id DESC LIMIT 2";
         db.all(sql, [], (err, rows) => {
            if (err) {
               return res.status(500).json({ error: 'Fail' })
            }
            console.log(rows)
            res.status(200).json(rows);
         });
         break;

      case 'last':
         var sql = "SELECT*FROM contact WHERE id + (SELECT max(id) FROM contact)";
         return res.status(400).json({ message: 'last' })
         break;

      default:
         return res.status(400).json({ error: 'Fail bibye' })

   }
});

module.exports = router;