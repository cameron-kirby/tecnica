import React from 'react'
import StyledServices from './Services.styled'
import { AnimatedPage } from '../../components'
// Images
import servicesLanding from '../../assets/img/about/about-landing.jpg'

const Services = () => {

    return (
        <AnimatedPage>
        <StyledServices>
            <section className='services-landing'>
                <h1 className='heading'>Services.</h1>
                <img src={servicesLanding} alt=''/>
                <div className='landing-text'>
                    
                </div>
            </section>
            <section className='statement'>
                <h2>With over <span className='highlight'>30 years experience,</span> we have <span className="bold">successfully delivered</span> results that have met all safety standards while <span className="bold">exceeding</span> our clients’ expectations.</h2>
            </section>
            <section className='services-list'>
                
            </section>
        </StyledServices>
        </AnimatedPage>
    )
}

export default Services