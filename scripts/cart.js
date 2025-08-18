const loggedInUser = JSON.parse(localStorage.getItem("logged-in"))?.username;

document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.querySelector(".cart-container");
  const cartItemsConteiner = document.querySelector("#cart_items-container");

  if (!cartContainer) {
    console.error("Error: .cart-container element not found!");
    return;
  }

  const loggedInUser = JSON.parse(localStorage.getItem("logged-in"))?.username;

  if (loggedInUser) {
    const cart = JSON.parse(localStorage.getItem(loggedInUser))?.cart;

    cartContainer.insertAdjacentHTML(
      "beforebegin",
      `<p class="font-rokh font-size-2 font-weight-700" id="username">
        welcome dear: ${loggedInUser.toUpperCase()}
      </p>`
    );

    if (cart && cart.length > 0) {
      cart.map(({ name, price, id, img }) => {
        cartItemsConteiner.insertAdjacentHTML(
          "beforeend",
          `
          <div class="cart-item flex justify-between items-center padding-1">
            <img src="${img}" alt="" />
            <p class="font-exo2 text-uppercase">${id}</p>
            <div class="price">
              <p>${price.toLocaleString()} تومان</p>
            </div>
            <div onclick="deleteItem('${id}')">
              <img
                src="./assets/icons/trash.png"
                alt="Delete"
                style="height: 3rem; width: 3rem; cursor: pointer"
              />
            </div>  
          </div>`
        );
      });
    } else {
      cartItemsConteiner.insertAdjacentHTML(
        "beforeend",
        `
        <a href="index.html" id="empty">سبد خرید شما خالی است</a>
      `
      );
    }
  } else {
    location.replace(`${location.origin}/error.html`);
  }
});
