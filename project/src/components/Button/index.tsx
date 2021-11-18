import {ButtonHTMLAttributes} from 'react';
import {Container} from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: () => void;
  color?: string;
}

export const Button = ({text, onClick, color}: Props) => {
  return (
    <Container onClick={onClick} style={{background: color}}>
      {text}
    </Container>
  );
};
