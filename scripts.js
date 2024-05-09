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
  cartContainer.classList.add("cartRows");
  let cartRow = document.getElementsByClassName("cartRows")[0];
  let cartContents = `
  <div class="container">
    <table class="table">
      <tbody class="cartRows">
          <tr class="cart">
             <td><img src="${imageSrc}" alt="" width="200"  /></td>
            <td>${cartPrice}</td>
            <td>
            <input type="number" class="form-control" value="1">
           </td>
         <td>
          <button class="btn btn-dark cartDelete" type="button">
            X
          </button>
         </td>
          </tr>
      </tbody>
    </table>
  </div>
  `;
  cartContainer.innerHTML = cartContents;
  cartRow.append(cartContainer);
}
