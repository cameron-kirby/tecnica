import React from 'react'
import { Link } from 'react-router-dom'
import StyledProjects from './Projects.styled'
// Icons
import { RightArrowAlt } from 'styled-icons/boxicons-regular'
// Images
import project1 from '../../assets/img/projects/project-1.jpg'
import project2 from '../../assets/img/projects/project-2.jpg'
import project3 from '../../assets/img/projects/project-3.jpg'
import project4 from '../../assets/img/projects/project-4.jpg'

const Projects = () => {

    return (
        <StyledProjects>
            <div className='heading-container'>
                <h1 className='heading'>Projects.</h1>
            </div>
            <div className='projects-container'>
                <div className='project'>
                    <div className='project-image'>
                        <img src={project1} alt=''/>
                    </div>
                    <h2 className='project-title'>National Research Facility</h2>
                    <p className='project-location'>Chicago, IL</p>
                    <div className='project-link'>
                        <Link to="/projects/project-1">View project<RightArrowAlt/></Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-image'>
                        <img src={project2} alt=''/>
                    </div>
                    <h2 className='project-title'>Large Downtown Hotel</h2>
                    <p className='project-location'>Chicago, IL</p>
                    <div className='project-link'>
                        <Link to="/projects/project-1">View project<RightArrowAlt/></Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-image'>
                        <img src={project3} alt=''/>
                    </div>
                    <h2 className='project-title'>Large Municipal Airport</h2>
                    <p className='project-location'>Chicago, IL</p>
                    <div className='project-link'>
                        <Link to="/projects/project-1">View project<RightArrowAlt/></Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-image'>
                        <img src={project4} alt=''/>
                    </div>
                    <h2 className='project-title'>Former Mail Sorting Building</h2>
                    <p className='project-location'>Chicago, IL</p>
                    <div className='project-link'>
                        <Link to="/projects/project-1">View project<RightArrowAlt/></Link>
                    </div>
                </div>
            </div>
        </StyledProjects>
    )
}

export default Projects