const initialState = {
  user: [
    {
      username: "mamat",
      password: "garem"
    },
    {
      username: "admin",
      password: "admin"
    },
  ],
  auth: {
    success: false
  }
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        auth: { ...state.auth, success: true }
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        auth: { ...state.auth, success: false }
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: [...state.user, payload]
      };
    default:
      return {
        ...state
      };
  }
};

export default UserReducer;
