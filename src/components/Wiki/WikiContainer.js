import React from "react";
import WikiItem from "./WikiItem.js";

import { useSelector } from "react-redux";

const WikiContainer = () => {
  const wikiResults = useSelector((state) => {
    return state.wikiResults;
  });

  const renderedList = wikiResults.map((object) => {
    return (
      <WikiItem
        key={object.pageid}
        title={object.title}
        description={object.snippet}
        id={object.pageId}
      />
    );
  });
  return <div className="WikiContainer">{renderedList}</div>;
};

export default WikiContainer;
