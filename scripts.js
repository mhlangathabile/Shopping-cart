// Delete Cart
let deleteCartButton = document.querySelectorAll(".cartDelete");
for (let i = 0; i < deleteCartButton.length; i++) {
  let button = deleteCartButton[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}

// Add To Cart Button
let addToCart = document.querySelectorAll("#addToCart");
for (let i = 0; i < addToCart.length; i++) {
  let button = addToCart[i];
  button.addEventListener("click", addToCartButton);
}

function addToCartButton(event) {
  let button = event.target;
  let cartItem = button.parentElement.parentElement.parentElement;
  let imageSrc = cartItem.getElementsByClassName("images")[0].src;
  let cartPrice = cartItem.querySelector(".prices").innerText;
  console.log(imageSrc, cartPrice);
  addToCartItem(imageSrc, cartPrice);
}

function addToCartItem(imageSrc, cartPrice) {
  let cartContainer = document.createElement("div");
  let cartItems = document.getElementsByClassName("cart-container")[0];
  let cartContents = `
   <div class="container">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ITEM</th>
        <th scope="col">PRICE</th>
        <th scope="col">QUANTITY</th>
        <th scope="col">DELETE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 1</td>
        <td>$10.00</td>
        <td>
          <input type="number" class="form-control" value="1">
        </td>
        <td>
          <button class="btn btn-dark cartDelete" type="button">
            X
          </button>
        </td>
      </tr>
      <!-- Add more rows as needed -->
    </tbody>
  </table>
</div>

  `;
  cartContainer.innerHTML = cartContents;
  cartItems.append(cartContainer);
}
