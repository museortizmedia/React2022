import React, {useState} from "react";
import PropTypes from 'prop-types'
import UseCounter from "./UseCounter";
export const AdvancedCounterHooked = ({value, increment}) => {
    const [counter, SetCounter] = useState(value);
    const handleAdd = () => {
        SetCounter(UseCounter(value, counter, "1",increment))
    }
    const handleSubsstract = () => {
        SetCounter(UseCounter(value, counter, "2",increment))
    }
    const handleReset = () => {
        SetCounter(UseCounter(value))
    }

    return (
        <>
        <h1>Counter</h1>
        <span>{counter}</span>
        <button onClick={() => handleAdd()}>+1</button>
        <button onClick={() => handleSubsstract()}>-1</button>
        <button onClick={() => handleReset()}>reset</button>
        </>
    )
}
AdvancedCounterHooked.propTypes = {
    value: PropTypes.number.isRequired
}
AdvancedCounterHooked.defaultProps = {
    value: 0,
    increment: 1
}

export default AdvancedCounterHooked