import React from "react";

export const ReducerAppItem = ({doName}) =>{

    return(
        <li>
            <div className="d-flex justify-content-center align-items-center">
            <span className="aling-self-center pe-2">{doName}</span>            
            <button className="btn btn-danger">X</button>
            </div>
        </li>
    )
}