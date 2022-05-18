import React from 'react'
import { Link } from 'react-router-dom'
import StyledFooter from './Footer.styled'
// Icons
import { ReactComponent as Logo } from '../../assets/tecnica-logo.svg'
import { ReactComponent as CKLogo } from '../../assets/ck-logo.svg'
import { DiagonalArrowRightUp } from 'styled-icons/evaicons-solid';
import { PinOutline } from 'styled-icons/evaicons-outline';
import { Phone, Envelope, Printer } from '@styled-icons/boxicons-regular'

const Footer = () => {
    return (
        <StyledFooter>
            <div className='logo-row'>
                <div className='logo'>
                    <Logo/>
                    <h2>Tecnica Environmental Services</h2>
                </div>
                <div className='address'>
                    <Link to='/'>
                        <PinOutline/>
                        <span>16W066 Jeans Rd Lemont, Illinois 60439</span>
                    </Link>
                </div>
            </div>
            <div className='nav-row'>
                <div className='nav-column'>
                    <h2>Pages</h2>
                    <Link to='/'>Home<DiagonalArrowRightUp/></Link>
                    <Link to='/'>About<DiagonalArrowRightUp/></Link>
                    <Link to='/'>Services<DiagonalArrowRightUp/></Link>
                    <Link to='/'>Projects<DiagonalArrowRightUp/></Link>
                    <Link to='/'>News<DiagonalArrowRightUp/></Link>
                    <Link to='/'>Contact<DiagonalArrowRightUp/></Link>
                </div>
                <div className='nav-column'>
                    <h2>Services</h2>
                    <Link to='/'>Soil remediation<DiagonalArrowRightUp/></Link>
                    <Link to='/'>Abatement services<DiagonalArrowRightUp/></Link>
                    <Link to='/'>Selective demolition<DiagonalArrowRightUp/></Link>
                </div>
                <div className='nav-column'>
                    <h2>Contact</h2>
                    <span><Phone/>(630) 655-9455</span>
                    <span><Printer/>(630) 655-3138</span>
                    <span><Envelope/>info@tecnicaenviro.com</span>
                    
                </div>
            </div>
            <div className='copyright-row'>
                <span>Copyright © 2022 Tecnica Environmental Services Inc. | All Rights Reserved</span>
                <a href='https://www.cameronkirby.dev/' target='_blank' rel='noreferrer' className='builtbyck'>
                    <span>Built by Cameron K.</span>
                    <CKLogo/>
                </a>
            </div>
        </StyledFooter>
    )
}

export default Footer