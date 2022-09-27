const IdCard = (props) => {
    return (
        <div className="idCard">
            <div className="text">
                <p className="lastName"><span className="subs">Last name:</span> <span className="props">{props.lastName}</span></p>
                <p className="firstName"><span className="subs">First name:</span> <span className="props">{props.firstName}</span></p>
                <p className="gender"><span className="subs">Gender:</span> <span className="props">{props.gender}</span></p>
                <p className="height"><span className="subs">Height:</span> <span className="props">{props.height}</span></p>
                <p className="birth"><span className="subs">Birth:</span> <span className="props">{props.birth.toString().slice(0, 15)}</span></p>
            </div>
            <div className="picture">
                <img src={props.picture} alt="profile-picture" />
            </div>
        </div>

    );
}

export default IdCard;