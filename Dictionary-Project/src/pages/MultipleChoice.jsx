import { useEffect } from "react";
import { useState } from "react";

const MultipleChoice = ({ tag }) => {
  // make sure we're passing tag as a param at the end
  // why can't we set an object as the state variable
  //look this up, it seems complicated

  const [fourWords, setFourWords] = useState([]);
  const [definitions, setDefinitions] = useState([]);
  var randNum = Math.floor(Math.random() * 4);
  const [ping, setPing] = useState([]);

  URL = `https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice?tag=${tag}`;
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setFourWords(data);
        const defs = data.map((item) => [item.definition]);
        setDefinitions(defs);
      });
  }, [tag, ping]);

  const checkAnswer = (butNum) => {
    if (randNum === butNum) {
      alert("Correct");
    } else {
      alert("Try again");
    }
  };

  const pingCheck = () => {
    if (ping === 0){
      setPing(1);
      console.log(ping)
    }
    else{
      setPing(0);
      console.log(ping)
    }
  }

  return (
    <div>
           <br />
            {definitions[randNum]}
            <br /> <br />
      {fourWords.map((word, index) => {
        return (
          <div key={index}>

            <button onClick={() => checkAnswer(index)}>{word.word}</button>
          </div>
        );
      })}
      <br /><br />
      <button onClick={() => pingCheck()}>Next Quesiton</button>
      <p>By Samantha, Ryan, Nelson and Josh</p>
    </div>

    
  );
};

export default MultipleChoice;
