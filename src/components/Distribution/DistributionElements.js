import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 50px 0;
`

export const TextWrapper = styled.div`
  max-width: 25%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}
`

export const Heading = styled.h2`
  margin-bottom: 14px;
  font-size: 25px;
  line-height: 1.1;
  letter-spacing: 1.2px;
  font-weight: 500;
  color: #2d0302;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`