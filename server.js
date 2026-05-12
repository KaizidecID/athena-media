const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/', (req,res)=>{
res.sendFile(path.join(__dirname,'views/dashboard.html'))
})

app.get('/tiktok',(req,res)=>{
res.sendFile(path.join(__dirname,'views/tiktok.html'))
})

app.get('/instagram',(req,res)=>{
res.sendFile(path.join(__dirname,'views/instagram.html'))
})

app.get('/spotify',(req,res)=>{
res.sendFile(path.join(__dirname,'views/spotify.html'))
})

app.get('/ytmp3',(req,res)=>{
res.sendFile(path.join(__dirname,'views/ytmp3.html'))
})

app.get('/musik',(req,res)=>{
res.sendFile(path.join(__dirname,'views/musik.html'))
})

app.listen(PORT, ()=>{
console.log(`ATHENA running on http://localhost:${PORT}`)
})