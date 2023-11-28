import checkmark from '../../assets/checkmark.png'
import truck from '../../assets/truck.png'
import heart from '../../assets/heart.png'
import arrowCheckmark from '../../assets/arrow-checkmark.png'
import { StyledDiv, StyledHeader, StyledParagraph } from './style'

export const Header = () => {
    return (
        <StyledHeader>
            <StyledDiv><img src={checkmark} alt="checkmark image" /><StyledParagraph>30-DAY SATISFACTION GUARANTEE</StyledParagraph></StyledDiv>
            <StyledDiv><img src={truck} alt="truck image" /><StyledParagraph>FREE DELIVERY ON ORDERS OVER $40,00</StyledParagraph></StyledDiv>
            <StyledDiv><img src={heart} alt="heart image" /><StyledParagraph>50.000+ HAPPY COSTUMERS</StyledParagraph></StyledDiv>
            <StyledDiv><img src={arrowCheckmark} alt="arrow checkmark image" /><StyledParagraph>100% MONEY BACK GUARANTEE</StyledParagraph></StyledDiv>
        </StyledHeader>
    )
}