import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, changeLanguage, ln, t }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>{t("home")}</SidebarLink>
          <SidebarLink to='tokenomics' onClick={toggle}>{t("tokenomics")}</SidebarLink>
          <SidebarLink to='airdrop' onClick={toggle}>{t("airdrop")}</SidebarLink>
          <SidebarLink to='roadmap' onClick={toggle}>{t("roadMap")}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap onClick={changeLanguage}>
          {ln}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

