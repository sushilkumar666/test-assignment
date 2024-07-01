'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Suspense } from 'react';

function Photographs() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://untitled-twkmuar27a-uc.a.run.app/api', {
                    headers: {
                        Authorization: 'Token 97848e8babeb149f26a044838f1fcb6f52d60e7b'
                    }
                });
                setImages(response.data); 
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchData();
    }, []);

    const sliderRef = useRef();

    const settings = {
        dots: images.length > 3, // Show dots only if more than 3 images
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay:true,
        
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: images.length > 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: images.length > 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: images.length > 3
              }
            }
          ]
      };

    return (
       <>
       <Suspense fallback={<p className='text-white'>Loadng ....</p>}>
       <div className="photographs-slider relative">
            <Slider ref={sliderRef} {...settings}>
                {images.map((imageUrl, index) => (
                    <div key={index} className="photograph-slide px-1">
                        <img  src={imageUrl.image_url} alt={`Image ${index}`} className="rounded-md border-white photographImage" />
                    </div>
                ))}
            </Slider>
        </div>
       </Suspense>
       </>
    );
}

export default Photographs;
