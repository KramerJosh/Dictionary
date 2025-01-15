import { useEffect, useState } from "react";

const url = "https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice?tag=geology"

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
        .then((data) => setItems(data.results))
        .catch((error) => console.log("error fetching data"))
    })
    
    return(
        <>
            <h1 className="list-title">{title}</h1>
            <ul className="multiple-choice">
                {items.map((item) => (
                    <li>
                        {item.}
                    </li>
                ))}
            </ul>
        </>
    );
}