import React, {useState, useEffect} from "react";

import "../Typewriter/Typewriter.css"

export const Typewriter = () => {

    const [i, setI] = useState(0);
    const txt = `Azimli gençler bir araya geldi ve girişimcilerin
    ihtiyaç duyduğu içerikleri, duyuruları, Networking olanaklarını
    ve forum platformunu tek çatı altında topladı.\nİhtiyaç duyduğun
    her şey burada.Bizimle olmaya var mısın?`;
    const speed = 30;

    const typeWriter = () => {
        if (i < txt.length) {
            setI(prevI => prevI + 1);
        }
    };

    // Start the typewriter effect when the component mounts
    React.useEffect(() => {
        const timer = setTimeout(typeWriter, speed);
        return () => clearTimeout(timer);
    }, [i]);

    return (
        <div className='lp-typewriter'>
            <p className='lp-typewriter-text' style={{ width: "80vw" }}>
                {txt.slice(0, i)}
            </p>
        </div>
    )
}