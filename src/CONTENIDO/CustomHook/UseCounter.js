import React, {useState} from "react";
import PropTypes from 'prop-types'
export const UseCounter = (origin,value,modo, cant=1) => {

    return modo==="2"?value-cant<=0?0:value-cant:modo==="1"?value+ +cant:origin
}
export default UseCounter;