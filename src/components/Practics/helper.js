export const getdata = () => {
  const data = JSON.parse(localStorage.getItem("users"));
  if (data) {
    return data;
  }
};

export const setData = (user) => {
  return localStorage.setItem("users", JSON.stringify(user));
};
