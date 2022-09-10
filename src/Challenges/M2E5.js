import React, { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types'
import UseFetch from "./M2E4/M2E4";


export const M2E5 = ({url}) => {
    const DataObj = UseFetch(url);
    return(
        <>
        <h3>{DataObj["load"]===false?"Resultados":"Cargando..."}</h3>
        <blockquote>
            {DataObj.error===null? DataObj["load"]===false? DataObj.data[0].quote || "Cargando cita..." :"Cargando cita..." : DataObj.error}      
        </blockquote>  
        </>
    )
}
M2E5.defaultProps = {
    url: ""
}
export default M2E5;