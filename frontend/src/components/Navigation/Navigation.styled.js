import styled from 'styled-components'
import { devices } from '../../utils'

const StyledNavigation = styled.nav`
    display: none;
    position: fixed;
    width: 100%;
    top:0;
    z-index:999;

    @media screen and ${devices.tabletP} {
        display: block;
    }
    .top-bar{
        background-color: var(--black);
        padding: 10px 14%;
        .menu {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .menu-item {
                color: var(--white);
                padding-left: 20px;
                svg {
                    width: 1.3rem;
                }

                span {
                    padding-left: 5px;
                }
            }
        }
    }

    .bottom-bar {
        background-color: var(--white);
        padding: 10px 14%;
        .menu {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: baseline;

            a {
                color: var(--text-gray);
                text-decoration: none;
                padding-left: 20px;
                font-weight: 500;
                transition: var(--transition-length);

                &:hover {
                    color: var(--black);
                }
            }

            .isActive {
                color: var(--black);
            }

            .contact-button {
                display:flex;
                flex-direction: row;
                align-items: center;
                border-radius: 16px;
                padding: 3px 12px;
                background-color: var(--green);
                color: var(--white);
                transition: var(--transition-length);

                &:hover {
                    background-color: var(--green-accent);
                }
                svg {
                    padding-left: 6px;
                    width: 1rem;
                }
            }
        }
    }

    .logo {
        position: absolute;
        height: 100%;
        left: var(--gutter-width);
        top: 0;
        background-color: var(--white);
        padding: 0 10px;
        display: flex;
        align-items: center;

        svg {
            width: 48px;
            path {
                fill: var(--green);
            }
        }
    }
`

export default StyledNavigation