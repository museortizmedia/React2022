import { useRef } from "react";
export const FocusScreen = () =>{
    const inpuntRef = useRef();
    const onClick = () =>{
        inpuntRef.current.select()
        console.log(inpuntRef) //objeto con clave current
        console.log(inpuntRef.current) //elelemnto html
        console.log(inpuntRef.current.value) //valor del input
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input
            ref={inpuntRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
            />
            <button
            className="btn btn-blue"
            onClick={()=> onClick()}
            >Focus</button>
        </>
    )
}