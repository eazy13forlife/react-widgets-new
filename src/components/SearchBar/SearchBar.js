import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { fetchWikiResults } from "../../actions/";

import "./SearchBar.scss";

const createInput = ({ input }) => {
  return (
    <input
      type="text"
      name="usr-search-string"
      className="Wiki__input"
      {...input}
      placeholder="Search..."
      autoComplete="off"
    />
  );
};

const returnDebounceFunction = (func, timeout = 500) => {
  //set timer equal to nothing for now;
  let timerId;
  //return a function and we call this function with the arguments of the function we want to calll.
  return (...args) => {
    clearTimeout(timerId);
    //then, we plan to call our function again at the given time.
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const getWikiResults = useMemo(() => {
    return returnDebounceFunction(dispatch, 500);
  }, [dispatch]);

  const onSubmit = () => {
    return;
  };

  return (
    <form
      action="urlofthepageontheserverthathtisformwillgoto"
      method="post"
      className="Wiki__form"
      onSubmit={props.handleSubmit(onSubmit)}
    >
      <Field
        name="searchString"
        component={createInput}
        onChange={(undefined, newValue) => {
          if (newValue) {
            getWikiResults(fetchWikiResults(newValue));
          }
        }}
      />
    </form>
  );
};

export default reduxForm({
  form: "SearchBar",
})(SearchBar);
