import { useState } from 'react';

import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
      <Header onOpenModalNewTransaction={handleOpenModalNewTransaction} />
      <Dashboard />
      <ModalNewTransaction 
        isOpen={isModalNewTransaction}
        onRequestClose={handleCloseModalNewTransaction} 
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
