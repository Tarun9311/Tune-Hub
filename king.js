let allData1=document.querySelector("#allData1");
let allData2=document.querySelector("#allData2");
let allData3=document.querySelector("#allData3");
let allData4=document.querySelector("#allData4");
let allData5=document.querySelector("#allData5");


let songs = [
  'Maan Meri Jaan.mpeg ',
  'Tu Jana Na Piya.mpeg',
  'Tu Ake Dekh le.mpeg',
  'Teri Ho Na Saki.mpeg',
  'Ektarfa.mpeg',
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.getElementById('progress');
const songNameDisplay = document.getElementById('songName');

function togglePlay() {
  if (audioPlayer.paused) {
      play();
  } else {
      pause();
  }
}

function play() {
  audioPlayer.play();
}

function pause() {
  audioPlayer.pause();
}

function next() {
  if (currentSongIndex < songs.length - 1) {
      currentSongIndex++;
      audioPlayer.src = songs[currentSongIndex];
      audioPlayer.play();
      updateSongName();
  }
}

function previous() {
  if (currentSongIndex > 0) {
      currentSongIndex--;
      audioPlayer.src = songs[currentSongIndex];
      audioPlayer.play();
      updateSongName();
  }
}

function updateProgressBar() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  const progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + '%';
}

function updateSongName() {
  const fileName = songs[currentSongIndex];
  const songName = fileName.split('.')[0];
  songNameDisplay.textContent = songName;
}

document.getElementById('playButton').addEventListener('click', togglePlay);
document.getElementById('pauseButton').addEventListener('click', pause);
document.getElementById('nextButton').addEventListener('click', next);
document.getElementById('prevButton').addEventListener('click', previous);

//Add styling

let S1=document.querySelector("#xyz");

allData1.addEventListener("mouseover",()=>{
  allData1.style.background="rgb(50, 48, 48)";
})
allData1.addEventListener("mouseleave",()=>{
  allData1.style.background="none";
})

allData2.addEventListener("mouseover",()=>{
  allData2.style.background="rgb(51, 50, 50)";
 
})
allData2.addEventListener("mouseleave",()=>{
  allData2.style.background="none";
})

allData3.addEventListener("mouseover",()=>{
  allData3.style.background="rgb(51, 50, 50)";
})
allData3.addEventListener("mouseleave",()=>{
  allData3.style.background="none";
})

allData4.addEventListener("mouseover",()=>{
  allData4.style.background="rgb(51, 50, 50)";
})
allData4.addEventListener("mouseleave",()=>{
  allData4.style.background="none";
})

allData5.addEventListener("mouseover",()=>{
  allData5.style.background="rgb(51, 50, 50)";
})
allData5.addEventListener("mouseleave",()=>{
  allData5.style.background="none";
})


let more=document.querySelector("#more");
more.addEventListener("mouseover",()=>{
  more.style.color="white";
})
more.addEventListener("mouseout",()=>{
  more.style.color="rgb(176, 175, 175)";
})

let play3=document.querySelector("#play3");
allData3.addEventListener("mouseover",()=>{
  play3.style.display="block";
})
allData3.addEventListener("mouseout",()=>{
  play3.style.display="none";
})
let play4=document.querySelector("#play4");
allData4.addEventListener("mouseover",()=>{
  play4.style.display="block";
})
allData4.addEventListener("mouseout",()=>{
  play4.style.display="none";
})
let play5=document.querySelector("#play5");
allData5.addEventListener("mouseover",()=>{
  play5.style.display="block";
})
allData5.addEventListener("mouseout",()=>{
  play5.style.display="none";
})
let play2=document.querySelector("#play2");
allData2.addEventListener("mouseover",()=>{
  play2.style.display="block";
})
allData2.addEventListener("mouseout",()=>{
  play2.style.display="none";
})
let play1=document.querySelector(".play1");
allData1.addEventListener("mouseover",()=>{
  play1.style.display="block";
})
allData1.addEventListener("mouseout",()=>{
  play1.style.display="none";
})

let p1=document.querySelector("#p1");
p1.addEventListener("mouseover",()=>{
  p1.style.height="72px";
  p1.style.width="72px";
})
p1.addEventListener("mouseout",()=>{
  p1.style.height="70px";
  p1.style.width="70px";
})
let shuffle=document.querySelector("#shuffle");
shuffle.addEventListener("mouseover",()=>{
  shuffle.style.color="white";
  })
shuffle.addEventListener("mouseout",()=>{
  shuffle.style.color="rgb(169, 163, 163)";
})








