import styled from 'styled-components'

export const StyledFooter = styled.footer`
    margin-top: 8vw;
    padding: 20px 0vw;
    gap: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #252F3D;
    
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    
    .upperDiv {
        display: flex;
        align-items: center;
        p {
            padding: 0 10px;
        }
        
        .borderedText {
            border-right: 1px #FFFFFF solid;
        }
    }
    
    .lowerDiv {
        gap: 20px;
        display: flex;
        align-items: center;
    }
    
    @media (min-width: 1000px) {
        padding: 30px 8vw;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
        line-height: 24px;
    }
`