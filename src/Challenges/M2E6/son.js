import React from "react";
export const Son = ({numero, increment}) => {
    console.log('again reload...')
    return (
        <button
        className="btn"
        onClick={() => { increment(numero)}}
        > {numero} </button>
    )
}
