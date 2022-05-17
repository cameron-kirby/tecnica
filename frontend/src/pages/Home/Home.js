import React from 'react'
import StyledHome from './Home.styled'
// Icons
import { RightArrowAlt } from 'styled-icons/boxicons-regular'
// Images
import services1 from '../../assets/img/home-services-1.jpg'
import services2 from '../../assets/img/home-services-2.jpg'
import services3 from '../../assets/img/home-services-3.jpg'

const Home = () => {

    return (
        <StyledHome>
            <div className='landing'>
                <div className='landing-text'>
                    <h1 className='landing-heading'>Creating customized solutions for</h1>
                    <h1 className='landing-heading'>solving enviornmental problems</h1>
                    <p className='landing-subheading'>Delivering consistent quality products backed by transparent business practice since 1988.<br/> Providing tailor-made solutions that grow your business.</p>
                    <button className='landing-button'>Read more</button>
                </div>
            </div>
            <div className='statement'>
                <h2>We <span className="bold">constantly work</span> towards developing a wider range of <span className='highlight'>cost-effective solutions</span> for our valued customers so as to give <span className="bold">maximum value</span> to their products & business.</h2>
            </div>
            <div className='cutaway'>
                <div className='cutaway-text'>
                    <h2>We are a leading enviornmental service provider</h2>
                </div>
            </div>
            <div className='our-services'>
                <h2 className='services-heading'>Our<br/>Services</h2>
                <div className='services-item-left'>
                    <div className='item-text'>
                        <h3 className='item-heading'>Soil excavation and remediation</h3>
                        <p>Soil excavation and remediation of hazardous substances in the soil 
                            is a major environmental concern for all our clients. 
                            Throughout our 30 years of experience, we have engaged with our 
                            clients to create and implement customized solutions to solve 
                            this environmental problem. With over ten million tons of soil remediation support, 
                            our company serves our clients’ needs in a professional and timely manner.
                        </p>
                        <div className='item-link'>
                            <a href='#' >Learn more<RightArrowAlt/></a>
                        </div>
                    </div>
                    <div className='item-image'>
                        <img src={services1} alt=''></img>
                    </div>
                </div>
                <div className='services-item-right'>
                    <div className='item-image'>
                        <img src={services2} alt=''></img>
                    </div>
                    <div className='item-text'>
                        <h3 className='item-heading'>Abatement services</h3>
                        <p>Tecnica Environmental Services has expertly managed and executed more than 3,000 asbestos, lead abatement and mold remediation projects, which is the equivalent of more than three million hours of work. We are known for executing unique asbestos, lead abatement and mold remediation projects under challenging circumstances delivering on time and on budget.
                        </p>
                        <div className='item-link'>
                            <a href='#' >Learn more<RightArrowAlt/></a>
                        </div>
                    </div>
                </div>
                <div className='services-item-left'>
                    <div className='item-text'>
                        <h3 className='item-heading'>Selective demolition and site preperation</h3>
                        <p>Tecnica Environmental Services has assisted a wide-range of clients in the removal of materials for disposal at sub-title D landfills and backfilling the excavations with virgin stone. We have completed this type of work as part of both asbestos abatement and selective demolition projects.
                        </p>
                        <div className='item-link'>
                            <a href='#' >Learn more<RightArrowAlt/></a>
                        </div>
                    </div>
                    <div className='item-image'>
                        <img src={services3} alt=''></img>
                    </div>
                </div>
            </div>
        </StyledHome>
    )
}

export default Home