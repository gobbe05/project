const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/about" method="POST">
    <button>submit<button>
    </form> 
    
    `)
})

app.get("/about", (req, res) => {
    res.send('<h1>Hej</h1>')
})

app.post("/about", (req, res) => {
    res.send('test')
})

app.listen(8000)