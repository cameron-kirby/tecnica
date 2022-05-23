import { useRef } from 'react'
import StyledContact from "./Contact.styled";
import { AnimatedPage } from '../../components'

// Icons
import { RightArrowAlt } from 'styled-icons/boxicons-regular'

const Contact = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        console.log('name:', firstNameRef.current.value);
        console.log('email:', emailRef.current.value);
        console.log('message:', messageRef.current.value);
    }

    return (
        <AnimatedPage>
        <StyledContact>
            <div className='contact-container'>
                <div className='contact-column'>
                    <h2>We'd love to hear from you</h2>
                </div>
                <div className='contact-form'>
                    <h3>Contact us</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='input-row'>
                            <div className='half-width'>
                                <label htmlFor="name">FIRST NAME</label>
                                <input
                                id="firstname"
                                type="text"
                                ref={firstNameRef}
                                placeholder="Enter your first name"
                                />
                            </div>
                            <div className='half-width'>
                                <label htmlFor="name">LAST NAME</label>
                                <input
                                id="lastname"
                                type="text"
                                ref={lastNameRef}
                                placeholder="Enter your last name"
                                />
                            </div>
                        </div>
                        <div className='input-row'>
                            <div className='half-width'>
                                <label htmlFor="email">EMAIL</label>
                                <input
                                id="email"
                                type="email"
                                ref={emailRef}
                                placeholder="Enter your email"
                                />
                            </div>
                            <div className='half-width'>
                                <label htmlFor="email">PHONE</label>
                                <input
                                id="phone"
                                type="text"
                                ref={phoneRef}
                                placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                        <div className='message'>
                            <label htmlFor="message">MESSAGE</label>
                            <textarea
                            id="message"
                            ref={messageRef}
                            placeholder="Enter your message"
                            />
                        </div>
                        <button type="submit">Submit<RightArrowAlt/></button>
                    </form>
                    <div className='contact-info'>
                        <div className='item'>
                            <span className='label'>EMAIL US</span>
                            <span>info@tecnicaenviro.com</span>
                        </div>
                        <div className='item'>
                            <span className='label'>CALL US</span>
                            <span>(630) 655-9455</span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledContact>
        </AnimatedPage>
    )
}

export default Contact