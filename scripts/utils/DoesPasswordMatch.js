import users from "../constants/users.js";

export const DoesPasswordMatch = (username = "", password = "") => {
  let DoesPasswordMatch = false;

  users.forEach((user) => {
    if (user.username == username && user.password == password) {
      DoesPasswordMatch = true;
      return;
    }
  });
  return DoesPasswordMatch;
};

export default DoesPasswordMatch;
