import { useState } from 'react';

type ModalProps = {
  toggleModalSubmitReject: () => void;
  modalRejectOpen: boolean;
  toggleModalSubmitApproved: () => void;
  modalApprovedOpen: boolean;
  toggleModalImage: () => void;
  modalImageOpen: boolean;
}

export const useModal = (): ModalProps => {
  const [modalRejectOpen, setModalRejectOpen] = useState(false);

  const toggleModalSubmitReject = () => {
    if (!modalApprovedOpen && !modalImageOpen) setModalRejectOpen(!modalRejectOpen);
  };

  const [modalApprovedOpen, setModalApprovedOpen] = useState(false);

  const toggleModalSubmitApproved = () => {
    if (!modalRejectOpen && !modalImageOpen) setModalApprovedOpen(!modalApprovedOpen);
  };

  const [modalImageOpen, setModalImageOpen] = useState(false);

  const toggleModalImage = () => {
    if (!modalRejectOpen && !modalApprovedOpen) setModalImageOpen(!modalImageOpen);
  };

  return {
    toggleModalSubmitReject,
    modalRejectOpen,
    toggleModalSubmitApproved,
    modalApprovedOpen,
    toggleModalImage,
    modalImageOpen,
  };
};
