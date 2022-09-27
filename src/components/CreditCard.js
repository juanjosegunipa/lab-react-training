import visaImage from '../assets/images/visa.png'
import masterImage from '../assets/images/mastercard.png'

const CreditCard = (props) => {
    let logo;
    if (props.type === "Visa") {
        logo = visaImage
    } else if (props.type === "Master Card") {
        logo = masterImage
    }

    let cardBgColor = props.bgColor;
    let cardColor = props.color;

    return (
        <div className='creditCard'>
            <div className='creditCards' style={{
                color: cardColor,
                backgroundColor: cardBgColor
            }}>
                <div className='logo'>
                    <img src={logo} alt="logo-image" style={{
                        width: 55,
                        height: 33,
                    }} />
                </div>
                <div className='number'>•••• •••• •••• {props.number.slice(props.number.length - 4, props.number.length)}</div>
                <div className='info'>
                    <span>Expires {props.expirationMonth}/{props.expirationYear}</span>
                    <span className='bank'>{props.bank}</span>
                    <div className='owner'>{props.owner}</div>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;