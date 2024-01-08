const modalForm = document.querySelector('.modal-form');

function formInfo(event) {
  event.preventDefault();
  console.log('User name:', event.target.elements.user_name.value);
  console.log('User phone:', event.target.elements.user_phone.value);
  console.log('User email:', event.target.elements.user_email.value);
  event.target.reset();
}

modalForm.addEventListener('submit', formInfo);
