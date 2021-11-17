import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #EDE3F5;
  height: 92vh;

  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
