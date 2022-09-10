import React from "react";
import FetchApi from "./UseFetchApi";
export const UseFetch = (url) => {
    if(url==="")return{"data": {}, "load":false, "error": "se necesita un link api de consulta"}
    const {data, isLoanding, hasError} = FetchApi(url);
    return{"data": data, "load":isLoanding, "error": hasError}
}
export default UseFetch;