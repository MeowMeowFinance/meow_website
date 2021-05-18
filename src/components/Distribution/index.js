import React from 'react';
import {
    InfoContainer,
    TextWrapper,
    Heading
} from "./DistributionElements";
import { Doughnut } from "react-chartjs-2";

const DistributionSection = ({t})=>{
    const data = {
        labels: [
            t('tokenSide1'),
            t('tokenSide2'),
            t('tokenSide3'),
            t('tokenSide4'),
        ],
        datasets: [{
          data: [30, 15, 50, 5],
          backgroundColor: [
            '#E38627',
            '#C13C37',
            '#6A2135',
            '#ebbd92',
          ],
          hoverOffset: 4
        }],
    };
    return (
        <InfoContainer data-aos="fade-in">
            <Heading>{t("tokenomicsChart")}</Heading>
            <TextWrapper>
                <Doughnut 
                    data={data}
                ></Doughnut>
            </TextWrapper>
        </InfoContainer>
    )
}

export default DistributionSection