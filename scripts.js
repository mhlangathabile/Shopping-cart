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
   <div class="cart-container">
      <div class="row cart">
        <div class="col-3" id="cartImage"><h2 class="heading">ITEM</h2></div>
        <div class="col-3" id="cartPrice"><h2 class="heading">PRICE</h2></div>
        <div class="col-3" id="cartQuantity">
          <h2 class="heading">QUANTITY</h2>
        </div>
        <div class="col-3" id="cartDelete">
          <h2 class="heading">DELETE</h2>
          <button class="btn btn-dark cartDelete" id="cartDelete" type="button">
            X
          </button>
        </div>
      </div>
    </div>
  `;
  cartContainer.innerHTML = cartContents;
  cartItems.append(cartContainer);
}
