import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
// Obtem todos os parametros
// Retorna MENOS os informados

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;
// APENAS as propriedades MENCIONADAS

interface TransactionsProviderProps {
  children: ReactNode, // Qualquer conteudo válido no react
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void; // Função, que recebe um arrau de transações e retorna VOID
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData // Força o react a entender que SIM, ele possui esse formato
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    api.get('/transactions') // / => Opcional
      .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}