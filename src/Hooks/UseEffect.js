import React, {useEffect} from "react";

const UseEffectHook = ({category}) => {
    
    useEffect( ()=>{ //solo se mostrará este mensaje cuando se actualicen las varibales observadas
        console.log (category)
    }, []) //variables a mirar, sino hay nada solo se hace 1 vez

    return (
        <>
        </>
    )
}
export default UseEffectHook;