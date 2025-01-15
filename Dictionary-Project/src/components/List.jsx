import { useEffect, useState } from "react";

const url = "https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice?tag=geology"

function List (){
    
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
        
        </>
    );
}