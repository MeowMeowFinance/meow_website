import styled from 'styled-components';

export const TokenContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 30px 0;

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
`

export const TextWrapper = styled.div`
  width: 90%;
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
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:30px;
    word-wrap:break-word;
    word-break:break-all; 
    overflow: hidden;

    @media screen and (max-width: 768px) {
        justify-content:space-between;
    }
`

export const Line = styled.div`
    border: 2px solid #2d0302;
    height:250px;
    margin-right:20px;

    @media screen and (max-width: 768px) {
        height:450px;
    }
`

export const ContentContainer = styled.span`
    display:flex;
    align-items:center;
    justify-content:center; 
    margin:15px 0;

    @media screen and (max-width: 768px) {
        flex-direction:column;
    }
`

export const Title = styled.h3`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  color: #b59965;
  line-height: 1.5;
  margin-right: 10px; 
  letter-spacing: 0; 

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  text-align: center;
  font-style:italic;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin:10px
  }
`

