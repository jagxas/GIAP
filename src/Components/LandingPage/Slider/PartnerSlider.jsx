import "../Slider/PartnerSlider.css";
import { useState, useEffect, useRef } from "react";

export const PartnerSlider = () => {

    const images = [
        '/teinn.svg',
        '/giap-icon.svg',
        '/teinn.svg',
        '/giap-icon.svg',
        '/teinn.svg',
        '/giap-icon.svg',
        '/teinn.svg',
        '/giap-icon.svg'
        // Add more image URLs as needed
    ];

    useEffect(() => {
        const timer = setInterval(() => {
           const carousel = document.querySelector('.photobanner');
           const scrollPosition = carousel.scrollLeft;
           const maxScroll = carousel.scrollWidth - carousel.clientWidth;
       
           if (scrollPosition >= maxScroll) {
             carousel.scrollLeft = 0;
           } else {
             carousel.scrollLeft += 1;
           }
        }, 10);
       
        return () => clearInterval(timer); // Clear interval on unmount
       }, []);
       

    return (
<div id="container" style={{marginBottom: "20px"}}>
 <div className="photobanner">
    {images.map((img, index) => <img className="lp-partner-img" key={index} src={img} />)}
    
    {images.map((img, index) => <img className="lp-partner-img" key={index} src={img} />)}
 </div>
</div>

    );
};


