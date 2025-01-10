export const getUserData = () => {
  const data = JSON.parse(localStorage.getItem("users"));
  if (data) {
    return data;
  }
};

export const setUserData = (userList) => {
  return localStorage.setItem("users", JSON.stringify(userList));
};
