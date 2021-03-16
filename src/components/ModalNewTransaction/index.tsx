import Modal from 'react-modal';

import imgClose from '../../assets/close.svg';

import * as S from './styles';

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
      overlayClassName="react-modal-overlay" // Sobreescreverá os valores default fora do modal
      className="react-modal-content" // aplicado ao content
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={imgClose} alt="Fechar modal"/>  
      </button>
      <S.Container>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Título"
        />

        <input 
          placeholder="Valor"
          type="number"
        />

        <input 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </S.Container>      
      
    </Modal>
  );
}