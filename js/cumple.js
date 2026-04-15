// MÚSICA 
const audio    = document.getElementById('musica');
const musicBtn = document.getElementById('musicBtn');
let musicaActiva = false;

// MÚSICA INICAL
audio.volume = 0.3;

// MÚSICA TOGGLE
function toggleMusica() {
  if (musicaActiva) {
    audio.pause();
    musicBtn.textContent = '🔇 Música';
    musicaActiva = false;
  } else {
    audio.play().then(() => {
      musicBtn.textContent = '🔊 Música';
      musicaActiva = true;
    }).catch(() => {
      musicBtn.textContent = '⚠️ Sin audio';
    });
  }
}

// MÚSICA AUTO-PLAY
window.addEventListener('load', () => {
  audio.play().then(() => {
    musicBtn.textContent = '🔊 Música';
    musicaActiva = true;
  }).catch(() => {
    musicBtn.textContent = '▶️ Play música';
  });
});