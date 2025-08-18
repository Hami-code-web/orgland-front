// first model
// const eyeicon = document.getElementById("hide-password");
// const password = document.getElementById("password");

// eyeicon.onclick = function () {
//   if (password.type == "password") {
//     password.type = "text";
//     eyeicon.src = "./assets/icons/visible.png";
//   } else if (password.type == "text") {
//     password.type = "password";
//     eyeicon.src = "./assets/icons/unvisible.png";
//   }
// };
// second model
import users from "./constants/users.js";
import DoesUserExist from "./utils/DoesUserExist.js";
import DoesPasswordMatch from "./utils/DoesPasswordMatch.js";
import createLocalStorage from "./utils/createLocalStorage.js";
import createLoginSession from "./utils/createLoginSession.js";

const hidePasswordElement = document.getElementById("hide-password");
const passowordInput = document.getElementById("password");
const loginForm = document.getElementById("login-form");
let isPasswordVisible = false;
hidePasswordElement.addEventListener("click", () => {
  isPasswordVisible = !isPasswordVisible;
  if (isPasswordVisible) {
    hidePasswordElement.src = `${location.origin}/assets/icons/visible.png`;
    passowordInput.setAttribute("type", "text");
  } else {
    hidePasswordElement.src = `${location.origin}/assets/icons/unvisible.png`;
    passowordInput.setAttribute("type", "password");
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;
  const [username, password] = [
    elements.namedItem("username").value || "",
    elements.namedItem("password").value || "",
  ];
  const UserExist = DoesUserExist(username);
  const PasswordMatch = DoesPasswordMatch(username, password);
  if (UserExist) {
    if (PasswordMatch) {
      createLocalStorage(username);
      createLoginSession(username);
      location.replace(`${location.origin}/index.html`);
    } else alert("رمز عبور اشتباه است!");
  } else alert("نام کاربری یافت نشد");

  const checkBox = document.getElementById("check-box");
  if (PasswordMatch && checkBox.checked == false) {
    alert("لطفا قوانین را بپذیرید");
    location.reload();
  }
});
