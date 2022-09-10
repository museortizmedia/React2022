import React, {useCallback, useState} from "react";
import {Son} from './son'
export const Father = () => {
    const list = [2,4,6,8,10]
    const [valor, setValor] = useState(0)

    const increment = useCallback((num) => {
        setValor(valor + num)
    },[])

    return(
        <div>
            <h1>Father</h1>
            <p>Total: {valor}</p>
            <hr/>
            {
                list.map ( (n, indx) => {
                    return (
                        <Son
                        key={indx}
                        numero={n}
                        increment={increment}
                        />
                    )
                })
            }
        </div>
    )
}
export default Father;