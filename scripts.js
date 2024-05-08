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
}

function addToCartItem(imageSrc, cartPrice) {
  let cartRow = document.createElement("div");
  let;
}
