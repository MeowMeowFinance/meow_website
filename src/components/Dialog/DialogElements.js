import styled from "styled-components"

export const DialogTitle = styled.h2`
  text-align: left;
  font-size: 25px;
  font-weight: 500;
  color: #b59965;
  line-height: 1.5;
  margin: 0 0 8px; 
  letter-spacing: 0; 

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const DialogContent = styled.ul`
    padding:10px;
    li{
        font-size: 18px;
        font-weight: 300;
        color: #000;
        margin: 15px;
        text-align: left;

        @media screen and (max-width: 480px) {
            font-size: 16px;
        }
    }
`