import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #E3E6F5;
  height: 92vh;

  h1 {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`