import React from "react";
import { ReducerAppItem } from "./item-todo";

export const ReducerAppListado = ({todos}) =>{
    return(
        <div className="col-7 text-center">
            <ul className="list-group-item d-felx justify-content-between">
                {
                    console.log(todos)
                }
                {
                    /*todos.map( (item, key) =>
                    {
                        console.log(item==null)
                        //return <ReducerAppItem doName={item} key={key}/>
                    }
                    )*/
                }
                
            </ul>
        </div>
    )
}

