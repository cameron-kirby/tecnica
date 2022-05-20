import React from 'react'
import { Link } from 'react-router-dom'
import StyledHome from './Home.styled'
import { range } from "d3-array"
import { Waves } from '../../components'
// Icons
import { RightArrowAlt } from 'styled-icons/boxicons-regular'
// Images
import services1 from '../../assets/img/home/home-services-1.jpg'
import services2 from '../../assets/img/home/home-services-2.jpg'
import services3 from '../../assets/img/home/home-services-3.jpg'
import why from '../../assets/img/home/home-why.jpg'

const initialState = {
    waves: [
        {
            id: "aabbccddeeff11223344",
            data: range(6).map(() => Math.round(Math.random() * 10)),
            curve: "wave",
            color: "#ffffff",
            direction: "up",
            complexity: 6,
            opacity: 100,
        },
    ],
}

const Home = () => {

    return (
        <StyledHome>
            <section className='landing'>
                <div className='landing-text'>
                    <h1 className='landing-heading'>Creating customized solutions for<br/>solving environmental problems</h1>
                    <p className='landing-subheading'>Delivering consistent quality products backed by transparent business practice since 1988.<br/> Providing tailor-made solutions that grow your business.</p>
                    <button className='landing-button'>Read more</button>
                </div>
                <Waves waves={initialState.waves} />
            </section>
            <section className='statement'>
                <h2>We <span className="bold">constantly work</span> towards developing a wider range of <span className='highlight'>cost-effective solutions</span> for our valued customers so as to give <span className="bold">maximum value</span> to their products & business.</h2>
            </section>
            <section className='cutaway'>
                <div className='cutaway-text'>
                    <h2>We are a leading environmental service provider</h2>
                </div>
            </section>
            <section className='our-services'>
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
                            <Link to="/services/soil">Learn more<RightArrowAlt/></Link>
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
                            <Link to="/services/abatement">Learn more<RightArrowAlt/></Link>
                        </div>
                    </div>
                </div>
                <div className='services-item-left'>
                    <div className='item-text'>
                        <h3 className='item-heading'>Selective demolition and site preperation</h3>
                        <p>Tecnica Environmental Services has assisted a wide-range of clients in the removal of materials for disposal at sub-title D landfills and backfilling the excavations with virgin stone. We have completed this type of work as part of both asbestos abatement and selective demolition projects.
                        </p>
                        <div className='item-link'>
                            <Link to="/services/demolition">Learn more<RightArrowAlt/></Link>
                        </div>
                    </div>
                    <div className='item-image'>
                        <img src={services3} alt=''></img>
                    </div>
                </div>
            </section>
            <section className='why'>
                <div className='why-heading'>
                    <h2>Why</h2>
                    <h2>Tecnica?</h2>
                </div>
                <div className='row'>
                    <h3>END-TO-END SOLUTIONS</h3>
                    <p>Working with you as part of your extended team, we get to know your needs and your customer’s challenges, anticipating trends, meeting future demands, and thus we can help you identify and create the precise solutions that you and they require. It’s mainly about providing a service. We need to act fast & in a wise way, providing efficient solutions for our customers.</p>
                </div>
                <div className='row-image'>
                    <img src={why} alt=''></img>
                </div>
                <div className='row-three-column'>
                    <div className='column'>
                        <h3>END-TO-END SOLUTIONS</h3>
                        <p>Working with you as part of your extended team, we get to know your needs and your customer’s challenges, anticipating trends, meeting future demands, and thus we can help you identify and create the precise solutions that you and they require. It’s mainly about providing a service. We need to act fast & in a wise way, providing efficient solutions for our customers.</p>
                    </div>
                    <div className='column'>
                        <h3>END-TO-END SOLUTIONS</h3>
                        <p>Working with you as part of your extended team, we get to know your needs and your customer’s challenges, anticipating trends, meeting future demands, and thus we can help you identify and create the precise solutions that you and they require. It’s mainly about providing a service. We need to act fast & in a wise way, providing efficient solutions for our customers.</p>
                    </div>
                    <div className='column'>
                        <h3>END-TO-END SOLUTIONS</h3>
                        <p>Working with you as part of your extended team, we get to know your needs and your customer’s challenges, anticipating trends, meeting future demands, and thus we can help you identify and create the precise solutions that you and they require. It’s mainly about providing a service. We need to act fast & in a wise way, providing efficient solutions for our customers.</p>
                    </div>
                </div>
                <div className='row'>
                    <h3>END-TO-END SOLUTIONS</h3>
                    <p>Working with you as part of your extended team, we get to know your needs and your customer’s challenges, anticipating trends, meeting future demands, and thus we can help you identify and create the precise solutions that you and they require. It’s mainly about providing a service. We need to act fast & in a wise way, providing efficient solutions for our customers.</p>
                </div>
            </section>
        </StyledHome>
    )
}

export default Home