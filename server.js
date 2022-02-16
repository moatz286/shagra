import express, { json } from 'express';
import db from './config/db.js';
import cors from 'cors';

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(json());

// Route to get all posts
app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM users", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});