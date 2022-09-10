import React from "react";

export const MapCategory = ( {tkey, cat} ) => {

    return(
        <>
            <li key={tkey} categoria={cat}>{cat}</li>
        </>
    )
}
export default MapCategory;