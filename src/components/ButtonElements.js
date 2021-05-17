import styled from 'styled-components';

export const Button = styled.button`
  text-decoration: none;
  border-radius: 50px;
  background-color: '#ffe0e0';
  white-space: nowrap;
  padding: 8px 30px 11px 30px;
  color: '#010606';
  font-size: 18px;
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-colo:'#e2c3ff';
  }

  @media screen and (max-width: 768px) {
    padding: 8px 20px 10px 20px;
    font-size: 16px ;
    margin:auto;
  }
`;