const express = require('express')
const app = express()
const port =  process.env.PORTS || 8888

app.get('/', (req, res) => {
    res.send('Welcome');
})
app.get('/home',(req,res) => {
    res.send('HOMEPAGE')
})
app.get('/login',(req,res) => {
    res.send('<h1> Trang Login Dang Nhap tai khoan </h1>');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))