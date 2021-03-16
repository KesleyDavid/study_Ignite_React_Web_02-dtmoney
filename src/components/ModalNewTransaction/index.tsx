import { useState } from 'react';
import Modal from 'react-modal';

import imgClose from '../../assets/close.svg';
import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';

import * as S from './styles';

interface ModalNewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function ModalNewTransaction({ isOpen, onRequestClose }: ModalNewTransactionProps) {
  const [type, setType] = useState('deposit');

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

        <S.ContainerTransactionType>
          <S.RadioBox 
            type="button"
            onClick={ () => setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={imgIncome} alt="Entrada"/>
            <span>Entrada</span>
          </S.RadioBox >

          <S.RadioBox  
            type="button"
            onClick={ () => setType('withdraw')}
            isActive={type === 'withdraw'}
          >
            <img src={imgOutcome} alt="Saída"/>
            <span>Saída</span>
          </S.RadioBox >
        </S.ContainerTransactionType>

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