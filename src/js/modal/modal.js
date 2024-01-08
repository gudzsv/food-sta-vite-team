const closeModalBtn = document.querySelector('[data-close-modal]');
const backdrop = document.querySelector('[data-backdrop]');
closeModalBtn.addEventListener('click', toogleModal);

export default function toogleModal() {
  backdrop.classList.toggle('is-open');
}
