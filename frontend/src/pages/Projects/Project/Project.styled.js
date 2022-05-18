import styled from 'styled-components'
import { devices } from '../../../utils'

const StyledProject = styled.div`
    min-height: 50vh;
    padding: 125px var(--mobile-gutter-width) 50px;

    @media screen and ${devices.tabletP} {
        padding: 150px var(--gutter-width) 50px;
    }

    .back {
        text-decoration: none;
        color: var(--black);
        font-size: 1.5rem;
        svg {
            width: 3rem;
        }
    }

    h1 {
        font-size: 3rem;
        line-height: 3.5rem;
        margin: 20px 0 0;

        @media screen and ${devices.tabletP} {
            font-size: 4rem;
            line-height: 5rem;
            margin: 0 0;
        }
    }
    h6 {
        color: var(--text-gray);
        font-size: 2rem;
        line-height: 2.5rem;
        margin: 10px 0 30px;

        @media screen and ${devices.tabletP} {
            font-size: 2rem;
            line-height: 2rem;
            margin: 0 0 50px;
        }
    }

    img {
        /* aspect-ratio: 2/1; */
        object-fit: cover;
        width: 100%;
    }
`

export default StyledProject