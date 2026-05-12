// public/app.js

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

<p>
Open Spotify Search
</p>

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
Public API MP3 banyak yang tidak stabil.
</p>

`

}

async function searchMusic(){

let query=document.getElementById('musicQuery').value
let result=document.getElementById('musicResult')

result.style.display='block'
result.innerHTML='<div class="loading"></div>'

try{

let res=await fetch(
`https://piped.video/api/v1/search?q=${encodeURIComponent(query)}`
)

let data=await res.json()

let music=data.items ? data.items[0] : data[0]

if(!music){

result.innerHTML='Music tidak ditemukan'
return

}

let title=music.title
let thumb=music.thumbnail || music.thumbnailUrl

let videoId=''

if(music.url){

if(music.url.includes('watch?v=')){
videoId=music.url.split('watch?v=')[1]
}else{
videoId=music.url
.replace('/watch?v=','')
.replace('/','')
}

}else if(music.id){

videoId=music.id

}

result.innerHTML=`

<img src="${thumb}">

<h2>${title}</h2>

<iframe
width="100%"
height="200"
style="
border:none;
border-radius:20px;
margin-top:15px;
"
src="https://www.youtube.com/embed/${videoId}?autoplay=0">
</iframe>

<div style="
display:flex;
gap:10px;
margin-top:15px;
">

<button onclick="
document.querySelector('iframe').src=
'https://www.youtube.com/embed/${videoId}?autoplay=1'
">
Play
</button>

<button onclick="
document.querySelector('iframe').src=
'https://www.youtube.com/embed/${videoId}'
">
Pause
</button>

</div>

<a class="download-btn"
href="https://m.youtube.com/watch?v=${videoId}"
target="_blank">
Open YouTube
</a>

`

}catch(e){

result.innerHTML=`
<h2>Search gagal</h2>
<p>${e.message}</p>
`

}

}