import { ReactNode } from 'react';
import { Container, Nav } from './styles';

type Props = {
  children: ReactNode;
}

export const Header = ({ children }: Props) => {
  return (
    <Container>
      <img src={"https://cdn-icons.flaticon.com/png/512/520/premium/520890.png?token=exp=1637161006~hmac=0169f19b616fd3aab8cf47e97edd4738"} />
      <Nav>
        {children}
      </Nav>
    </Container>
  );
};