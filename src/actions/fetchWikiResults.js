import axios from "axios";
import types from "./types.js";
import throwWikiAPIError from "./throwWikiAPIError.js";

const fetchWikiResults = (dogs) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`https:en.wikipedia.org/w/api.php`, {
        params: {
          action: "query",
          list: "search",
          srsearch: dogs,
          origin: "*",
          format: "json",
        },
      });
      console.log(response.data.query.search);
      dispatch({
        type: types.FETCH_WIKI_RESULTS,
        payload: response.data.query.search,
      });
      const APIError = getState().wikiAPIError;
      if (APIError) {
        dispatch(throwWikiAPIError(false));
      }
    } catch {
      dispatch(throwWikiAPIError(true));
    }
  };
};
export default fetchWikiResults;
