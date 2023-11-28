import styled from 'styled-components'

export const StyledDiv = styled.div`
    height: 65px;
    padding: 0 8%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .mainLogo {
        width: 106px;
    }

    .otherLogo {
        width: 44px;
    }

    @media (min-width: 1000px) {
        .mainLogo {
            width: 192px;
        }

        .otherLogo {
            width: 88px;
        }
    }
`

export const InnerDiv = styled.div`
    gap: 10px;

    display: flex;
    align-items: center;
`

export const TitleDiv = styled.div`
    margin-top: 20px;
    text-align: center;
    padding: 0 8%;

    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
        gap: 10px;
    }
`

export const Title1 = styled.h1`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    color: #000000;

    @media (min-width: 1000px) {
        font-size: 48px;
        line-height: 48px;
    }
`

export const Paragraph2 = styled.p`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #4D5254;
    
    @media (min-width: 1000px) {
        font-size: 24px;
        line-height: 24px;
    }
`

export const CheckDiv = styled.div`
    margin-top: 20px;
    gap: 10px;

    display: flex;
    justify-content: center;

    .insideDiv {
        max-width: max-content;
        gap: 5px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .checkIcon{
        height: 20px;
        width: 20px;
    }

    p {
        width: 100%;
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        color: #000000;
    }

    .actualPoint {
        height: 20px;
        width: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        background-color: #2C7EF8;
        border-radius: 50%;
    }

    .boldText {
        font-weight: 700;
    }

    .futurePoint {
        height: 20px;
        width: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        color: #2C7EF8;
        border: 1px #2C7EF8 solid;
        border-radius: 50%;

    }

    .invisibleText {
        display: none;
    }

    @media (min-width: 1000px) {
        margin-top: 60px;
        gap: 5vw;

        .checkIcon{
            height: 40px;
            width: 40px;
        }

        p {
            font-size: 20px;
            line-height: 22px;
        }

        .actualPoint {
            height: 40px;
            min-width: 40px;
        }

        .futurePoint {
            height: 40px;
            min-width: 40px;
        }

        .insideDiv {
            flex-direction: row;
        }

        .invisibleText {
            display: inline-block;
        }
    }
`

export const MajorDiv = styled.div`
    margin: 20px 8vw;
    gap: 20px;

    display: flex;
    flex-direction: column;

    .majorProduct {
        width: 100%;
        max-width: 575px;
    }

    .subSecond {
        display: none;
    }

    .comment {
        display: none;
    }

    .rightSide {
        gap: 20px;

        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1000px) {
        padding: 2vw 2vw;

        flex-direction: row;

        border-radius: 10px;
        background-color: #FAFAFA;

        .trueSecond {
            display: none;
        }

        .subSecond {
            display: block;
        }

        .comment {
            padding: 20px;
            gap: 20px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            background-color: #FFFFFF;
            border-radius: 10px;

            p {
                font-family: 'Manrope', sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #4D5254;
 
            }
        }

        .leftSide {
            width: 50%;
            gap: 20px;

            display: flex;
            flex-direction: column;
        }

        .rightSide {
            width: 50%;
        }
    }
`

export const SecondTitle = styled.h2`
    text-align: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #000000;
    
    span {
        color: #2C7EF8;
    }
    
    @media (min-width: 1000px) {
        text-align: start;
        font-size: 32px;
        line-height: 45px;
    }
`

