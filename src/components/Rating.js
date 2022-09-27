const Rating = (props) => {

    let stars;
    let myRating = Math.round(props.children);
    if (myRating === 0) stars = "☆☆☆☆☆";
    if (myRating === 1) stars = "★☆☆☆☆";
    if (myRating === 2) stars = "★★☆☆☆";
    if (myRating === 3) stars = "★★★☆☆";
    if (myRating === 4) stars = "★★★★☆";
    if (myRating === 5) stars = "★★★★★";

    return (
        <div style={{
            fontSize: "100px"
        }}>
            {stars}
        </div>
    );
}

export default Rating;