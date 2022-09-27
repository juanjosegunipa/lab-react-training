import { useState } from "react";

function LikeButton() {
    let colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    let max = colorsArray.length;
    let min = 0
    let bgColor = colorsArray[Number(Math.floor(Math.random() * (max - min)))]
    const [myCount1, currCount1] = useState(0)

    return (
        <div className="likeButton">
            <button onClick={() => currCount1(myCount1 + 1)} style={{
                backgroundColor: bgColor
            }}>{myCount1} likes</button>
        </div>
    );
}

export default LikeButton;