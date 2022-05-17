import styled from 'styled-components'

const StyledAbout = styled.div`
    padding: 150px var(--gutter-width) 100px;

    .about-landing {
        display: flex;
        flex-direction: row;
        .heading {
            width: 50%;
            font-size: 7rem;
            line-height: 7.5rem;
            margin: 0 0 50px;
        }

        .landing-text {
            width: 60%;
            padding-left: 50px;
            h2 {
                margin: 0;
                padding-top: 20px;
                font-size: 2.3rem;
                line-height: 2.8rem;
            }
        }
    }
    
    .team {
        padding-top: 100px;
        .team-container {
            padding: 50px 10px 15px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            background-color: var(--off-white);
            border-radius: 13px;

            .member {
                width: 50%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                padding-bottom: 35px;

                .member-image {
                    width: 35%;
                    

                    img {
                        width: 100%;
                        border-radius: 50%;
                    }
                }

                .member-info {
                    width: 50%;
                    display: flex;
                    flex-direction: column;

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
        padding-top: 50px;

        h2 {
            font-size: 4rem;
        }

        p {
            width: 80%;
        }
    }
`

export default StyledAbout