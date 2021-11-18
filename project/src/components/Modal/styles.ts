import {HTMLAttributes} from 'react';
import styled, {css} from 'styled-components';

interface props extends HTMLAttributes<HTMLDivElement> {
  height: string;
  width: string;
  background: string;
  modalOpen: boolean;
}

export const Container = styled.div<props>`
  ${({height, width, background, modalOpen}) => css`
    height: ${height};
    width: ${width};
    background: ${background};

    position: fixed;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    display: ${modalOpen ? 'flex' : 'none'};

    border-radius: 5px;
    box-shadow: 10px 6px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 420px) {
    height: 50%;
    width: 75%;
    background: ${background};
  }
`}
`;
