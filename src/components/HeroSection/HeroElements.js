import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 950px;
  }
`

export const HeroBg = styled.div`
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

export const HeroCol = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;

  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`

export const HeroContent = styled.div`
  z-index: 3;
  width:90%;

  @media screen and (max-width: 768px) {
    width:100%;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 900;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

export const HeroP =styled.p`
  color: #fff;
  font-size: 20px;
  text-align: left;
  margin: 20px 0;
  line-height: 1.5;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const HeroTokenImg = styled.img`
  width:500px;
  height:500px;

  @media screen and (max-width: 768px) {
    width:300px;
    height:300px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin:20px 0;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 30px;
  margin-right:30px;
`
