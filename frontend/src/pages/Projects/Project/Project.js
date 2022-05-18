import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import StyledProject from './Project.styled'
import { LeftArrowAlt } from 'styled-icons/boxicons-regular'

const Project = () => {
    const [content, setContent] = useState("");
    let { projectName } = useParams();

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/projects/${projectName}/project.md`)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <StyledProject>
            <Link to='/projects' className='back'><LeftArrowAlt/>Back to projects</Link>
            <ReactMarkdown
            transformImageUri={uri =>
                uri.startsWith("http") ? uri : `${process.env.PUBLIC_URL}/projects/${projectName}${uri}`
            }
            children={content} />
        </StyledProject>
    )
}

export default Project