const inputEl = document.querySelector('#product-name');
const countEl = document.querySelector('.count');

function updateCount(e) {
  const currentLength = e.target.value.length;
  let remaining = 60 - currentLength;
  countEl.textContent = remaining;

  if (remaining === 0) {
    inputEl.classList.add('error');
    countEl.classList.add('error');
  } else if (remaining <= 10) {
    inputEl.classList.add('warning');
    countEl.classList.add('warning');
    countEl.classList.remove('error');
    inputEl.classList.remove('error');
  } else {
    inputEl.classList.remove('error', 'warning');
    countEl.classList.remove('error', 'warning');
  }
}

inputEl.addEventListener('input', updateCount);
