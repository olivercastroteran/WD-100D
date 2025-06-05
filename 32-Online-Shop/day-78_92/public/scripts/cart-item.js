const cartItemUpdateForms = document.querySelectorAll('.cart-item-management');

async function updateCartItem(e) {
  e.preventDefault();

  const form = e.target;

  const productId = form.dataset.productid;
  const csrfToken = form.dataset.csrf;
  const quantity = form.firstElementChild.value;

  try {
    const response = await fetch('/cart/items', {
      method: 'PATCH',
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
        _csrf: csrfToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  const responseData = await response.json();
}

cartItemUpdateForms.forEach((form) => {
  form.addEventListener('submit', updateCartItem);
});
