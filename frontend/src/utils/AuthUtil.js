const Auth = "AuthToken";
export const saveToken = (token) => {
  localStorage.setItem(Auth, token);
};
export const getToken = () => {
  return localStorage.getItem(Auth);
};
export const delToken = () => {
  localStorage.removeItem(Auth);
};
