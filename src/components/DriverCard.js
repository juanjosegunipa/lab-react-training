function DriverCard(props) {
    let stars;
    let myRating = Math.round(props.rating);
    if (myRating === 0) stars = "☆☆☆☆☆";
    if (myRating === 1) stars = "★☆☆☆☆";
    if (myRating === 2) stars = "★★☆☆☆";
    if (myRating === 3) stars = "★★★☆☆";
    if (myRating === 4) stars = "★★★★☆";
    if (myRating === 5) stars = "★★★★★";
    return (
        <div className="driverCard">
            <div className="driverInfo">
                <div className="name">{props.name}</div>
                <div className="rating">{stars}</div>
                <div class="car">{props.car.model} - {props.car.licensePlate}</div>
            </div>
            <div>
                <img src={props.img} alt="profile" style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px"
                }} />
            </div>
        </div>
    );
}

export default DriverCard;