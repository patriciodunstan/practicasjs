function removetransition(e) {
    if (e.propertyname !== 'transform') return;// pasalo si no 
    e.target.classList.remove('playing');
  }

  function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`div[data-key="${e.keycode}"]`);
    if (!audio) return; //detiene la funcion para que no siga actuando con cualquier tecla.
    key.classList.add('playing');
    audio.currentTime = 0; //te devuelve la funcion al inicio.
    audio.play();
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitioned', removetransition));
  window.addEventListener('keydown', playsound);