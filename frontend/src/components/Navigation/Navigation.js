import React from 'react'
import StyledNavigation from './Navigation.styled'
import { Link } from "react-router-dom";
// Icons
import logo from '../../assets/tecnica-logo.svg'
import { Phone, Envelope } from '@styled-icons/boxicons-regular'
import { DiagonalArrowRightUp } from 'styled-icons/evaicons-solid';

const Navigation = () => {

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
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/news">News</Link>
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