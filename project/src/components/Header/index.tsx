import {ReactNode} from 'react';
import {Container, Nav} from './styles';

import React from '../../assets/react.png';

type Props = {
  children: ReactNode;
}

export const Header = ({children}: Props) => {
  return (
    <Container>
      <img src={React} />
      <Nav>
        {children}
      </Nav>
    </Container>
  );
};
