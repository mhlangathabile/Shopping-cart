let total = 0; // Declare total as a global variable

function updateCartTotal() {
  total = 0;

  // Select all cart rows
  const cartRows = document.querySelectorAll(".cartRows tr");

  cartRows.forEach((row) => {
    // Get the price and quantity of the current item
    const priceElement = row.querySelector(".prices");
    const quantityElement = row.querySelector(".cartQuantity");

    if (priceElement && quantityElement) {
      const price = parseFloat(
        priceElement.textContent.replace("R ", "").trim()
      );
      const quantity = parseInt(quantityElement.value);

      // Update the total by adding the price multiplied by the quantity
      total += price * quantity;
    }
  });

  // Select the element with class 'cartTotalAmount' and update its innerHTML
  document.querySelector(".cartTotalAmount").textContent =
    "R " + total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
  // Update the cart total on page load
  updateCartTotal();

  // Attach event listeners to quantity input fields
  const quantityInputs = document.querySelectorAll(".cartQuantity");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", updateCartTotal);
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
  addToCartItem(imageSrc, cartPrice);
  updateCartTotal(); // Update the cart total after adding an item
}

function addToCartItem(imageSrc, cartPrice) {
  let cartItems = document.querySelectorAll(".cartImages img");
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].src === imageSrc) {
      alert("This item is already added to the cart.");
      return;
    }
  }

  // Create the cart row element
  let cartRow = document.createElement("tr");
  cartRow.classList.add("cart");

  let cartRowContent = `
    <td class="cartImages"><img src="${imageSrc}" alt="" width="200" /></td>
    <td class="prices">${cartPrice}</td>
    <td><input type="number" class="form-control cartQuantity" value="1"></td>
    <td><button class="btn btn-dark cartDelete" type="button">X</button></td>
  `;

  cartRow.innerHTML = cartRowContent;

  let cartRowsContainer = document.querySelector(".cartRows");

  // Append the new cart row to the cartRows container
  cartRowsContainer.appendChild(cartRow);

  // Attach event listener to the new quantity input field
  cartRow
    .querySelector(".cartQuantity")
    .addEventListener("change", updateCartTotal);

  // Attach event listener to the delete button
  cartRow.querySelector(".cartDelete").addEventListener("click", function () {
    cartRow.remove();
    updateCartTotal(); // Recalculate total after removing an item
  });
}

// Delete Cart
let cartRowsContainer = document.querySelector(".cartRows");

cartRowsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("cartDelete")) {
    event.target.parentElement.parentElement.remove();
    updateCartTotal(); // Call updateCartTotal() to recalculate the total
  }
});
