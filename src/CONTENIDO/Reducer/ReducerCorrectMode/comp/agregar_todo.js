import React from "react";
import { useReducer } from "react";
import {TodoReducer} from '../reducer'

export const ReducerAppAgregar = ({add}) =>{

    const onFormSubmit = (event) =>{
        event.preventDefault()

        const newTODO={
            id: new Date().getTime(),
            description: event.target.children[0].value,
            done: false
        }
        
        add(newTODO)
    } 

    return(
        <div className="col-5 text-center">
                <h4>Agregar TODO</h4>
                <form className="d-flex justify-content-center align-items-center" onSubmit={(event)=>onFormSubmit(event)}>
                    <input type="text" className="form-contorl me-2"/>
                    <button type='submit' className="btn btn-outline-primary mt-1">
                        Agregar
                    </button>
                </form>
            </div>
    )
}