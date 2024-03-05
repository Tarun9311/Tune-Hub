const songs = [
  'Daku.mpeg',
  's3.mpeg',
  's4.mpeg',
  ];
  
  let currentSongIndex = 0;
  const audioPlayer = document.getElementById('audioPlayer');
  const progressBar = document.getElementById('progress');
  
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
    }
  }
  
  function previous() {
    if (currentSongIndex > 0) {
      currentSongIndex--;
      audioPlayer.src = songs[currentSongIndex];
      audioPlayer.play();
    }
  }
  
  function updateProgressBar() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
  }
  
  document.getElementById('playButton').addEventListener('click', play);
  document.getElementById('pauseButton').addEventListener('click', pause);
  document.getElementById('nextButton').addEventListener('click', next);
  document.getElementById('prevButton').addEventListener('click', previous);
  