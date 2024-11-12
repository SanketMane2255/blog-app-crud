const express = require('express')
const mysql = require('mysql')
const cors = require('cors');
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.port || 6000

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudapp',
    port: 4306
})

app.get('/', (req, res) => {
    db.query(`SELECT * FROM blog`, (err, result) => {
        if (err) return res.status(400).json({ message: err })

        res.status(200).json(result)
    })
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    db.query(`SELECT * FROM blog WHERE id=${id}`, (err, result) => {
        if (err) return res.status(400).json({ message: err })

        res.status(200).json(result)
    })

})

app.post('/add', (req, res) => {
    const { title, description, image } = req.body
    db.query(`INSERT INTO blog (title,description,image) VALUES ('${title}','${description}','${image}') `, (err, result) => {
        if (err) return res.status(400).json({ message: err })
        res.status(200).json({ message: 'Blog added successfully 🔥' })
    })
})


    app.put('/update/:id',(req, res)=>{
        const {id} = req.params
        const {title, description, image} = req.body
        db.query(`UPDATE Blog SET title='${title}', description='${description}', image='${image}' WHERE id='${id}'`,(err, result)=>{
            if(err) return res.status(200).json({message:err})
            res.status(200).json({message:'Blog updated successfully...'})
        })
    })
    

    app.delete('/delete/:id', (req, res) => {
        const { id } = req.params
    
        db.query(`DELETE FROM blog WHERE id=${id}`,(err,result)=>{
            if (err) return res.status(400).json({ message: err })
            res.status(200).json({message:'blog has been deleted 🚒'})    
        })
    })
    

app.listen(port, () => {
    console.log(`We are listening at ${port}`)
})