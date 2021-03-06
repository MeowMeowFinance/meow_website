import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InforSection from '../components/InforSection';
import TokenSection from "../components/TokenomicSection"
import AirdropSection from "../components/Airdrop"
import RoadMap from '../components/RoadMap';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ 
      duration: 2000,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  
  const { t } = useTranslation();
  const [ln, setLn] = useState('English');

  const changeLan = () => {
    if (ln==='English') {
      setLn('中文');
    } else {
      setLn('English');
    } 
  };

  useEffect(() => {
    i18n.changeLanguage(ln);
  }, [ln]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <Navbar toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <HeroSection  id='home' t={t} ln={ln}/>
      <InforSection ln={ln} t={t}/>
      <TokenSection id='tokenomics' t={t}></TokenSection>
      <AirdropSection id="airdrop" t={t}></AirdropSection>
      <RoadMap id='roadmap' t={t} ln={ln}/>
      <Footer ln={ln}/>
    </>
  );
};

export default Home;
