const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('La mia Pasticceria')
})

// index
app.get('/posts', (req, res)=>{
    res.send('elenco dei post')
})

// show
app.get('/posts/:id', (req, res)=>{
    res.send(`dettaglio del post con id: ${req.params.id}`)
})

// create

app.post('/posts', (req,res)=>{
    res.send('creazione del post')
})

// update

app.put('/posts/:id', (req,res)=>{
    res.send(`modifica totale del post con id: ${req.params.id} `)
})

// patch

app.patch('/posts/:id',(req,res)=>{
    res.send(`modifica parziale del post con id ${req.params.id}`)
})

// delete

app.delete('/posts/:id', (req,res)=>{
    res.send(`Cancella post con id ${req.params.id}`)
})


app.listen(port, ()=>{
    console.log('server della mia pasticceria')
})