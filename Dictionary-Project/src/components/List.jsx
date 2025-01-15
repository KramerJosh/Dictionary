//TODO: Store the selection from DictionarySelector in a variable that can be accessed from other components (might need to use useContext)
//TODO: use react-router-dom so that we start on the DictionarySelector, then move to this page once a topic is chosen
//TODO: Move the const url declaration to inside of the List component definition, and add a template literal for the tag to match the output of DictionarySelector


import { useEffect, useState } from "react";

const url = `https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice?tag=geology`

function List ({title}){

    

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${url}`)
        .then((response) => {
            if (!response.ok){
                throw new Error('error');
            }
            return response.json();
        })
        .then((data) => setItems(data))
        console.log(items)
    }, [])
    
    return(
        <>
            <h1 className="list-title">{title}</h1>
            <ul className="multiple-choice">
                {items.map((item) => (
                    <li key={item._id}>
                       <button className="answer">{item.word}</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default List