import { useEffect } from "react"
import { useState } from "react"


const MultipleChoice = ({tag}) => {
    // make sure we're passing tag as a param at the end
    // why can't we set an object as the state variable
        //look this up, it seems complicated

    const [fourWords, setFourWords] = useState([]);

    URL = `https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice?tag=biology`
    useEffect(() => {
        fetch(URL).then((response) => response.json())
        .then((data) => {
             setFourWords(data);
        })
    }, [])

    const wordOne = fourWords;

    return (
        <div>
            {console.log({wordOne})}
            {wordOne}
        </div>
    )

}

export default MultipleChoice