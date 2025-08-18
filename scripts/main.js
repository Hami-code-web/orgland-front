import products from "./constants/product.js";
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
            <a href="cart.html" class="cart-btn" id="cart">
              <div class="shop-area">
                <img src="./assets/icons/cartw.png" alt="cart" class="img-area" />
                <span class="buy-area">سبد خرید<span id="card-badge" class="color-white">&ensp; ${cart.length}</span></span>
              </div>
            </a>
            <button id="logout-button" onclick="openPopUp()">
              <span>خروج</span>
              <img src="./assets/icons/logout.png" alt="" />
            </button>
          </div>`
      );
      products.map((product) => {
        productsGridContainer.insertAdjacentHTML(
          "beforeend",
          `<article class="product-grid-item">
            <img src="${product?.img}" alt="" />
            <p class="text-center padding-1">
              <span class="font-exo2 weight-600 font-size-7">${
                product?.name
              }</span>
            </p>
            <p class="text-center padding-1">
              <span style="font-size: 1.2rem">
                <span style="color: #f5587b; font-size: 1.2rem">
                  ${product?.price.toLocaleString()} &ensp;</span> تومان</span>
              <div class="rating">
                <input value="5" name="rating" id="star5" type="radio">
                <label for="star5"></label>
                <input value="4" name="rating" id="star4" type="radio">
                <label for="star4"></label>
                <input value="3" name="rating" id="star3" type="radio">
                <label for="star3"></label>
                <input value="2" name="rating" id="star2" type="radio">
                <label for="star2"></label>
                <input value="1" name="rating" id="star1" type="radio">
                <label for="star1"></label>
              </div>
            </p>
            <div onclick='addToCart(${product.id},${product.price},"${
            product.name
          }","${product.img}")' class="product-to-cart-section padding-1">
            <button class="font-size-1">افزودن به سبد خرید</button>
          </div>
          </article>`
        );
      });
    } else {
      headerContentContainer.insertAdjacentHTML(
        "beforeend",
        `<a href="login.html" class="login-btn">
            <img src="./assets/icons/user.png" alt="" />
            <span class="hover color-black">ورود</span>
          </a>`
      );

      products.map((product) => {
        productsGridContainer.insertAdjacentHTML(
          "beforeend",
          `<article class="product-grid-item">
          <img src="${product?.img}" alt="" />
          <p class="text-center padding-1">
            <!-- <span>نام</span> -->
            <span class="font-exo2 weight-600 font-size-7"
              >${product?.name}</span
            >
          </p>
          <p class="text-center padding-1">
            <span style="font-size: 1.2rem"
              ><span style="color: #f5587b; font-size: 1.2rem"
                >${product?.price.toLocaleString()} &ensp;</span
              >تومان</span
            >
            <div class="rating">
              <input value="5" name="rating" id="star5" type="radio">
              <label for="star5"></label>
              <input value="4" name="rating" id="star4" type="radio">
              <label for="star4"></label>
              <input value="3" name="rating" id="star3" type="radio">
              <label for="star3"></label>
              <input value="2" name="rating" id="star2" type="radio">
              <label for="star2"></label>
              <input value="1" name="rating" id="star1" type="radio">
              <label for="star1"></label>
            </div>
          </p>
          <div class="product-to-cart-section padding-1" onclick="addToCart(${
            product.id
          },${product.price}, "${product.name}", "${product.img}")">
          <button onclick="goToLogin()">ورود برای خرید</button>
          </div>
        </article>`
        );
      });
    }
  }
});
