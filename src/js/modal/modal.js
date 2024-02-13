const closeModalBtn = document.querySelector('[data-close-modal]');
const backdrop = document.querySelector('[data-backdrop]');

closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick);

function onOpenModal(event) {
  window.addEventListener('keydown', onEscPressKey);
  backdrop.classList.add('is-open');
}

function onCloseModal(event) {
  window.removeEventListener('keydown', onEscPressKey);
  backdrop.classList.remove('is-open');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscPressKey(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

export { onBackdropClick, onCloseModal, onEscPressKey, onOpenModal };
