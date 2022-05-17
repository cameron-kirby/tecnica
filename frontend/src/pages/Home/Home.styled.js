import styled from 'styled-components'
import landingBG from '../../assets/img/home-landing-bg.jpg'
import cutawayBG from '../../assets/img/home-cutaway-bg.jpg'

const StyledHome = styled.div`
    .landing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${landingBG});
        background-size: cover;
        background-attachment: fixed;

        .landing-text {
            text-align: center;
            .landing-heading {
                font-size: 2.75rem;
                line-height: 2rem;
            }
            .landing-subheading {
                padding: 10px 0 39px;
            }
            .landing-button {
                width: 165px;
                height: 55px;
                border: none;
                background-color: var(--black);
                color: var(--white);
            }
        }
    }
    .statement {
        padding: 135px var(--gutter-width);
        h2 {
            color: var(--text-gray);
            font-size: 3.25rem;
            line-height: 4.5rem;
        }

        .bold {
            color: #000000;
        }

        .highlight {
            background-color: var(--black);
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
        padding: 100px var(--gutter-width);

        .services-heading {
            font-size: 7rem;
            line-height: 7.5rem;
            margin: 0 0 50px;
        }
        .services-item-left {
            width: 100%;
            display: flex;
            flex-direction: row;

            .item-text {
                width: 45%;

                h3 {
                    margin: 0;
                    padding-top: 50px;
                    padding-right: 20%;
                }

                p {
                    margin: 0;
                    padding: 35px 20% 35px 0;
                }

                .item-link {
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
            flex-direction: row;

            .item-text {
                width: 45%;

                h3 {
                    margin: 0;
                    padding-top: 50px;
                    padding-left: 15%;
                }

                p {
                    margin: 0;
                    padding: 35px 15% 35px 15%;
                }

                .item-link {
                    padding-left: 15%;
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
            width: 55%;
            img {
                width: 100%;
            }  
        }
    }
`

export default StyledHome