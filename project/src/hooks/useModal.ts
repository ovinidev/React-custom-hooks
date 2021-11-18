import {useState} from 'react';

type modalProps = {
  modalOpen: boolean;
  textModal: string;
  openModal: (msg: string) => void;
  closeModal: () => void;
}

export const useModal = (): modalProps => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textModal, setTextModal] = useState('');

  const openModal = (msg: string) => {
    setModalOpen(true);
    setTextModal(msg);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return {modalOpen, textModal, openModal, closeModal};
};
