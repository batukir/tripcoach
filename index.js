const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'wpdb'
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())

app.get("/api/get", (req, res) => {

    const sqlSelect = 
    "SELECT * FROM tripcoach_reviews";
    db.query(sqlSelect,  (err, result) => {
    res.send(result);
    })

})
app.post("/api/insert", (req, res) => {

    const username = req.body.username
    const review = req.body.review

    const sqlInsert = 
    "INSERT INTO tripcoach_reviews (username, review) VALUES (?,?)"
    db.query(sqlInsert, [username, review], (err, result) => {
    console.log(result)
    })
});

app.delete("/api/delete/:username", (req, res) => {
    const name = req.params.username

    const sqlDelete = 
    "DELETE FROM tripcoach_reviews WHERE username = ?"
    db.query(sqlDelete, name, (err,result) => {
        if(err) console.log(err)
    })

});

app.put("/api/update", (req, res) => {
    const name = req.body.username
    const review = req.body.review
    const sqlUpdate = 
    "UPDATE tripcoach_reviews SET review = ? WHERE username = ?"
    db.query(sqlUpdate, [review, name], (err,result) => {
        if(err) console.log(err)
    })

});
app.listen(3001, () => {
    console.log('running on port 3001')
});