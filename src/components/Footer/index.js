import React from 'react';
import { FooterContain, FooterWrapper, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import {FaTwitter, FaTelegram, FaGithub} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = (ln) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const href = ln === "English"?'https://t.me/mmfinance_en':"https://t.me/mmfinance_cn";

  return (
    <FooterContain>
      <FooterWrapper>
          <SocialMediaWrap>
            <WebsiteRights to='/' onClick={toggleHome}>Meow Meow Finance © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </SocialMediaWrap>

          <SocialIcons>
              <SocialIconLink href='https://twitter.com/Meowmeowfinance' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href={href} target='_blank' aria-label='Twitter'>
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/meowmeowfinance' target='_blank' aria-label='Twitter' style={{marginRight:0}}>
                <FaGithub />
              </SocialIconLink>
          </SocialIcons>
            
      </FooterWrapper>
    </FooterContain>
  )
}

export default Footer;


