import toogleModal from '../modal/modal';

try {
  document.querySelector('[data-open-order-hero]')
    ? document
        .querySelector('[data-open-order-hero]')
        .addEventListener('click', toogleModal)
    : console.error(
        "Error file hero-open-modal.js: dataattribute ('data-open-order-header') not found"
      );
} catch (error) {
  console.error(`Exception Error in file hero-open-modal.js: ${error.message}`);
}
