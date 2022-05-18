import React from 'react'
import StyledNavigation from './Navigation.styled'
import { Link, useLocation } from "react-router-dom";
// Icons
import logo from '../../assets/tecnica-logo.svg'
import { Phone, Envelope } from '@styled-icons/boxicons-regular'
import { DiagonalArrowRightUp } from 'styled-icons/evaicons-solid';

const Navigation = () => {
    let location = useLocation();

    return (
        <StyledNavigation>
            <div className='top-bar'>
                <div className='menu'>
                    <div className='menu-item'>
                        <Phone/> 
                        <span>(630) 655-9455</span>
                    </div>
                    <div className='menu-item'>
                        <Envelope/> 
                        <span>info@tecnicaenviro.com</span>
                    </div>
                </div>
            </div>
            <div className='bottom-bar'>
                <div className='menu'>
                    <Link to="/" className={(location.pathname==="/") ? "isActive": ""}>Home</Link>
                    <Link to="/about" className={(location.pathname==="/about") ? "isActive": ""}>About</Link>
                    <Link to="/services" className={(location.pathname==="/services") ? "isActive": ""}>Services</Link>
                    <Link to="/projects" className={(location.pathname==="/projects") ? "isActive": ""}>Projects</Link>
                    <Link to="/news" className={(location.pathname==="/news") ? "isActive": ""}>News</Link>
                    <Link to="/contact">
                        <div className='contact-button'>
                            <span>Contact</span>
                            <DiagonalArrowRightUp/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
        </StyledNavigation>
    )
}

export default Navigation