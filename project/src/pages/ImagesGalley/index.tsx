import { Photo } from '../../components/Photo';
import { Container, Grid } from './styles';
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { useState } from 'react';

import Messi from '../../assets/messi.jpg'
import Messi2 from '../../assets/messi2.jpg'

export default function ImagesGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [urlModal, setUrlModal] = useState("");

  const openModal = (url: string) => {
    setModalOpen(true);
    setUrlModal(url);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <Container>
      <h1>Teste as imagens</h1>

      <Grid>
        <Photo onClick={() => openModal(Messi)} url={Messi} />
        <Photo onClick={() => openModal(Messi2)} url={Messi2} />
        <Photo onClick={() => openModal(Messi)} url={Messi} />
        <Photo onClick={() => openModal(Messi2)} url={Messi2} />

      </Grid>

      <Modal
        marginVertical={"200px"}
        marginHorizontal={"50px"}
        background={"#A16BDD"}
        modalOpen={modalOpen}
      >
        <img src={urlModal} />
        
        <Button
          text={"Teste"}
          color={"red"}
          onClick={closeModal}
        />
      </Modal>
    </Container>
  );
};