import React, {useState} from "react";
import PropTypes from 'prop-types'
export const AdvancedCounter = ({value}) => {
    const [counter, SetCounter] = useState( value );

    const handleAdd = () => {
        SetCounter(counter + 1)
    }
    const handleSubsstract = () => {
        SetCounter(counter - 1)
    }
    const handleReset = () => {
        SetCounter(value)
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
AdvancedCounter.propTypes = {
    value: PropTypes.number.isRequired
}
AdvancedCounter.defaultProps = {
    value: 0
}

export default AdvancedCounter