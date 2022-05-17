import styled from 'styled-components'

const StyledNavigation = styled.nav`
    position: fixed;
    width: 100%;
    top:0;
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
                color: var(--black);
                text-decoration: none;
                padding-left: 20px;
            }

            .contact-button {
                display:flex;
                flex-direction: row;
                align-items: center;
                border-radius: 16px;
                padding: 3px 12px;
                background-color: var(--main);
                color: var(--white);
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

        img {
            width: 48px;
        }
    }
`

export default StyledNavigation