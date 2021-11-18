import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  background: #E3E6F5;
  height: 92vh;

  h1 {
    font-size: 30px;
  }
  
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
