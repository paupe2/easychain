import styled from "@emotion/styled"

// width = 100% - 2*(margin + border)

export const Frame = styled.div`
    width: calc(100% - 12px); 
    height: calc(100% - 12px);
    position: absolute;
    margin: 5px;
    border: 1px solid red;
`