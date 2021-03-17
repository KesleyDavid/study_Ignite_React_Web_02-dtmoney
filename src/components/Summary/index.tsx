import { useTransactions } from '../../hooks/useTransactions';

import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';
import imgTotal from '../../assets/total.svg';

import * as S from './styles';

export function Summary() {

  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => { //acc => acumulado
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }
  //   // SE não
  //   return acc;
  // }, 0) // 0 => Valor inicial

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else { // withdraw
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgIncome} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency', // formato moeda
            currency: 'BRL', // moeda brasileira
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgOutcome} alt="Saídas" />
        </header>
        <strong>
          - 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency', // formato moeda
            currency: 'BRL', // moeda brasileira
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={imgTotal} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency', // formato moeda
            currency: 'BRL', // moeda brasileira
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  );
}