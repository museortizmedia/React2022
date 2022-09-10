import React, {useState} from "react";
import PropTypes from 'prop-types'
//import AddCategory from "./addCategory";
//import MapCategory from "./mapCategory";
import {AddCategory, MapCategory} from '../Barriles/componentes'


export const AdvancedCategory = ( {categorias} ) => {
    const [categoriasList, SetCategory] = useState(categorias)

    const AddCategories = (value) =>{
        if(value==="")return;
        SetCategory([...categoriasList, value])
    }
    
    return(
        <>
            <h1>Categorías</h1>
            <ol>
                {
                    categoriasList.map(
                        (categoria, key) =>
                        {
                            return <MapCategory key={key} cat={categoria}/>
                        }
                    )
                }
            </ol>
            <AddCategory thefunction={AddCategories}/>
        </>
    )
}
//PROPS VALIDATION
AdvancedCategory.propTypes = {
    categorias: PropTypes.array
}

AdvancedCategory.defaultProps = {
    categorias: ["Avión","Automotor","Triciclo"]
}

export default AdvancedCategory;