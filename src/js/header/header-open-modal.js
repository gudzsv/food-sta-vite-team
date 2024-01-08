import toogleModal from '../modal/modal';

try {
  document.querySelector('[data-open-order-header]')
    ? document
        .querySelector('[data-open-order-header]')
        .addEventListener('click', toogleModal)
    : console.error(
        "Error file header-open-modal.js: dataattribute ('data-open-order-header') not found"
      );
} catch (error) {
  console.error(
    `Exception Error in file header-open-modal.js: ${error.message}`
  );
}
