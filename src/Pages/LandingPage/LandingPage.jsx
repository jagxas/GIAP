import React, { useEffect, useState } from 'react'

import { LandingPageRedirectBox } from '../../Components/LandingPage/RedirectBox/LandingPageRedirectBox'
import { Typewriter } from '../../Components/LandingPage/Typewriter/Typewriter'
import { PartnerSlider } from '../../Components/LandingPage/Slider/PartnerSlider'
import '../LandingPage/LandingPage.css'

export const LandingPage = () => {

    //Background Scroll Color
    const colors = ["#f9f6ee", "#9ce19c", "#9ce19c","#c7e2eb", "#ffff9a"]; // Define your colors

    useEffect(() => {
        const sections = document.querySelectorAll(".lpScrollSelector");

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const body = document.querySelector("body");

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionBottom = sectionTop + sectionHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const percentage = (scrollPosition - sectionTop) / sectionHeight;
                    const nextIndex = index < colors.length - 1 ? index + 1 : index;
                    const bgColor = interpolateColors(colors[index], colors[nextIndex], percentage);
                    body.style.backgroundColor = bgColor;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [colors]);

    // Function to interpolate between two colors
    function interpolateColors(color1, color2, percentage) {
        const rgb1 = parseColor(color1);
        const rgb2 = parseColor(color2);

        const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * percentage);
        const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * percentage);
        const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * percentage);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function parseColor(color) {
        const element = document.createElement('div');
        element.style.color = color;
        document.body.appendChild(element);
        const computedColor = getComputedStyle(element).color;
        document.body.removeChild(element);
        return computedColor.match(/\d+/g).map(Number);
    }

    return (
        <div className="LandingPage">

            <section className="lpScrollSelector">
                <div className="landing-page-welcome">
                    <div className='landing-page-welcome-text'>
                        <p className='welcome-monochrome'>Girişimci Ağ Platformu<span style={{ fontWeight: 400 }}>'na</span></p>
                        <p className='welcome-colored'>Hoş Geldin!</p>
                    </div>
                </div>
            </section>

            <section>
                <Typewriter/>
            </section>

            <section>
                <div className='landing-page-partnerships'>
                    Paydaşlarımız
                </div>
                <PartnerSlider/>
            </section>

            <section className="lpScrollSelector">
                <div className='landing-page-whattodo'>
                    Burada Ne Yapabilirsin?
                </div>
            </section>

            <section className='lp-rb-container'>
                <section>
                    <LandingPageRedirectBox type={0} input={"Geleceğe@ yön veren@ genç@ girişimcilerin@ arasına katıl!"} buttonText={"Üye Ol"} imgUrl={"/lpVector1.svg"} />
                </section>

                <section className="lpScrollSelector">
                    <LandingPageRedirectBox type={1} input={"Girişimcilerin dünyasına@ bebek adımlarını@ nasıl atacağını@ öğren!"} buttonText={"Girişim Rehberini Keşfet"} imgUrl={"/lpVector2.svg"} />
                </section>

                <section>
                    <LandingPageRedirectBox type={0} input={"Senden@ daha deneyimli@ insanlara sorularını@ özgürce sor!"} buttonText={"Forumu Ziyaret Et"} imgUrl={"/lpVector3.svg"} />
                </section>

                <section className='lpScrollSelector'>
                    <LandingPageRedirectBox type={1} input={"Tüm bunları@ tek kuruş ücret ödemeden@ yap!"} buttonText={"Hakkımızda"} imgUrl={"/lpVector4.svg"} />
                    
                </section>
            </section>

            <section className="lpScrollSelector">
                <div className='landing-page-whattodo' style={{marginTop: "300px"}}>
                    Bize Ulaşın!
                </div>
            </section>

            <section>
                <div style={{height: "450px", width: "100vw", color: "white"}}>
a
                </div>
            </section>

        </div>

    )
}