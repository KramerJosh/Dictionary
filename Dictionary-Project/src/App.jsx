// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DictionarySelector from "./components/DictionarySelector";
import MultipleChoice from "./pages/MultipleChoice";

function App() {
  const [tag, setTag] = useState('')
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <DictionarySelector setTag={setTag}/>
    <MultipleChoice tag={tag}/>
    </>
  );
}

export default App;
