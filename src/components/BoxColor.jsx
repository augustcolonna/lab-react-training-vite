import React from "react"

function BoxColor ({r, g, b}) {
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem'
    }
return (
    <p style={style}> rgb({r},{g},{b}) </p>
)
}

export default BoxColor;