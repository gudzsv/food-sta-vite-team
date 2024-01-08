const subscribeForm = document.querySelector('.mail-form');
function formInfo(event) {
  event.preventDefault();
  console.log('User email:', event.target.elements.email.value);
  event.target.reset();
}

subscribeForm.addEventListener('submit', formInfo);
