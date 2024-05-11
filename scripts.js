// Delete Cart
let deleteCartButtons = document.querySelectorAll(".cartDelete");
deleteCartButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
});

// Add To Cart Button
let addToCartButtons = document.querySelectorAll(".addToCart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCartButton);
});

function addToCartButton(event) {
  let button = event.target;
  let cartItem = button.parentElement.parentElement;
  let imageSrc = cartItem.querySelector(".images").src;
  let cartPrice = cartItem.querySelector(".prices").innerText;
  console.log(imageSrc, cartPrice);
  addToCartItem(imageSrc, cartPrice);
}

function addToCartItem(imageSrc, cartPrice) {
  let cartRowsContainer = document.querySelector(".cartRows");
  let cartItems = cartRowsContainer.querySelectorAll(".images");
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].src === imageSrc) {
      alert("This item is already added to the cart.");
      return;
    }
  }

  // Create the cart row element
  let cartRow = document.createElement("tr");
  cartRow.classList.add("cart");

  // Create the HTML content for the cart row
  let cartRowContent = `
    <td><img src="${imageSrc}" alt="" width="200" /></td>
    <td>${cartPrice}</td>
    <td><input type="number" class="form-control" value="1"></td>
    <td><button class="btn btn-dark cartDelete" type="button">X</button></td>
  `;

  cartRow.innerHTML = cartRowContent;

  // Append the new cart row to the cartRows container
  cartRowsContainer.appendChild(cartRow);
}
