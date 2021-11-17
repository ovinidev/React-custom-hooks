import { useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Container, Content } from './styles';

export default function Buttons() {
  const [modalOpen, setModalOpen] = useState(false);
  const [textModal, setTextModal] = useState("");

  const openModal = (msg: string) => {
    setModalOpen(true);
    setTextModal(msg);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <Container>
      <h1>Teste os botões</h1>

      <Content>
        <Button
          text={"Sucesso"}
          color={"#25B653"}
          onClick={() => openModal("teste de sucesso")}
        />

        <Button
          text={"Falha"}
          color={"#C31B1B"}
          onClick={() => openModal("teste de falha")}
        />
      </Content>

      <Modal
        marginVertical={"300px"}
        marginHorizontal={"40px"}
        background={"#A16BDD"}
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