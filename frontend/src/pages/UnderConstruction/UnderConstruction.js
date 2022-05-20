import React from 'react'
import styled from 'styled-components'
import { ConeStriped } from 'styled-icons/bootstrap'

const StyledUnderConstruction = styled.div`
    padding: 250px var(--gutter-width) 100px;

    svg {
        width: 7rem;
    }

    .heading {
        font-size: 7rem;
        line-height: 7.5rem;
        margin: 0 0 50px;
    }
`

const UnderConstruction = () => {

    return (
        <StyledUnderConstruction>
            <ConeStriped />
            <h1 className='heading'>Under construction.</h1>
            <h2>Sorry!</h2>
            <h2>Check back again at a later time!</h2>
        </StyledUnderConstruction>
    )
}

export default UnderConstruction