import styled from "styled-components";

export const AirdropContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 700px;
  }
`

export const AirdropBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; 
`

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity:0.6;
`;


export const AirdropCol = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;

  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`

export const AirdropContent = styled.div`
  z-index: 3;
  width:90%;

  @media screen and (max-width: 768px) {
    width:100%;
  }
`;

export const AirdropH1 = styled.h2`
  color: #fff;
  font-size: 45px;
  font-weight: 900;
  text-align: left;
  margin-bottom:20px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`

export const AirdropTokenImg = styled.img`
  width:500px;
  height:500px;

  @media screen and (max-width: 768px) {
    width:300px;
    height:300px;
  }
`

