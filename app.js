const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('La mia Pasticceria')
})

// index
app.get('/Torte', (req, res)=>{
    res.send('elenco delle Torte')
})

// show
app.get('/Torte/:id', (req, res)=>{
    res.send(`dettaglio della torta con id: ${req.params.id}`)
})

// create

app.post('/Torte', (req,res)=>{
    res.send('creazione della torta')
})

// update

app.put('/Torte/:id', (req,res)=>{
    res.send(`modifica totale della torta con id: ${req.params.id} `)
})

// patch

app.patch('/Torte/:id',(req,res)=>{
    res.send(`modifica parziale della torta con id ${req.params.id}`)
})

// delete

app.delete('/Torte/:id', (req,res)=>{
    res.send(`Cancella torta con id ${req.params.id}`)
})


app.listen(port, ()=>{
    console.log('server della mia pasticceria')
})