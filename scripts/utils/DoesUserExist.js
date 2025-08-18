import users from "../constants/users.js";

export const DoesUserExist = (username = "") => {
  let DoesUserExist = false;

  users.forEach((user) => {
    if (user.username == username) {
      DoesUserExist = true;
      return;
    }
  });
  return DoesUserExist;
};

export default DoesUserExist;
