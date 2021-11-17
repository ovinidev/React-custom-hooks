import { ReactNode } from 'react';
import { Container} from './styles';

type Props = {
  marginVertical: string;
  marginHorizontal: string;
  background: string;
  children?: ReactNode;
}

export const Modal = (
  { marginVertical,
    marginHorizontal,
    background,
    children,
  }: Props) => {

  return (
    <Container style={{
      top: marginVertical,
      left: marginHorizontal,
      right: marginHorizontal,
      bottom: marginVertical,
      background: background,
    }}>
      {children}
    </Container>
  );
};