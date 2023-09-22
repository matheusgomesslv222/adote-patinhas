import express from 'express'
import openDb from './database/configDb.js'

const app = express();
app.use(express.json());


app.get('/', (req, res) =>{
    res.json({success: true});
})

app.listen(3000, ()=>{
    console.log('Servidor Online');
})