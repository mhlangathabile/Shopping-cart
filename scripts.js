// Delete Cart
let cartRowsContainer = document.querySelector(".cartRows");

cartRowsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("cartDelete")) {
    event.target.parentElement.parentElement.remove();
    updateCartTotal(); // Call updateCartTotal() to recalculate the total
  }
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

  // Create the HTML content for the cart row
  let cartRowContent = `
    <td class="cartImages"><img src="${imageSrc}" alt="" width="200" /></td>
    <td class="prices">${cartPrice}</td>
    <td><input type="number" class="form-control cartQuantity" value="1"></td>
    <td><button class="btn btn-dark cartDelete" type="button">X</button></td>
  `;

  cartRow.innerHTML = cartRowContent;

  // Get the cartRows element
  let cartRowsContainer = document.querySelector(".cartRows");

  // Append the new cart row to the cartRows container
  cartRowsContainer.appendChild(cartRow);
}

function updateCartTotal() {
  // Select all elements with class 'prices'
  const prices = document.querySelectorAll(".prices");
  // Select all elements with class 'cartQuantity'
  const quantities = document.querySelectorAll(".cartQuantity");

  console.log("Prices:", prices);
  console.log("Quantities:", quantities);

  let total = 0;

  // Determine the shorter array length
  const minLength = Math.min(prices.length, quantities.length);

  // Iterate over each item in the cart
  for (let i = 0; i < minLength; i++) {
    // Get the price and quantity of the current item
    const price = parseFloat(prices[i].textContent.replace("R ", "").trim());
    const quantity = parseInt(quantities[i].value);

    console.log(`Item ${i + 1}: Price = ${price}, Quantity = ${quantity}`);

    // Update the total by adding the price multiplied by the quantity
    total += price * quantity;
  }

  console.log("Total before updating the DOM:", total);

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
