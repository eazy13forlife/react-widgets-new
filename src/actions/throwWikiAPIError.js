import types from "./types.js";
const throwWikiAPIError = (boolean) => {
  return {
    type: types.THROW_WIKI_API_ERROR,
    payload: boolean,
  };
};
export default throwWikiAPIError;
