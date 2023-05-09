import React from "react";

function Rating ({children}) {
     let starRating = "";
     if(children === 1){
        starRating = "★ ☆ ☆ ☆ ☆ " 
     }else if(children === 2){
        starRating = "★ ★ ☆ ☆ ☆"
     }else if(children === 3){
        starRating = "★ ★ ★ ☆ ☆"
     }else if(children === 4){
        starRating = "★ ★ ★ ★ ☆"
     }else if(children === 5){
        starRating = "★ ★ ★ ★ ★ "
     }
    return (
        <p className="starRating"> Star rating is {starRating} </p>
    )
}

export default Rating 