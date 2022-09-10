import React, {useState} from "react";
import PropTypes from 'prop-types'

export const CreateItemArray = ( {categorias} ) => {
    const [categoriasList, SetCategory] = useState(categorias)
    const [inputvalue, SetInputValue] = useState("")

    const addCategories = (element) =>{
        if(element.value==="")return;
        SetCategory([...categoriasList, element.value])
        SetInputValue("");
    }
    const onInputChange = (event) =>{
        SetInputValue(event.target.value)
    }
    return(
        <>
            <h1>Categorías</h1>
            <ol>
                {
                    categoriasList.map(
                        (categoria, key) =>
                        {
                            return <li key={key}>{categoria}</li>
                        }
                    )
                }
            </ol>
            <input id="M2E2_input_categoria" placeholder="añade tu categoría"
            value={inputvalue} onChange={(event)=>onInputChange(event)}/>
            <button onClick={()=>{addCategories(document.getElementById('M2E2_input_categoria'))}}>añadir</button>
        </>
    )
}
//PROPS VALIDATION
CreateItemArray.propTypes = {
    categorias: PropTypes.array
}

CreateItemArray.defaultProps = {
    categorias: ["Avión","Automotor","Triciclo"]
}

export default CreateItemArray;