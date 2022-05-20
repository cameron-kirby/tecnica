import styled from 'styled-components'
import { devices } from '../../utils'

const StyledServices = styled.div`
    padding: 125px var(--mobile-gutter-width) 100px;

    @media screen and ${devices.tabletP} {
        padding: 150px var(--gutter-width) 100px;
    }

    .services-landing {
        display: flex;
        flex-direction: column;

        .heading {
            font-size: var(--mobile-heading-size);
            line-height: 4.5rem;
            margin: 0 0 20px;

            @media screen and ${devices.tabletP} {
                font-size: var(--heading-size);
                line-height: 7.5rem;
                margin: 0 0 25px;
            }
        }

        img {
            width: 100%;
            height: 250px;
            object-fit: cover;

            @media screen and ${devices.tabletP} {
                height: 250px;
            }
        }
    }
    .statement {
        h2 {
            color: var(--text-gray);
            font-size: 2rem;
            line-height: 2.5rem;

            @media screen and ${devices.tabletP} {
                font-size: 3.25rem;
                line-height: 4.5rem;
            }
        }

        .bold {
            color: #000000;
        }

        .highlight {
            background-color: var(--green);
            color: var(--white);
        }
    }

    .services-list {
        
    }
`

export default StyledServices