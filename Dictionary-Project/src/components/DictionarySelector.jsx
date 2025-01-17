import React, { useEffect, useState } from "react";
// import { DictionaryContext } from "./DictionaryContext";
// import { use } from "react";

const DictionarySelector = () => {
  const [topic, setTopic] = useState("");
  const [dictionaries, setDictionaries] = useState([]);

  useEffect(() => {
    fetch(
      `https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multi-details`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.dictionaries);
        setDictionaries(data.dictionaries || []);
      });
  }, []);

  // const { topic, handleTopic, setTopic} =
  //   useContext(DictionaryContext);
  return (
    <>
      <div>
        <h1>Dictionary Selector</h1>
        {dictionaries.map((dictionary, index) => {
          <button key={index} onClick={() => setTopic(dictionary.tags)}>
            {dictionary.title}
          </button>;
        })}
      </div>
    </>
  );
};

export default DictionarySelector;

/* <button onClick={() => handleTopic("biology")}>Biology</button>
      <button onClick={() => handleTopic("chemistry")}>Chemistry</button>
      <button onClick={() => handleTopic("geology")}>Geology</button>
      <button onClick={() => handleTopic("medical")}>Medical Terms</button>{" "} */
