import { Container } from './styles';

type Props = {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {text}
    </Container>
  );
};