import styled from '@emotion/styled'

export const Frame = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`

export const HighlightTitle = styled.h1`
    color: ${props => props.theme.colors.highlight};
`