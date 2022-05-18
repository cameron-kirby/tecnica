import styled from 'styled-components'
import { devices } from '../../utils'

const StyledProjects = styled.div`
    .heading-container {
        padding: 125px var(--mobile-gutter-width) 50px;

        @media screen and ${devices.tabletP} {
            padding: 150px var(--gutter-width) 50px;
        }
        .heading {
            font-size: var(--mobile-heading-size);
            line-height: 4.5rem;
            margin: 0 0 20px;

            @media screen and ${devices.tabletP} {
                font-size: var(--heading-size);
                line-height: 7.5rem;
                margin: 0 0 50px;
            }
        }
    }

    .projects-container {
        display: flex;
        flex-direction: column;
        padding: 0 var(--mobile-gutter-width) 100px;

        @media screen and ${devices.tabletP} {
            padding: 0 var(--gutter-width) 100px;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .project {
            width: 100%;
            padding-bottom: 50px;
            @media screen and ${devices.tabletP} {
                width: 49%;
            }
            .project-image {
                img {
                    width: 100%;
                    aspect-ratio: 16/13;
                    object-fit: cover;
                }
            }
            .project-title {
                margin: 0;
            }
            .project-location {
                margin: 0;
                color: var(--text-gray);
            }
            .project-link {
                padding-top: 10px;
                a {
                    text-decoration: none;
                    color: var(--main);

                    svg {
                        padding-bottom: 3px;
                        width: 1.5rem;
                    }
                }
            }
        }
    }
`

export default StyledProjects