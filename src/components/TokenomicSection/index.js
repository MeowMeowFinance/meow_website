import React from 'react';

import {
    TokenContainer,
    TextWrapper,
    Heading,
    Box,
    Line,
    Title,
    Description,
    ContentContainer
} from './TokenElements';

import DistributionSection from "../Distribution"

const TokenSection =({id,t})=>{
    return(
        <TokenContainer id={id}>
            <TextWrapper>
                <Heading>{t("tokenomicsHeading")}</Heading>
                <Box data-aos="fade-in">
                    <Line></Line>
                    <div>
                        <ContentContainer>
                            <Title>{t("tokenomicsTitle1")}</Title>
                            <Description>{t("tokenomicsDesc1")}</Description>
                        </ContentContainer>

                        <ContentContainer>
                            <Title>{t("tokenomicsTitle2")}</Title>
                            <Description>{t("tokenomicsDesc2")}</Description>
                        </ContentContainer>

                        <ContentContainer>
                            <Title>{t("tokenomicsTitle3")}</Title>
                            <Description>{t("tokenomicsDesc3")}</Description>
                        </ContentContainer>

                        <ContentContainer>
                            <Title>{t("tokenomicsTitle4")}</Title>
                            <Description>{t("tokenomicsDesc4")}</Description>
                        </ContentContainer>
                    </div>
                </Box>
            </TextWrapper>

            <DistributionSection t={t}></DistributionSection>
        </TokenContainer>
    )

}

export default TokenSection