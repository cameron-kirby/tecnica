import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import StyledMobileNav from './MobileNav.styled'
// Icons
import { ReactComponent as Logo } from '../../assets/tecnica-logo.svg'
import { Phone, Envelope } from '@styled-icons/boxicons-regular'
import { DiagonalArrowRightUp } from 'styled-icons/evaicons-solid';

const MobileNav = ({ navOpen, setNavOpen }) => {
    const [scrollDir, setScrollDir] = useState("scrolling up");
    let location = useLocation();

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    const handleMenuToggle = () => {
        setNavOpen(prevNavOpen => !prevNavOpen)
    }

    return (
        <StyledMobileNav navOpen={navOpen} scrollDir={scrollDir}>
            <div className="header">
                <Link to="/" className="logo" onClick={navOpen ? handleMenuToggle:undefined}>
                    <Logo/>
                </Link>
            </div>
            <div className="nav-toggle" onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="overlay">
                <div className="overlay-content">
                    <div className="menu-items">
                    <Link to="/" className={(location.pathname==="/") ? "isActive": ""}>Home<DiagonalArrowRightUp/></Link>
                    <Link to="/about" className={(location.pathname==="/about") ? "isActive": ""}>About<DiagonalArrowRightUp/></Link>
                    <Link to="/services" className={(location.pathname==="/services") ? "isActive": ""}>Services<DiagonalArrowRightUp/></Link>
                    <Link to="/projects" className={(location.pathname==="/projects") ? "isActive": ""}>Projects<DiagonalArrowRightUp/></Link>
                    <Link to="/news" className={(location.pathname==="/news") ? "isActive": ""}>News<DiagonalArrowRightUp/></Link>
                    <Link to="/contact" className={(location.pathname==="/contact") ? "isActive": ""}>Contact<DiagonalArrowRightUp/></Link>
                    </div>
                </div>
            </div>
        </StyledMobileNav>
    )
}

export default MobileNav