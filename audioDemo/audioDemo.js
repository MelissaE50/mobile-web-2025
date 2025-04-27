const audio = document.getElementById('myAudio');

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// Set duration once loaded
audio.addEventListener('loadedmetadata', () => {
  seek.max = audio.duration;
  durationDisplay.textContent = formatTime(audio.duration);
});

// Update time while playing
audio.addEventListener('timeupdate', () => {
  seek.value = Audio.currentTime;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Seek bar
seek.addEventListener('input', () => {
  audio.currentTime = seek.value;
});

// Play/pause button
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
    playPauseBtn.setAttribute('aria-label', 'Pause');
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
    playPauseBtn.setAttribute('aria-label', 'Play');
  }
});

// Mute toggle
muteToggle.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteToggle.textContent = audio.muted ? '🔇' : '🔊';
  muteToggle.setAttribute('aria-label', audio.muted ? 'Unmute' : 'Mute');
});

// Volume slider
volume.addEventListener('input', () => {
  audio.volume = volume.value;
  video.muted = volume.value == 0;
  muteToggle.textContent = audio.muted ? '🔇' : '🔊';
});

