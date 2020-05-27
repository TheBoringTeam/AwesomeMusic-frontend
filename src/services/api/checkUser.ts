import authMe from "./authMe";
import Cookies from "js-cookie";

const checkUser = async (setUser: Function) => {
  if (Cookies.get("token")) {
    authMe(Cookies.get("token")!)
      .then((data) =>
        setUser({ guest: false, username: data.username, email: data.email })
      )
      .catch((err) => console.log(err));
  }
};

export default checkUser;
