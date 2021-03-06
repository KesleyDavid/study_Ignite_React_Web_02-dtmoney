import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

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
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    // event do tipo FormEvent
    // Prevenir que após o submit faz refresh na pagina
    event.preventDefault();

    await createTransaction({
      title, 
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
  }

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
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <S.ContainerTransactionType>
          <S.RadioBox 
            type="button"
            onClick={ () => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={imgIncome} alt="Entrada"/>
            <span>Entrada</span>
          </S.RadioBox >

          <S.RadioBox  
            type="button"
            onClick={ () => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={imgOutcome} alt="Saída"/>
            <span>Saída</span>
          </S.RadioBox >
        </S.ContainerTransactionType>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </S.Container>      
      
    </Modal>
  );
}