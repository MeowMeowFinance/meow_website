import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 100px 0;

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
`

export const TextWrapper = styled.div`
  max-width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
`

export const Heading = styled.h2`
  margin-bottom: 14px;
  font-size: 35px;
  line-height: 1.1;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: #2d0302;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`
export const Box = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items:start;
  justify-content:center;
  margin-top:30px;
  text-align:center;
`

export const Card = styled.div`
    flex: 0 0 28%;
    margin:20px;
    height:100%;

    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
    }
`

export const CardImg = styled.img`
    width:200px;
    height:200px;
    margin:10px;
`

export const Line = styled.div`
    border: 2px solid #2d0302;
    height:100px;
    margin-right:20px;
`

export const Col = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 768px) {
      justify-content:flex-start;
    }
    
`

export const Title = styled.h3`
  text-align: ${({isUp})=>(isUp?'center':'left')};
  font-size: 25px;
  font-weight: 500;
  color: #b59965;
  line-height: 1.5;
  margin: 0 0 8px; 
  letter-spacing: 0; 

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const SubTitle = styled.h4`
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #2d0302;
  line-height: 1.5;
  margin: 0 0 8px; 
  letter-spacing: 0; 

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const BoxContent = styled.div`
  text-align: center;
  margin:50px 0 0 0;

  @media (max-width: 768px){
    margin:30px 0 0 0;
  }
`
