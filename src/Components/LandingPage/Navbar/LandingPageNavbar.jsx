import { useState, useEffect } from 'react';
import "../Navbar/LandingPageNavbar.css"


export const DropdownMenu = () => {
    return (
        <div className="landing-page-dropdown-menu" id="landing-page-dropdownMenu">
            <div className='landing-page-dropdown-menu-options hoverable-black'>Girişim Rehberi</div>
            <div className='landing-page-dropdown-menu-options hoverable-black'>Forum</div>
            <div className='landing-page-dropdown-menu-options hoverable-black'>Hakkımızda</div>
            <div className='landing-page-dropdown-menu-options hoverable-black'>Oturum Aç</div>
        </div>
    )
}

export const LandingPageNavbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    const handleScreenResize = () => {
        if (window.innerWidth > 1000) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleScreenResize);

        return () => {
            window.removeEventListener('resize', handleScreenResize);
        };
    }, []);

    return (
        <>
        <div className={`landing-page-navbar-div ${isDropdownVisible ? 'active' : ''}`}>
            <img src="/giap-icon2.svg" className="landing-page-navbar-logo"></img>
            <img src={isDropdownVisible ? '/menuIconClose2.svg' : '/menuIconOpen.svg'} className="landing-page-navbar-menu-icon" id="landing-page-navbar-menu-icon" onClick={toggleDropdown}></img>
            <div className="landing-page-desktop-menu">
                <div className='landing-page-desktop-menu-options hoverable-black'>Girişim Rehberi</div>
                <div className='landing-page-desktop-menu-options hoverable-black'>Forum</div>
                <div className='landing-page-desktop-menu-options hoverable-black'>Hakkımızda</div>
            </div>
            <div className='landing-page-login hoverable-black'>
                Oturum Aç
            </div>
            <button className="landing-page-navbar-button-signup">
                <p className="landing-page-navbar-button-signup-font">Üye Ol</p>
            </button>
            {isDropdownVisible && <DropdownMenu />}
        </div>
        </>
    )
}
