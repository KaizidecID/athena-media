const express = require('express')
const path = require('path')
const yts = require('yt-search')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'dashboard.html'))
})

app.get('/tiktok', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'tiktok.html'))
})

app.get('/instagram', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'instagram.html'))
})

app.get('/spotify', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'spotify.html'))
})

app.get('/ytmp3', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'ytmp3.html'))
})

app.get('/musik', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'musik.html'))
})

app.get('/api/music', async (req,res)=>{

try{

let q = req.query.q

if(!q){

return res.json({
status:false,
msg:'query kosong'
})

}

let search = await yts(q)

let video = search.videos[0]

if(!video){

return res.json({
status:false,
msg:'music tidak ditemukan'
})

}

res.json({
status:true,
title:video.title,
thumbnail:video.thumbnail,
url:video.url,
author:video.author.name
})

}catch(e){

res.json({
status:false,
msg:'server error'
})

}

})

app.listen(PORT, () => {
console.log(`Running http://localhost:${PORT}`)
})