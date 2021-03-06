import styled from 'styled-components'
import { devices } from '../../utils'
import landingBG from '../../assets/img/home/home-landing-bg.jpg'
import cutawayBG from '../../assets/img/home/home-cutaway-bg.jpg'

const StyledHome = styled.div`
    .landing {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90vh;
        background-color: #378b29;
        background-image: linear-gradient(315deg, rgba(55, 139, 41, 0.75) 0%, rgba(116, 214, 128, 0.75) 74%), url(${landingBG});
        background-size: cover;
        background-attachment: fixed;

        @media screen and ${devices.tabletP} {
            height: 100vh;
        }

        .landing-text {
            color: var(--white);
            padding: 0 var(--mobile-gutter-width) 0;
            text-align: center;
            @media screen and ${devices.tabletP} {
                padding: 0 var(--gutter-width) 5%;
            }
            .landing-heading {
                font-size: 2rem;
                line-height: 2.5rem;
                @media screen and ${devices.tabletP} {
                    font-size: 2.75rem;
                    line-height: 3.25rem;
                }
            }
            .landing-subheading {
                padding: 10px 0 39px;
                font-size: 1rem;
                font-weight: 900;
            }
            .landing-button {
                width: 165px;
                height: 55px;
                border: 4px solid var(--white);
                border-radius: 13px;
                background-color: transparent;;
                color: var(--white);
                font-size: 1rem;
                font-weight: 900;
            }
        }
        svg {
            position: absolute;
            bottom: -1px;
            width: 100%;
        }
    }
    .statement {
        padding: 50px var(--mobile-gutter-width);

        @media screen and ${devices.tabletP} {
            padding: 70px var(--gutter-width) 135px;
        }
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

    .cutaway {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url(${cutawayBG});
        background-size: cover;
        background-attachment: fixed;

        .cutaway-text {
            padding: 100px 0;
            text-align: center;
            color: var(--white);
        }
    }

    .our-services {
        padding: 50px var(--mobile-gutter-width);

        @media screen and ${devices.tabletP} {
            padding: 100px var(--gutter-width);
        }

        .services-heading {
            font-size: var(--mobile-heading-size);
            line-height: 4.5rem;
            margin: 0 0 50px;

            @media screen and ${devices.tabletP} {
                font-size: var(--heading-size);
                line-height: 7.5rem;
                margin: 0 0 50px;
            }
        }
        .services-item-left {
            width: 100%;
            display: flex;
            flex-direction: column;

            @media screen and ${devices.tabletP} {
                flex-direction: row;
            }

            .item-text {
                width: 100%;
                order: 1;

                @media screen and ${devices.tabletP} {
                    width: 45%;
                    order:0;
                }

                h3 {
                    margin: 0;
                    padding-top: 7%;
                    padding-right: 20%;
                }

                p {
                    margin: 0;
                    padding: 35px 20% 35px 0;
                }

                .item-link {
                    padding-bottom: 30px;
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
        .services-item-right {
            width: 100%;
            display: flex;
            flex-direction: column;

            @media screen and ${devices.tabletP} {
                flex-direction: row;
            }

            .item-text {
                width: 100%;

                @media screen and ${devices.tabletP} {
                    width: 45%;
                }

                h3 {
                    margin: 0;
                    padding-top: 50px;
                    @media screen and ${devices.tabletP} {
                        padding-left: 15%;
                    }
                }

                p {
                    margin: 0;
                    padding: 35px 0;
                    @media screen and ${devices.tabletP} {
                        padding: 35px 15% 35px 15%;
                    }
                }

                .item-link {
                    padding-bottom: 30px;
                    @media screen and ${devices.tabletP} {
                        padding-left: 15%;
                    }
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
        .item-image {
            width: 100%;

            @media screen and ${devices.tabletP} {
                width: 55%;
            }

            img {
                width: 100%;
            }
        }
    }

    .why {
        padding: 50px var(--mobile-gutter-width);

        @media screen and ${devices.tabletP} {
            padding: 100px var(--gutter-width);
        }
        .why-heading {
            h2 {
                font-size: var(--mobile-heading-size);
                line-height: 1rem;

                @media screen and ${devices.tabletP} {
                    font-size: var(--heading-size);
                    line-height: 3rem;
                }
            }  
        }

        .row {
            padding: 5% 0;
        }

        .row-image {
            img {
                width: 100%;
                height: 40vh;
                object-fit: cover;
            }
        }

        .row-three-column {
            display: flex;
            flex-direction: column;

            @media screen and ${devices.tabletP} {
                flex-direction: row;
                border-bottom: 1px solid var(--border);
            }

            div:nth-child(1)  {
                width: 100%;
                padding: 3% 5% 5% 0;

                @media screen and ${devices.tabletP} {
                    width: 28%;
                }
            }
            div:nth-child(2) {
                width: 100%;
                padding: 3% 5% 5% 0;
                
                @media screen and ${devices.tabletP} {
                    width: 44%;
                    padding: 3% 5% 5% 5%;
                    border-left: 1px solid var(--border);
                    border-right: 1px solid var(--border);
                }
            }
            div:nth-child(3)  {
                width: 100%;
                padding: 3% 5% 5% 0;

                @media screen and ${devices.tabletP} {
                    width: 28%;
                    padding: 3% 0% 5% 5%;
                }
            }
        }
    }
`

export default StyledHome