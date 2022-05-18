import styled from 'styled-components'
import { devices } from '../../utils'

const StyledFooter = styled.footer`
    background-color: var(--black);
    color: var(--white);

    .logo-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 25px var(--mobile-gutter-width) 25px;

        @media screen and ${devices.tabletP} {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 25px var(--gutter-width) 25px;
        }
        
        .logo {
            display: flex;
            svg {
                width: 9rem;
                @media screen and ${devices.tabletP} {
                    width: 4rem;
                }
            }
            h2 {
                padding-left: 20px;
            }
        }
        .address {
            a {
                color: var(--white);
                text-decoration: none;
            }
            svg {
                padding-bottom: 4px;
                padding-right: 5px;
                width: 1.3rem;
            }
        }
    }

    .nav-row {
        display: flex;
        
        justify-content: space-between;
        border-top: 1px solid #000000;
        padding: 25px var(--mobile-gutter-width) 25px;
        flex-direction: column;

        @media screen and ${devices.tabletP} {
            padding: 0px var(--gutter-width) 25px;
            flex-direction: row;
        }
        .nav-column {
            display: flex;
            flex-direction: column;
            h2 {
                font-size: 2rem;
            }
            a {
                color: var(--white);
                text-decoration: none;
                font-size: 1.5rem;
                @media screen and ${devices.tabletP} {
                    font-size: 1rem;
                }
            }
            span {
                font-size: 1.5rem;
                @media screen and ${devices.tabletP} {
                    font-size: 1rem;
                }
            }
            svg {
                padding-bottom: 4px;
                padding-right: 5px;
                width: 1.3rem;
            }
        }
    }
    .copyright-row {
        padding: 25px var(--mobile-gutter-width) 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #000000;

        @media screen and ${devices.tabletP} {
            padding: 20px var(--gutter-width) 20px;
            flex-direction: row;
        }

        span {
            font-size: 1rem;
            text-align: center;

            @media screen and ${devices.tabletP} {
                font-size: 1rem;
                text-align: right;
            }
        }

        .builtbyck {
            display: flex;
            align-items: center;
            color: var(--white);
            text-decoration: none;
            padding: 15px 0 0;
            font-weight: 700;

            @media screen and ${devices.tabletP} {
                padding: 0;
            }
        }

        svg {
            padding-left: 10px;
            width: 3rem;
        }
    }
`

export default StyledFooter