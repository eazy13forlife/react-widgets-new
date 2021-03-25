import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

import "./Wiki.scss";

const WikiItem = ({ title, description, id }) => {
  return (
    <div className="WikiItem">
      <div className="WikiItem__content">
        <h1 className="WikiIten__header">{title}</h1>
        <p
          className="WikiItem__paragraph"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></p>
      </div>
      <div className="WikiItem__button-container">
        <a href={`https://en.wikipedia.org?curdis=${id}`}>
          <button className="WikiItem__button">Visit</button>
        </a>
      </div>
    </div>
  );
};

export default WikiItem;
