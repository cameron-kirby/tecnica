import styled from 'styled-components'
import { devices } from '../../utils'

const StyledAbout = styled.div`
    
    padding: 125px var(--mobile-gutter-width) 100px;

    @media screen and ${devices.tabletP} {
        padding: 150px var(--gutter-width) 100px;
    }

    .about-landing {
        display: flex;
        flex-direction: column;

        @media screen and ${devices.tabletP} {
            flex-direction: row;
        }
        .heading-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            @media screen and ${devices.tabletP} {
                width: 50%;
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
            img {
                width: 100%;
                height: 250px;
                object-fit: cover;

                @media screen and ${devices.tabletP} {
                    height: 50%;
                }
            }
        }
        

        .landing-text {
            width: 100%;
            @media screen and ${devices.tabletP} {
                width: 60%;
                padding-left: 50px;
            }
            h2 {
                margin: 0;
                padding-top: 20px;
                font-size: 2.3rem;
                line-height: 2.8rem;
            }
        }
    }
    
    .team {
        /* padding-top: 100px; */
        .team-container {
            padding: 50px 10px 15px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            background-color: var(--off-white);
            border-radius: 13px;

            @media screen and ${devices.tabletP} {
                flex-direction: row;
            }

            .member {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                padding-bottom: 35px;

                @media screen and ${devices.tabletP} {
                    width: 50%;
                    flex-direction: row;
                }

                .member-image {
                    width: 75%;
                    padding-bottom: 25px;

                    @media screen and ${devices.tabletP} {
                        width: 35%;
                        padding: 0;
                    }
                    
                    img {
                        width: 100%;
                        border-radius: 50%;
                    }
                }

                .member-info {
                    width: 90%;
                    display: flex;
                    flex-direction: column;

                    @media screen and ${devices.tabletP} {
                        width: 50%;
                    }

                    h3, h4 {
                        margin: 0;
                    }
                    h3 {
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }

    .vision {
        padding-top: 20px;

        @media screen and ${devices.tabletP} {
            padding-top: 50px;
        }

        h2 {
            font-size: 4rem;
        }

        p {
            width: 100%;

            @media screen and ${devices.tabletP} {
                width: 80%;
            }
        }
    }
`

export default StyledAbout