

const DictionarySelector = () => {

    const setTopic = (topic) => {
        console.log(topic);
        return(topic)
    }

    return(
    <>
    <button onClick={() => setTopic('biology')}>Biology</button>
    <button onClick={() => setTopic('chemistry')}>Chemistry</button>
    <button onClick={() => setTopic('geology')}>Geology</button>
    <button onClick={() => setTopic('medical')}>Medical Terms</button> //doublecheck param name
    </>
    )
}

export default DictionarySelector;