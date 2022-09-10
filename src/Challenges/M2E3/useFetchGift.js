import {useEffect, useState} from 'react';
import getPublicGifs from './giphy_api' 
export const UseFetchGif = (category) => {
    const [images, SetImages] = useState([])

    const getImages = async() => {
        const images = await getPublicGifs(category)
        SetImages( images );
    }

    useEffect( () => {
        getImages();
    }, [])

  return {
    images: images,
    isLoanding: false
  }
}
export default UseFetchGif;