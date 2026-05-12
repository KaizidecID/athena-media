async function downloadTikTok(){

let url=document.getElementById('tiktokUrl').value
let result=document.getElementById('tiktokResult')

result.style.display='block'
result.innerHTML='<div class="loading"></div>'

try{

let res=await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`)
let data=await res.json()

if(!data.data){

result.innerHTML='Video tidak ditemukan'
return

}

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

if(!data.data){

result.innerHTML='Video tidak ditemukan'
return

}

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

<p>
Feature coming soon
</p>

`

}

async function searchMusic(){

let query=document.getElementById('musicQuery').value
let result=document.getElementById('musicResult')

result.style.display='block'
result.innerHTML='<div class="loading"></div>'

try{

let res=await fetch(`/api/music?q=${encodeURIComponent(query)}`)
let data=await res.json()

if(!data.status){

result.innerHTML='Music tidak ditemukan'
return

}

let videoId=data.url.split('watch?v=')[1]

result.innerHTML=`

<img src="${data.thumbnail}">

<h2>${data.title}</h2>

<p>${data.author}</p>

<iframe
id="ytplayer"
height="220"
src="https://www.youtube.com/embed/${videoId}">
</iframe>

<div style="
display:flex;
gap:10px;
margin-top:15px;
">

<button onclick="playMusic('${videoId}')">
Play
</button>

<button onclick="pauseMusic('${videoId}')">
Pause
</button>

</div>

<a class="download-btn"
href="${data.url}"
target="_blank">
Open YouTube
</a>

`

}catch(e){

result.innerHTML='Search gagal'

}

}

function playMusic(id){

document.getElementById(
'ytplayer'
).src=`https://www.youtube.com/embed/${id}?autoplay=1`

}

function pauseMusic(id){

document.getElementById(
'ytplayer'
).src=`https://www.youtube.com/embed/${id}`

}