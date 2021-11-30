import styled from 'styled-components';

export const Container = styled.nav`
  height: 300px;
  width: 100vw;
  background-color: #260342;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    color: #ffff;
    font-size: 22px;
  }

  @media (max-width: 400px) {
    a {
    }
  }
`;


