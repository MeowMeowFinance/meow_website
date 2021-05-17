import React from 'react';
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroCol,
  HeroTokenImg,
  SocialIcons,
  SocialIconLink
} from './HeroElements';
import bg from "../../images/background.jpg"
import token from "../../images/token.png"
import {FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa';
import {Button} from "../ButtonElements"

const HeroSection = ({ id, t, ln}) => {
  const href = ln === "English"?'https://t.me/mmfinance_en':"https://t.me/mmfinance_cn";
  
  const newPage = () => {
    const w=window.open('about:blank');
    w.location.href= "https://exchange.pancakeswap.finance/#/swap";
  }

  return (
    <HeroContainer id={id}>
      <HeroBg>
        <ImgBg src={bg} alt="background" />
      </HeroBg>
      <HeroContent>
        <HeroCol>
          <div>
            <HeroH1>{t("title")}</HeroH1>
            <SocialIcons>
              <SocialIconLink href='https://twitter.com/Meowmeowfinance' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href={href} target='_blank' aria-label='Twitter'>
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/meowmeowfinance' target='_blank' aria-label='Twitter'>
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
            <HeroP>{t("description")}</HeroP>
            <Button onClick={newPage}>{t("buyButton")}</Button>
          </div>
          <HeroTokenImg src={token} alt="meow"></HeroTokenImg>
        </HeroCol>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection
