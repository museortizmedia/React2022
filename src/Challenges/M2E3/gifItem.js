import React, {useEffect, useState} from 'react';

export const GifItem = ({tkey,image}) => {


  return (
    <>
        <p key={tkey}>
        {image.title}
        </p>
    </>
    )
}
export default GifItem;