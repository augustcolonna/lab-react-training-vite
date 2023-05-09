import React from "react";

function IdCard ( {props} ){
    const {lastName, firstName, gender, height, birth, picture} = props
    
    return (
    <div className="props">
        <div className="picture">
            <img src="{props.picture}" alt="" />
        </div>
        <div className='information'>
            <h4>First Name: {firstName} </h4>
            <h4>Last Name: {lastName} </h4>
            <h4>Gender: {gender} </h4>
            <h4>Height: {height} </h4>
            <h4>Birth: {birth} </h4>
            <h4>Picture: {picture} </h4>
        </div>
    </div>
    )
}

export default IdCard;