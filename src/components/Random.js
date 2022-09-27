const Random = (props) => {
    let min = Number(props.min)
    let max = Number(props.max)
    let random = Number(Math.floor(Math.random() * (max - min) + min))
    return (
        <div className="random">
            Random number between {min} and {max} is {random}
        </div>
    );
}

export default Random;