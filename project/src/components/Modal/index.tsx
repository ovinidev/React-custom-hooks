import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  height: string;
  width: string;
  background: string;
  children?: ReactNode;
  modalOpen: boolean;
}

export const Modal = (
  {
    height,
    width,
    background,
    children,
    modalOpen,
  }: Props) => {


  return (
    <Container style={{
      height: height,
      width: width,
      background: background,
      display: modalOpen ? '' : 'none'
    }}>
      {children}
    </Container>
  );
};