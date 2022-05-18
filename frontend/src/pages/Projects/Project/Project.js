import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import StyledProject from './Project.styled'

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
            <ReactMarkdown children={content} />
        </StyledProject>
    )
}

export default Project