import { ReactNode } from 'react';
import { Container, Nav } from './styles';

type Props = {
  children: ReactNode;
}

export const Header = ({children}: Props) => {
  return (
    <Container>
      <Nav>
      {children}
      </Nav>
    </Container>
  );
};