const doesUserLoggedIn = JSON.parse(
  localStorage.getItem("logged-in")
)?.username;
const headerContentContainer = document.getElementById(
  "header-dynamic-container"
);
document.addEventListener("DOMContentLoaded", () => {
  const headerContentContainer = document.getElementById(
    "header-dynamic-container"
  );
  const productsGridContainer = document.querySelector(".product-grid");

  if (headerContentContainer) {
    if (doesUserLoggedIn) {
      const cart =
        JSON.parse(localStorage.getItem(doesUserLoggedIn))?.cart || [];

      headerContentContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="shop-container flex justify-center" style="gap: 7rem;">
              <a href="/futsal.html" class="cart-btn" id="cart">
                <div class="shop-area">
                  <img src="./assets/icons/cartw.png" alt="cart" class="img-area" />
                  <span class="buy-area">سبد خرید<span id="card-badge">&ensp; ${cart.length}</span></span>
                </div>
              </a>
              <button id="logout-button" onclick="logOut()">
                <span>خروج</span>
                <img src="./assets/icons/logout.png" alt="" />
              </button>
            </div>`
      );
    } else {
      headerContentContainer.insertAdjacentHTML(
        "beforeend",
        `<a href="login.html" class="login-btn">
              <img src="./assets/icons/user.png" alt="" />
              <span class="hover">ورود</span>
            </a>`
      );
    }
  } else {
    console.error("not found.");
  }
});
