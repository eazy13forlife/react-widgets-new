import types from "../actions/types.js";

const wikiAPIErrorReducer = (state = false, action) => {
  switch (action.type) {
    case types.THROW_WIKI_API_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default wikiAPIErrorReducer;
