import {useState} from 'react';
import GifItem from './gifItem';
import UseFetchGif from './useFetchGift' 

export const M2E3 = ({category}) => {
const {images, isLoanding} = UseFetchGif(category);

  return (
    <>
        <h3>{category}</h3>
        <div className='gifgrid'>
            {
                images.map( (image, key) =>{
                    //return <p key={image.id}>{image.title}</p>
                    return <GifItem tkey={key} image={image} />;
                })
            }
        </div>
    </>
    )
}
export default M2E3;

