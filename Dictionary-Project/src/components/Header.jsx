function Header({title}) {
    return(
        <>
            <h1 className="title">{title}</h1>
            <button style="background-color: lightblue" className="back-button">Back</button>
        </>
    );
}

export default Header