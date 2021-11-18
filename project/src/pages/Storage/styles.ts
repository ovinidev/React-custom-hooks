import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #EDE3F5;
  height: 92vh;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: #1F1D36;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #1F1D36;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column; 
`;
