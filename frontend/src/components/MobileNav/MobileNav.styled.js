import styled from 'styled-components'
import { devices } from '../../utils'

const StyledMobileNav = styled.nav`
    display: block;

    @media screen and ${devices.tabletP} {
        display: none;
    }
    .header {
        position: fixed;
        z-index: 100; /* Sit on top */
        width: 100%;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--white);
        transform: translateY${props => {
            if (props.scrollDir === "scrolling up") {return("(0)")}
            else {
                return("(-100%)")
            }
        }};
        transition: .3s ease-in-out;
        .logo {
            svg {
                width: 4rem;
            }
        }
    }
        
    .nav-toggle {
        position: fixed;
        top: 35px;
        right: 35px;
        display: block;
        cursor: pointer;
        width: 1.5rem;
        padding: .8rem;
        z-index: 103;
        /* Animation */
        transform: rotate(0deg);
        transform: translateY${props => {
            if (props.scrollDir === "scrolling down" && props.navOpen === false) {return("(-96px)")}
            else {return("(0)")}
        }};
        transition: .3s ease-in-out;
        @media (max-width:481px)  { 
            /* smartphones, iPhone, portrait 480x320 phones */ 
            right: var(--mobile-margin-width);
        }
        span {
            // display: block;
            position: absolute;
            height: 5px;
            width: 100%;
            background: var(--black);
            left: 0;
            /* Animation */
            transform: rotate(0deg);
            transition: .25s ease-in-out;
            ${({ navOpen }) => {
                if(!navOpen){
                    return `
                        :nth-child(1) {
                            top: 0rem;
                        }
                        :nth-child(2), :nth-child(3) {
                            top: calc(50% - 3px);
                        }
                        :nth-child(4) {
                            top: calc(100% - 6px);
                        }
                    `
                } else {
                    return `
                        background: var(--black);
                        width: 100%;
                        :nth-child(1) {
                            top: calc(50% - 3px);
                            width: 0%;
                            left: 50%;
                        }
                        :nth-child(2) {
                            top: calc(50% - 3px);
                            transform: rotate(45deg);
                        }
                        :nth-child(3) {
                            top: calc(50% - 3px);
                            transform: rotate(-45deg);
                        }
                        :nth-child(4) {
                            top: calc(50% - 3px);
                            width: 0%;
                            left: 50%;
                        }
                    `
                }
            }}
        }
    }
    .overlay{
        height: 100%;
        width: 100%;
        position: fixed; /* Stay in place */
        z-index: 102; /* Sit on top */
        left: 0%;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--off-white);
        overflow-x: hidden;
        transform: ${({ navOpen }) => navOpen ? 'translateX(0)' : 'translateX(+100%)'};
        transition: transform .7s cubic-bezier(.23,1,.32,1);

        .overlay-content {
            display: flex;
            justify-content: center;
            position: relative;
            width: 100%; /* 100% width */
            margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */

            .menu-items {
                display: flex;
                flex-direction: column;
                text-align: left;
                a {
                    text-decoration: none;
                    color: var(--blue);
                    font-weight: 700;
                    font-size: 3.5rem;
                    margin: .3rem 0;
                    transition: color .35s cubic-bezier(var(--transition-length), 1);
                    :hover {
                        color: var(--black)
                    }

                    svg {
                        width: 2rem;
                    }
                }
            }
        }
    }
`

export default StyledMobileNav