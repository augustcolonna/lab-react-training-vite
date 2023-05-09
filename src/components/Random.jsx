import React from "react";

function Random ({min, max}){

    let randomNumber = Math.floor(Math.random() * ((max-min) + 1));
    
    return (
        <p> Random value between {min} and {max} is {randomNumber} </p>
    ) 
}

export default Random
