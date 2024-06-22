import React from "react";

function Card(props){
    return(
        <div className="card">
            <p className="card-name">{props.cardName}</p>
            <p className="card-image">{props.cardImage}</p>
            <p className="card-atk">{props.cardAtk}</p>
            <p className="card-hp">{props.cardHp}</p>
        </div>
    )
}

export default Card