import styled from 'styled-components'
import { devices } from '../../utils'

const StyledContact = styled.div`
    padding: 125px var(--mobile-gutter-width) 50px; 

    @media screen and ${devices.tabletP} {
        padding: 150px var(--gutter-width) 50px;
    }
    .contact-container {
        display: flex;
        flex-direction: row;

        .contact-column {
            width: 50%;
            padding: 12px 50px 60px;
            background-color: var(--green);

            h2 {
                font-size: 2.5rem;
                color: var(--white);
            }
        }

        .contact-form {
            width: 50%;
            padding: 12px 50px 60px;

            h3 {
                padding: 30px 0;
                font-size: 1.7rem;
            }

            .input-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-bottom: 15px;
                
                .half-width {
                    width: 48%;
                    display: flex;
                    flex-direction: column;
                    
                    
                }
            }

            label {
                font-size: 0.8rem;
            }
            
            input[type=text], input[type=email], select, textarea {
                font-family: 'Noto Sans', sans-serif;
                width: 100%;
                padding: 12px 0;
                border: none;
                border-bottom: 2px solid #ccc;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 16px;
                resize: vertical;

                &:focus {
                    outline: none;
                    border-bottom: 2px solid var(--black);
                }
            }

            button {
                background-color: transparent;
                color: var(--black);
                border: none;
                padding: 10px 0;
                cursor: pointer;
                font-size: 1.2rem;
                font-weight: 700;
                transition: var(--transition-length);
                svg {
                    width: 1.5rem;
                }

                &:hover {
                    color: var(--green);
                }
            }

            .contact-info {
                padding: 25px 0 0;
                display: flex;
                justify-content: space-between;
                width: 60%;
                .item {
                    display: flex;
                    flex-direction: column;
                    .label {
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
`

export default StyledContact