import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isModalNewTransaction, setModalNewTransaction] = useState(false);
  
  function handleOpenModalNewTransaction() {
    setModalNewTransaction(true);
  }

  function handleCloseModalNewTransaction() {
    setModalNewTransaction(false);
  }

  return (
    <>
      <Header onOpenModalNewTransaction={handleOpenModalNewTransaction} />
      <Dashboard />

      <Modal
        isOpen={isModalNewTransaction}
        onRequestClose={handleCloseModalNewTransaction}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
