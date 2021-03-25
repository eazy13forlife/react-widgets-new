import types from "../actions/types.js";

const selectedHeightReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_HEIGHT:
      return action.payload;
    default:
      return state;
  }
};

export default selectedHeightReducer;
