import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';
import imgTotal from '../../assets/total.svg';

import * as S from './styles';

export function Summary() {

  const { transactions } = useContext(TransactionsContext);

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgIncome} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgOutcome} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={imgTotal} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </S.Container>
  );
}