import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { useModal } from '../../hooks/useModal';
import { Container, Content } from './styles';

export default function Buttons() {
  const { openModal, closeModal, modalOpen, textModal } = useModal();

  return (
    <Container>
      <h1>Teste os botões</h1>

      <Content>
        <Button
          text={"Sucesso"}
          color={"#25B653"}
          onClick={() => openModal("Teste de sucesso")}
        />

        <Button
          text={"Falha"}
          color={"#C31B1B"}
          onClick={() => openModal("Teste de falha")}
        />
      </Content>

      <Modal
        height={"450px"}
        width={"60%"}
        background={"#7e649b"}
        modalOpen={modalOpen}
      >
        <h1>{textModal}</h1>
        <p>Alguma descrição qualquer a respeito do assunto</p>
        <Button
          text={"OK"}
          color={"red"}
          onClick={closeModal}
        />
      </Modal>
    </Container>
  );
};