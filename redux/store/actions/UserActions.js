export const LoginUser = (data) => {
    return {
      type: "LOGIN_SUCCESS",
      payload: data,
    };
  };
  export const LogoutUser = (data) => {
    return {
      type: "LOGOUT_SUCCESS",
      payload: data,
    };
  };
  export const RegistUser = (data) => {
    return {
      type: "REGISTER_SUCCESS",
      payload: data,
    };
  };
  