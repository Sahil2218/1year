const action = document.getElementById('action');
const mailbox = document.getElementById('mailbox');
const letter = document.getElementById('letter');

function toggleMail() {
  const isOpen = mailbox.classList.toggle('open');

  action.textContent = isOpen ? 'Close the Mail' : 'Open the Mail';
  action.setAttribute('aria-expanded', String(isOpen));
  letter.setAttribute('aria-hidden', String(!isOpen));

  if (isOpen) {
    setTimeout(() => {
      letter.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 200);
  }
}

action.addEventListener('click', toggleMail);
