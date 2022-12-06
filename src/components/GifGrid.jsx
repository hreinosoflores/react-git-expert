//import { useEffect, useState } from 'react';
import React from 'react';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({ images, isLoading });

    // const [images, setImages] = useState([]);

    // const getImages = async () =>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // };

    // useEffect(()=>{
    //     getImages();
    // },[]);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    // images.map(img=>(<li key={img.id}>{img.title}</li>))
                    images.map((image) => (<GifItem key={image.id} {...image} />))
                }
            </div>
        </>
    );
};
