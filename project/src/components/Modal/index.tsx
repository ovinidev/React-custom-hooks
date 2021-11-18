import { ReactNode } from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Container } from './styles';

type Props = {
  height: string;
  width: string;
  heightMobile?: string;
  widthMobile?: string;
  background: string;
  children?: ReactNode;
  modalOpen: boolean;
}

export const Modal = (
  {
    height,
    width,
    heightMobile,
    widthMobile,
    background,
    children,
    modalOpen,
  }: Props) => {

  const widthScreen = useWindowDimensions()

  if (widthScreen.width <= 415) {
    return (
      <Container style={{
        height: heightMobile,
        width: widthMobile,
        background: background,
        display: modalOpen ? '' : 'none'
      }}>
        {children}
      </Container>
    );
  }

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