import React from 'react'
import { Link } from 'react-router-dom'
import StyledProjects from './Projects.styled'
import { projectIndex } from './Project/projectIndex'
import { AnimatedPage } from '../../components'
// Icons
import { RightArrowAlt } from 'styled-icons/boxicons-regular'

const Projects = () => {

    return (
        <AnimatedPage>
        <StyledProjects>
            <div className='heading-container'>
                <h1 className='heading'>Projects.</h1>
            </div>
            <div className='projects-container'>
                {
                    projectIndex.map((project, i) => {
                        return (
                            <div className='project'>
                                <div className='project-image'>
                                    <img src={`${process.env.PUBLIC_URL}/projects/${project.directory}/project-thumbnail.jpg`} alt=''/>
                                </div>
                                <h2 className='project-title'>{project.name}</h2>
                                <p className='project-location'>{project.location}</p>
                                <div className='project-link'>
                                    <Link to={`/projects/${project.directory}`}>View project<RightArrowAlt/></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </StyledProjects>
        </AnimatedPage>
    )
}

export default Projects