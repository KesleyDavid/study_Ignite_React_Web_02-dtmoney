import { useEffect } from 'react';
import * as S from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('https://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Sistema</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/21</td>
          </tr>
          <tr>
            <td>Pagamento de imposto</td>
            <td className="withdraw">- R$ 500</td>
            <td>Tributos</td>
            <td>20/02/21</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}