const envelope = document.getElementById('envelope');
const action = document.getElementById('action');

function toggleEnvelope() {
  envelope.classList.toggle('open');

  if (envelope.classList.contains('open')) {
    action.textContent = 'Close my mail 💕';
    envelope.setAttribute('aria-expanded', 'true');
  } else {
    action.textContent = 'Open my mail 💌';
    envelope.setAttribute('aria-expanded', 'false');
  }
}

envelope.addEventListener('click', toggleEnvelope);
action.addEventListener('click', toggleEnvelope);
