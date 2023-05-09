import React from "react";

function Greetings ({lang, children}) {
    let greeting = ''
    if(lang === 'de'){
        greeting = "Hallo"
    }else if(lang === 'en'){
        greeting = 'Hi'
    }else if(lang === 'es'){
        greeting = "Eyyyy"
    }else{
        greeting = "Bonjour"
    }
    return (
        <p className='greeting'> {greeting} {children} </p>
    )
}
export default Greetings