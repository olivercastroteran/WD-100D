const inputEl = document.querySelector('#product-name');
const countEl = document.querySelector('.count');

function updateCount(e) {
  const currentLength = e.target.value.length;
  let remaining = 60 - currentLength;
  countEl.textContent = remaining;
}

inputEl.addEventListener('input', updateCount);
