import { useState, useEffect } from "react";
import FetchINTERN from './useApiFetch';

export const FetchApi = (url) => {
    const [dataobj, SetDataObj] = useState({})
    const [loandingobj, SetLoad] = useState(true)
    const [errorobj, SetError] = useState(null)

    const getInfo = async() => {
        //if(url==="")return;
        FetchINTERN(url)
        .then( inf => {
            SetDataObj( inf );
        })
        .catch( error => {
            SetError(error)
        })
        .finally(some=>{
            SetLoad(false)
        })
        
    }

    useEffect( () => {
        getInfo();
    }, [])

    return {
        data: dataobj,
        isLoanding: loandingobj,
        hasError: errorobj
    };
}
export default FetchApi;