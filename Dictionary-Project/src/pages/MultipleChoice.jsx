import { useEffect } from "react";
import { useState } from "react";

const MultipleChoice = ({ tag }) => {
  // make sure we're passing tag as a param at the end
  // why can't we set an object as the state variable
  //look this up, it seems complicated

  const [fourWords, setFourWords] = useState([]);
  const [definitions, setDefinitions] = useState([])
  var randNum = Math.floor(Math.random() * 4);


  URL = `https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice?tag=${tag}`;
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setFourWords(data);
        const defs = data.map((item) => item.definition);
        setDefinitions(defs);
      });
  }, [tag]);

  return (
    <div>
      {fourWords.map((word, index) => {
        return <div key={index}> <br /> <button>{word.word}</button></div>;

      })}
{definitions[randNum]}
    </div>
  );
};

export default MultipleChoice;
