import { Button } from '../../components/Button';
import { Container, Content } from './styles';

export default function Buttons() {

  return (
    <Container>
      <h1>Teste os botões</h1>

      <Content>
        <Button text={"Sucesso"} color={"#25B653"}/>
        <Button text={"Falha"} color={"#C31B1B"}/>
      </Content>
    </Container>
  );
};