import React, {useState} from "react";

export const AddCategory = ( {thefunction} ) => {
    const [inputvalue, SetInputValue] = useState("")

    const onInputChange = (event) =>{
        SetInputValue(event.target.value)
    }
    const mySubmit = (event) => {
        event.preventDefault();
        thefunction(inputvalue);
        SetInputValue('');
    }
    return(
        <>
        <form onSubmit={(event) => {mySubmit(event)}}>
            <input placeholder="añade tu categoría"
            value={inputvalue} onChange={(event)=>onInputChange(event)}/>
        <button type="submit">Añadir</button>
        </form>
        </>
    )
}
export default AddCategory;