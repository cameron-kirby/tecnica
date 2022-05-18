import React from 'react'
import StyledAbout from './About.styled'
// Images
import sergio from '../../assets/img/about-sergio.jpg'
import aboutLanding from '../../assets/img/about-landing.jpg'

const About = () => {

    return (
        <StyledAbout>
            <section className='about-landing'>
                <div className='heading-container'>
                    <h1 className='heading'>About.</h1>
                    <img src={aboutLanding} alt=''/>
                </div>
                <div className='landing-text'>
                    <h2>Tecnica Environmental Services</h2>
                    <p>Tecnica Environmental Services, Inc. is a full remediation  firm specializing in soil excavation, UST decommissioning, site-preparation and abatement services.</p>
                    <p>For over 30 years, our family-owned professional environmental management and abatement firm has provided reliable, responsive and cost-effective solutions to our clients from government, industrial and private sectors.</p>
                    <p>We collaborate with our clients to find customized solutions that utilize the latest technology, innovations and management techniques.   Throughout our history, we pride ourselves on our reputation of delivering superior service while respecting the health and safety of our employees, clients and environment.</p>
                    <p>Our dedicated, highly trained team delivers our environmental customized services in the most effective and efficient manner.  Each member of our team brings a diverse, specialized background that meets all required professional standards.</p>
                    <p>We are ready to continue to serve our clients with reliable and efficient environmental services for another 30 years.</p>
                </div>
            </section>
            <section className='team'>
                <div className='team-container'>
                    <div className='member'>
                        <div className='member-image'>
                            <img src={sergio} alt=''/>
                        </div>
                        <div className='member-info'>
                            <h3>Mr. Sergio Munoz</h3>
                            <h4>CEO</h4>
                            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit. Sagittis, est, ac proin amet mi nunc.</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member-image'>
                            <img src={sergio} alt=''/>
                        </div>
                        <div className='member-info'>
                            <h3>Mr. Sergio Munoz</h3>
                            <h4>CEO</h4>
                            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit. Sagittis, est, ac proin amet mi nunc.</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member-image'>
                            <img src={sergio} alt=''/>
                        </div>
                        <div className='member-info'>
                            <h3>Mr. Sergio Munoz</h3>
                            <h4>CEO</h4>
                            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit. Sagittis, est, ac proin amet mi nunc.</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member-image'>
                            <img src={sergio} alt=''/>
                        </div>
                        <div className='member-info'>
                            <h3>Mr. Sergio Munoz</h3>
                            <h4>CEO</h4>
                            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit. Sagittis, est, ac proin amet mi nunc.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='vision'>
                <h2>Vision.</h2>
                <p>The health and safety of all concerned parties is always our top priority.  Only the strictest safety and medical surveillance measures are utilized to ensure the protection of the workers, public and outside environment.  All our strengths give you, the client, unmatched quality and service.  It is not enough to simply offer a solution; it is our goal to provide the most effective and efficient solution for each encounter.</p>
            </section>
        </StyledAbout>
    )
}

export default About