export const ProductDiv = styled.div`
    position: relative;
    margin-bottom: 25px;
    gap: 15px;

    display: flex;

    p {
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #000000;
;
    }

    .aboutDiv {
        width: 100%;
        gap: 8px;

        display: flex;
        flex-direction: column;
    }

    .miniIcon {
        width: 80px;
        height: 80px;
        align-self: flex-start;
    }

    .priceDiv {
        display: flex;
        justify-content: space-between;
    }

    .innerPriceDiv {
        gap: 10px;

        display: flex;
    }

    .dashedPrice {
        text-decoration: line-through;
        font-family: 'Manrope', sans-serif;
        font-weight: 600;
        font-size: 10px;
        line-height: 16px;
        color: #4D5254;
    }

    .bluePrice {
        font-family: 'Manrope', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #2C7EF8;
    }

    .stock {
        gap: 20px;

        display: flex;
        align-items: center;
    }
    
    .blueDot {
        width: 12px;
        height: 12px;
    }
    
    .stockText {
        font-family: 'Manrope', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 17px;
        color: #37465A;
    }

    .description {
        width: 100%;
        max-width: 325px;
        top: 85px;
        left: 0;
        position: absolute;
        text-align: center;
        color: #4D5254;
    }

    @media (min-width: 1000px) {
        p {
            font-size: 20px;
            line-height: 28px;
        }

        .miniIcon {
            width: 134px;
            height: 134px;
        }

        .dashedPrice {
            font-size: 16px;
            line-height: 22px;
        }

        .bluePrice {
            font-size: 22px;
            line-height: 31px;
        }
        
        .blueDot {
            width: 16px;
            height: 16px;
        }
        
        .stockText {
            font-size: 16px;
            line-height: 22px;
        }

        .description {
            max-width: 100%;
            position: unset;
            font-family: 'Manrope', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: #4D5254;
        }
    }
`

export const AtributeDiv = styled.div`
    margin-bottom: 10px;
    gap: 10px;

    display: flex;

    p {
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 19px;
        color: #4D5254;
    }

    span {
        font-family: 'Manrope', sans-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 19px;
        color: #4D5254;
    }

    @media (min-width: 1000px) {
        p {
            font-size: 16px;
            line-height: 26px;
        }
        
        span{
            font-size: 16px;
            line-height: 26px;
        }
    }
`

export const PercentageDiv = styled.div`
    padding: 12px;
    gap: 20px;

    display: flex;
    align-items: center;
    background-color: #EDF3FD;
    border-radius: 10px;

    img {
        height: 24px;
        width: 24px;
    }

    p {
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
    }
    
    span {
        color: #2C7EF8;
    }
    
    @media (min-width: 1000px) {
        img {
            height: 32px;
            width: 32px;
        }
        
        p {
            font-size: 16px;
            line-height: 23px;
        }
    }
`

export const StyledBtn = styled.button`
    padding: 15px 10px;
    gap: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #59AE43;
    border-radius: 50px;
    
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;

    cursor: pointer;

    &:hover {
        background-color: #4b9638;
        transition: .1s;
    }

    @media (min-width: 1000px) {
        font-size: 20px;
        line-height: 27px; 
    }
`

export const PaymentsDiv = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px #CFCFCF solid;
    border-radius: 4px;

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
    }
`

export const TextPaymentsDiv = styled.div`
    padding: 10px 0;
    margin: 0 12px;
    gap: 10px;

    border-bottom: 1px #CFCFCF solid;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #4D5254;
    }

    .borderText {
        padding-right: 10px;
        border-right: 1px #CFCFCF solid;
    }

    @media (min-width: 1000px) {
        margin: 0;
        border-bottom: none;

        .otherBorder {
            padding-right: 10px;
            border-right: 1px #CFCFCF solid;
        }
    }
`

export const CardsDiv = styled.div`
    padding: 10px 0;
    margin: 0 12px;
    gap: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinkRed = styled.a`
    text-align: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #F82C2C;
    
    @media (min-width: 1000px) {
        font-size: 18px;
        line-height: 24px;
    }
`

export const SatisfactionDiv = styled.div`
    gap: 20px;

    display: flex;
    align-items: flex-start;

    img {
        width: 48px;
        height: 48px;
    }
    
    p {
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #4D5254;
    }
    
    span {
        font-family: 'Manrope', sans-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 17px;
        color: #4D5254;
        
    }
    
    @media (min-width: 1000px) {
        img {
            width: 88px;
            height: 88px;
        }
        
        p {
            font-size: 16px;
            line-height: 23px;
        }

        span {
            font-size: 16px;
            line-height: 23px;
        }
    }
`