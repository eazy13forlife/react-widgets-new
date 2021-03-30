import React, { useMemo } from "react";
import { Field, reduxForm } from "redux-form";

import "./Translate.scss";

const renderInput = ({ input }) => {
  return (
    <div className="TranslateSearch__input-container">
      <p className="TranslateSearch__paragraph">Enter Text</p>
      <input
        type="text"
        name="translate search-string"
        className="TranslateSearch__input"
        {...input}
      />
    </div>
  );
};

const returnDebounceFunction = (func, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const TranslateSearchBar = (props) => {
  const onSubmit = (formValues) => {
    props.onFormSubmit(formValues.searchString);
  };

  const setText = useMemo(() => {
    return returnDebounceFunction(props.onInputChange, 500);
  }, [props.onInputChange]);

  console.log(props);
  return (
    <div className="TranslateSearch">
      <form
        action="urlofthepageontheserverthatthisformwillgoto"
        method="post"
        className="TranslateSearch__form"
        onSubmit={props.handleSubmit(onSubmit)}
      >
        <Field
          name="searchString"
          component={renderInput}
          onChange={(event, newValue) => {
            setText(newValue);
          }}
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "TranslateSearchBar",
})(TranslateSearchBar);
