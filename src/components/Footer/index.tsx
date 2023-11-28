import { FiLock } from "react-icons/fi"
import { StyledFooter } from "./style"


export const Footer = () => {
    return (
        <StyledFooter>
            <div className="upperDiv">
                <p className="borderedText">Copyright (C) 2023</p>
                <p>clarifionsupport@clarifion.com</p>
            </div>
            <div className="lowerDiv">
                <FiLock style={{color: '#FFFFFF', heigth: '12px', width: '12px'}}/>
                <p>Secure 256-bit SSL encryption.</p>
            </div>
        </StyledFooter>
    )
}