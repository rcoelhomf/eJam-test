import { GlobalStyle } from './Styles/GlobalStyle'
import { Reset } from './Styles/reset'
import { Header } from './components/Header'
import clarifion from './assets/clarifion.png'
import mcafee from './assets/McAfee.png'
import norton from './assets/Norton.png'
import greenCheck from './assets/green_check.png'
import product from './assets/product.png'
import miniProduct from './assets/mini_product.png'
import blueDot from './assets/blue_dot.png'
import percentage from './assets/percentage.png'
import visa from './assets/visa.png'
import shoppay from './assets/shop_pay.png'
import paypal from './assets/paypal.png'
import master from './assets/mastercard.png'
import gpay from './assets/gpay.png'
import applepay from './assets/apple_pay.png'
import amex from './assets/amex.png'
import satisfaction from './assets/satisfaction.png'
import user from './assets/user.png'
import { AtributeDiv, CardsDiv, CheckDiv, InnerDiv, LinkRed, MajorDiv, Paragraph2, PaymentsDiv, PercentageDiv, ProductDiv, SatisfactionDiv, SecondTitle, StyledBtn, StyledDiv, TextPaymentsDiv, Title1, TitleDiv } from './style'
import { IoMdStar } from "react-icons/io"
import { FaCheck, FaArrowRight } from "react-icons/fa6"
import { FiLock } from "react-icons/fi";
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <div className="app">
        <Reset/>
        <GlobalStyle/>
        <Header/>
        <main>
          <StyledDiv>
            <img className='mainLogo' src={clarifion} alt="clarifion logo" />
            <InnerDiv>
              <img className='otherLogo' src={mcafee} alt="McAfee logo" />
              <img className='otherLogo' src={norton} alt="Norton logo" />
            </InnerDiv>
          </StyledDiv>
          <TitleDiv>
            <Title1>Wait! Your Order In Progress.</Title1>
            <Paragraph2>Lorem ipsum dolor sit amet, consectetur adipiscing</Paragraph2>
          </TitleDiv>
          <CheckDiv>
            <div className='insideDiv'>
              <img src={greenCheck} alt="green check" className='checkIcon' />
              <p><span className='invisibleText'>Step 1 :</span> Cart Review</p>
            </div>
            <div className='insideDiv'>
              <img src={greenCheck} alt="green check" className='checkIcon' />
              <p><span className='invisibleText'>Step 2 :</span> Checkout</p>
            </div>
            <div className='insideDiv'>
              <p className='actualPoint'>3</p>
              <p className='boldText'><span className='invisibleText'>Step 3 :</span> Special Offer</p>
            </div>
            <div className='insideDiv'>
              <p className='futurePoint'>4</p>
              <p><span className='invisibleText'>Step 4 :</span> Confirmation</p>
            </div>
          </CheckDiv>
          <MajorDiv>
            <SecondTitle className='trueSecond'><span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</SecondTitle>
            <div className='leftSide'>
              <img className='majorProduct' src={product} alt="" />
              <div className='comment'>
                <img src={user} alt="" />
                <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
              </div>
            </div>
            <div className='rightSide'>
              <SecondTitle className='subSecond'><span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</SecondTitle>
              <ProductDiv>
                <img className='miniIcon' src={miniProduct} alt="" />
                <div className='aboutDiv'>
                  <div className='priceDiv'>
                    <p>Clarfion Air Ionizer</p>
                    <div className='innerPriceDiv'>
                      <p className='dashedPrice'>$180</p>
                      <p className='bluePrice'>$84</p>
                    </div>
                  </div>
                  <div>
                    <IoMdStar style={{color: '#dfd000'}}/>
                    <IoMdStar style={{color: '#dfd000'}}/>
                    <IoMdStar style={{color: '#dfd000'}}/>
                    <IoMdStar style={{color: '#dfd000'}}/>
                    <IoMdStar style={{color: '#dfd000'}}/>
                  </div>
                  <div className='stock'>
                    <img className='blueDot' src={blueDot} alt="" />
                    <p className='stockText'>12 left in Stock</p>
                  </div>
                  <p className='description'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                </div>
              </ProductDiv>
              <div>
                <AtributeDiv><FaCheck style={{color: '#2C7EF8', width: '22px', height: '22px'}}/><p>Negative Ion Technology may <span>help with allergens</span></p></AtributeDiv>
                <AtributeDiv><FaCheck style={{color: '#2C7EF8', width: '22px', height: '22px'}}/><p>Designed for <span>air rejuvenation</span></p></AtributeDiv>
                <AtributeDiv><FaCheck style={{color: '#2C7EF8', width: '22px', height: '22px'}}/><p><span>Perfect for every room</span> in all types of places.</p></AtributeDiv>
              </div>
              <PercentageDiv>
                <img src={percentage} alt="" />
                <p>Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span></p>
              </PercentageDiv>
              <StyledBtn>YES - CLAIM MY DISCOUNT <FaArrowRight style={{color: '#FFFFFF'}}/></StyledBtn>
              <PaymentsDiv>
                <TextPaymentsDiv><p className='borderText'>Free Shipping</p><FiLock style={{color: '#4D5254', heigth: '12px', width: '12px'}}/><p className='otherBorder'>Secure 256-Bit SSL Encryption</p></TextPaymentsDiv>
                <CardsDiv>
                  <img src={visa} alt="" />
                  <img src={shoppay} alt="" />
                  <img src={paypal} alt="" />
                  <img src={master} alt="" />
                  <img src={gpay} alt="" />
                  <img src={applepay} alt="" />
                  <img src={amex} alt="" />
                </CardsDiv>
              </PaymentsDiv>
              <LinkRed href="">NO THANKS, I DON'T WANT THIS.</LinkRed>
              <SatisfactionDiv>
                <img src={satisfaction} alt="" />
                <p>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
              </SatisfactionDiv>
            </div>
          </MajorDiv>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
