import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContain = styled.footer`
  background-image: linear-gradient(#2d0302, #ebbd92);
`

export const FooterWrapper = styled.div`
  padding: 0 24px 20px 24px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction:column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size:12px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const WebsiteRights = styled.strong`
  color: #fff;
  margin: 16px;
  text-align:center;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin:5px 0;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 30px;
  margin-right:30px;
`


