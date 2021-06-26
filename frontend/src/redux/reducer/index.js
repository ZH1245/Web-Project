import { getToken } from "../../utils/AuthUtil";

var initialState = {
  loggedIn: getToken() != null ? true : false,
  role: "",
  AuthToken: getToken() != null ? getToken() : "",
};
const Authreducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        AuthToken: action.AuthToken,
        loggedIn: true,
        role: action.role,
      };
    }
    case "LOGOUT": {
      console.log("in logout function");
      return {
        loggedIn: false,
        role: "",
        AuthToken: "",
      };
    }

    default:
      return state;
  }
};
export default Authreducer;
