import styled from 'styled-components'
import { devices } from '../../../utils'

const StyledProject = styled.div`
    min-height: 50vh;
    padding: 125px var(--mobile-gutter-width) 50px;

    @media screen and ${devices.tabletP} {
        padding: 150px var(--gutter-width) 50px;
    }
`

export default StyledProject