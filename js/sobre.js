function abrirSobre() {
  const envelope = document.getElementById('envelope');
  const overlay  = document.getElementById('overlay-transicion');

  if (envelope.classList.contains('abierto')) return;
  envelope.classList.add('abierto');

  setTimeout(() => {
    envelope.style.transition = 'transform 0.8s ease, opacity 0.5s ease'; 
    envelope.style.transform  = 'scale(4)';
    envelope.style.opacity    = '0';

    setTimeout(() => {
      overlay.classList.add('activo');

      setTimeout(() => {
        window.location.href = './html/cumple.html';
      }, 650);
    }, 300);

  }, 100);
}

function abrirSobre2() {
  const envelope = document.getElementById('envelope2');
  const overlay  = document.getElementById('overlay-transicion');

  if (envelope.classList.contains('abierto')) return;
  envelope.classList.add('abierto');

  setTimeout(() => {
    envelope.style.transition = 'transform 0.8s ease, opacity 0.5s ease'; 
    envelope.style.transform  = 'scale(20)';
    envelope.style.opacity    = '0';

    setTimeout(() => {
      overlay.classList.add('activo');

      setTimeout(() => {
        window.location.href = 'pag1.html';
      }, 700);
    }, 400);

  }, 100);
}