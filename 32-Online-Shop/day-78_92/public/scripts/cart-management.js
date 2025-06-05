const addToCartBtn = document.querySelector('#product-details button');
const cartBadge = document.querySelector('.nav-items .badge');

async function addToCart(e) {
  let response;
  try {
    response = await fetch('/cart/items', {
      method: 'POST',
      body: JSON.stringify({
        productId: addToCartBtn.dataset.productid,
        _csrf: addToCartBtn.dataset.csrf,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong');
  }

  const responseData = await response.json();
  const newTotalQuantity = responseData.newTotalItems;

  cartBadge.textContent = newTotalQuantity;
}

addToCartBtn.addEventListener('click', addToCart);
