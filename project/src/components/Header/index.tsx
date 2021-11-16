import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  children: ReactNode;
}

export const Header = ({children}: Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
};