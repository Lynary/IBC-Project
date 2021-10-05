export const LoginUser = (data) => {
    return {
      type: "LOGIN_SUCCESS",
      payload: data,
    };
  };
  export const LogoutUser = () => {
    return {
      type: "LOGOUT_SUCCESS",
      payload: null,
    };
  };
  export const RegistUser = (data) => {
    return {
      type: "REGISTER_SUCCESS",
      payload: data,
    };
  };
  