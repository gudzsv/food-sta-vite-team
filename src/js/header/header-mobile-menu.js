// Mobile-menu Nelli Diachkina //
const burgerBtn = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.mobile-menu');
burgerBtn.addEventListener('click', () => toggleMenu(mobileNav));
mobileNav.addEventListener('click', handleModalButtonClick);
function toggleMenu(element) {
  element.classList.toggle('is-open');
}
function handleModalButtonClick(e) {
  const target = e.target.closest('.modal-btn');
  if (!target) return;

  const modal = e.currentTarget;
  toggleMenu(modal);
}
