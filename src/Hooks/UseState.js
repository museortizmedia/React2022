import React, {useState} from "react";

const UseStateHook = ({value}) => {
    const [counter, SetCounter] = useState( value );

    const Sumar = () => {
        SetCounter(counter + 1)
    }

    return (
        <>
        <h1>Counter</h1>
        <span>{counter}</span>
        <button onClick={() => Sumar()}>+1</button>
        </>
    )
}
export default UseStateHook;