async function downloadTikTok(){

let url=document.getElementById('tiktokUrl').value
let result=document.getElementById('tiktokResult')

result.style.display='block'
result.innerHTML='<div class="loading"></div>'

try{

let res=await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`)
let data=await res.json()

let video=data.data.play

result.innerHTML=`

<img src="${data.data.cover}">

<h2>${data.data.title}</h2>

<video controls autoplay src="${video}"></video>

<a class="download-btn"
href="${video}"
download>
Download Video
</a>

`

}catch(e){

result.innerHTML='Video gagal diproses'

}

}

async function downloadInsta(){

let url=document.getElementById('instaUrl').value
let result=document.getElementById('instaResult')

result.style.display='block'
result.innerHTML='<div class="loading"></div>'

try{

let res=await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`)
let data=await res.json()

let video=data.data.play

result.innerHTML=`

<video controls autoplay src="${video}"></video>

<a class="download-btn"
href="${video}"
download>
Download Video
</a>

`

}catch(e){

result.innerHTML='Video gagal diproses'

}

}

function searchSpotify(){

let query=document.getElementById('spotifyQuery').value
let result=document.getElementById('spotifyResult')

result.style.display='block'

result.innerHTML=`

<h2>${query}</h2>

<a class="download-btn"
href="https://open.spotify.com/search/${encodeURIComponent(query)}"
target="_blank">
Open Spotify
</a>

`

}

function convertYT(){

let result=document.getElementById('ytResult')

result.style.display='block'

result.innerHTML=`

<h2>YTMP3</h2>

<p>Public API MP3 banyak yang tidak stabil.</p>

`

}

function searchMusic(){

let query=document.getElementById('musicQuery').value
let result=document.getElementById('musicResult')

result.style.display='block'

result.innerHTML=`

<h2>${query}</h2>

<a class="download-btn"
href="https://m.youtube.com/results?search_query=${encodeURIComponent(query)}"
target="_blank">
Open Search
</a>

`

}