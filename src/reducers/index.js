import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import selectedQuestionReducer from "./selectedQuestionReducer.js";
import selectedHeightReducer from "./selectedHeight.js";
import wikiResultsReducer from "./wikiResultsReducer.js";
import wikiAPIErrorReducer from "./wikiAPIErrorReducer.js";

export default combineReducers({
  selected: selectedQuestionReducer,
  selectedHeight: selectedHeightReducer,
  form: formReducer,
  wikiResults: wikiResultsReducer,
  wikiAPIError: wikiAPIErrorReducer,
});
