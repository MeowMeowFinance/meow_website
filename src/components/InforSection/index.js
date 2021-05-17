import React from 'react';
import {
  InfoContainer,
  TextWrapper,
  Heading,
  Box,
  Card,
  CardImg,
  Title,
  SubTitle,
  Description,
  Line,
  Col
} from './InforElements';
import img1 from "../../images/peer.png"
import img2 from "../../images/wallet.png"
import img3 from "../../images/roi.png"

const InforSection = ({ t }) => {

  return (
    <InfoContainer>
      <TextWrapper>
        <Heading>{t("introduction")}</Heading>
        <Box data-aos="fade-down">
          <Card>
            <CardImg src={img1} alt="img1" />
            <Title isUp={true}>{t('reasonTitle1')}</Title>
            <Description>{t('reasonDesc1')}</Description>     
          </Card>
          <Card>
            <CardImg src={img2} alt="img1" />
            <Title isUp={true}>{t('reasonTitle2')}</Title>
            <Description>{t('reasonDesc2')}</Description>     
          </Card>
          <Card>
            <CardImg src={img3} alt="img3" />
            <Title isUp={true}>{t('reasonTitle3')}</Title>
            <Description>{t('reasonDesc3')}</Description>     
          </Card>
        </Box>

        <Box data-aos="fade-down">
          <Card>
            <Col>
              <Line></Line>
              <div>
                <Title isUp={false}>{t("introTitle1")}</Title>
                <SubTitle>{t("introSubtitle1")}</SubTitle>
              </div>
            </Col>
          </Card>

          <Card>
            <Col>
              <Line></Line>
              <div>
                <Title isUp={false}>{t("introTitle2")}</Title>
                <SubTitle>{t("introSubtitle2")}</SubTitle>
              </div>
            </Col>
          </Card>

          <Card>
            <Col>
              <Line></Line>
              <div>
                <Title isUp={false}>{t("introTitle3")}</Title>
                <SubTitle>{t("introSubtitle3")}</SubTitle>
              </div>
            </Col>
          </Card>
        </Box>
      </TextWrapper>
    </InfoContainer>
  )
}

export default InforSection;
