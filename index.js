const mainBox = document.querySelector('.main-box');
const thankBox = document.querySelector('.thank-box');
const submitButton = document.getElementById('submit');
const rateButton = document.getElementById('rate-btn');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');
// adding click event listner to the submit and rate again buttons

//For Submit button
submitButton.addEventListener('click', () => {
  thankBox.classList.remove('hidden');
  mainBox.classList.add('hidden');
});
//For rate-Again button
rateButton.addEventListener('click', () => {
  thankBox.classList.add('hidden');
  mainBox.classList.remove('hidden');
});
// For rating
rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
  });
});
