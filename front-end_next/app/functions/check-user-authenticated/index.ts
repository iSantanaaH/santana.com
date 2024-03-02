import Cookies from "js-cookie";

export const checkUserAuthenticated = () => {
  const token = Cookies.get("santana.com.token=");
  return !!token;

  // const cookies = document.cookie.split(";");
  // let token = null;

  // for (let i = 0; i < cookies.length; i++) {
  //   const cookie = cookies[i].trim();

  //   if (cookie.startsWith("santana.com.token=")) {
  //     token = cookie.substring("santana.com.token=".length, cookie.length);
  //     break;
  //   }
  //   return !!token;
  // }
};
