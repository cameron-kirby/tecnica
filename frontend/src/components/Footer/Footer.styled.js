import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: var(--black);
    color: var(--white);

    .logo-row {
        padding: 25px var(--gutter-width) 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo {
            display: flex;
            svg {
                width: 4rem;
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
        flex-direction: row;
        justify-content: space-between;
        padding: 0 var(--gutter-width) 25px;
        border-top: 1px solid #000000;
        .nav-column {
            display: flex;
            flex-direction: column;
            h2 {
                font-size: 2rem;
            }
            a {
                color: var(--white);
                text-decoration: none;
                font-size: 1rem;
            }
            span {
                font-size: 1rem;
            }
            svg {
                padding-bottom: 4px;
                padding-right: 5px;
                width: 1.3rem;
            }
        }
    }
    .copyright-row {
        padding: 20px var(--gutter-width) 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #000000;

        .builtbyck {
            display: flex;
            align-items: center;
            color: var(--white);
            text-decoration: none;
        }

        svg {
            padding-left: 10px;
            width: 3rem;
        }
    }
`

export default StyledFooter