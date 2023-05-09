import React from "react";

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    let cardStyle = {
        backgroundColor: {bgColor},
        color: {color}
    }

    return (
        <div style={cardStyle} className="card">
            <div>
                {type}
            </div>
            <div>
                {number}
            </div>
            <div>
                <p> Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p> {owner}</p>
            </div>
        </div>
    )
}

export default CreditCard