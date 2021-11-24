import { useState } from "react";

/* The interface containing all state and function types. */
type modalProps = {
  modalOpen: boolean;
  textModal: string;
  openModal: () => void;
  messageModal: (msg: string) => void;
  closeModal: () => void;
}

export const useModal = (): modalProps => {
  /* Creating a state where store the state of modal. */
  const [modalOpen, setModalOpen] = useState(false);

  /* Creating a state where store the message of modal. */
  const [textModal, setTextModal] = useState("");

  /* This function will to set the message of state textModal. */
  const messageModal = (msg: string) => {
    setTextModal(msg);
  }

  /* 
  This function will have the responsibility of set the state 
  modal to true, opening the modal.
  */
  const openModal = () => {
    setModalOpen(true);
  }

  /* 
  This function will have the responsibility of set the state 
  modal to false, closing the modal.
  */
  const closeModal = () => {
    setModalOpen(false);
  }

  /* All states and function that we will use. */
  return {modalOpen, messageModal, textModal, openModal, closeModal}

}