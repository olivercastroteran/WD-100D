const inputTxt = document.querySelector('input');
const count = document.querySelector('.count');

inputTxt.addEventListener('input', (e) => {
  const txtStr = e.target.value;
  count.textContent = txtStr.length;

  if (txtStr.length >= 50 && txtStr.length <= 60) {
    inputTxt.classList.add('warning');
    count.classList.add('warning');
  } else if (txtStr.length < 50) {
    inputTxt.classList.remove('warning');
    count.classList.remove('warning');
  }
});
