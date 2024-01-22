import "../RedirectBox/LandingPageRedirectBox.css";
import { useState, useEffect } from "react";

export const LandingPageRedirectBox = (Props) => {
    const [orderRight2Left, setOrder] = useState(false);
    const [parts, setParts] = useState([""]);

    useEffect(() => {
        const partsArray = Props.input.split('@');
        setParts(partsArray);
        if (Props.type === 1) {
            setOrder(true);
        }

        else{
            setOrder(false);
        }
    }, [Props.input, Props.type]);

    return (
        <div className={`landing-page-redirect-box`}>
            <div className={`lp-img-con ${orderRight2Left ? '' : 'LPalignOrientationIMG'}`}>
                <img src={Props.imgUrl} className='lp-redirect-imagevector' alt="Vector"></img>
            </div>
            <div className={`lp-txt-con ${orderRight2Left ? '' : 'LPalignOrientation'}`}>
                <p className={`lp-redirect-text-content ${orderRight2Left ? 'LPalignRight' : ''}`}>
                    {parts.map((part, index) => (
                        <span key={index} style={{ fontWeight: index % 2 === 0 ? 400 : 500 }}>
                            {part}
                        </span>
                    ))}
                </p>
                <div className={`lp-redirect-button-container ${orderRight2Left ? 'LPalignRight' : ''}`}>
                    <button className="lp-redirect-button">{Props.buttonText}</button>
                </div>
            </div>
        </div>
    );
};
