import React, { createContext, useState } from 'react';

export const DictionaryContext = createContext();

export const DictionaryProvider = ({ children }) => {
  const [topic, setTopic] = useState('biology');

const handleTopic = (topic) => {
  setTopic(topic);
};

//   const biology= () => {
//     setTopic("biology");
//   };

//   const chemistry = () => {
//     setTopic("chemistry");
//   };

//   const geology = () => {
//     setTopic("geology");
//   };

//   const medical = () => {
//     setTopic("medical");
//   };

  return (
    <DictionaryContext.Provider value={{ topic, setTopic, biology, chemistry, geology, medical }}>
      {children}
    </DictionaryContext.Provider>
  );
};
