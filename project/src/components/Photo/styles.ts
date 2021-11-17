import styled from 'styled-components';

export const Image = styled.img`
  height: 300px;
  width: 450px;

  cursor: pointer;

  @media (max-width: 500px) {
    height: 150px;
    width: 250px;
  }

  @media (max-width: 320px) {
    height: 100px;
    width: 200px;
  }
`;
