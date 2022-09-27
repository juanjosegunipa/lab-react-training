function BoxColor(props) {
    let red = props.r;
    let green = props.g;
    let blue = props.b;
    return (
        <div style={{
            border: "1px solid black",
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            margin: "5px 500px 10px 500px",
            padding: "70px",
            color: "white",
            fontSize: "50px"
        }}>
            rgb({red},{green},{blue})
        </div>
    );
}

export default BoxColor;