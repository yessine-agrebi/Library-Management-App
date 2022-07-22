import Api from "../Axios/Api";

const register = async (user) => {
  return await Api.post("/auth/register", user);
};
const login = async (user) => {
  return await Api.post("/auth/login", user);
};
const logout = async () => {
  localStorage.removeItem("access_token");
};
export const authService = {
  register,
  login,
  logout,
};
