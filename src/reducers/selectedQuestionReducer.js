import types from "../actions/types.js";

const selectedQuestionReducer = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_QUESTION:
      return action.payload;
    default:
      return state;
  }
};

export default selectedQuestionReducer;
