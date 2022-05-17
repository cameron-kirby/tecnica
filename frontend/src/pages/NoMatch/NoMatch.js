import React from 'react'
import styled from 'styled-components'

const StyledNoMatch = styled.div`
    padding: 250px var(--gutter-width) 100px;

    .heading {
        font-size: 7rem;
        line-height: 7.5rem;
        margin: 0 0 50px;
    }
`

const NoMatch = () => {

    return (
        <StyledNoMatch>
            <h1 className='heading'>404.</h1>
            <h2>Sorry,</h2>
            <h2>We couldn't find the page you were looking for...</h2>
        </StyledNoMatch>
    )
}

export default NoMatch