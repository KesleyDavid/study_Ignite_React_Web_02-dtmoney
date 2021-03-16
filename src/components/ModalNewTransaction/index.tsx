import Modal from 'react-modal';

import { Container } from './styles';

interface ModalNewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function ModalNewTransaction({ isOpen, onRequestClose }: ModalNewTransactionProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
}