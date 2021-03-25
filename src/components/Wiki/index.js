import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchWikiResults } from "../../actions/";
import SearchBar from "../SearchBar/SearchBar.js";
import WikiContainer from "./WikiContainer.js";
import Error from "../Error/Error.js";

const WikiPage = () => {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const wikiResults = useSelector((state) => {
    return state.wikiResults;
  });

  const APIError = useSelector((state) => {
    return state.wikiAPIError;
  });

  useEffect(() => {
    const getWiki = async () => {
      await dispatch(fetchWikiResults("dogs"));
      setLoaded(true);
    };
    getWiki();
  }, [dispatch]);

  const renderedContent = () => {
    console.log(loaded);
    if (!loaded) {
      return null;
    } else if (APIError) {
      return (
        <Error>
          <p>Could not reach server. Please try again.</p>
        </Error>
      );
    } else if (wikiResults.length) {
      return <WikiContainer />;
    } else {
      return (
        <Error>
          <p>There were no results found</p>
        </Error>
      );
    }
  };
  return (
    <div className="WikiPage">
      <SearchBar />
      {renderedContent()}
    </div>
  );
};

export default WikiPage;
