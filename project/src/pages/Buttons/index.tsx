import { Button } from '../../components/Button';
import { Container } from './styles';

export default function Buttons() {

  return (
    <Container>
      <h1>TELA DE BOTÕES</h1>

      <div>
        <Button text={"Teste"} />
        <Button text={"Teste"} />
        <Button text={"Teste"} />
        <Button text={"Teste"} />
      </div>
    </Container>
  );
};