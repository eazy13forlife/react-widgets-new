import types from "../actions/types.js";

const wikiResultsReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_WIKI_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export default wikiResultsReducer;
