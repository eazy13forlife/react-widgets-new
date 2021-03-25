import types from "./types.js";

const selectQuestion = (index) => {
  return {
    type: types.SELECT_QUESTION,
    payload: index,
  };
};

export default selectQuestion;
