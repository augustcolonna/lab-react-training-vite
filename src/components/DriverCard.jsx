import React from "react";

function DriverCard ({name, rating, img, car}){

    return (
        <div> 
            <div>
                <img src={img} alt ="" />
            </div>
            <p>{name}</p>
            <p>{rating}</p>
            <p>{car.model} {car.licensePlate}</p>
        </div>

    )
}

export default DriverCard;