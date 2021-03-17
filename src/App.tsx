import { useState } from 'react';

import { TransactionsContext } from './TransactionsContext';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ModalNewTransaction } from './components/ModalNewTransaction';
import { GlobalStyle } from "./styles/global";



export function App() {
  const [isModalNewTransaction, setModalNewTransaction] = useState(false);
  
  function handleOpenModalNewTransaction() {
    setModalNewTransaction(true);
  }

  function handleCloseModalNewTransaction() {
    setModalNewTransaction(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenModalNewTransaction={handleOpenModalNewTransaction} />
      <Dashboard />
      <ModalNewTransaction 
        isOpen={isModalNewTransaction}
        onRequestClose={handleCloseModalNewTransaction} 
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
