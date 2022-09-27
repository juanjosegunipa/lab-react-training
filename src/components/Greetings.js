function Greetings(props) {
    let myGreeting;
    if (props.lang === "de") {
        myGreeting = "Hallo"
    } else if (props.lang === "fr") {
        myGreeting = "Bonjour"
    } else if (props.lang === "es") {
        myGreeting = "Hola"
    } else {
        myGreeting = "Hello"
    }
    return (
        <div className="greetings">
            <div className="lang">
                {myGreeting} {props.children}
            </div>
        </div>
    );
}

export default Greetings;