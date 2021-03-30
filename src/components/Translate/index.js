import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar.js";
import Dropdown from "../Dropdown/Dropdown.js";

const languageOptions = [
  {
    label: "German",
    value: "de",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Russian",
    value: "ru",
  },
];
const TranslatePage = () => {
  const [language, setLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTranslatedText = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "dhttps://google-translate20.p.rapidapi.com/translate",
          {
            params: {
              text: text,
              tl: language,
              sl: "en",
            },
            headers: {
              "x-rapidapi-key":
                "f5ccaa0bb8msh63eb609ff46e586p12f55djsn8088bb1da5d6",
              "x-rapidapi-host": "google-translate20.p.rapidapi.com",
            },
          }
        );

        console.log(response);
        setTranslatedText(response.data.data.translation);
      } catch {
        console.log("there was an erro");
      }
      setLoading(false);
    };
    getTranslatedText();
  }, [language, text]);

  const returnTranslatedParagraph = () => {
    // if it is loading, return translatring
    if (loading) {
      return <span className="word">Translating...</span>;
    } else {
      // otherwise, if done, but no language selected, return select a language
      if (text && !language) {
        return <span className="word">Please select a language</span>;
        // otherwise, return whatever the translated text. I'm going to ignore if someone doesn't put text, because obviously you have to put text to translate.
      } else {
        return <span className="word">{translatedText}</span>;
      }
    }
  };
  return (
    <div className="TranslatePage">
      <SearchBar onInputChange={setText} />
      <Dropdown
        title="Select Language"
        options={languageOptions}
        onOptionClick={setLanguage}
      />
      <p className="TranslatePage__translation">
        <span className="u-bold">Translated text:</span>
        <br />
        {returnTranslatedParagraph()}
      </p>
    </div>
  );
};

export default TranslatePage;
