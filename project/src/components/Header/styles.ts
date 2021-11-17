import styled from 'styled-components';

export const Container = styled.nav`
  height: 8vh;
  background-color: #260342;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    font-size: 22px;
    color: #ffffff;
    display: inline-block;
    margin: 0 1rem;
    text-decoration: none;
  }

  img {
    width: 35px;
  }

  @media (max-width: 400px) {
    a {
    font-size: 18px;
  }
  }
`;

export const Nav = styled.nav`
  margin-right: 100px;

  @media (max-width: 400px) {
    margin-right: 0;
  }
`;
