import Product from "./Product";
import React from "react";
import {SwiperSlide, Swiper}  from 'swiper/react';

const ProductList = (props) => {
    return(
        <>
         <Swiper slidesPerView={1} spaceBetween={5} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        
                        }} breakpoints={{
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 4,
                            "spaceBetween": 50
                        }
                        }} className="mySwiper py-5">
            {props.products.map((item)=> (
               <SwiperSlide className='py-2'>
                    <Product data={item} />
               </SwiperSlide>
                )
               
            )} 
         </Swiper>
        </>
    )
    
}

export default ProductList