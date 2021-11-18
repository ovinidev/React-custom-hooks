import {useState} from 'react';

type modalProps = {
  modalOpen: boolean;
  textModal: string;
  openModal: () => void;
  messageModal: (msg: string) => void;
  closeModal: () => void;
}

export const useModal = (): modalProps => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textModal, setTextModal] = useState('');

  const messageModal = (msg: string) => {
    setTextModal(msg);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return {modalOpen, messageModal, textModal, openModal, closeModal};
};
